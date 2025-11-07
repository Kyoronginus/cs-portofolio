"use client";

import YouTubeFacade from "../../YoutubeFacade";
import Image from "next/image";
import Model from "../../3d/Model";
import { type Project } from "./projects";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectCard({ project }: { project: Project }) {
    const { ModelComponent } = project;
    
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
                <div className="p-0 md:p-8 relative">
                    {/* VIDEO PREVIEW */}
                    <div className="aspect-video -mt-20 bg-black/50 rounded-lg mb-8 overflow-hidden">
                        <YouTubeFacade
                            videoId={project.videoId}
                            title={project.title}
                        />
                    </div>

                    {/* Mascot Video */}
                    {project.mascotVideo && (
                        <Image
                            src={project.mascotVideo.src}
                            alt="Mascot peeking"
                            width={project.mascotVideo.width}
                            height={project.mascotVideo.height}
                            className={project.mascotVideo.className}
                        />
                    )}

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Title and Description */}
                        <div className="md:col-span-2">
                            <div className="flex items-center">
                                <h3 className="text-9xl font-bold mb-4 text-[#000000] mb-10">
                                    {project.title}
                                </h3>

                                {/* Mascot Title */}
                                {project.mascotTitle && (
                                    <Image
                                        src={project.mascotTitle.src}
                                        alt="Mascot peeking"
                                        width={project.mascotTitle.width}
                                        height={project.mascotTitle.height}
                                        className={project.mascotTitle.className}
                                    />
                                )}
                            </div>

                            <p className="text-4xl text-gray-900 mt-6 mb-8 text-lg">
                                {project.description}
                            </p>

                            {/* Techstacks */}
                            <div>
                                <h4 className="text-2xl font-semibold mb-4 text-black-200">Techstacks</h4>
                                <div className="flex flex-wrap gap-4">
                                    {project.techstacks.map((tech: string, index: number) => (
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

                        {/* 3D Model Container */}
                        <div className="w-full aspect-square rounded-lg overflow-hidden relative">
                            {ModelComponent ? (
                                <Model>
                                    <ModelComponent />
                                </Model>
                            ) : (
                                <div className="w-full aspect-square bg-gray-700/50 rounded-lg flex items-center justify-center">
                                    <p>3D Model</p>
                                </div>
                            )}

                            {/* Decorative border */}
                            <div className="absolute inset-3 rounded-lg rotate-6 pointer-events-none"></div>
                        </div>
                    </div>

                    {/* VISIT Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-10"
                    >
                        <a href={project.liveSiteUrl} target="_blank" rel="noopener noreferrer">
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(253, 253, 53, 0.5)" }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[#fdfd35] text-black px-10 py-3 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors"
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
