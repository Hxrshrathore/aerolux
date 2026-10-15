import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, FileText, Plane, Phone, Mail, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Condition | Flyyo Luxury Aviation",
  description: "Terms and conditions, passenger guidelines, luggage limits, and cancellation policies for Flyyo private charters and airplane joyrides.",
};

export default function TermsAndConditionPage() {
  return (
    <main className="pt-32 pb-24 bg-white text-zinc-900">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-black mb-8 transition-colors"
        >
          <ArrowLeft size={14} /> Back to Home
        </Link>

        {/* Title */}
        <div className="space-y-4 pb-8 border-b border-zinc-200">
          <div className="text-[10px] uppercase font-bold tracking-[0.3em] text-zinc-500 flex items-center gap-2">
            <FileText size={14} className="text-black" /> Legal & Operations
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900">
            Terms and Condition.
          </h1>
          <p className="text-zinc-600 text-sm font-medium">
            Effective Date: January 1, 2024 • Last Updated: 2024 • Flyyo Aviation
          </p>
        </div>

        {/* Body Text */}
        <div className="prose prose-zinc max-w-none pt-10 space-y-10 text-sm leading-relaxed text-zinc-700">
          
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900">1. Acceptance of Terms</h2>
            <p>
              By accessing the Flyyo website (flyyo.co.in), submitting a charter query, or booking a private plane joyride, private jet flight, pilgrimage charter, or medical evacuation, you agree to comply with and be bound by these Terms and Conditions and all applicable regulations enforced by the Directorate General of Civil Aviation (DGCA) and the Ministry of Civil Aviation, Government of India.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900">2. Charter Quotations & Booking Confirmation</h2>
            <p>
              All charter flights, joyrides, and aviation packages are subject to aircraft availability, crew duty time limitations (FDTL), and slot clearances from airport authorities and the DGCA. A charter flight or joyride slot is deemed confirmed only upon receipt of the agreed deposit or full charter fee and subsequent issuance of an official Flyyo Flight Itinerary Confirmation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900">3. Passenger Documentation & Security</h2>
            <p>
              In accordance with Bureau of Civil Aviation Security (BCAS) and DGCA requirements:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>All domestic passengers must present valid government-issued original photo identification (Aadhaar Card, Passport, Voter ID, or Driver&apos;s License) at the airport / private terminal (FBO).</li>
              <li>For international charter flights, a passport valid for at least 6 months and valid visas for all destination and transit countries are mandatory.</li>
              <li>Passenger manifests with full legal names, ages, and weights must be submitted at least 24 hours prior to departure for aircraft weight and balance calculations.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900">4. Baggage & Hazardous Materials</h2>
            <p>
              Luggage limits are strictly determined by the specific aircraft configuration, passenger load, and runway lengths. Dangerous goods, firearms, flammable substances, and prohibited materials under civil aviation security protocols are strictly forbidden onboard.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900">5. Weather, Air Traffic & Force Majeure</h2>
            <p>
              Passenger safety is Flyyo&apos;s non-negotiable priority. Flight departures, routings, or helicopter transfers may be altered, delayed, or rescheduled due to adverse weather conditions, NOTAMs, VIP movement, or air traffic control directives. In such events, Flyyo will endeavor to reschedule the flight or provide alternative travel options. Flyyo cannot be held liable for consequential damages arising from unforeseen force majeure circumstances.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900">6. Cancellation & Rescheduling Policy</h2>
            <p>
              Cancellations received more than 72 hours prior to scheduled departure may be eligible for a refund minus administrative and handling fees. Cancellations within 24 to 48 hours of departure are subject to standard cancellation charges as outlined in the charter agreement. For joyrides, date modifications can be accommodated subject to slot availability.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-zinc-900">7. Governing Law & Contact Information</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of the Republic of India. Any legal proceedings shall be subject to the exclusive jurisdiction of the courts of Mumbai, Maharashtra.
            </p>
            <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 mt-4 space-y-2 text-xs">
              <p><strong>Flyyo Aviation</strong></p>
              <p>Juhu Airport, Juhu Tara Road, Airport Area, Juhu, Mumbai, Maharashtra, India</p>
              <p>Email: <a href="mailto:flyyo.in@gmail.com" className="underline">flyyo.in@gmail.com</a> | Phone: +91 95118 26428</p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
