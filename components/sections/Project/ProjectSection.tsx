"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projectsData } from "@/components/sections/Project/projects";

export default function ProjectsSection() {
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

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };
  const handlePrevious = () => {
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
      {/* sidebar with slide-in animation */}
      <motion.div
        style={{ x: sidebarX }}
        className="
          w-20 lg:w-32
          bg-[#fdfd1f]
          -z-20
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

      {/* main contents*/}
      <div className="
        flex-grow
        overflow-hidden
        pb-10
        relative
      ">
        {/* Project Title */}
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

        {/* next-prev buttons*/}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute bottom-24 right-20 flex gap-4 z-10"
        >
          <motion.button
            onClick={handlePrevious}
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
            &lt;
          </motion.button>
          <motion.button
            onClick={handleNext}
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
            &gt;
          </motion.button>
        </motion.div>

        {/* Project Card */}
        <ProjectCard project={projectsData[currentIndex]} />
      </div>
    </section>
  );
}