import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { PropertyGrid } from "@/components/PropertyGrid";
import { EmptyLegSection } from "@/components/EmptyLegSection";
import { CommunityBanner } from "@/components/CommunityBanner";
import { InteractiveSection } from "@/components/InteractiveSection";
import { AmenitiesBento } from "@/components/AmenitiesBento";
import { BookingSection } from "@/components/BookingSection";
import { ServicesSection } from "@/components/ServicesSection";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white" style={{ backgroundColor: '#ffffff' }}>
      {/* Pinned Hero Section */}
      <Hero />

      {/* Overlapping Content Container — curtains over the hero */}
      <div 
        className="relative z-10 w-full text-zinc-900 rounded-t-[2.5rem] md:rounded-t-[3.5rem] shadow-[0_-30px_70px_-15px_rgba(0,0,0,0.6)] overflow-clip bg-white"
        style={{ backgroundColor: '#ffffff', isolation: 'isolate' }}
      >
        <BookingSection />
        <About />
        <InteractiveSection />
        <PropertyGrid />
        <EmptyLegSection />
        <CommunityBanner />
        <AmenitiesBento />
        <ServicesSection />
        <Testimonials />
      </div>
    </main>
  );
}
