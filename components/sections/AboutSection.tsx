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
        bg-black text-white
        relative
        overflow-hidden
        -z-10
      "
    >
      {/* bg image */}
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

      {/* 2. Main content area */}
      <div className="ml-[50] my-20 flex-grow relative overflow-hidden py-10 w-full flex justify-center">
        
        {/* Shared max-width container for Title and Content */}
        <div className="w-full max-w-[1600px] px-6 md:px-12">
          
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
              -mt-2 -z-20
            "
          >
            ABOUT ME
          </motion.h2>

          {/* Content: Photo + Description */}
          <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-20 lg:gap-0">

            {/* Left: Description */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full lg:w-[42%] space-y-6"
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
                    I'm Tohru Djunaedi Sato, a <span className="font-bold text-white">CS student</span> at Bina Nusantara University. I'm passionate about
                    creating innovative solutions through code.
                  </p>

                  <p>
                    My journey in tech has led me to explore various domains including <span className="font-bold text-white">web development</span>,
                    <span className="font-bold text-white"> Data Science</span>, and <span className="font-bold text-white">3D graphics</span>.
                    However, I've been exploring the world of frontend development recently, building website interfaces that provides immersive experience for the users.
                  </p>
                  <p>Having lived in Japan for eight years before moving to Indonesia, I developed a multi-perspective approach to thinking and socializing. Let's work together on your next groundbreaking project.</p>
                  <p>

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
                <h4 className="text-2xl font-bold mb-4 text-white">SKILLS</h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Python", "R",
                    'Next.js',
                    'Three.js',
                    'React',
                    'R3F',
                    'cannon.es',
                    "HTML/CSS",'GCP','AWS',"Docker",
                    "Flutter","Flask", "Tauri", 
                    "Swift", "ESP32"
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
                        
                        text-white font-semibold
                        
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

            {/* Right: Photo + Fun Fact */}
            <div className="w-full lg:w-[45%] flex flex-col gap-6 h-full justify-center">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative w-full flex-1 min-h-[350px] overflow-hidden"
              >
                <Image
                  src="/images/my_photo.jpg"
                  alt="Tohru Djunaedi Sato"
                  fill
                  unoptimized
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              </motion.div>

              <motion.div 
                className='
                  w-full text-right
                '
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <h1 className='text-xl font-bold text-white'>
                  FUN FACT
                </h1>
                <p className='mt-2 text-gray-300 text-right leading-relaxed'>
                  As much as I love coding, I love drawing, too. All assets in this site including 2D artwork/3D models are created by me, there are no copyright-free assets used in this project.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

