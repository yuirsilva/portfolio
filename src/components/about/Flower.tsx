import { useGLTF } from "@react-three/drei";
import { forwardRef } from "react";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    flower_1: THREE.Mesh;
    flower_2: THREE.Mesh;
    flower_3: THREE.Mesh;
  };
  materials: {
    cornflower: THREE.MeshStandardMaterial;
    flowerpot: THREE.MeshStandardMaterial;
    dirt: THREE.MeshStandardMaterial;
  };
};

const Flower = forwardRef<THREE.Group, JSX.IntrinsicElements["group"]>(
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
        <mesh geometry={nodes.flower_3.geometry} material={materials.dirt} />
      </group>
    );
  }
);
Flower.displayName = "FlowerModel";

export default Flower;

useGLTF.preload("/model/flower.glb");
