// app/page.tsx
import HeroSection from '@/components/sections/HeroSection';
import ProjectsSection from '@/components/sections/ProjectSection';
import EducationSection from '@/components/sections/EducationSection';
import ExperienceSection from '@/components/sections/ExperienceSection';

export default function Home() {
  return (
    <main>
      {/* ヒーローセクション（名前など） */}
      <HeroSection />

      {/* プロジェクトセクション */}
      <ProjectsSection />

      {/* 学歴セクション */}
      <EducationSection />

      {/* (あれば) 経験セクションなど... */}
      <ExperienceSection />
      
    </main>
  );
}