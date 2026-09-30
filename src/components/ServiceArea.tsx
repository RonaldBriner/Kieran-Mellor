import React from 'react';
import { MapPin, Navigation, Phone, MessageCircle, ExternalLink, Check } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const ServiceArea: React.FC = () => {
  return (
    <section id="service-area" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold text-purple-700 uppercase tracking-widest mb-2">
            Coverage & Location
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Serving Preston & Surrounding Lancashire
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Based centrally on <strong className="text-slate-900">54 Boulevard, Preston (PR1 4PH)</strong>, Kieran Mellor provides mobile garage door service directly to residential homes and light commercial premises across the area.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Address and Map Card */}
          <div className="lg:col-span-6 flex flex-col justify-between p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-50 text-purple-700 rounded-xl">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-purple-700 uppercase tracking-wider">
                    Operating Base
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">
                    {BUSINESS_INFO.addressLine1}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {BUSINESS_INFO.city}, {BUSINESS_INFO.country}, {BUSINESS_INFO.postcode}
                  </p>
                </div>
              </div>

              {/* Map Illustration / Visual Coordinates */}
              <div className="p-6 rounded-2xl bg-slate-900 text-white relative overflow-hidden mb-6">
                <div className="relative z-10">
                  <div className="flex items-center justify-between text-xs text-purple-300 font-mono mb-2">
                    <span>POSTCODE: PR1 4PH</span>
                    <span>LANCASHIRE, UK</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    54 Boulevard, Preston
                  </h4>
                  <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                    Centrally positioned close to the A59, Ribble crossing, and main Preston arterial routes for prompt travel times.
                  </p>

                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3 opacity-70" />
                  </a>
                </div>

                {/* Subtle graphic accent */}
                <div className="absolute right-0 bottom-0 translate-x-4 translate-y-4 opacity-10 pointer-events-none">
                  <MapPin className="w-44 h-44 text-purple-400" />
                </div>
              </div>
            </div>

            {/* Direct Contact reminder */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <span>Need same-day emergency attendance?</span>
              <a
                href={`tel:+${BUSINESS_INFO.phoneRaw}`}
                className="font-bold text-purple-700 hover:underline flex items-center gap-1"
              >
                <Phone className="w-3 h-3" />
                <span>Call {BUSINESS_INFO.phoneFormatted}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Local Service Coverage List */}
          <div className="lg:col-span-6 p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Key Local Coverage Areas
              </h3>
              <p className="text-sm text-slate-600 mb-6">
                Direct mobile callouts available across all key districts in Preston and nearby Lancashire neighbourhoods:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {BUSINESS_INFO.serviceAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-sm text-slate-800"
                  >
                    <Check className="w-4 h-4 text-purple-700 shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 p-4 rounded-xl bg-purple-50/80 border border-purple-100 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-purple-900">Are you just outside this list?</p>
                <p className="text-xs text-purple-700">Check availability with Kieran directly.</p>
              </div>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent("Hi Kieran, do you cover my postcode area in Lancashire?")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-white bg-purple-700 hover:bg-purple-800 px-3.5 py-2 rounded-lg transition-colors whitespace-nowrap"
              >
                Ask on WhatsApp
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
