import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Plane, MapPin, Clock, ShieldCheck, Heart, Award, ArrowRight, Calendar } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { BookingSection } from "@/components/BookingSection";
import { CommunityBanner } from "@/components/CommunityBanner";

export const metadata: Metadata = {
  title: "Airplane Joyride Mumbai | Book a Private Plane Joyride",
  description: "Elevate your sense of adventure with exhilarating airplane joyrides over Mumbai with AeroLux. Panoramic views, anniversary specials & sunset flights from Juhu Airport.",
};

const joyridePackages = [
  {
    name: "Mumbai Skyline Flight",
    duration: "30 Minutes",
    price: "From ₹9,999 / seat",
    pax: "2 - 6 Passengers",
    description: "Soar above Marine Drive, the Bandra-Worli Sea Link, and Mumbai's iconic skyline with panoramic glass windows and pilot commentary.",
    highlights: ["Bandra-Worli Sea Link", "Marine Drive & Queen's Necklace", "Juhu Beach Coastline", "Pilot Audio Commentary"]
  },
  {
    name: "Coastal Sunset Joyride",
    duration: "45 Minutes",
    price: "From ₹14,999 / seat",
    pax: "2 - 4 Passengers",
    description: "Experience the magic of the golden hour as the sun dips below the Arabian Sea horizon. The ultimate romantic getaway.",
    highlights: ["Golden Hour Lighting", "Coastal Arabian Sea Views", "Complimentary In-Flight Photos", "VIP Departure Lounge"]
  },
  {
    name: "Celebration Special (Anniversaries & Proposals)",
    duration: "60 Minutes (Private Plane)",
    price: "From ₹34,999 (Entire Aircraft)",
    pax: "Private Couple / Up to 4 Pax",
    description: "Make milestone moments unforgettable. Includes celebratory cake, flowers, high-altitude champagne service, and personalized banner.",
    highlights: ["Exclusive Private Plane", "Gourmet Cake & Flowers", "Personalized Flight Certificate", "Red Carpet Boarding"]
  }
];

export default function AirplaneJoyridePage() {
  return (
    <main className="pt-28 pb-20 bg-white">
      {/* Hero Header */}
      <section className="px-6 max-w-7xl mx-auto mb-16">
        <div className="relative rounded-[36px] overflow-hidden bg-zinc-950 text-white p-8 sm:p-14 md:p-20 border border-zinc-800">
          <div className="absolute inset-0 opacity-45">
            <Image
              src="/assets/images/joyride-scenic.jpg"
              alt="Airplane Joyride over Mumbai"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
          </div>

          <div className="relative z-10 max-w-3xl space-y-6">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[0.95] uppercase">
              Airplane Joyrides <br />
              Above The Clouds.
            </h1>

            <p className="text-zinc-300 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              Elevate your sense of adventure with our exhilarating joyrides that offer breathtaking views from above. Whether you&apos;re celebrating a special occasion or simply craving an unforgettable experience, our joyrides promise moments of pure delight and wonder.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#packages"
                className="bg-white text-black font-black text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-zinc-200 transition-all shadow-xl hover:scale-105"
              >
                View Joyride Packages
              </a>

              <a
                href="https://wa.me/919876543210?text=Hi%20AeroLux%2C%20I%20want%20to%20book%20an%20Airplane%20Joyride%20at%20Juhu%20Airport."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#25D366] text-black font-black text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-[#1ebd5a] transition-all"
              >
                <WhatsAppIcon size={17} className="shrink-0" /> Book on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Joyride Highlights Banner */}
      <section className="px-6 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-200 text-center space-y-2">
            <MapPin className="mx-auto text-zinc-800" size={24} />
            <div className="text-sm font-bold text-zinc-900">Juhu Airport Takeoff</div>
            <div className="text-xs text-zinc-500 font-medium">Historic Mumbai Aviation Base</div>
          </div>

          <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-200 text-center space-y-2">
            <ShieldCheck className="mx-auto text-emerald-600" size={24} />
            <div className="text-sm font-bold text-zinc-900">100% DGCA Inspected</div>
            <div className="text-xs text-zinc-500 font-medium">Senior Commercial Pilots</div>
          </div>

          <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-200 text-center space-y-2">
            <Heart className="mx-auto text-red-500" size={24} />
            <div className="text-sm font-bold text-zinc-900">Celebration Friendly</div>
            <div className="text-xs text-zinc-500 font-medium">Cakes, Flowers & Banners</div>
          </div>

          <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-200 text-center space-y-2">
            <Award className="mx-auto text-amber-500" size={24} />
            <div className="text-sm font-bold text-zinc-900">Flight Certificate</div>
            <div className="text-xs text-zinc-500 font-medium">Framed Souvenir for Guests</div>
          </div>
        </div>
      </section>

      {/* Joyride Packages */}
      <section id="packages" className="px-6 max-w-7xl mx-auto mb-24">
        <div className="text-center mb-14 space-y-3">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900">
            Curated Joyride Experiences.
          </h2>
          <p className="text-zinc-600 max-w-xl mx-auto text-sm sm:text-base">
            Take off from Mumbai Juhu Airport for an unforgettable aerial adventure over the Arabian Sea and city landmarks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {joyridePackages.map((pkg, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-zinc-200 hover:border-black hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs text-zinc-500 font-bold uppercase tracking-wider">
                  <span className="flex items-center gap-1.5"><Clock size={13} /> {pkg.duration}</span>
                  <span>{pkg.pax}</span>
                </div>

                <h3 className="text-2xl font-bold text-zinc-900">{pkg.name}</h3>
                <div className="text-xl font-black text-black">{pkg.price}</div>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-medium">{pkg.description}</p>

                <div className="pt-4 border-t border-zinc-100 space-y-2">
                  <div className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">Flight Highlights</div>
                  {pkg.highlights.map((h, i) => (
                    <div key={i} className="text-xs text-zinc-700 font-semibold flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {h}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <a
                  href={`https://wa.me/919876543210?text=Hi%20AeroLux%2C%20I%20would%20like%20to%20book%20the%20${encodeURIComponent(pkg.name)}%20Joyride.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-black text-white py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  Book Joyride Now <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Community Deals Banner */}
      <CommunityBanner />

      {/* Booking Query Form */}
      <BookingSection />
    </main>
  );
}
