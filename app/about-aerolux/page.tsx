import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TrustBar } from "@/components/TrustBar";
import { AmenitiesBento } from "@/components/AmenitiesBento";
import { ServicesSection } from "@/components/ServicesSection";
import { CommunityBanner } from "@/components/CommunityBanner";
import { Plane, MapPin, Phone, Mail, ShieldCheck, Users, Award, Sparkles, User, AlertTriangle } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export const metadata: Metadata = {
  title: "About AeroLux | Luxury Aviation Concept Prototype",
  description: "Learn about AeroLux, a conceptual private aviation design prototype created by hxrshrathore, featuring 30+ aircrafts, bespoke charters, joyrides, and airborne solutions.",
};

export default function AboutAeroLuxPage() {
  return (
    <main className="pt-28 pb-20 bg-white">
      {/* Hero Header */}
      <section className="px-6 max-w-7xl mx-auto mb-16">
        <div className="relative rounded-[36px] overflow-hidden bg-zinc-950 text-white p-8 sm:p-14 md:p-20 border border-zinc-800">
          <div className="absolute inset-0 opacity-40">
            <Image
              src="/assets/images/fleet-hangar.jpg"
              alt="AeroLux Private Aviation Hangar"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/50" />
          </div>

          <div className="relative z-10 max-w-3xl space-y-6">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[0.95] uppercase">
              AeroLux Redefining <br />
              Luxury For You.
            </h1>

            <p className="text-zinc-300 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              30+ Aircrafts to give you the joy of flying. AeroLux is a conceptual private aviation UI/UX showcase, connecting corporate leaders, leisure seekers, and families through safety-first flight charters and scenic airplane joyrides.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/book-flight"
                className="bg-white text-black font-black text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-zinc-200 transition-all shadow-xl hover:scale-105"
              >
                Explore Flight Booking
              </Link>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#25D366] text-black font-black text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-[#1ebd5a] transition-all"
              >
                <WhatsAppIcon size={17} className="shrink-0" /> Message on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Metrics */}
      <TrustBar />

      {/* Story & Philosophy */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
              Pioneering private flight interface design with transparency & elegance.
            </h2>
            <p className="text-zinc-600 text-base leading-relaxed font-medium">
              Conceptually set at the historic Juhu Airport in Mumbai, AeroLux was designed by <strong>hxrshrathore</strong> to bridge the gap between inaccessible ultra-luxury aviation and practical, fast air mobility. We model a versatile fleet of 30+ aircrafts spanning single-engine tourers, turboprops, light jets, and super-midsize intercontinental jets.
            </p>
            <p className="text-zinc-600 text-base leading-relaxed font-medium">
              We believe luxury should be accessible and digitally transparent. That&apos;s why AeroLux showcases competitive pricing, clear flight parameters, and exclusive deals—ensuring exceptional value without compromising on quality or safety standards.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-6 text-sm text-zinc-800 font-bold">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-emerald-600" /> 100% DGCA Standards
              </div>
              <div className="flex items-center gap-2">
                <Users size={18} className="text-blue-600" /> 5,000+ Conceptual Flyers
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-[36px] overflow-hidden shadow-2xl border border-zinc-200">
            <Image
              src="/assets/images/cabin-interior.jpg"
              alt="AeroLux Luxury Interior"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why AeroLux Section */}
      <AmenitiesBento />

      {/* Airborne Solutions */}
      <ServicesSection />

      {/* Community Banner */}
      <CommunityBanner />

      {/* Prototype Notice & Contact Info */}
      <section className="py-16 px-6 max-w-7xl mx-auto border-t border-zinc-200">
        <div className="bg-zinc-50 rounded-[32px] p-8 sm:p-12 border border-zinc-200 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div className="space-y-3">
            <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900">Better See you Onboard</h3>
            <p className="text-zinc-600 text-sm font-medium">
              This is an independent design portfolio prototype. Feel free to explore our features and reach out for design inquiries.
            </p>
            <div className="space-y-1 text-xs text-zinc-600 font-medium pt-2">
              <p><strong>HQ Simulation:</strong> Juhu Airport, Juhu Tara Road, Airport Area, Juhu, Mumbai, Maharashtra, India</p>
              <p><strong>Inquiries:</strong> concierge@aerolux.design | <strong>Designer:</strong> hxrshrathore</p>
            </div>
          </div>

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebd5a] text-black font-black text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all shadow-md shrink-0"
          >
            <WhatsAppIcon size={18} className="shrink-0" /> Message on WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}

