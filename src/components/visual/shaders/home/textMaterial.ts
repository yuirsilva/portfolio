import { shaderMaterial } from "@react-three/drei";
import { Vector2 } from "three";

const TextMaterial = shaderMaterial(
    {
        u_time: 0,
        u_pointer: new Vector2(0, 0),
        u_noisetex: null,
    },
    // vertex shader
    /*glsl*/ `
	precision mediump float;

	// COMMON
	uniform float u_time;
	uniform vec2 u_pointer;

	uniform sampler2D u_noisetex;

	vec2 rotate2d(vec2 st, float a) {
		st -= 0.5;
		st = mat2(cos(a), -sin(a), sin(a), cos(a))*st;
		st += 0.5;
		return st;
	}

	vec2 grad( ivec2 z ) {
		int n = z.x+z.y*11111;

		// Hugo Elias hash (feel free to replace by another one)
		n = (n<<13)^n;
		n = (n*(n*n*15731+789221)+1376312589)>>16;

		return vec2(cos(float(n)),sin(float(n)));
	}

	float noise( in vec2 p ) {
		ivec2 i = ivec2(floor( p ));
		vec2 f =       fract( p );
		
		vec2 u = f*f*(3.0-2.0*f);

		return mix( mix( dot( grad( i+ivec2(0,0) ), f-vec2(0.0,0.0) ), 
						dot( grad( i+ivec2(1,0) ), f-vec2(1.0,0.0) ), u.x),
					mix( dot( grad( i+ivec2(0,1) ), f-vec2(0.0,1.0) ), 
						dot( grad( i+ivec2(1,1) ), f-vec2(1.0,1.0) ), u.x), u.y);
	}

	void main() {
		vec2 p = u_pointer;
		vec3 pos = position;

		// Noise
		vec2 noise_uv = uv * 3.5;
		float steppedTime = floor(u_time * 6.) * 3.14159 * 0.2;
		noise_uv = rotate2d(noise_uv, steppedTime) * noise_uv;
		vec2 n0 = texture2D(u_noisetex, noise_uv).rg;

		float n = noise(uv*32.+u_time);
		n = n * 0.5 + 0.5;
		pos += n*0.03 + n0.x * 0.04 * p.x*4. * rotate2d(uv, u_time).y;

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
