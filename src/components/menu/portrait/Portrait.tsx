"use client";

import PortraitMaterial from "@/components/menu/portrait/shader/portraitMaterial";
import { useAspect } from "@react-three/drei";
import {
  Canvas,
  extend,
  MaterialNode,
  useFrame,
  useLoader,
  useThree,
} from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { DoubleSide, TextureLoader } from "three";

extend({ PortraitMaterial });

declare module "@react-three/fiber" {
  // eslint-disable-next-line no-unused-vars
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
  const image = useLoader(TextureLoader, "/woman.png");
  const normalImage = useLoader(TextureLoader, "/normal.jpg");

  const scale = useAspect(image.image.width, image.image.height);
  const { gl } = useThree();

  useFrame(({ clock: { elapsedTime }, pointer }) => {
    planeMat.current.uniforms["uTime"].value = elapsedTime;
    planeMat.current.uniforms["uPointer"].value = new THREE.Vector2(
      THREE.MathUtils.lerp(
        planeMat.current.uniforms["uPointer"].value.x,
        pointer.x,
        0.05
      ),
      THREE.MathUtils.lerp(
        planeMat.current.uniforms["uPointer"].value.y,
        pointer.y,
        0.05
      )
    );
  });
  useEffect(() => {
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
