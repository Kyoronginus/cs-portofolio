'use client';
import { Geist, Geist_Mono } from "next/font/google";
import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.2,
      smoothWheel: true,
      // smoothTouch: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-white bg-fixed-texture`}
      >
        {/* Fixed Navigation Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-black">
          <nav className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="text-xl font-bold">PORTFOLIO'25</div>
              <ul className="flex gap-8">
                <li>
                  <a href="#hero" className="text-white font-bold hover:text-gray-300 transition-colors">
                    HOME
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-white font-bold hover:text-gray-300 transition-colors">
                    ABOUT
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-white font-bold hover:text-gray-300 transition-colors">
                    PROJECTS
                  </a>
                </li>
                <li>
                  <a href="#certification" className="text-white font-bold hover:text-gray-300 transition-colors">
                    CERTIFICATION
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-white font-bold hover:text-gray-300 transition-colors">
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}

