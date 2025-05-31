'use client'

import { useEffect, useRef } from "react";
import { Renderer, Program, Mesh, Color, Triangle } from "ogl";

const VERT = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAG = `#version 300 es
precision highp float;

uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops[4];
uniform vec2 uResolution;
uniform float uBlend;

out vec4 fragColor;

vec3 permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v){
  const vec4 C = vec4(
      0.211324865405187, 0.366025403784439,
      -0.577350269189626, 0.024390243902439
  );
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);

  vec3 p = permute(
      permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0)
  );

  vec3 m = max(
      0.5 - vec3(
          dot(x0, x0),
          dot(x12.xy, x12.xy),
          dot(x12.zw, x12.zw)
      ), 
      0.0
  );
  m = m * m;
  m = m * m;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

vec3 getColorFromGradient(float t) {
  // Clamp t between 0 and 1
  t = clamp(t, 0.0, 1.0);
  
  if (t < 0.33) {
    // White to Blue
    return mix(uColorStops[0], uColorStops[1], t * 3.0);
  } else if (t < 0.66) {
    // Blue to Purple
    return mix(uColorStops[1], uColorStops[2], (t - 0.33) * 3.0);
  } else {
    // Purple to Pink
    return mix(uColorStops[2], uColorStops[3], (t - 0.66) * 3.0);
  }
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  
  // Get gradient color based on horizontal position
  vec3 rampColor = getColorFromGradient(uv.x);
  
  // Enhanced noise for more dynamic aurora effect - flows from bottom to top
  float noise1 = snoise(vec2(uv.x * 2.5 + uTime * 0.12, uTime * 0.25)) * 0.6;
  float noise2 = snoise(vec2(uv.x * 1.2 - uTime * 0.08, uTime * 0.18)) * 0.4;
  float noiseOffset = (noise1 + noise2) * uAmplitude;
  
  // Create aurora waves that flow upward from bottom
  float waveHeight = uv.y + noiseOffset * 0.3;
  float auroraIntensity = smoothstep(0.0, 0.4, waveHeight) * smoothstep(1.2, 0.6, waveHeight);
  
  // Add secondary aurora layer for more depth
  float secondaryNoise = snoise(vec2(uv.x * 3.0 + uTime * 0.15, uTime * 0.2)) * 0.3;
  float secondaryWave = uv.y + secondaryNoise * uAmplitude * 0.5;
  float secondaryIntensity = smoothstep(0.1, 0.5, secondaryWave) * smoothstep(1.0, 0.7, secondaryWave) * 0.7;
  
  // Combine both aurora layers
  float totalIntensity = max(auroraIntensity, secondaryIntensity);
  
  // Apply blend factor for smooth transitions
  totalIntensity *= uBlend;
  
  // Create gentle fade to white at the top for seamless background blending
  float fadeToWhite = smoothstep(0.8, 1.0, uv.y);
  vec3 finalColor = mix(rampColor * totalIntensity, vec3(1.0), fadeToWhite * 0.8);
  
  // Add subtle shimmer effect
  float shimmer = snoise(vec2(uv.x * 6.0, uv.y * 4.0 + uTime * 0.3)) * 0.05 + 1.0;
  finalColor *= shimmer;
  
  // Calculate alpha with smooth falloff
  float alpha = totalIntensity * (1.0 - fadeToWhite) * 0.6;
  
  fragColor = vec4(finalColor, alpha);
}
`;

interface AuroraProps {
  colorStops?: string[];
  amplitude?: number;
  blend?: number;
  time?: number;
  speed?: number;
}

export default function Aurora(props: AuroraProps) {
  const {
    colorStops = ["#FFFFFF", "#1E40AF", "#7C3AED", "#EC4899"], // White, Blue, Purple, Pink
    amplitude = 1.0,
    blend = 0.5,
    speed = 1.0,
  } = props;
  const propsRef = useRef<AuroraProps>(props);
  propsRef.current = props;

  const ctnDom = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctn = ctnDom.current;
    if (!ctn) return;

    const renderer = new Renderer({
      alpha: true,
      premultipliedAlpha: true,
      antialias: true,
    });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.canvas.style.backgroundColor = "transparent";

    let program: Program | undefined;

    function resize() {
      if (!ctn) return;
      const width = ctn.offsetWidth;
      const height = ctn.offsetHeight;
      renderer.setSize(width, height);
      if (program) {
        program.uniforms.uResolution.value = [width, height];
      }
    }
    window.addEventListener("resize", resize);

    const geometry = new Triangle(gl);
    if (geometry.attributes.uv) {
      delete (geometry.attributes as any).uv;
    }

    const colorStopsArray = colorStops.map((hex) => {
      const c = new Color(hex);
      return [c.r, c.g, c.b];
    });

    program = new Program(gl, {
      vertex: VERT,
      fragment: FRAG,
      uniforms: {
        uTime: { value: 0 },
        uAmplitude: { value: amplitude },
        uColorStops: { value: colorStopsArray },
        uResolution: { value: [ctn.offsetWidth, ctn.offsetHeight] },
        uBlend: { value: blend },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });
    ctn.appendChild(gl.canvas);

    let animateId = 0;
    const update = (t: number) => {
      animateId = requestAnimationFrame(update);
      const { time = t * 0.001, speed: currentSpeed = speed } = propsRef.current;
      if (program) {
        program.uniforms.uTime.value = time * currentSpeed;
        program.uniforms.uAmplitude.value = propsRef.current.amplitude ?? amplitude;
        program.uniforms.uBlend.value = propsRef.current.blend ?? blend;
        const stops = propsRef.current.colorStops ?? colorStops;
        program.uniforms.uColorStops.value = stops.map((hex: string) => {
          const c = new Color(hex);
          return [c.r, c.g, c.b];
        });
        renderer.render({ scene: mesh });
      }
    };
    animateId = requestAnimationFrame(update);

    resize();

    return () => {
      cancelAnimationFrame(animateId);
      window.removeEventListener("resize", resize);
      if (ctn && gl.canvas.parentNode === ctn) {
        ctn.removeChild(gl.canvas);
      }
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [amplitude, blend, speed]);

  return <div ref={ctnDom} className="w-full h-full" />;
}