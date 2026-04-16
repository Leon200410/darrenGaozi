import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useAppStore } from '../store/useAppStore';
import anime from 'animejs';

const ParticleField = () => {
  const ref = useRef<THREE.Points>(null!);
  const currentPage = useAppStore(state => state.currentPage);
  
  // Generate random points
  const points = useMemo(() => {
    const count = 10000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 60;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.02;
    }
  });

  // Transition color or rotation based on page
  useEffect(() => {
    if (!ref.current) return;
    
    const targetColor = new THREE.Color(
      currentPage === 0 ? '#4a90e2' : 
      currentPage === 1 ? '#50e3c2' :
      currentPage === 2 ? '#b8e986' :
      currentPage === 3 ? '#f5a623' :
      currentPage === 4 ? '#d0021b' :
      currentPage === 5 ? '#bd10e0' : '#9013fe'
    );

    const material = ref.current.material as THREE.PointsMaterial;
    if (!material.color) return;

    const dummyColor = { r: material.color.r, g: material.color.g, b: material.color.b };

    anime({
      targets: dummyColor,
      r: targetColor.r,
      g: targetColor.g,
      b: targetColor.b,
      duration: 1500,
      easing: 'easeOutSine',
      update: () => {
        if (ref.current) {
          const mat = ref.current.material as THREE.PointsMaterial;
          mat.color.setRGB(dummyColor.r, dummyColor.g, dummyColor.b);
        }
      }
    });
    
  }, [currentPage]);

  return (
    <points ref={ref} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        transparent
        color="#4a90e2"
        size={0.15}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export const Background3D: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <ParticleField />
      </Canvas>
    </div>
  );
};
