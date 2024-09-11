import { shaderMaterial } from "@react-three/drei";
import { Vector2, Vector4 } from "three";

const PortraitMaterial = shaderMaterial(
    {
        u_time: 0,
        u_resolution: new Vector4(0, 0, 0, 0),
        u_pointer: new Vector2(0, 0),

        u_depthtex: null,
        u_normaltex: null,
        u_basetex: null,
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
	uniform sampler2D u_depthtex;
	uniform sampler2D u_basetex;
	uniform sampler2D u_normaltex;

	// Common uniforms
	uniform vec4 u_resolution;
	uniform vec2 u_pointer;
	uniform float u_time;

	varying vec2 v_uv;

	void main() {
		// Final color
		vec3 color = vec3(0.);

		// UV
		vec2 uv = v_uv;
		vec2 scale = u_resolution.zw;
		float aspect = u_resolution.x/u_resolution.y;

		// // Image UVs
		vec2 i_uv = uv;
		i_uv -= 0.5;
		i_uv.y *= scale.x/scale.y;
		i_uv += 0.5;

		i_uv.y += 0.12;

		// Ambient light
		vec3 ambientColor = vec3(0.); // Ambient light color

		// Normal
		vec3 normal = normalize(texture2D(u_normaltex, i_uv).xyz * 2. - 1.);

		// Diffuse
		vec3 diffuse = texture2D(u_basetex, i_uv).xyz;

		// Depth
		vec3 depth = texture2D(u_depthtex, i_uv).xyz;

		// Light
		vec3 lightDirection = normalize(vec3(1.0, 1.0, 2.0));
		lightDirection.x = u_pointer.x; 
		lightDirection.y = u_pointer.y; 

		float diffuseIntensity = max(dot(normal+depth, lightDirection), 0.6);

		color = ambientColor + diffuse * diffuseIntensity;
		gl_FragColor = vec4(color, 1.);
		#include <colorspace_fragment>
	}`
);

export default PortraitMaterial;
