"use client";

import * as THREE from "three";
import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line, Sphere, OrbitControls } from "@react-three/drei";

// Componente para una línea individual que conecta dos puntos
function ConnectionLine({ start, end }: { start: THREE.Vector3; end: THREE.Vector3 }) {
  return <Line points={[start, end]} color="#F46530" lineWidth={1} transparent opacity={0.3} />;
}

// Componente principal de la escena 3D
function NodesScene() {
  const groupRef = useRef<THREE.Group>(null!);

  // Generamos las posiciones de los nodos y las líneas de forma procedural
  const { nodes, lines } = useMemo(() => {
    // Seeded pseudo-random number generator for deterministic output
    let seed = 42;
    const seededRandom = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };

    const nodeCount = 50;
    const tempNodes = [];
    const tempLines = [];
    const radius = 3; // Reducido para que se vea completo en el viewport

    // Crear nodos en posiciones deterministas dentro de una esfera
    for (let i = 0; i < nodeCount; i++) {
      const t = seededRandom() * 2 * Math.PI;
      const phi = Math.acos(2 * seededRandom() - 1);
      const x = radius * Math.sin(phi) * Math.cos(t);
      const y = radius * Math.sin(phi) * Math.sin(t);
      const z = radius * Math.cos(phi);
      tempNodes.push(new THREE.Vector3(x, y, z));
    }

    // Conectar nodos que estén cerca uno del otro
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        if (tempNodes[i].distanceTo(tempNodes[j]) < 2.2) {
          tempLines.push({ start: tempNodes[i], end: tempNodes[j] });
        }
      }
    }
    return { nodes: tempNodes, lines: tempLines };
  }, []);

  // Animación del grupo entero
  useFrame((state, delta) => {
    groupRef.current.rotation.y += delta * 0.05; // Rotación lenta y constante
    // Brillo pulsante basado en el tiempo
    const pulseIntensity = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    groupRef.current.children.forEach((child) => {
      if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
        child.material.emissiveIntensity = pulseIntensity;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {/* Renderizar las líneas de conexión */}
      {lines.map((line, i) => (
        <ConnectionLine key={i} start={line.start} end={line.end} />
      ))}
      {/* Renderizar los nodos */}
      {nodes.map((pos, i) => (
        <Sphere key={i} position={pos} args={[0.1, 16, 16]}>
          <meshStandardMaterial
            color="#F46530"
            emissive="#F46530" // Brillo naranja
            emissiveIntensity={1}
          />
        </Sphere>
      ))}
    </group>
  );
}

// Componente final que se exporta
export default function CodeNodes() {
  return (
    <div className="w-full h-full absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ alpha: true }}
      >
        <ambientLight intensity={0.1} />
        <directionalLight color="#F46530" position={[0, 0, 5]} intensity={1} />
        <NodesScene />
        {/* Controles de órbita para rotar con el mouse */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
