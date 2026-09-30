import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Zone 1: Brand Wordmark (Single text element) */}
          <a href="#" className="flex flex-col group">
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 group-hover:text-purple-700 transition-colors">
              {BUSINESS_INFO.name}
            </span>
            <span className="text-xs font-semibold text-purple-700 tracking-wider uppercase">
              {BUSINESS_INFO.tagline}
            </span>
          </a>

          {/* Zone 2: Navigation Links (Clean text links with hover styling) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#services" className="hover:text-purple-700 transition-colors">
              Services
            </a>
            <a href="#emergency" className="hover:text-purple-700 transition-colors flex items-center gap-1.5 text-purple-900 font-semibold">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              Emergency Repair
            </a>
            <a href="#about" className="hover:text-purple-700 transition-colors">
              About
            </a>
            <a href="#service-area" className="hover:text-purple-700 transition-colors">
              Service Area
            </a>
            <a href="#faq" className="hover:text-purple-700 transition-colors">
              FAQ
            </a>
            <a href="#contact" className="hover:text-purple-700 transition-colors">
              Contact
            </a>
          </nav>

          {/* Zone 3: Primary Actions (WhatsApp & Call) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:+${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-purple-700" />
              <span>{BUSINESS_INFO.phoneFormatted}</span>
            </a>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(BUSINESS_INFO.whatsappDefaultMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-purple-700 hover:bg-purple-800 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Message on WhatsApp</span>
              <ArrowUpRight className="w-3 h-3 opacity-80" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={`tel:+${BUSINESS_INFO.phoneRaw}`}
              aria-label="Call Kieran Mellor"
              className="p-2 text-purple-700 bg-purple-50 rounded-lg"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-purple-700 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <div className="space-y-1">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-800 hover:bg-purple-50 hover:text-purple-800 rounded-lg"
            >
              Services
            </a>
            <a
              href="#emergency"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-purple-700 hover:bg-purple-50 rounded-lg"
            >
              Emergency Repair
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-800 hover:bg-purple-50 hover:text-purple-800 rounded-lg"
            >
              About Kieran Mellor
            </a>
            <a
              href="#service-area"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-800 hover:bg-purple-50 hover:text-purple-800 rounded-lg"
            >
              Preston Service Area
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-800 hover:bg-purple-50 hover:text-purple-800 rounded-lg"
            >
              FAQ
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-800 hover:bg-purple-50 hover:text-purple-800 rounded-lg"
            >
              Contact
            </a>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(BUSINESS_INFO.whatsappDefaultMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-purple-700 rounded-lg shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Message on WhatsApp</span>
            </a>
            <a
              href={`tel:+${BUSINESS_INFO.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-slate-800 bg-slate-100 rounded-lg"
            >
              <Phone className="w-4 h-4 text-purple-700" />
              <span>Call {BUSINESS_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
