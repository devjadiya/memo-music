import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import StudioSection from '@/components/sections/studio';
import TeamSection from '@/components/sections/team';
import PRSection from '@/components/sections/pr';
import ServicesSection from '@/components/sections/services';
import AiAnalyzerSection from '@/components/sections/ai-analyzer';
import ContactSection from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <StudioSection />
        <TeamSection />
        <PRSection />
        <ServicesSection />
        <AiAnalyzerSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
