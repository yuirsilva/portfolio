import { shaderMaterial } from "@react-three/drei";
import { Vector4 } from "three";

const GridMaterial = shaderMaterial(
  {
    uTexture: null,
    uDataTexture: null,
    uResolution: new Vector4(0, 0, 0, 0),
  },
  // vertex shader
  /*glsl*/ `
  precision mediump float;
  varying vec2 vUv;

  void main() {
    vUv = uv;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
  }`,
  // fragment shader
  /*glsl*/ `
  precision mediump float;

  uniform sampler2D uTexture;
  uniform sampler2D uDataTexture;
  uniform vec4 uResolution;

  varying vec2 vUv;

  void main() {
    vec2 newUV = (vUv - vec2(0.5)) * uResolution.zw + vec2(0.5);
    vec4 offset = texture2D(uDataTexture, newUV);

    gl_FragColor = texture2D(uTexture, vUv - 0.02 * offset.rg);
  }`
);

export default GridMaterial;
