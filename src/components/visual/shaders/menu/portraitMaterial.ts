import { shaderMaterial } from "@react-three/drei";
import { Vector4 } from "three";

const PortraitMaterial = shaderMaterial(
    {
        u_time: 0,
        u_resolution: new Vector4(0, 0, 0, 0),
        u_depthtexture: null,
    },
    // vertex shader
    /*glsl*/ `
	precision mediump float;

	varying vec2 v_uv;

	void main() {
		v_uv = uv;
		vec4 modelPosition = modelMatrix * vec4(position, 1.0);

		gl_Position = projectionMatrix * viewMatrix * modelPosition;
	}`,

    // fragment shader
    /*glsl*/ `
	precision mediump float; 

	// depth texture
	uniform sampler2D u_depthtexture;

	// COMMON
	uniform vec4 u_resolution;
	uniform float u_time;

	varying vec2 v_uv;

	void main() {
		vec3 color = vec3(1.);
		vec2 uv = v_uv;

		float t = u_time*0.4;

		uv.y += 0.06;

		// depth
		vec3 depth = texture2D(u_depthtexture, uv).xyz;
		float d = abs(depth.r);

		color = vec3(smoothstep(0.0, 0.4, fract(clamp(d, 0.2, 1.) -t)) * smoothstep(0.6, 0.5, fract(clamp(d, 0.2, 1.) -t)));
		color *= vec3(0.843, 0.898, 1.);

		gl_FragColor = vec4(color, 1.);
	}`
);

export default PortraitMaterial;
