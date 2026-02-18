import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField = (props: any) => {
  const ref = useRef<THREE.Points>(null!);
  
  // Detect mobile to reduce particle count
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Generate a circular texture for the particles
  const texture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const context = canvas.getContext('2d');
    if (context) {
      const gradient = context.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, 'rgba(255,255,255,1)');
      gradient.addColorStop(1, 'rgba(255,255,255,0)');
      context.fillStyle = gradient;
      context.fillRect(0, 0, 32, 32);
    }
    return new THREE.CanvasTexture(canvas);
  }, []);

  // Optimization: Drastically reduced count for "Ambient Dust" feel (Quality over Quantity)
  // Mobile: 300 (was 800) - Desktop: 1000 (was 3000)
  const count = isMobile ? 300 : 1000;
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const color = new THREE.Color();

    for (let i = 0; i < count; i++) {
        // Spread particles across a wide "Deep Space" box
        const x = (Math.random() - 0.5) * 15; // Wide horizontal spread
        const y = (Math.random() - 0.5) * 15; // Vertical spread
        const z = (Math.random() - 0.5) * 10; // Depth

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;

        // Elegant, subtle palette: Mostly white/cyan, less saturation
        // Mix strictly between brand accent and white for "Premium" feel
        const isAccent = Math.random() > 0.8; // 20% accent particles
        const mixedColor = isAccent 
            ? color.set("#38bdf8") // Brand Accent (Cyan)
            : color.set("#94a3b8"); // Slate 400 (Subtle Grey/White)
            
        colors[i * 3] = mixedColor.r;
        colors[i * 3 + 1] = mixedColor.g;
        colors[i * 3 + 2] = mixedColor.b;
    }
    return [positions, colors];
  }, [count]);

  useFrame((state, delta) => {
    if (ref.current) {
      // Extremely slow, elegant rotation for the whole field
      ref.current.rotation.x -= delta / 50;
      ref.current.rotation.y -= delta / 40;
      
      // Gentle "Breathing" is too distracting for "Professional", kept static or extremely subtle
      // Removed scale breathing for stability
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          vertexColors
          map={texture}
          alphaTest={0.001}
          opacity={0.6} // More subtle opacity
          depthWrite={false}
          size={isMobile ? 0.15 : 0.12} // Larger "Bokeh" dust effect
          sizeAttenuation={true}
          blending={THREE.AdditiveBlending} // Glow effect
        />
      </Points>
    </group>
  );
};

interface Hero3DProps {
  onScrollClick: () => void;
}

const Hero3D: React.FC<Hero3DProps> = ({ onScrollClick }) => {
  return (
    <div className="absolute inset-0 w-full h-full -z-10 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] overflow-hidden">
      {/* 
        CRITICAL OPTIMIZATION: 
        dpr={[1, 1.5]} further clamps pixel ratio for smoothness.
        Legacy: was [1, 2]. 1.5 is visually indistinguishable on high-DPI but 25% faster.
      */}
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 60 }} 
        dpr={[1, 1.5]} 
        gl={{ 
            antialias: false, // Explicitly disable AA for particles (not needed with texture) -> huge perf boost
            powerPreference: "high-performance",
            alpha: false,
            stencil: false,
            depth: false // Disable depth buffer for background particles -> perf boost
        }}
      >
        <ParticleField />
      </Canvas>
    </div>
  );
};

export default Hero3D;