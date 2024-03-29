import PortraitMaterial from "@/components/visual/shaders/menu/portraitMaterial";
import { useAspect } from "@react-three/drei";
import {
    Canvas,
    extend,
    useFrame,
    useLoader,
    useThree,
    type MaterialNode,
} from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { DoubleSide, TextureLoader } from "three";

extend({ PortraitMaterial });

declare module "@react-three/fiber" {
    interface ThreeElements {
        portraitMaterial: MaterialNode<
            THREE.ShaderMaterial,
            typeof PortraitMaterial
        >;
    }
}

const Portrait = ({}) => {
    return (
        <Canvas
            orthographic
            camera={{
                zoom: 100,
            }}
        >
            <Experience />
        </Canvas>
    );
};

const Experience = ({}) => {
    const planeMat = useRef<THREE.ShaderMaterial>(null!);
    const image = useLoader(TextureLoader, "/images/input.webp");
    const normalImage = useLoader(TextureLoader, "/images/normal.jpg");

    const scale = useAspect(image.image.width, image.image.height);
    const { gl } = useThree();

    useFrame(({ clock: { elapsedTime }, pointer }) => {
        // @ts-expect-error one day i'll fix this
        planeMat.current.uniforms["uTime"].value = elapsedTime;
        // @ts-expect-error one day i'll fix this
        planeMat.current.uniforms["uPointer"].value = new THREE.Vector2(
            THREE.MathUtils.lerp(
                // @ts-expect-error one day i'll fix this
                planeMat.current.uniforms["uPointer"].value.x,
                pointer.x,
                0.05
            ),
            THREE.MathUtils.lerp(
                // @ts-expect-error one day i'll fix this
                planeMat.current.uniforms["uPointer"].value.y,
                pointer.y,
                0.05
            )
        );
    });
    useEffect(() => {
        if (
            !planeMat.current.uniforms["uTexture"] ||
            !planeMat.current.uniforms["uNormalTexture"] ||
            !planeMat.current.uniforms["uResolution"]
        )
            return;

        const width = gl.domElement.offsetWidth;
        const height = gl.domElement.offsetHeight;

        let imageAspect = image.image.width / image.image.height;
        let a1, a2;
        // FIX IMAGE ASPECT RATIO
        if (imageAspect > width / height) {
            a1 = imageAspect / (width / height);
            a2 = 1;
        } else {
            a1 = 1;
            a2 = width / height / imageAspect;
        }

        planeMat.current.uniforms["uTexture"].value = image;
        planeMat.current.uniforms["uNormalTexture"].value = normalImage;
        planeMat.current.uniforms["uResolution"].value = new THREE.Vector4(
            width,
            height,
            a1,
            a2
        );
    }, [image]);

    return (
        <mesh scale={scale}>
            <planeGeometry args={[1, 1, 1, 1]} />
            <portraitMaterial ref={planeMat} side={DoubleSide} />
        </mesh>
    );
};

export default Portrait;
