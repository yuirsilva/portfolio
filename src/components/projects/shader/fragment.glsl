uniform sampler2D tImage;
uniform float uOpacity;
uniform float uHover;

varying vec2 vUv;

void main() {
    vec2 uv = vUv;
    vec3 color = vec3(0.);

    vec4 image = texture2D(tImage, uv);
    float gray = 0.21 * image.r + 0.71 * image.g + 0.07 * image.b;

    gl_FragColor = vec4(image.rgb * (1. - uHover) + (gray * uHover), image.a) * uOpacity;
}