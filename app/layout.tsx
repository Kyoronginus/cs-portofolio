import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My CS Portfolio",
  description: "Computer Science Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-white bg-fixed-texture`}
      >
        {/* Fixed Navigation Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-black ">
          <nav className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="text-xl font-bold">Portfolio</div>
              <ul className="flex gap-8">
                <li>
                  <a href="#hero" className="text-white hover:text-gray-300 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-white hover:text-gray-300 transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#education" className="text-white hover:text-gray-300 transition-colors">
                    Education
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-white hover:text-gray-300 transition-colors">
                    Experience
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        {/* Main content with padding to account for fixed header */}
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
