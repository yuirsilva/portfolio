import PortraitMaterial from "@components/visual/shaders/menu/portraitMaterial";
import { useTexture } from "@react-three/drei";
import {
    Canvas,
    extend,
    useFrame,
    useThree,
    type ShaderMaterialProps,
} from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

extend({ PortraitMaterial });

interface Material extends ShaderMaterialProps {
    uPointer?: THREE.Vector2;

    uImageSizes?: [number, number];
    uViewportSizes?: [number, number];

    tNormal: THREE.Texture;
    tDepth: THREE.Texture;
    tBase: THREE.Texture;
}

declare module "@react-three/fiber" {
    interface ThreeElements {
        portraitMaterial: Material;
    }
}

const Portrait = ({}) => {
    return (
        <Canvas
            orthographic
            camera={{
                near: -100,
                far: 100,
                left: -0.5,
                right: 0.5,
                top: 0.5,
                bottom: -0.5,
            }}
        >
            <Experience />
        </Canvas>
    );
};

const Experience = ({}) => {
    const material = useRef<THREE.ShaderMaterial & Material>(null!);
    const plane = useRef<THREE.Mesh>(null);

    const tBase = useTexture("/images/base.webp");
    const tDepth = useTexture("/images/input_depth.png");
    const tNormal = useTexture("/images/normal.jpg");

    const { size } = useThree();

    useFrame(({ pointer }) => {
        material.current.uPointer = pointer;
    });

    useEffect(() => {
        let scale: [number, number] = [0, 0];

        const imageAspect = tDepth.image.width / tDepth.image.height;
        const viewportAspect = size.width / size.height;

        if (imageAspect > viewportAspect) {
            scale = [imageAspect / viewportAspect, 1];
        } else {
            scale = [1, viewportAspect / imageAspect];
        }

        if (!plane.current) return;
        plane.current.scale.set(scale[0], scale[1], 1);
    }, [tBase, size]);

    return (
        <mesh ref={plane}>
            <planeGeometry args={[1, 1, 1, 1]} />
            <portraitMaterial
                ref={material}
                key={PortraitMaterial.key}
                tBase={tBase}
                tDepth={tDepth}
                tNormal={tNormal}
            />
        </mesh>
    );
};

export default Portrait;
