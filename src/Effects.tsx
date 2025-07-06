import * as THREE from 'three';
import { UI } from './UI';

export function createEffects(videoTexture: THREE.VideoTexture, ui: UI): THREE.Mesh {
  const material = new THREE.ShaderMaterial({
    uniforms: {
      // Main textures
      u_texture: { value: videoTexture },
      u_combinedTexture: { value: ui.texture },
      
      // Display properties
      u_aspect: { value: 16 / 9 },
      u_resolution: { value: new THREE.Vector2(1920, 1080) },
      
      // Visual effect controls
      u_distortionAmount: { value: 0.06 },
      u_bloom: { value: 0.8 },
      u_time: { value: 0 },
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

      // Uniform inputs from JavaScript
      uniform sampler2D u_texture;
      uniform sampler2D u_combinedTexture;
      uniform float u_aspect;
      uniform float u_distortionAmount;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform float u_bloom;

      // Calculate distance to a rounded rectangle
      float roundedRectDistance(vec2 pt, vec2 size, float radius) {
        vec2 halfSize = size * 0.5;
        vec2 d = abs(pt) - halfSize + vec2(radius);
        return length(max(d, 0.0)) - radius;
      }

      // Generate pseudo-random noise for glitch effects
      float noise2d(vec2 uv) {
        return fract(sin(dot(uv.xy, vec2(12.9898,78.233))) * 43758.5453);
      }

      //Apply chromatic aberration effect
      vec3 chromaticAberration(sampler2D tex, vec2 uv, float amount) {
        vec2 center = vec2(0.5);
        vec2 dir = uv - center;
        float dist = length(dir);
        vec2 offset = normalize(dir) * amount * dist;

        // Sample each color channel with slight offset
        float r = texture2D(tex, uv + offset).r;
        float g = texture2D(tex, uv).g;
        float b = texture2D(tex, uv - offset).b;
        return vec3(r, g, b);
      }

      void main() {
        // Convert UV coordinates to centered coordinate system
        vec2 uv = vUv * 2.0 - 1.0;
        uv.x *= u_aspect;

        // Apply barrel distortion for CRT effect
        float r = length(uv);
        float distortedR = r + u_distortionAmount * pow(r, 3.0);
        vec2 distortedUV = uv * (distortedR / r);

        // Create rounded rectangle mask for screen edges
        float dist = roundedRectDistance(distortedUV, vec2(u_aspect * 2.0, 2.0), 0.12);
        if (dist > 0.0) discard;

        // Convert back to texture coordinates
        vec2 finalUV = distortedUV;
        finalUV.x /= u_aspect;
        finalUV = finalUV * 0.5 + 0.5;

        // Discard pixels outside valid texture range
        if (finalUV.x < 0.0 || finalUV.x > 1.0 || finalUV.y < 0.0 || finalUV.y > 1.0) discard;

        // Apply chromatic aberration to the video texture
        float caAmount = 0.007;
        vec3 videoColor = chromaticAberration(u_texture, finalUV, caAmount);
        
        // Generate bloom effect by sampling surrounding pixels
        vec3 bloom = vec3(0.0);
        float bloomRadius = 0.005;
        for(int i = 0; i < 8; i++) {
          float angle = float(i) * 0.785398; // 45 degree increments
          vec2 offset = vec2(cos(angle), sin(angle)) * bloomRadius;
          bloom += chromaticAberration(u_texture, finalUV + offset, caAmount) * 0.125;
        }
        
        // Mix original video with bloom effect
        videoColor = mix(videoColor, bloom, u_bloom * 0.3);
        
        // Dim the video to make UI overlay more visible
        videoColor *= 0.5;

        // Sample UI texture with glitch effects
        vec2 textUV = finalUV;

        // Generate glitch offsets using noise
        float glitchXOffset = (noise2d(vec2(textUV.y * 100.0, u_time * 35.0)) - 0.5) * 0.002;
        float glitchYOffset = (noise2d(vec2(textUV.x * 100.0 + 1000.0, u_time * 25.0)) - 0.5) * 0.002;
        vec2 glitchOffset = vec2(glitchXOffset, glitchYOffset);
        vec2 glitchUV = (textUV + glitchOffset);

        // Sample the UI texture with glitch offset
        vec4 textSample = texture2D(u_combinedTexture, glitchUV);

        // Calculate luminance for alpha blending
        float lum = dot(textSample.rgb, vec3(0.299, 0.587, 0.114));
        float alpha = smoothstep(0.15, 0.65, lum);

        // Create glow effect around UI elements
        float glow = 0.0;
        float glowRadius = 0.02;
        glow += dot(texture2D(u_combinedTexture, glitchUV + vec2(glowRadius, 0.0)).rgb, vec3(0.299, 0.587, 0.114)) * 0.25;
        glow += dot(texture2D(u_combinedTexture, glitchUV - vec2(glowRadius, 0.0)).rgb, vec3(0.299, 0.587, 0.114)) * 0.25;
        glow += dot(texture2D(u_combinedTexture, glitchUV + vec2(0.0, glowRadius)).rgb, vec3(0.299, 0.587, 0.114)) * 0.25;
        glow += dot(texture2D(u_combinedTexture, glitchUV - vec2(0.0, glowRadius)).rgb, vec3(0.299, 0.587, 0.114)) * 0.25;

        // Color the text with glow effect
        vec3 textColor = mix(vec3(1.0), vec3(0.6, 0.8, 1.0), glow);

        // Blend video background with UI overlay
        vec3 finalColor = mix(videoColor, textColor, alpha);

        // Apply flickering effect for retro feel
        float flicker = 0.95 + 0.1 * sin(u_time * 20.0 + textUV.y * 50.0);
        finalColor *= flicker;

        gl_FragColor = vec4(finalColor, 1.0);
      }
    `,
    transparent: true,
  });

  // Create a full-screen quad geometry
  const geometry = new THREE.PlaneGeometry(2, 2);
  
  // Create and return the mesh with shader material
  const mesh = new THREE.Mesh(geometry, material);
  return mesh;
}