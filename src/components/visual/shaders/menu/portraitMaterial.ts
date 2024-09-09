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

	// Depth texture
	uniform sampler2D u_depthtexture;

	// Common uniforms
	uniform vec4 u_resolution;
	uniform float u_time;

	varying vec2 v_uv;

	void main() {
		// Final color
		vec3 color = vec3(1.);

		// UV
		vec2 uv = v_uv;
		vec2 scale = u_resolution.zw;
		float aspect = u_resolution.x/u_resolution.y;

		// Image UVs
		vec2 i_uv = uv;
		i_uv -= 0.5;
		i_uv.y *= scale.x/scale.y;
		i_uv += 0.5;

		i_uv.y += 0.06;

		// Depth image
		vec3 depth = texture2D(u_depthtexture, i_uv).xyz;

		// Image effect
		vec3 d = vec3(smoothstep(0., 0.4*length(depth.r), clamp(length(depth.r - fract(u_time*0.3)*1.5), 0.1, 1.) ));

		color = pow(vec3(d),vec3(4.));
		color *= vec3(0.843, 0.898, 1.);

		gl_FragColor = vec4(color, 1.);
		#include <tonemapping_fragment>
		#include <colorspace_fragment>
	}`
);

export default PortraitMaterial;
