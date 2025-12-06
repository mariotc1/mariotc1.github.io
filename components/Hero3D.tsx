import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

const ParticleSphere = (props: any) => {
  const ref = useRef<THREE.Points>(null!);
  
  // Detect mobile to reduce particle count
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Optimization: Reduce count on mobile to prevent lag
  const count = isMobile ? 800 : 3000;
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const color = new THREE.Color();

    for (let i = 0; i < count; i++) {
      const r = 1.5;
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Mix between cyan and purple
      const mixedColor = color.setHSL(Math.random() * 0.2 + 0.5, 0.8, 0.6);
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }
    return [positions, colors];
  }, [count]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
      
      // Breathing effect
      const t = state.clock.getElapsedTime();
      ref.current.scale.setScalar(1 + Math.sin(t * 1.5) * 0.05);
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          vertexColors
          size={isMobile ? 0.035 : 0.02} // Slightly larger particles on mobile for visibility
          sizeAttenuation={true}
          depthWrite={false}
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
    <div className="absolute inset-0 w-full h-full -z-10 bg-gradient-to-b from-brand-dark to-slate-900 overflow-hidden">
      {/* 
        CRITICAL OPTIMIZATION: 
        dpr={[1, 2]} clamps the pixel ratio. 
        Mobile phones often have dpr=3 or 4, which kills performance on full-screen WebGL.
        Limiting to 2 keeps it sharp but performant.
      */}
      <Canvas 
        camera={{ position: [0, 0, 3.5] }} 
        dpr={[1, 2]} 
        gl={{ antialias: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.5} />
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
           <ParticleSphere />
        </Float>
      </Canvas>
    </div>
  );
};

export default Hero3D;