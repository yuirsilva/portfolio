import PortraitMaterial from "@/components/visual/shaders/menu/portraitMaterial";
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

    u_depthtexture: THREE.Texture;
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
                near: -1000,
                far: 1000,
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
    const mesh = useRef<THREE.Mesh>(null);

    const depth = useTexture("/images/input_depth.png");

    const { gl } = useThree();

    useFrame(({ clock: { elapsedTime }, pointer }) => {
        material.current.u_time = elapsedTime;
        material.current.u_pointer = pointer;
    });

    useEffect(() => {
        const width = gl.domElement.offsetWidth;
        const height = gl.domElement.offsetHeight;

        let imageAspect = depth.image.width / depth.image.height;
        let viewportAspect = width / height;

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
            width,
            height,
            scaleX,
            scaleY
        );

        if (mesh.current) mesh.current.scale.set(scaleX, scaleY, 1);
    }, [depth]);

    return (
        <>
            <mesh ref={mesh}>
                <planeGeometry args={[1, 1]} />
                <portraitMaterial
                    ref={material}
                    key={PortraitMaterial.key}
                    side={THREE.DoubleSide}
                    u_depthtexture={depth}
                />
            </mesh>
        </>
    );
};

export default Portrait;
