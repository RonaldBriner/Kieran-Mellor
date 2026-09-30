import React from 'react';
import { Phone, MessageCircle, MapPin, Wrench, ShieldCheck, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import heroImage from '../assets/images/kieran_mellor_hero_1790753103421.jpg';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white">
      {/* Background Image with Scrim Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern residential garage door installed in Preston by Kieran Mellor"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:transition-transform duration-1000"
          referrerPolicy="no-referrer"
          onError={(e) => {
            // Graceful fallback to styled industrial gradient if image fails
            e.currentTarget.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/85 to-purple-950/60" />
        <div className="absolute inset-0 bg-radial-at-t from-transparent via-slate-950/50 to-slate-950/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="max-w-3xl">
          {/* Trust Kicker - Unboxed text per constitution */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-purple-300 mb-4">
            <span className="flex items-center gap-1.5 text-white">
              <MapPin className="w-4 h-4 text-purple-400" />
              54 Boulevard, Preston, PR1 4PH
            </span>
            <span aria-hidden="true" className="text-purple-400/60">·</span>
            <span className="text-purple-200">Independent Local Specialist</span>
            <span aria-hidden="true" className="text-purple-400/60">·</span>
            <span className="text-purple-200">Lancashire Coverage</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
            Garage Doors <span className="text-purple-400">Done Right</span> in Preston.
          </h1>

          {/* Supporting Copy */}
          <p className="text-lg sm:text-xl text-slate-200 leading-relaxed mb-8 max-w-2xl">
            Whether your garage door is jammed off track, has a snapped spring or cable, or you need a brand-new automated door fitted, deal directly with <strong className="text-white font-semibold">{BUSINESS_INFO.name}</strong>. Professional repairs, honest upfront pricing, and prompt local response.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
            {/* Primary CTA: WhatsApp */}
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(BUSINESS_INFO.whatsappDefaultMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-base font-bold text-white bg-purple-600 hover:bg-purple-700 active:scale-[0.99] shadow-lg shadow-purple-900/40 transition-all text-center"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Message on WhatsApp</span>
            </a>

            {/* Secondary CTA: Call */}
            <a
              href={`tel:+${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-base font-bold text-slate-900 bg-white hover:bg-slate-100 active:scale-[0.99] transition-all text-center shadow-md"
            >
              <Phone className="w-5 h-5 text-purple-700" />
              <span>Call {BUSINESS_INFO.phoneFormatted}</span>
            </a>
          </div>

          {/* Key Value Checklist */}
          <div className="pt-6 border-t border-slate-700/60 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-2.5">
              <Wrench className="w-4 h-4 text-purple-400 shrink-0" />
              <span>All Door Types & Motors</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-purple-400 shrink-0" />
              <span>Emergency Stuck Door Assistance</span>
            </div>
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0" />
              <span>Direct Tradesman Workmanship</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
