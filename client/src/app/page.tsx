'use client';

import Hero from '@/components/Hero/Hero';
import StatementSection from '@/components/StatementSection';
import ScrollCards from '@/components/ScrollCards';
import KavoStudioSection from '@/components/KavoStudioSection'
import ServicesSection from '@/components/ServicesSection'
import ProjectsSection from '@/components/ProjectsSection';


export default function HomePage() {



  return (
    <main className="bg-[#080D10] text-white">
      <Hero />

      {/* Love sekcija – bijela pozadina */}
      <StatementSection />


      <ScrollCards />

      <KavoStudioSection></KavoStudioSection>
      <ServicesSection></ServicesSection>
      <ProjectsSection></ProjectsSection>
      <section className="w-full min-h-screen flex items-center justify-center bg-gray-900">
        <h2 className="text-3xl font-bold">O meni</h2>
      </section>

      <section className="w-full min-h-screen flex items-center justify-center bg-gray-800">
        <h2 className="text-3xl font-bold">Projekti</h2>
      </section>
    </main>
  );
}
