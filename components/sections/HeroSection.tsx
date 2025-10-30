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

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="
        min-h-screen  /* 画面の高さいっぱいに */
        bg-black text-white
        relative      /* ★ 1. 親コンテナを 'relative' に（重要）*/
        overflow-hidden /* はみ出し防止 */
        -mt-4
      "
    >
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

      {/* 2. テキストコンテンツ (手前) with animations */}
      <div className="
        absolute inset-0      /* 親(section)いっぱいに広がる */
        z-10                  /* 画像(z-0)より手前に配置 */
        flex items-center     /* 中身(h2やp)を上下中央に */
        pl-6 md:pl-12         /* 左側の余白 */
        flex
      ">
        <div> {/* テキストをまとめるdiv */}
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              staggerChildren: 0.2
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
              <p>DJUNAEDI</p>
              <p>SATO</p>
            
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="text-right text-gray-500 max-w-2xl mt-8"
          >
            Computer Science Student | Developer | Creator
          </motion.h1>
        </div>
      </div>
    </section>
  );
}