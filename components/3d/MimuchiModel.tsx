// components/3d/InteractiveModel.tsx

"use client";

import { Suspense } from "react"; // 1. Suspense をインポート
import { Canvas } from "@react-three/fiber";
import { Stage, OrbitControls } from "@react-three/drei"; // 2. <Box> の代わりに <Stage> をインポート

// 3. gltfjsx で自動生成されたモデルをインポート
import { Model }from "./mimuchi.jsx"; // (ファイル名はコマンドで指定したもの)

export default function MimuchiModel() {
  return (
    <Canvas>
      {/* 4. Suspenseで、モデルが読み込まれるまで待機（fallback={null}は何 も表示しない）*/}
      <Suspense fallback={null}>
        {/* 5. <Stage> がモデルを自動で中央に配置し、
             適切な照明と影を追加してくれます。
        */}
        <Stage environment="city" intensity={2.0} shadows = {false}>
          <Model /> {/* 6. <Box> を <MyModel /> に差し替え */}
        </Stage>
      </Suspense>

      {/* 7. OrbitControls は変更なし */}
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate
        autoRotateSpeed={5.0}
      />
    </Canvas>
  );
}