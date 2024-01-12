"use client";

import Flower from "@/components/about/Flower";
import { AdaptiveDpr, Stage } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Fragment } from "react";
import { Vector3 } from "three";

const World = () => {
  return (
    <Canvas>
      <Experience />
    </Canvas>
  );
};

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

export default World;
