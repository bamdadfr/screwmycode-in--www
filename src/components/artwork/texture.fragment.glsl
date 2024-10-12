#ifdef GL_ES
precision highp float;
#endif

uniform float u_time;
uniform sampler2D u_texture;
uniform float u_ratio;

varying vec2 v_uv;

#define NUM_OCTAVES 5

float rand(vec2 n)
{
    return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

float noise(vec2 p)
{
    vec2 ip = floor(p);
    vec2 u = fract(p);

    u = u * u * (3.0 - 2.0 * u);

    float res = mix(
    mix(rand(ip), rand(ip+vec2(1.0, 0.0)), u.x),
    mix(rand(ip+vec2(0.0, 1.0)), rand(ip+vec2(1.0, 1.0)), u.x), u.y
    );

    return res*res;
}

float fbm(vec2 x)
{
    float v = 0.0;
    float a = 0.5;
    vec2 shift = vec2(100);

    // Rotate to reduce axial bias
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));

    for (int i = 0; i < NUM_OCTAVES; ++i)
    {
        v += a * noise(x);
        x = rot * x * 2.0 + shift;
        a *= 0.5;
    }

    return v;
}

void main(void)
{
    float bound = 0.6;
    float intensity = 5.0;
    float speed = 0.5;

    vec2 new_uv = v_uv;

    vec2 ratio = intensity * new_uv + speed * u_time;
    float value = fbm(ratio);
    float bounded_value = mix(-bound, bound, value);

    vec2 surface = u_ratio * vec2(bounded_value, bounded_value);
    new_uv += refract(vec2(0.0, 0.0), surface, 1.0 / 1.333);

    gl_FragColor = texture2D(u_texture, new_uv);
}
