"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MapPin, Phone, Mail, MessageCircle, ArrowRight, CheckCircle2, Plane } from "lucide-react";
import { siteConfig } from "@/lib/config";

export function Footer() {
  const pathname = usePathname();
  const [subscribedEmail, setSubscribedEmail] = React.useState("");
  const [subscribeStatus, setSubscribeStatus] = React.useState<"idle" | "success">("idle");

  if (pathname === "/login" || pathname === "/dashboard") return null;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subscribedEmail) return;
    setSubscribeStatus("success");
    setTimeout(() => {
      setSubscribedEmail("");
      setSubscribeStatus("idle");
    }, 4000);
  };

  return (
    <footer className="bg-black text-white pt-20 pb-12 px-6 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Banner: Book Your Luxury Ride Now / Better See you Onboard */}
        <div className="bg-zinc-900/80 border border-zinc-800 rounded-[32px] p-8 md:p-12 mb-16 md:mb-20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-3">
            <span className="text-[10px] uppercase font-black tracking-[0.3em] text-emerald-400 flex items-center gap-2">
              <Plane size={14} /> Book Your Luxury Ride Now
            </span>
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Better See you Onboard
            </h3>
            <p className="text-zinc-400 text-sm max-w-xl font-medium">
              We love our customers, so feel free to visit during normal business hours or message our flight desk anytime.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto">
            <a
              href="https://wa.me/919511826428"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebd5a] text-black font-black text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all shadow-lg hover:scale-105"
            >
              <MessageCircle size={18} className="fill-black" />
              Message us on WhatsApp
            </a>

            <Link
              href="/book-flight"
              className="inline-flex items-center justify-center gap-2 bg-white text-black font-black text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-zinc-200 transition-all"
            >
              Book Flight Now
            </Link>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          
          {/* Brand Info & Contact */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <Link href="/" className="text-4xl font-black tracking-tighter uppercase text-white inline-block">
                FLYYO
              </Link>
              <div className="text-xs uppercase font-bold tracking-[0.25em] text-zinc-400">
                Redefining Luxury For You
              </div>
              <p className="text-zinc-400 text-sm font-medium leading-relaxed max-w-sm">
                30+ Aircrafts to Give you the Joy of Flying. Bespoke private jet charters, airplane joyrides, and airborne corporate management.
              </p>
            </div>

            <div className="space-y-3 pt-2 text-sm text-zinc-300 font-medium">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 text-zinc-400 mt-0.5" />
                <span className="leading-snug">
                  Juhu Airport, Juhu Tara Road, Airport Area, Juhu, Mumbai, Maharashtra, India
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-zinc-400" />
                <a href="tel:+919511826428" className="hover:text-white transition-colors">
                  +91 95118 26428
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-zinc-400" />
                <a href="mailto:flyyo.in@gmail.com" className="hover:text-white transition-colors">
                  flyyo.in@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links (Exact items from prompt) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-widest text-white">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm font-semibold text-zinc-400">
              <li>
                <Link href="/book-flight" className="hover:text-white transition-colors">
                  Book Flight
                </Link>
              </li>
              <li>
                <Link href="/airplane-joyride" className="hover:text-white transition-colors">
                  Airplane Joyride
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about-flyyo" className="hover:text-white transition-colors">
                  About Flyyo
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditon" className="hover:text-white transition-colors">
                  Terms and Conditon
                </Link>
              </li>
              <li>
                <Link href="/ek-dham-yatra" className="hover:text-white transition-colors text-amber-400/90 hover:text-amber-300">
                  Ek Dham Yatra
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscribe Section (from prompt) */}
          <div className="lg:col-span-4 space-y-4 bg-zinc-950 p-6 md:p-8 rounded-3xl border border-zinc-800">
            <h4 className="text-lg font-bold text-white">Subscribe</h4>
            <p className="text-zinc-400 text-xs sm:text-sm font-medium">
              Sign up to hear from us about specials, sales, and events.
            </p>

            {subscribeStatus === "success" ? (
              <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 flex items-center gap-3 text-xs font-semibold">
                <CheckCircle2 size={18} className="shrink-0 text-emerald-400" />
                Thank you for subscribing to Flyyo specials & flight deals!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={subscribedEmail}
                  onChange={(e) => setSubscribedEmail(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-white transition-colors"
                />
                <button
                  type="submit"
                  className="w-full bg-white hover:bg-zinc-200 text-black py-3.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  Sign up <ArrowRight size={14} />
                </button>
              </form>
            )}

            <div className="pt-2">
              <a
                href="https://chat.whatsapp.com/IVHW93LqNxqLW3ZlbVOWdz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1.5"
              >
                <MessageCircle size={13} /> Or join Flyyo Community on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Exact Copyright */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500 text-center md:text-left">
          <p>Copyright © 2024 Flyyo - All Rights Reserved.</p>
          <div className="flex items-center gap-6 text-[11px] uppercase tracking-wider font-semibold">
            <Link href="/terms-and-conditon" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/about-flyyo" className="hover:text-white transition-colors">
              About Flyyo
            </Link>
            <Link href="/contact-us" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
