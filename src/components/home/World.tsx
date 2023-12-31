"use client";

import PlaneMaterial from "@/components/home/shader/planeMaterial";
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

extend({ PlaneMaterial });

declare module "@react-three/fiber" {
  // eslint-disable-next-line no-unused-vars
  interface ThreeElements {
    planeMaterial: MaterialNode<THREE.ShaderMaterial, typeof PlaneMaterial>;
  }
}

const CELL_SIZE = 32;
const MAX_DIST = CELL_SIZE / 4;
const MAX_DIST_SQ = MAX_DIST ** 2;
const WIDTH = CELL_SIZE;
const HEIGHT = CELL_SIZE;
const SIZE = WIDTH * HEIGHT;

const World = ({}) => {
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

const createDataTexture = () => {
  const data = new Float32Array(4 * SIZE);

  for (let i = 0; i < SIZE; i++) {
    let r = Math.random() * 255;

    const stride = i * 4;

    data[stride] = r;
    data[stride + 1] = r;
    data[stride + 2] = r;
    data[stride + 3] = 255;
  }

  // used the buffer to create a DataTexture
  const texture = new THREE.DataTexture(
    data,
    WIDTH,
    HEIGHT,
    THREE.RGBAFormat,
    THREE.FloatType
  );
  texture.minFilter = texture.magFilter = THREE.NearestFilter;
  texture.needsUpdate = true;

  return texture;
};

const Experience = ({}) => {
  const planeMat = useRef<THREE.ShaderMaterial>(null!);
  const image = useLoader(TextureLoader, "/joan.jpg");
  const dataTexture = createDataTexture();
  const scale = useAspect(1920, 1080);
  const { gl } = useThree();

  const pointer = {
    x: 0,
    y: 0,
    prevX: 0,
    prevY: 0,
    vX: 0,
    vY: 0,
  };

  const updateDataTexture = () => {
    let data = dataTexture.image.data;
    for (let i = 0; i < data.length; i += 4) {
      data[i] *= 0.9;
      data[i + 1] *= 0.9;
    }

    const gridPointerX = CELL_SIZE * pointer.x;
    const gridPointerY = CELL_SIZE * (1 - pointer.y);

    for (let i = 0; i < CELL_SIZE; i++) {
      for (let j = 0; j < CELL_SIZE; j++) {
        let distance = (gridPointerX - i) ** 2 + (gridPointerY - j) ** 2;

        if (distance < MAX_DIST_SQ) {
          let index = 4 * (i + CELL_SIZE * j);

          let power = MAX_DIST / Math.sqrt(distance);

          data[index] += 100 * pointer.vX * power;
          data[index + 1] -= 100 * pointer.vY * power;
        }
      }
    }
    pointer.vX *= 0.9;
    pointer.vY *= 0.9;

    dataTexture.needsUpdate = true;
  };

  useFrame(({ clock: { elapsedTime } }) => {
    updateDataTexture();
    planeMat.current.uniforms["uTime"].value = elapsedTime;
  });
  useEffect(() => {
    const width = gl.domElement.offsetWidth;
    const height = gl.domElement.offsetHeight;

    const onPointerMove = (e: PointerEvent) => {
      pointer.x = e.clientX / width;
      pointer.y = e.clientY / height;

      pointer.vX = pointer.x - pointer.prevX;
      pointer.vY = pointer.y - pointer.prevY;

      pointer.prevX = pointer.x;
      pointer.prevY = pointer.y;
    };
    window.addEventListener("pointermove", onPointerMove);

    let imageAspect = 1920 / 1080;
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
    planeMat.current.uniforms["uDataTexture"].value = dataTexture;
    planeMat.current.uniforms["uResolution"].value = new THREE.Vector4(
      width,
      height,
      a1,
      a2
    );

    return () => window.removeEventListener("pointermove", onPointerMove);
  }, [image]);

  return (
    <mesh scale={scale}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <planeMaterial ref={planeMat} side={DoubleSide} />
    </mesh>
  );
};

export default World;
