'use client';

import Hero from '@/components/Hero/Hero';
import StatementSection from '@/components/StatementSection';
import ScrollCards from '@/components/ScrollCards';
import KavoStudioSection from '@/components/KavoStudioSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';


export default function HomePage() {
  return (
    <main className="bg-[#080D10] text-white">
      <Hero />

      {/* Love sekcija – bijela pozadina */}
      <StatementSection />

      <ScrollCards />

      <KavoStudioSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />

      {/* Footer na dnu */}
    </main>
  );
}
