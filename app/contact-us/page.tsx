import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, ArrowRight, ShieldCheck, Plane } from "lucide-react";
import { BookingSection } from "@/components/BookingSection";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export const metadata: Metadata = {
  title: "Contact Us | AeroLux Luxury Aviation Prototype",
  description: "Get in touch with AeroLux at Juhu Airport, Mumbai. Call +91 98765 43210 or message on WhatsApp for 24/7 private jet charters and joyride inquiries.",
};

export default function ContactUsPage() {
  return (
    <main className="pt-28 pb-20 bg-white">
      {/* Header */}
      <section className="px-6 max-w-7xl mx-auto mb-16">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-zinc-900 leading-tight">
            Better See you Onboard.
          </h1>
          <p className="text-zinc-600 max-w-xl text-base sm:text-lg font-medium">
            We love our customers, so feel free to visit during normal business hours or connect with our Juhu Airport flight coordinators anytime.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {/* Card 1: WhatsApp */}
          <div className="bg-zinc-50 rounded-3xl p-8 border border-zinc-200 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center">
                <WhatsAppIcon size={26} className="shrink-0" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900">WhatsApp Flight Desk</h3>
              <p className="text-xs text-zinc-600 font-medium leading-relaxed">
                Fastest way to get empty leg offers, joyride slots, and instant private jet route quotations.
              </p>
            </div>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1ea750] hover:text-[#128C7E]"
            >
              Message on WhatsApp <ArrowRight size={14} />
            </a>
          </div>

          {/* Card 2: Phone & Email */}
          <div className="bg-zinc-50 rounded-3xl p-8 border border-zinc-200 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-zinc-900 text-white flex items-center justify-center">
                <Phone size={22} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900">Direct Calls & Email</h3>
              <p className="text-xs text-zinc-600 font-medium leading-relaxed">
                24/7 response for corporate inquiries, air ambulance requests, and operations management.
              </p>
            </div>
            <div className="space-y-1 text-xs font-bold text-zinc-900">
              <a href="tel:+919876543210" className="block hover:underline">+91 98765 43210</a>
              <a href="mailto:concierge@aerolux.design" className="block text-zinc-600 hover:text-black">concierge@aerolux.design</a>
            </div>
          </div>

          {/* Card 3: Address */}
          <div className="bg-zinc-50 rounded-3xl p-8 border border-zinc-200 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-zinc-900 text-white flex items-center justify-center">
                <MapPin size={22} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900">Juhu Airport Office</h3>
              <p className="text-xs text-zinc-600 font-medium leading-relaxed">
                Juhu Airport, Juhu Tara Road, Airport Area, Juhu, Mumbai, Maharashtra, India.
              </p>
            </div>
            <div className="text-xs text-zinc-500 font-bold uppercase tracking-wider">
              Normal Business Hours: Mon - Sat 9:00 AM - 7:00 PM IST
            </div>
          </div>
        </div>
      </section>

      {/* Query Form Section */}
      <BookingSection />
    </main>
  );
}
