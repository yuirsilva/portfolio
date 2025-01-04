import * as THREE from "three";

import fragment from "@components/home/shader/fragment.glsl";
import vertex from "@components/home/shader/vertex.glsl";
import { onKonamiCode } from "@/lib/konami-code";

interface Options {
    dom: HTMLElement;
}

interface ImageStore {
    mesh: THREE.Mesh;
    top: number;
    left: number;
    width: number;
    height: number;
}

export default class Home {
    time: number;
    scene: THREE.Scene;
    renderer: THREE.WebGLRenderer;
    camera: THREE.PerspectiveCamera;

    dom: HTMLElement;
    width: number;
    height: number;

    material: THREE.ShaderMaterial;
    geometry: THREE.PlaneGeometry;

    raycaster: THREE.Raycaster;
    pointer: THREE.Vector2;

    sectionDom: HTMLElement;
    section: THREE.Texture;
    sectionStore: ImageStore;

    promise: Promise<[unknown] | void>;

    constructor(options: Options) {
        this.time = 0;
        this.dom = options.dom;

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

        const preloadSectionImage = new Promise((resolve) => {
            this.section = new THREE.TextureLoader().load(
                "/images/section.webp",
                () => {
                    resolve(null);
                }
            );
        });

        this.pointer = new THREE.Vector2(0, 0);
        this.raycaster = new THREE.Raycaster();

        this.promise = Promise.all([preloadSectionImage]).then(() => {
            this.addSection();
            this.triggerKonamiCode();

            this.resize();
            this.setupResize();

            this.render();
        });
    }

    triggerKonamiCode() {
        onKonamiCode(() => {
            console.log("コナミコマンド");
            if (this.material.uniforms.uKonamiCode)
                this.material.uniforms.uKonamiCode.value = 1;
        });
    }

    addSection() {
        this.sectionDom = document.getElementById("home-section")!;

        this.geometry = new THREE.PlaneGeometry(1, 1, 1, 1);
        this.material = new THREE.ShaderMaterial({
            fragmentShader: fragment,
            vertexShader: vertex,
            uniforms: {
                tImage: { value: null },
                uOpacity: { value: 0 },
                uTime: { value: 0 },
                uKonamiCode: { value: 0 },
            },
        });

        let bounds = this.sectionDom.getBoundingClientRect();

        this.section.anisotropy = this.renderer.capabilities.getMaxAnisotropy();
        this.section.minFilter = THREE.NearestMipmapNearestFilter;
        this.section.needsUpdate = true;

        this.material.uniforms.tImage!.value = this.section;

        let mesh = new THREE.Mesh(this.geometry, this.material);
        mesh.scale.set(bounds.width, bounds.height, 1);
        this.scene.add(mesh);

        this.sectionStore = {
            mesh: mesh,
            width: bounds.width,
            height: bounds.height,
            top: bounds.top,
            left: bounds.left,
        };
    }

    setupResize() {
        window.addEventListener("resize", this.resize.bind(this));
    }

    resize() {
        this.width = this.dom.offsetWidth;
        this.height = this.dom.offsetHeight;

        this.renderer.setSize(this.width, this.height);

        this.camera.aspect = this.width / this.height;
        this.camera.fov =
            Math.atan(this.height / 2 / this.camera.position.z) *
            2 *
            (180 / Math.PI);

        this.camera.updateProjectionMatrix();

        this.section.anisotropy = this.renderer.capabilities.getMaxAnisotropy();
        this.section.needsUpdate = true;
    }

    render() {
        this.time += 0.05;

        this.material.uniforms.uTime!.value = this.time;

        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this.render.bind(this));
    }
}
