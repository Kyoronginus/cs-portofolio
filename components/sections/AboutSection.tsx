// components/sections/AboutSection.tsx
"use client";

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // Track scroll progress for animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Animate the yellow sidebar from left
  const sidebarX = useTransform(scrollYProgress, [0, 0.3], [-100, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.5]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="
        min-h-screen w-full
        flex
        bg-black text-white
        relative
        overflow-hidden
        -z-10
      "
    >
      {/* 1. 背景画像 (奥) with parallax effect */}
      <motion.div
        className="absolute inset-0"
      >
        <Image
          src="/images/header_texture.png"
          alt="Hero background image"
          fill
          style={{ objectFit: 'cover' }}
          className="opacity-10 blur-md"
        />
      </motion.div>

      {/* 2. Main content area (right side) */}
      <div className="ml-[50] my-20 flex-grow relative overflow-hidden py-10">
        {/* "ABOUT ME" title with fade-in animation */}
        <motion.h2
          style={{ opacity: titleOpacity }}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="
            text-8xl font-bold text-left
            mb-10
            px-6 md:px-12
            -mt-2 -z-20
          "
        >
          ABOUT ME
        </motion.h2>



        {/* Content: Photo + Description */}
        <div className="px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl">

            {/* Right: Description */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Introduction */}
              <div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="space-y-4 text-lg text-white-700 leading-relaxed"
                >
                  <p>
                    I'm Tohru Djunaedi Sato, a <span className="font-bold text-white">Computer Science student</span> passionate about
                    creating innovative solutions through code. With a strong foundation in software development
                    and a keen eye for design, I strive to build applications that are both functional and beautiful.
                  </p>

                  <p>
                    My journey in tech has led me to explore various domains including <span className="font-bold text-white">web development</span>,
                    <span className="font-bold text-white"> machine learning</span>, and <span className="font-bold text-white">3D graphics</span>.
                    I'm always eager to learn new technologies and take on challenging projects that push my boundaries.
                  </p>

                  <p>
                    When I'm not coding, you can find me exploring game design principles, experimenting with UI/UX concepts,
                    or contributing to open-source projects. I believe in continuous learning and sharing knowledge with the community.
                  </p>
                </motion.div>
              </div>

              {/* Skills/Interests badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="pt-6"
              >
                <h4 className="text-2xl font-bold mb-4 text-white">Interests & Skills</h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    'Web Development',
                    'Machine Learning',
                    '3D Graphics',
                    'UI/UX Design',
                    'Game Development',
                    'Open Source'
                  ].map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.05, backgroundColor: '#fdfd1f' }}
                      className="
                        px-4 py-2
                        bg-gray-200
                        text-black font-semibold
                        rounded-lg
                        border-2 border-gray-300
                        transition-colors
                        cursor-default
                      "
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>

      <div className='mr-[100] my-20 flex-grow relative overflow-hidden py-10'>
          <h1 className='text-right text-end text-xl'>50% ARTIST, 50% COMPUTER SCIENCE</h1>
      </div>
    </section>
  );
}

