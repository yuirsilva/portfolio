import { shaderMaterial } from "@react-three/drei";
import { Vector2, Vector4 } from "three";

const PortraitMaterial = shaderMaterial(
  {
    uTime: 0,
    uTexture: null,
    uNormalTexture: null,
    uPointer: new Vector2(0, 0),
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
  uniform sampler2D uNormalTexture;
  uniform vec2 uPointer;
  uniform vec4 uResolution;

  varying vec2 vUv;

  void main() {
    vec2 newUV = (vUv - vec2(0.5)) * uResolution.zw + vec2(0.5);

    vec3 ambientColor = vec3(0.1, 0.1, 0.1); // Ambient light color

    vec3 normal = normalize(texture2D(uNormalTexture, vUv).xyz * 2. - 1.);
    vec3 diffuse = texture2D(uTexture, vUv).xyz;

    vec3 lightDirection = normalize(vec3(1.0, 1.0, 2.0));
    lightDirection.x = uPointer.x;
    lightDirection.y = uPointer.y;

    float diffuseIntensity = max(dot(normal, lightDirection), 0.6);

    vec3 finalColor = ambientColor + diffuse * diffuseIntensity;

    gl_FragColor = vec4(finalColor, 1.);
  }`
);

export default PortraitMaterial;
