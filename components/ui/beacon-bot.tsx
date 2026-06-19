"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";

function useReducedMotion() {
  const [reduced, setReduced] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    query.addEventListener("change", handler);
    return () => query.removeEventListener("change", handler);
  }, []);

  return reduced;
}

const BODY_COLOR = "#F2ECE3";
const TRIM_COLOR = "#3A3530";
const BEACON_COLOR = "#F46530";
const REACTION_DURATION = 1.0;

function Bot({ reactingRef, reducedMotion }: { reactingRef: { current: number }; reducedMotion: boolean }) {
  const rootRef = useRef<THREE.Group>(null!);
  const eyeMatRef = useRef<THREE.MeshStandardMaterial>(null!);
  const ringRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    const idleY = reducedMotion ? 0 : Math.sin(t * 0.9) * 0.06;
    const idleRotZ = reducedMotion ? 0 : Math.sin(t * 0.6) * 0.02;

    let bounce = 0;
    let eyeBoost = 0;
    let ringSpin = 0.35;
    let spinExtra = 0;
    let squash = 1;
    let stretch = 1;
    const reactingAt = reactingRef.current;

    if (reactingAt) {
      const elapsed = (performance.now() - reactingAt) / 1000;
      if (elapsed < REACTION_DURATION) {
        const progress = elapsed / REACTION_DURATION;
        bounce = Math.sin(progress * Math.PI) * 0.32;
        eyeBoost = (1 - progress) * 2.4;
        ringSpin = 6;
        spinExtra = progress * Math.PI * 2;
        const wobble = Math.sin(progress * Math.PI * 3) * (1 - progress) * 0.16;
        squash = 1 + wobble;
        stretch = 1 - wobble * 0.8;
      } else {
        reactingRef.current = 0;
      }
    }

    rootRef.current.position.y = idleY + bounce;
    rootRef.current.rotation.z = idleRotZ;
    rootRef.current.rotation.y = spinExtra;
    rootRef.current.scale.set(squash, stretch, squash);
    eyeMatRef.current.emissiveIntensity = 1.5 + Math.sin(t * 1.4) * 0.25 + eyeBoost;
    ringRef.current.rotation.z += ringSpin * delta;
  });

  return (
    <group ref={rootRef}>
      {/* Lower body */}
      <mesh position={[0, -0.2, 0]} scale={[1, 1.15, 0.92]}>
        <sphereGeometry args={[0.52, 48, 48]} />
        <meshPhysicalMaterial color={BODY_COLOR} roughness={0.32} metalness={0.04} clearcoat={0.55} clearcoatRoughness={0.18} />
      </mesh>

      {/* Head, merged into the body silhouette */}
      <mesh position={[0, 0.5, 0]} scale={[1, 0.95, 0.92]}>
        <sphereGeometry args={[0.36, 48, 48]} />
        <meshPhysicalMaterial color={BODY_COLOR} roughness={0.32} metalness={0.04} clearcoat={0.55} clearcoatRoughness={0.18} />
      </mesh>

      {/* Eye / beacon lens */}
      <group position={[0, 0.55, 0.3]}>
        <mesh ref={ringRef}>
          <torusGeometry args={[0.195, 0.032, 16, 32]} />
          <meshStandardMaterial color={TRIM_COLOR} roughness={0.3} metalness={0.6} />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.16, 32, 32]} />
          <meshStandardMaterial ref={eyeMatRef} color={BEACON_COLOR} emissive={BEACON_COLOR} emissiveIntensity={1.5} toneMapped={false} />
        </mesh>
        <mesh position={[-0.06, 0.06, 0.1]}>
          <sphereGeometry args={[0.035, 16, 16]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
        </mesh>
      </group>
      <pointLight position={[0, 0.55, 0.55]} color={BEACON_COLOR} intensity={2} distance={2.4} decay={2} />
    </group>
  );
}

export default function BeaconBot() {
  const reducedMotion = useReducedMotion();
  const reactingRef = useRef<number>(0);

  return (
    <Canvas
      camera={{ position: [0, 0.1, 4.8], fov: 34 }}
      dpr={[1, 2]}
      gl={{ alpha: true, antialias: true }}
      onClick={() => {
        if (!reactingRef.current) reactingRef.current = performance.now();
      }}
      onPointerOver={() => (document.body.style.cursor = "pointer")}
      onPointerOut={() => (document.body.style.cursor = "auto")}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 4, 5]} intensity={0.7} />
      <directionalLight position={[-3, 2, -2]} intensity={0.25} />
      <Bot reactingRef={reactingRef} reducedMotion={reducedMotion} />
    </Canvas>
  );
}
