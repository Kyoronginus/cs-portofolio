"use client"; // ★ 1. "use client" を追加 (useStateフックを使うため)

import { useState, useRef } from "react"; // ★ 2. useState をインポート
import { motion, useScroll, useTransform } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projectsData } from "@/app/data/projects";

export default function ProjectsSection() {
  // ★ 3. 現在のプロジェクト番号(インデックス)を管理するstateを定義
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Track scroll progress for animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Animate the yellow sidebar
  const sidebarX = useTransform(scrollYProgress, [0, 0.3], [-100, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.5]);

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
      ref={sectionRef}
      id="projects"
      className="
        min-h-screen w-full
        flex
        text-black
        -mt-24
      "
    >
      {/* 1. 左側のサイドバー with slide-in animation */}
      <motion.div
        style={{ x: sidebarX }}
        className="
          w-20 lg:w-32
          bg-[#fdfd1f]
          -z-10
          flex-shrink-0
          relative overflow-hidden
        "
      >
        <h2 className="
          text-[12rem] font-bold text-[#bfbf17]
          transform -translate-x-1/5
          rotate-90
          whitespace-nowrap
        ">
          PORTFOLIO
        </h2>
      </motion.div>

      {/* 2. 右側のメインコンテンツ領域 */}
      <div className="
        flex-grow
        overflow-hidden
        pb-10
        relative /* ★ 6. ボタンを絶対配置するための基準点として 'relative' を追加 */
      ">
        {/* "PROJECTS" のタイトル with fade-in animation */}
        <motion.h2
          style={{ opacity: titleOpacity }}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="
            text-[14rem] font-bold text-left
            px-6 md:px-12
            text-transparent bg-clip-text
            bg-[repeating-linear-gradient(135deg,#808080_0px,#808080_3px,transparent_3px,transparent_12px)]
            -mt-2 -z-20
          "
        >
          PROJECTS
        </motion.h2>

        {/* 2色のライン with slide-in animation */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
          className="
            h-6
            mr-150 ml-14
            bg-[linear-gradient(to_right,#000000_20%,#fdfd1f_20%)]
            mb-16
          "
        ></motion.div>
        {/* ▲▲▲ ここまで ▲▲▲ */}

        {/* ▼▼▼ 7. < > ボタンをここに追加 with animations ▼▼▼ */}
        {/* 'PROJECTS' タイトルの右上に配置します */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute bottom-24 right-20 flex gap-4 z-10"
        >
          <motion.button
            onClick={handlePrevious} // ★ 戻るロジックを紐付け
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
            className="
              text-yellow-400
              hover:text-yellow-200
              text-bold text-8xl
              w-14 h-14  flex items-center justify-center
              transition-colors
            "
            aria-label="Previous project"
          >
            &lt; {/* < (小なり) を表示 */}
          </motion.button>
          <motion.button
            onClick={handleNext} // ★ 次へロジックを紐付け
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="
              text-yellow-400
              hover:text-yellow-200
              text-bold text-8xl
              w-14 h-14  flex items-center justify-center
              transition-colors
            "
            aria-label="Next project"
          >
            &gt; {/* > (大なり) を表示 */}
          </motion.button>
        </motion.div>
        {/* ▲▲▲ ここまで ▲▲▲ */}


        {/* ★ 8. [0] だった部分を [currentIndex] に変更 */}
        {/* これで、stateと連動して表示するプロジェクトが変わります */}
        <ProjectCard project={projectsData[currentIndex]} />

      </div>
    </section>
  );
}