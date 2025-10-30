
// components/sections/HeroSection.tsx
"use client";

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // Track scroll progress of this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Parallax effect for background image
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  // Animate the yellow sidebar from right
  const sidebarX = useTransform(scrollYProgress, [0, 0.3], [0, 100]);

  return (
    <section
      ref={sectionRef}
      id="hero"
    >
      <div className="
        min-h-screen w-full
        bg-black text-white
        relative
        flex
        overflow-hidden
        -mt-4
      ">
        {/* 1. 背景画像 (奥) with parallax effect */}
        <motion.div
          style={{ y: backgroundY, opacity }}
          className="absolute inset-0"
        >
          <Image
            src="/images/hero_background.jpg"
            alt="Hero background image"
            fill
            style={{ objectFit: 'cover' }}
            className="opacity-30"
          />
        </motion.div>

        {/* 2. Main content area (left side) */}
        <div className="
        flex-grow relative z-10 
        flex items-center            /* ★ 1. flex items-center をここに移動 */
        px-6 md:px-12                 /* ★ 2. pl- (左) の代わりに px- (左右) を適用 */
      ">

          {/* 2. Main content area (left side) */}
          <div className="
        flex-grow relative z-10 
        flex items-center         /* 親が子(div)を上下中央に配置 */
        px-6 md:px-12              /* 左右のパディング */
      ">

            {/* ★ 1. ここに 'w-full' を追加 */}
            <div className="w-full">

              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  staggerChildren: 0.2
                  // ...
                }}
                className="
              text-[10rem] xl:text-[14rem]
              font-bold text-left
              text-transparent bg-clip-text
              bg-[repeating-linear-gradient(135deg,#ffffff,#ffffff_3px,transparent_3px,transparent_8px)]
              leading-none
            "
              >
                <p>TOHRU</p>
                <div className='grid'>
                  <p>DJUNAEDI</p>

                  {/* The container below manages the alignment of 'SATO' and the description */}
                  <div className='flex justify-between items-end w-full'> {/* Added justify-between and w-full */}

                    {/* This <p> is naturally aligned to the left because of justify-between */}
                    <p>SATO</p>

                    {/* This <div> is pushed to the far right */}
                    <div className="text-lg text-right text-white ">
                      <p className=''>sometimes</p>
                      <p className='font-bold text-6xl'>ARTIST</p>
                      <p className='font-bold text-8xl'> DEVELOPER</p>
                    </div>
                  </div>
                </div>
              </motion.h2>
            </div>
          </div>
        </div>
      </div>



    </section>
  );
}