import * as THREE from 'three';
import { UI } from './UI';

export function createEffects(videoTexture: THREE.VideoTexture, ui: UI): THREE.Mesh {
  const material = new THREE.ShaderMaterial({
    uniforms: {
      u_texture: { value: videoTexture },
      u_combinedTexture: { value: ui.texture },
      u_aspect: { value: 16 / 9 },
      u_distortionAmount: { value: 0.06 },
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector2(1920, 1080) },
      u_bloom: { value: 0.8 },
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      precision highp float;
      varying vec2 vUv;

      uniform sampler2D u_texture;
      uniform sampler2D u_combinedTexture;
      uniform float u_aspect;
      uniform float u_distortionAmount;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform float u_bloom;

      float roundedRectDistance(vec2 pt, vec2 size, float radius) {
        vec2 halfSize = size * 0.5;
        vec2 d = abs(pt) - halfSize + vec2(radius);
        return length(max(d, 0.0)) - radius;
      }

      float noise2d(vec2 uv) {
        return fract(sin(dot(uv.xy, vec2(12.9898,78.233))) * 43758.5453);
      }

      vec3 chromaticAberration(sampler2D tex, vec2 uv, float amount) {
        vec2 center = vec2(0.5);
        vec2 dir = uv - center;
        float dist = length(dir);
        vec2 offset = normalize(dir) * amount * dist;

        float r = texture2D(tex, uv + offset).r;
        float g = texture2D(tex, uv).g;
        float b = texture2D(tex, uv - offset).b;
        return vec3(r, g, b);
      }

      void main() {
        vec2 uv = vUv * 2.0 - 1.0;
        uv.x *= u_aspect;

        float r = length(uv);
        float distortedR = r + u_distortionAmount * pow(r, 3.0);
        vec2 distortedUV = uv * (distortedR / r);

        float dist = roundedRectDistance(distortedUV, vec2(u_aspect * 2.0, 2.0), 0.12);
        if (dist > 0.0) discard;

        vec2 finalUV = distortedUV;
        finalUV.x /= u_aspect;
        finalUV = finalUV * 0.5 + 0.5;

        if (finalUV.x < 0.0 || finalUV.x > 1.0 || finalUV.y < 0.0 || finalUV.y > 1.0) discard;

        float caAmount = 0.007;
        vec3 videoColor = chromaticAberration(u_texture, finalUV, caAmount);
        
        vec3 bloom = vec3(0.0);
        float bloomRadius = 0.005;
        for(int i = 0; i < 8; i++) {
          float angle = float(i) * 0.785398;
          vec2 offset = vec2(cos(angle), sin(angle)) * bloomRadius;
          bloom += chromaticAberration(u_texture, finalUV + offset, caAmount) * 0.125;
        }
        videoColor = mix(videoColor, bloom, u_bloom * 0.3);
        
        videoColor *= 0.5;

        vec2 textUV = finalUV;

        float glitchXOffset = (noise2d(vec2(textUV.y * 100.0, u_time * 35.0)) - 0.5) * 0.002;
        float glitchYOffset = (noise2d(vec2(textUV.x * 100.0 + 1000.0, u_time * 25.0)) - 0.5) * 0.002;
        vec2 glitchOffset = vec2(glitchXOffset, glitchYOffset);
        vec2 glitchUV = (textUV + glitchOffset);

        vec4 textSample = texture2D(u_combinedTexture, glitchUV);

        float lum = dot(textSample.rgb, vec3(0.299, 0.587, 0.114));
        float alpha = smoothstep(0.15, 0.65, lum);

        float glow = 0.0;
        float glowRadius = 0.02;
        glow += dot(texture2D(u_combinedTexture, glitchUV + vec2(glowRadius, 0.0)).rgb, vec3(0.299, 0.587, 0.114)) * 0.25;
        glow += dot(texture2D(u_combinedTexture, glitchUV - vec2(glowRadius, 0.0)).rgb, vec3(0.299, 0.587, 0.114)) * 0.25;
        glow += dot(texture2D(u_combinedTexture, glitchUV + vec2(0.0, glowRadius)).rgb, vec3(0.299, 0.587, 0.114)) * 0.25;
        glow += dot(texture2D(u_combinedTexture, glitchUV - vec2(0.0, glowRadius)).rgb, vec3(0.299, 0.587, 0.114)) * 0.25;

        vec3 textColor = mix(vec3(1.0), vec3(0.6, 0.8, 1.0), glow);

        vec3 finalColor = mix(videoColor, textColor, alpha);

        float flicker = 0.95 + 0.1 * sin(u_time * 20.0 + textUV.y * 50.0);
        finalColor *= flicker;

        gl_FragColor = vec4(finalColor, 1.0);
      }
    `,
    transparent: true,
  });

  const geometry = new THREE.PlaneGeometry(2, 2);
  const mesh = new THREE.Mesh(geometry, material);
  return mesh;
}