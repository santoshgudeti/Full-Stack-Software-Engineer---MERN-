import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    
    for (let i = 0; i < 2000; i++) {
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 10;
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.03;
      ref.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#06b6d4"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

function FloatingOrbs() {
  const orb1Ref = useRef<THREE.Mesh>(null);
  const orb2Ref = useRef<THREE.Mesh>(null);
  const orb3Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    
    if (orb1Ref.current) {
      orb1Ref.current.position.x = Math.sin(t * 0.3) * 2;
      orb1Ref.current.position.y = Math.cos(t * 0.4) * 1.5;
      orb1Ref.current.position.z = Math.sin(t * 0.2) * 1;
    }
    
    if (orb2Ref.current) {
      orb2Ref.current.position.x = Math.cos(t * 0.25) * 2.5;
      orb2Ref.current.position.y = Math.sin(t * 0.35) * 2;
      orb2Ref.current.position.z = Math.cos(t * 0.15) * 1.5;
    }
    
    if (orb3Ref.current) {
      orb3Ref.current.position.x = Math.sin(t * 0.2) * 3;
      orb3Ref.current.position.y = Math.cos(t * 0.3) * 1;
      orb3Ref.current.position.z = Math.sin(t * 0.25) * 2;
    }
  });

  return (
    <>
      <mesh ref={orb1Ref} position={[2, 1, -2]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="#06b6d4" transparent opacity={0.1} />
      </mesh>
      <mesh ref={orb2Ref} position={[-2, -1, -3]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.08} />
      </mesh>
      <mesh ref={orb3Ref} position={[0, 2, -4]}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshBasicMaterial color="#10b981" transparent opacity={0.06} />
      </mesh>
    </>
  );
}

const ParticleBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <ParticleField />
        <FloatingOrbs />
      </Canvas>
    </div>
  );
};

export default ParticleBackground;
