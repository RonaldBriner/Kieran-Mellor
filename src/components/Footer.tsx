import React from 'react';
import { Phone, MessageCircle, MapPin, ArrowUp, Navigation } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand info */}
          <div className="lg:col-span-1 space-y-3">
            <span className="text-xl font-extrabold text-white tracking-tight block">
              {BUSINESS_INFO.name}
            </span>
            <p className="text-xs font-semibold text-purple-400 uppercase tracking-wider">
              {BUSINESS_INFO.tagline}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Specialist garage door repairs, broken spring replacements, electric opener servicing, and new door installations across Preston and Lancashire.
            </p>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-purple-300 transition-colors">
                  All 12 Specialist Services
                </a>
              </li>
              <li>
                <a href="#emergency" className="hover:text-purple-300 transition-colors text-amber-400 font-semibold">
                  Emergency Stuck Door Service
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-purple-300 transition-colors">
                  About Kieran Mellor
                </a>
              </li>
              <li>
                <a href="#service-area" className="hover:text-purple-300 transition-colors">
                  Preston Service Area
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-purple-300 transition-colors">
                  FAQ & Troubleshooting
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-purple-300 transition-colors">
                  Get a Free Quote
                </a>
              </li>
            </ul>
          </div>

          {/* Operating Base & Location */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Local Operating Base
            </h4>
            <div className="text-xs space-y-2 text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.fullAddress}</span>
              </div>
              <p className="text-slate-500 pl-6">
                Serving PR1, PR2, PR3, PR4, PR5 & surrounding areas.
              </p>
              <div className="pl-6 pt-1">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 font-semibold"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>

          {/* Direct Action Contact */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3">
              <a
                href={`tel:+${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center gap-2 text-xs text-slate-200 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-purple-400" />
                <span>{BUSINESS_INFO.phoneFormatted}</span>
              </a>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(BUSINESS_INFO.whatsappDefaultMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-purple-900/80 hover:bg-purple-800 text-purple-200 text-xs font-semibold border border-purple-700/60 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. {BUSINESS_INFO.tagline}. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
