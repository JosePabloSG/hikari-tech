"use client";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function StarsBackground() {
  return (
    <div className="w-full h-full absolute inset-0 z-0" style={{ pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Stars radius={200} depth={100} count={8000} factor={6} saturation={0} fade speed={0.5} />
      </Canvas>
    </div>
  );
}
