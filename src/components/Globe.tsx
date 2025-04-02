
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '@/hooks/use-theme';

function GlobeMesh() {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.2) * 0.2;
      ref.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.2;
    }
  });

  return (
    <Sphere ref={ref} args={[1, 64, 64]} scale={1.5}>
      <MeshDistortMaterial
        color="#7A869F"
        attach="material"
        distort={0.4}
        speed={1.5}
        roughness={0.5}
        metalness={0.2}
      />
    </Sphere>
  );
}

const Globe = () => {
  return (
    <div className="w-full max-w-xl mx-auto h-64 my-12 fade-in fade-in-delay-2 relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-48 h-48 rounded-full bg-shivers-400/10 backdrop-blur-sm filter blur-xl" />
      </div>
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <GlobeMesh />
      </Canvas>
    </div>
  );
};

export default Globe;
