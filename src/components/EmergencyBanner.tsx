import React from 'react';
import { AlertCircle, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const EmergencyBanner: React.FC = () => {
  return (
    <section id="emergency" className="bg-purple-950 border-y border-purple-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-purple-900 text-purple-300 rounded-xl shrink-0 border border-purple-700/50">
              <AlertCircle className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold tracking-wider text-amber-400 uppercase">Emergency Service</span>
                <span className="text-xs text-purple-300">· Preston & Surrounding Areas</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-white">
                Door Stuck Open, Broken Spring, or Off Its Track?
              </h2>
              <p className="text-sm text-purple-200 mt-0.5">
                Don't force it or risk injury. Kieran Mellor provides urgent troubleshooting to make your property secure.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto shrink-0">
            <a
              href={`tel:+${BUSINESS_INFO.phoneRaw}`}
              className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call Direct: {BUSINESS_INFO.phoneFormatted}</span>
            </a>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent("EMERGENCY: Hi Kieran, my garage door is stuck/broken and I need urgent assistance in Preston.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-purple-800 hover:bg-purple-700 text-white font-semibold text-sm border border-purple-600 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Emergency</span>
              <ArrowRight className="w-3.5 h-3.5 text-purple-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
