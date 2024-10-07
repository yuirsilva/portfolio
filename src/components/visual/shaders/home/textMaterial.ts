import { shaderMaterial } from "@react-three/drei";

const TextMaterial = shaderMaterial(
    {
        uTime: 0,
        uPointer: null,
        tNoise: null,
    },
    // vertex shader
    /*glsl*/ `
	precision mediump float;

	// COMMON
	uniform float uTime;
	uniform vec2 uPointer;
	uniform sampler2D tNoise;

	vec2 rotate2d(vec2 st, float a) {
		st -= 0.5;
		st = mat2(cos(a), -sin(a), sin(a), cos(a))*st;
		st += 0.5;
		return st;
	}

	void main() {
		vec3 pos = position;

		// Noise
		vec2 noise_uv = uv * 3.5;
		float steppedTime = floor(uTime * 6.) * 3.14159 * 0.2;
		noise_uv = rotate2d(noise_uv, steppedTime) * noise_uv;
		vec2 n0 = texture2D(tNoise, noise_uv*0.5).rg;

		float n = n0.r;
		n = n * 0.5 + 0.5;
		pos += n*0.03 + n0.x * 0.04 * uPointer.x*4. * rotate2d(uv, uTime).y;

		// Final position
		gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
	}`,
    // fragment shader
    /*glsl*/ `
	precision mediump float; 

	void main() {
		gl_FragColor = vec4(vec3(0.), 1.);
	}`
);

export default TextMaterial;
