uniform sampler2D tImage;
uniform float uTime;
uniform float uOpacity;

varying vec2 vUv;

vec3 hash32(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * vec3(.1031, .1030, .0973));
    p3 += dot(p3, p3.yxz+33.33);
    return fract((p3.xxy+p3.yzz)*p3.zyx);
}

void main() {
    vec3 color = vec3(0.);
    vec2 uv = vUv;
    vec2 pUv = floor(uv * 40.) / 40.;

    float steppedTime = floor(uTime) * 3.14159 * 0.2;

    vec3 noise = hash32(uv * 100. + steppedTime);
    noise *= 2.0;
    noise -= 1.0;

    uv += noise.r * 0.0015;

    vec4 image = texture2D(tImage, mix(pUv, uv, uOpacity));
    gl_FragColor = image * uOpacity;
}