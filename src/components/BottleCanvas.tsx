'use client'
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function DropperBottle() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.6
    }
  })

  return (
    <group ref={groupRef}>
      <mesh position={[0, -0.2, 0]}>
        <cylinderGeometry args={[0.5, 0.55, 2.2, 32]} />
        <meshPhysicalMaterial
          color="#c8e8f0"
          transparent
          opacity={0.75}
          roughness={0.05}
          metalness={0}
          transmission={0.7}
        />
      </mesh>
      <mesh position={[0, 1.0, 0]}>
        <cylinderGeometry args={[0.22, 0.5, 0.5, 32]} />
        <meshPhysicalMaterial color="#c8e8f0" transparent opacity={0.75} roughness={0.05} transmission={0.7} />
      </mesh>
      <mesh position={[0, 1.4, 0]}>
        <cylinderGeometry args={[0.2, 0.22, 0.35, 32]} />
        <meshStandardMaterial color="#d0d0d0" metalness={0.3} roughness={0.2} />
      </mesh>
      <mesh position={[0, 1.85, 0]}>
        <cylinderGeometry args={[0.28, 0.28, 0.6, 32]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.1} roughness={0.5} />
      </mesh>
      <mesh position={[0, 2.25, 0]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      <mesh position={[0, -0.3, 0]}>
        <cylinderGeometry args={[0.38, 0.42, 1.6, 32]} />
        <meshPhysicalMaterial color="#aed6e8" transparent opacity={0.5} roughness={0} transmission={0.8} />
      </mesh>
    </group>
  )
}

export default function BottleCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} style={{ background: 'transparent' }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <pointLight position={[-3, 3, 3]} intensity={0.8} color="#c8e8f0" />
      <DropperBottle />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  )
}
