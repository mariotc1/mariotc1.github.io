import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

const ParticleSphere = (props: any) => {
  const ref = useRef<THREE.Points>(null!);
  const [hovered, setHover] = useState(false);
  
  // Detect mobile to reduce particle count
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Optimization: Reduce count on mobile
  const count = isMobile ? 1500 : 5000;
  
  const [positions, finalColors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const color = new THREE.Color();

    for (let i = 0; i < count; i++) {
      const r = 1.8; // Slightly larger sphere
      // Fibonacci sphere distribution for more even spread, looks more "engineered"
      const phi = Math.acos(1 - 2 * (i + 0.5) / count);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Cyber-punk palette: Cyan, Purple, Deep Blue
      const choice = Math.random();
      if (choice > 0.8) {
        // Neon Cyan
        color.setHSL(0.5, 1.0, 0.6); 
      } else if (choice > 0.4) {
        // Electric Purple
        color.setHSL(0.75, 1.0, 0.6);
      } else {
        // Deep Sky Blue
        color.setHSL(0.6, 1.0, 0.5);
      }

      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    return [positions, colors];
  }, [count]);

  useFrame((state, delta) => {
    if (ref.current) {
      // Rotation
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
      
      // Breathing/Pulse effect
      const t = state.clock.getElapsedTime();
      const pulse = 1 + Math.sin(t * 1) * 0.05;
      ref.current.scale.setScalar(pulse);

      // Mouse interaction (subtle parallax)
      const mouse = state.mouse;
      ref.current.rotation.x += (mouse.y * 0.1 - ref.current.rotation.x) * delta;
      ref.current.rotation.y += (mouse.x * 0.1 - ref.current.rotation.y) * delta;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points 
        ref={ref} 
        positions={positions} 
        colors={finalColors} 
        stride={3} 
        frustumCulled={false} 
        {...props}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <PointMaterial
          transparent
          vertexColors
          size={isMobile ? 0.025 : 0.012}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
};

// Background subtle grid or noise could be added here
const BackgroundEffects = () => {
    return (
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    )
}

interface Hero3DProps {}

const Hero3D: React.FC<Hero3DProps> = () => {
  return (
    <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
       <Canvas 
         camera={{ position: [0, 0, 4.5], fov: 60 }} 
         dpr={[1, 2]} 
         gl={{ antialias: true, alpha: true }}
       >
         <fog attach="fog" args={['#000000', 5, 20]} />
         <ambientLight intensity={0.5} />
         
         <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
         
         <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <ParticleSphere />
         </Float>
       </Canvas>
    </div>
  );
};

export default Hero3D;