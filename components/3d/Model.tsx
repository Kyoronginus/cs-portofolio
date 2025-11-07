"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Stage, OrbitControls } from "@react-three/drei";

export default function Model({children}: {children: React.ReactNode}) {
    return (
        <Canvas>
            <Suspense fallback={null}>
                <Stage environment="city" intensity={0.6} shadows = {false}>
                    {children}
                </Stage>
            </Suspense>

            <OrbitControls
                autoRotate
                autoRotateSpeed={5.0}

            />
        </Canvas>
    )
}