import { useGLTF, AdaptiveDpr, Stage } from "@react-three/drei";
import { forwardRef, Fragment } from "react";
import { Mesh, MeshStandardMaterial, Group, Vector3 } from "three";
import type { GLTF } from "three-stdlib";
import { Canvas, useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
    nodes: {
        flower_1: Mesh;
        flower_2: Mesh;
        flower_3: Mesh;
    };
    materials: {
        cornflower: MeshStandardMaterial;
        flowerpot: MeshStandardMaterial;
        dirt: MeshStandardMaterial;
    };
};

const Flower = forwardRef<Group, JSX.IntrinsicElements["group"]>(
    (props, ref) => {
        const { nodes, materials } = useGLTF("/model/flower.glb") as GLTFResult;
        return (
            <group ref={ref} {...props} dispose={null}>
                <mesh
                    geometry={nodes.flower_1.geometry}
                    material={materials.cornflower}
                />
                <mesh
                    geometry={nodes.flower_2.geometry}
                    material={materials.flowerpot}
                />
                <mesh
                    geometry={nodes.flower_3.geometry}
                    material={materials.dirt}
                />
            </group>
        );
    }
);
Flower.displayName = "FlowerModel";

const Experience = () => {
    useFrame(({ clock, camera }) => {
        camera.position.y = 0.5;
        camera.position.x = Math.sin(clock.elapsedTime);
        camera.position.z = Math.cos(clock.elapsedTime);
        camera.lookAt(new Vector3(0, 0, 0));
    });

    return (
        <Fragment>
            <color args={["hsl(221, 83%, 53%)"]} attach="background" />
            <AdaptiveDpr pixelated />
            <Stage>
                <Flower />
            </Stage>
        </Fragment>
    );
};

const FlowerPortrait = () => {
    return (
        <Canvas>
            <Experience />
        </Canvas>
    );
};

export default FlowerPortrait;

useGLTF.preload("/model/flower.glb");
