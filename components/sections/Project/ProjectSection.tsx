"use client"; // ★ 1. "use client" を追加 (useStateフックを使うため)

import { useState } from "react"; // ★ 2. useState をインポート
import ProjectCard from "./ProjectCard";
import { projectsData } from "@/app/data/projects";

export default function ProjectsSection() {
  // ★ 3. 現在のプロジェクト番号(インデックス)を管理するstateを定義
  const [currentIndex, setCurrentIndex] = useState(0);

  // ★ 4. 「次へ」ボタンが押された時の処理
  const handleNext = () => {
    // (現在の番号 + 1) を プロジェクトの総数で割った余り 
    // これでリストの最後に達したら自動で0に戻ります (ループ)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  // ★ 5. 「戻る」ボタンが押された時の処理
  const handlePrevious = () => {
    // もし最初のプロジェクト(0)なら、最後のプロジェクト(length - 1)に移動
    // それ以外なら、単純に 1 引く
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <section
      id="projects"
      className="
        min-h-screen w-full 
        flex 
        text-black
        -mt-24 
      "
    >
      {/* 1. 左側のサイドバー (変更なし) */}
      <div className="
        w-20 lg:w-32 
        bg-[#fdfd1f] 
        -z-10
        flex-shrink-0 
        relative overflow-hidden 
      ">
        <h2 className="
          text-[12rem] font-bold text-[#bfbf17]
          transform -translate-x-1/5
          rotate-90 
          whitespace-nowrap 
        ">
          PORTFOLIO
        </h2>
      </div>

      {/* 2. 右側のメインコンテンツ領域 */}
      <div className="
        flex-grow 
        overflow-hidden 
        pb-10
        relative /* ★ 6. ボタンを絶対配置するための基準点として 'relative' を追加 */
      ">
        {/* "PROJECTS" のタイトル (変更なし) */}
        <h2 className="
          text-[14rem] font-bold text-left
          px-6 md:px-12 
          text-transparent bg-clip-text
          bg-[repeating-linear-gradient(135deg,#808080_0px,#808080_3px,transparent_3px,transparent_12px)]
          -mt-4 -z-20 
        ">
          PROJECTS
        </h2>

        {/* 2色のライン (変更なし) */}
        <div className="
          h-6 
          mr-150 ml-14
          bg-[linear-gradient(to_right,#000000_20%,#fdfd1f_20%)]
          mb-16 
        "></div>
        {/* ▲▲▲ ここまで ▲▲▲ */}

        {/* ▼▼▼ 7. < > ボタンをここに追加 ▼▼▼ */}
        {/* 'PROJECTS' タイトルの右上に配置します */}
        <div className="absolute bottom-24 right-20 flex gap-4 z-10">
          <button 
            onClick={handlePrevious} // ★ 戻るロジックを紐付け
            className="
              bg-black text-yellow-400
              hover:bg-gray-800 hover:text-white
              w-14 h-14 rounded-full flex items-center justify-center
              transition-colors
            "
            aria-label="Previous project"
          >
            &lt; {/* < (小なり) を表示 */}
          </button>
          <button 
            onClick={handleNext} // ★ 次へロジックを紐付け
            className="
              bg-black text-yellow-400
              hover:bg-gray-800 hover:text-white
              w-14 h-14 rounded-full flex items-center justify-center
              transition-colors
            "
            aria-label="Next project"
          >
            &gt; {/* > (大なり) を表示 */}
          </button>
        </div>
        {/* ▲▲▲ ここまで ▲▲▲ */}


        {/* ★ 8. [0] だった部分を [currentIndex] に変更 */}
        {/* これで、stateと連動して表示するプロジェクトが変わります */}
        <ProjectCard project={projectsData[currentIndex]} />

      </div>
    </section>
  );
}