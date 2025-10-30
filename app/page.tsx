// app/page.tsx
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/Project/ProjectSection';
import Certification from '@/components/sections/CertificationSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <main>
      {/* ヒーローセクション（名前など） */}
      <HeroSection />

      {/* About Me セクション */}
      <AboutSection />

      {/* プロジェクトセクション */}
      <ProjectsSection />

      {/* 学歴セクション */}
      <Certification />

      {/* (あれば) 経験セクションなど... */}
      <ContactSection />

    </main>
  );
}