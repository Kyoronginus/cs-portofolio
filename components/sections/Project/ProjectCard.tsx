"use client";

import YouTubeFacade from "../../YoutubeFacade";
import Image from "next/image";
import InteractiveModel from "../../3d/InteractiveModel";
import FibonacciModel from "../../3d/fibonacciModel";
import MimuchiModel from "../../3d/MimuchiModel";
import { type Project } from "../../../app/data/projects";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectCard({ project }: { project: Project }) {
    // Render the appropriate 3D model based on modelComponentName
    const renderModel = () => {
        switch (project.modelComponentName) {
            case "InteractiveModel":
                return <InteractiveModel />;

            case "FibonacciModel":
                return <FibonacciModel />;

            case "MimuchiModel":
                return <MimuchiModel />;

            case "Placeholder":
                return (
                    <div className="w-full aspect-square bg-gray-700/50 rounded-lg flex items-center justify-center">
                        <p>No 3D Model</p>
                    </div>
                );
            default:
                return (
                    <div className="w-full aspect-square bg-gray-700/50 rounded-lg flex items-center justify-center">
                        <p>3D Model</p>
                    </div>
                );
        }
    };
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full p-6"
            >
                {/* ★これが「透明なコンテナ」です
              - bg-black/30: 背景を30%の黒（半透明）に
              - backdrop-blur-md: 背景（テクスチャ画像）をぼかす (すりガラス効果)
              - border border-white/20: 20%の白いボーダーで輪郭を定義
            */}
                <div className="
              p-0 md:p-8 relative
              "
                >
                {/* 2c. VIDEO PREVIEW (プレースホルダー) */}
                <div className="
            aspect-video -mt-20
            bg-black/50 rounded-lg mb-8
            overflow-hidden
            ">
                    <YouTubeFacade
                        videoId={project.videoId} // props
                        title={project.title}
                    />
                </div>



                {/* ▼▼▼ マスコット画像をここに追加 ▼▼▼ */}
                {project.mascotVideo && ( // mascotVideoがnullでない場合のみ表示
                    <Image
                        src={project.mascotVideo.src}
                        alt="Mascot peeking"
                        width={project.mascotVideo.width}
                        height={project.mascotVideo.height}
                        className={project.mascotVideo.className}
                    />
                )}
                {/* ▲▲▲ ここまで ▲▲▲ */}



                {/* 2. メインコンテンツ (Gridレイアウト)
              - md:grid-cols-3: PCでは3カラムのグリッド
            */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* 2a. タイトルと説明 (左側2カラム分) */}
                    <div className="md:col-span-2">
                        <div className="flex items-center">
                            <h3 className="text-9xl font-bold mb-4 text-[#000000] mb-10">
                                {project.title} {/* ★ props から */}
                            </h3>

                            {/* ▼▼▼ マスコット画像をここに追加 ▼▼▼ */}
                            {project.mascotTitle && ( // mascotTitleがnullでない場合のみ表示
                                <Image
                                    src={project.mascotTitle.src}
                                    alt="Mascot peeking"
                                    width={project.mascotTitle.width}
                                    height={project.mascotTitle.height}
                                    className={project.mascotTitle.className}
                                />
                            )}
                            {/* ▲▲▲ ここまで ▲▲▲ */}

                        </div>

                        <p className="text-4xl text-gray-900 mt-6 mb-8 text-lg">
                            {project.description} {/* ★ props から */}
                        </p>

                        {/* Techstacks */}
                        <div>
                            <h4 className="text-2xl font-semibold mb-4 text-black-200">Techstacks</h4>
                            <div className="flex flex-wrap gap-4">
                                {/* (ここは将来的にアイコンやロゴに置き換えます) */}
                                {project.techstacks.map((tech: string, index: number) => ( // ★ props から
                                    <div
                                        key={tech}
                                        className={
                                            index < 2
                                                ? "bg-[#fdfd1f]/90 px-4 py-2 rounded-lg text-sm font-mono"
                                                : "bg-gray-300 px-4 py-2 rounded-lg text-sm font-mono"
                                        }
                                    >
                                        {tech}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* 3Dモデルのコンテナ */}
                    <div className="w-full aspect-square rounded-lg overflow-hidden relative"> {/* ★ overflow-hidden を追加 */}

                        {/* ★ 2. プレースホルダーをコンポーネントに差し替え */}
                        {renderModel()} {/* ★ props から */}

                        {/* ラフ画の「傾いた赤い枠」を表現 */}
                        {/* ★ 3. pointer-events-none を追加 */}
                        <div className="absolute inset-3 rounded-lg rotate-6 pointer-events-none"></div>
                    </div>
                    <p className="text-sm text-gray-400 mt-2">
                    </p>


                </div>

                {/* VISIT ボタン */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-10"
                >
                    <a href={project.liveSiteUrl} target="_blank" rel="noopener noreferrer"> {/* ★ props から */}
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(253, 253, 53, 0.5)" }}
                            whileTap={{ scale: 0.95 }}
                            className="
                                bg-[#fdfd35] text-black px-10 py-3 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors"
                        >
                            VISIT
                        </motion.button>
                    </a>
                </motion.div>

            </div>
        </motion.div>
        </AnimatePresence>
    );
}