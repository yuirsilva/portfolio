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
    u_resolution?: THREE.Vector4;
    u_time?: number;
    u_pointer?: THREE.Vector2;

    u_normaltex: THREE.Texture;
    u_depthtex: THREE.Texture;
    u_basetex: THREE.Texture;
}

declare module "@react-three/fiber" {
    interface ThreeElements {
        portraitMaterial: Material;
    }
}

const Portrait = ({}) => {
    return (
        <Canvas
            // linear
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

    const base = useTexture("/images/base.webp");
    const depth = useTexture("/images/input_depth.png");
    const normal = useTexture("/images/normal.jpg");

    const size = useThree((state) => state.size);

    useFrame(({ clock: { elapsedTime }, pointer }) => {
        material.current.u_time = elapsedTime;
        material.current.u_pointer = pointer;
    });

    useEffect(() => {
        let imageAspect = depth.image.width / depth.image.height;
        let viewportAspect = size.width / size.height;

        let scaleX, scaleY;
        // FIX IMAGE ASPECT RATIO
        if (imageAspect > viewportAspect) {
            scaleX = imageAspect / viewportAspect;
            scaleY = 1;
        } else {
            scaleX = 1;
            scaleY = viewportAspect / imageAspect;
        }
        material.current.u_resolution = new THREE.Vector4(
            size.width,
            size.height,
            scaleX,
            scaleY
        );
    }, [depth]);

    return (
        <>
            <mesh>
                <planeGeometry args={[1, 1, 1, 1]} />
                <portraitMaterial
                    ref={material}
                    key={PortraitMaterial.key}
                    u_basetex={base}
                    u_depthtex={depth}
                    u_normaltex={normal}
                    side={THREE.DoubleSide}
                />
            </mesh>
        </>
    );
};

export default Portrait;
