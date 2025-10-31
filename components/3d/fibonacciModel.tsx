"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Stage, OrbitControls } from "@react-three/drei";
import { Model } from "./fibonacci.jsx";

export default function FibonacciModel() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Stage environment="apartment" intensity={0.6} shadows = {false}>
          <Model />
        </Stage>
      </Suspense>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate
        autoRotateSpeed={5.0}
      />
    </Canvas>
  );
}