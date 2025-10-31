"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Stage, OrbitControls } from "@react-three/drei";
import { Model }from "./mimuchi.jsx";

export default function MimuchiModel() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Stage environment="city" intensity={2.0} shadows = {false}>
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