import { gsap } from "@/lib/gsap";
import imagesLoaded from "imagesloaded";

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import { Dialog } from "@components/projects/dialog/manageDialog";
import fragment from "@components/projects/shader/fragment.glsl";
import vertex from "@components/projects/shader/vertex.glsl";

export interface ProjectData {
    title: string;
    year: string;
    type: "project" | "image";
    github: string | undefined;
    website: string | undefined;
}
interface ItemElement extends HTMLImageElement {
    dataset: Omit<ProjectData, "title">;
}

type ProjectMesh = THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>;
interface MyMesh extends ProjectMesh {
    userData: { work: ProjectData };
}

interface Image {
    width: number;
    height: number;
    top: number;
    left: number;
    mesh: MyMesh;
}

interface ProjectsConfig {
    dom: HTMLElement;
    itemWidth?: number;
    gap?: number;
}

export default class Projects {
    scene: THREE.Scene;
    renderer: THREE.WebGLRenderer;
    camera: THREE.PerspectiveCamera;

    dom: HTMLElement;
    width: number;
    height: number;

    images: ItemElement[];
    imageStore: Image[];

    majorGroup: THREE.Group;
    itemWidth: number;
    gap: number;

    material: THREE.ShaderMaterial;
    geometry: THREE.PlaneGeometry;

    isDragging: boolean;
    controls: OrbitControls;

    raycaster: THREE.Raycaster;
    pointer: THREE.Vector2;
    intersects: THREE.Intersection[];
    promise: Promise<[unknown] | void>;

    dialog: Dialog;

    constructor({ dom, itemWidth = 180, gap = 50 }: ProjectsConfig) {
        this.dialog = new Dialog();

        this.isDragging = false;

        this.majorGroup = new THREE.Group();
        this.itemWidth = itemWidth;
        this.gap = gap;

        this.dom = dom;

        this.width = this.dom.offsetWidth;
        this.height = this.dom.offsetHeight;

        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera(
            65,
            this.width / this.height,
            100,
            2000
        );
        this.camera.position.z = 600;
        this.camera.fov =
            Math.atan(this.height / 2 / this.camera.position.z) *
            2 *
            (180 / Math.PI);

        this.renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: false,
        });
        this.renderer.setSize(this.width, this.height);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.dom.appendChild(this.renderer.domElement);

        this.images = [
            ...document.querySelectorAll(".projects-imgs img"),
        ] as ItemElement[];

        this.controls = new OrbitControls(
            this.camera,
            this.renderer.domElement
        );
        this.controls.listenToKeyEvents(window);
        this.controls.enableDamping = true;
        this.controls.panSpeed = 0.5;
        this.controls.keys = {
            LEFT: "KeyA",
            UP: "KeyW",
            RIGHT: "KeyD",
            BOTTOM: "KeyS",
        };
        this.controls.keyPanSpeed = 30;
        this.controls.dampingFactor = 0.05;
        this.controls.mouseButtons = {
            LEFT: THREE.MOUSE.PAN,
            MIDDLE: THREE.MOUSE.PAN,
            RIGHT: THREE.MOUSE.PAN,
        };
        this.controls.touches = {
            ONE: THREE.TOUCH.PAN,
            TWO: THREE.TOUCH.PAN,
        };
        this.controls.enableRotate = false;
        this.controls.enableZoom = false;

        this.pointer = new THREE.Vector2(0, 0);
        this.raycaster = new THREE.Raycaster();

        const preloadImages = new Promise((resolve) => {
            imagesLoaded(this.images, { background: true }, resolve);
        });

        this.promise = Promise.all([preloadImages]).then(() => {
            this.addImages();
            this.setPosition();

            this.resize();
            this.setupResize();

            this.setupDrag();

            this.setupRaycaster();
            this.render();
        });
    }

    setupDrag() {
        addEventListener("pointerdown", () => {
            setTimeout(() => (this.isDragging = true), 100);
        });

        addEventListener("pointerup", () => {
            setTimeout(() => (this.isDragging = false), 100);
        });
    }

    setupRaycaster() {
        let lastIntersection: ProjectMesh | null = null;

        addEventListener("mousemove", (e) => {
            this.pointer.x = (e.clientX / this.width) * 2 - 1;
            this.pointer.y = -(e.clientY / this.height) * 2 + 1;

            this.raycaster.setFromCamera(this.pointer, this.camera);

            this.intersects = this.raycaster.intersectObjects(
                this.scene.children
            );

            if (this.intersects.length > 0) {
                this.renderer.domElement.style.cursor = "pointer";

                let obj = this.intersects[0]?.object as ProjectMesh;
                gsap.to(obj.material.uniforms.uHover!, {
                    value: 1,
                    ease: "power1.inOut",
                    duration: 0.25,
                });

                lastIntersection = obj;
            } else {
                this.renderer.domElement.style.cursor = "default";

                if (lastIntersection) {
                    gsap.to(lastIntersection.material.uniforms.uHover!, {
                        value: 0,
                        ease: "power1.inOut",
                        duration: 0.25,
                    });

                    lastIntersection = null;
                }
            }
        });

        this.renderer.domElement.addEventListener("click", () => {
            if (this.isDragging) return;

            this.intersects.forEach((hit) => {
                const {
                    userData: { work },
                } = hit.object as MyMesh;

                this.dialog.open(work);
            });
        });
    }

    calculateGrid() {
        const totalElements = this.imageStore.length;

        let columns = Math.floor(this.width / this.itemWidth) - 2;
        columns += columns % 2;

        const rows = Math.ceil(totalElements / columns);
        const remainingElements = columns * rows - totalElements;

        return {
            columns,
            rows,
            remainingElements,
        };
    }

    addImages() {
        this.geometry = new THREE.PlaneGeometry(1, 1, 1, 1);
        this.material = new THREE.ShaderMaterial({
            fragmentShader: fragment,
            vertexShader: vertex,
            uniforms: {
                tImage: { value: null },
                uOpacity: { value: 0 },
                uHover: { value: 0 },
            },
        });

        this.imageStore = this.images.map((img) => {
            let bounds = img.getBoundingClientRect();

            let tex = new THREE.Texture(img);
            tex.generateMipmaps = false;
            tex.needsUpdate = true;

            let material = this.material.clone();
            material.uniforms.tImage!.value = tex;

            let mesh = new THREE.Mesh(
                this.geometry.clone(),
                material
            ) as MyMesh;
            mesh.scale.set(bounds.width, bounds.height, 1);

            mesh.userData.work = {
                title: img.title,
                year: img.dataset.year,
                type: img.dataset.type,
                github: img.dataset.github,
                website: img.dataset.website,
            };

            this.scene.add(mesh);

            return {
                width: bounds.width,
                height: bounds.height,
                top: bounds.top,
                left: bounds.left,
                mesh: mesh,
            };
        });

        this.scene.add(this.majorGroup);
    }

    setPosition() {
        const viewportOffset = {
            width: this.width / 2,
            height: this.height / 2,
        };

        let lastPos = { x: 0, y: 0 };

        const { rows } = this.calculateGrid();

        let itemsInCol = 0;
        let offsetY = Math.floor((Math.random() * 2 - 1) * 100);

        gsap.utils.shuffle(this.imageStore);
        this.imageStore.forEach((obj) => {
            const meshOffset = {
                width: obj.width / 2,
                height: obj.height / 2,
            };

            if (itemsInCol == rows) {
                lastPos.y = 0;
                lastPos.x += obj.width + this.gap;

                itemsInCol = 0;
                offsetY = Math.floor((Math.random() * 2 - 1) * 100);
            }

            // +meshOffset.height = above 0 (pivot point above 0)
            // -meshOffset.height = below 0 (pivot point below 0)
            // default pivot point in webgl = center

            // prettier-ignore
            if (lastPos.y + viewportOffset.height - this.gap < -viewportOffset.height) {
                    lastPos.y = 0;
                    lastPos.x += obj.width + this.gap;

                    offsetY = Math.floor((Math.random() * 2 - 1) * 100);
                }

            obj.mesh.position.y = -meshOffset.height + lastPos.y;
            lastPos.y = obj.mesh.position.y - meshOffset.height - this.gap;

            obj.mesh.position.y += viewportOffset.height + offsetY;

            obj.mesh.position.x =
                -viewportOffset.width + meshOffset.width + lastPos.x;

            itemsInCol += 1;

            this.majorGroup.add(obj.mesh);
        });

        // center group
        new THREE.Box3()
            .setFromObject(this.majorGroup)
            .getCenter(this.majorGroup.position)
            .multiplyScalar(-1);
    }

    setupResize() {
        addEventListener("resize", this.resize.bind(this));
    }

    resize() {
        this.width = this.dom.offsetWidth;
        this.height = this.dom.offsetHeight;

        this.renderer.setSize(this.width, this.height);

        this.camera.aspect = this.width / this.height;
        this.camera.updateProjectionMatrix();
    }

    render() {
        this.controls.update();

        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this.render.bind(this));
    }
}
