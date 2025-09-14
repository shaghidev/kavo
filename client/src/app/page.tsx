'use client';

import Hero from '@/components/Hero/Hero';
import StatementSection from '@/components/StatementSection';
import ScrollCards from '@/components/ScrollCards';
import KavoStudioSection from '@/components/KavoStudioSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';

import ScrollToHash from '@/components/ScrollToHash';


export default function HomePage() {
  return (
    <main className="bg-[#080D10] text-white scroll-smooth">  
      <ScrollToHash />
      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <StatementSection />
      </section>

      <section id="scrollcards">
        <ScrollCards />
      </section>

      <section id="studio">
        <KavoStudioSection />
      </section>

      <section id="services">
        <ServicesSection />
      </section>

      <section id="portfolio">
        <ProjectsSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

      {/* Footer na dnu */}
    </main>
  );
}
