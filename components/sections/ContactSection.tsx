// components/sections/ContactSection.tsx
"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // Track scroll progress for animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const titleOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.5]);

  // Contact links data
  const contactLinks = [
    {
      name: 'EMAIL',
      href: 'mailto:tohru.sato@example.com'
    },
    {
      name: 'LINKEDIN',
      href: 'https://linkedin.com/in/tohru-sato'
    },
    {
      name: 'GITHUB',
      href: 'https://github.com/tohru-sato'
    },
    {
      name: 'TWITTER / X',
      href: 'https://twitter.com/tohru_sato'
    }
  ];

  return (
    <>
      <section
        ref={sectionRef}
        id="contact"
        className="
          min-h-screen w-full
          bg-black text-white
          relative
          overflow-hidden
          py-20
        "
      >
        {/* Background texture */}
        <motion.div className="absolute inset-0">
          <Image
            src="/images/header_texture.png"
            alt="Contact background texture"
            fill
            style={{ objectFit: 'cover' }}
            className="opacity-10 blur-md"
          />
        </motion.div>

        <div className="relative z-10 container mx-auto px-6 md:px-[223]">
          {/* Title */}
          <motion.h2
            style={{ opacity: titleOpacity }}
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="
              text-7xl md:text-9xl font-bold text-center
              mb-16
              "
          >
            GET IN TOUCH
          </motion.h2>


          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">

            {/* Left Column: Description */}



            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-4 text-lg text-gray-300 leading-relaxed"
            >
              <p>
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>

              <p>
                Whether you're looking for a developer to bring your project to life, need help with
                web development, or just want to connect and chat about tech,
                feel free to reach out.
              </p>

              <p>
                You can reach me through any of my socials and drop me a message.
              </p>
            </motion.div>

            {/* Right Column: Contact Links as Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="pt-6"
            >
              <h4 className="text-2xl font-bold mb-4 text-white">CONTACT METHODS</h4>
              <div className="flex flex-wrap gap-3">
                {contactLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
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
                      cursor-pointer
                    "
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Footer / Credits Section */}
      <footer className="w-full bg-black relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-5">
          <Image
            src="/images/header_texture.png"
            alt="Footer texture"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          {/* Tech stack info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400"
          >

          </motion.div>
          {/* Name */}
          {/* ★ 1. 'justify-center' と 'items-end' を追加 */}
          <div className='flex justify-center items-end text-center gap-x-4'>

            <p className='text-9xl font-bold text-gray-300'>
              TOHRU
            </p>

            {/* ★ 2. 'my-4' (上下の余白) を追加 */}
            <div className='mb-2'> {/* 下揃えのための微調整 */}
              <p className="text-lg">
                THIS SITE HAS BEEN CREATED USING <span className="font-bold text-white">NEXT.JS</span> BY
              </p>
              {/* ★ 3. 'items-end' は親に移動したので削除 */}
              <p className='text-8xl font-bold text-gray-300'> DJUNAEDI </p>
            </div>

            <p className='text-9xl font-bold text-gray-300'>SATO</p>

          </div>
        </div>
      </footer>
    </>
  );
}
