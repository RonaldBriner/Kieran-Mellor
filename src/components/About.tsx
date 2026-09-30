import React from 'react';
import { Check, MapPin, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import repairDetailImg from '../assets/images/garage_door_repair_1790753118718.jpg';
import rollerDoorImg from '../assets/images/roller_garage_door_1790753134504.jpg';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Showcase: Dual Photography Layout */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-900 group">
              <img
                src={repairDetailImg}
                alt="Garage door mechanical torsion spring and cable repair"
                className="w-full h-72 sm:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-slate-950/80 to-transparent text-white">
                <p className="text-xs font-semibold text-purple-300">Precision Spring & Hardware Tuning</p>
                <p className="text-sm font-medium text-slate-200">Correct balance ensures your motor and springs operate without strain.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative rounded-xl overflow-hidden shadow-md border border-slate-200/80 bg-slate-900 group">
                <img
                  src={rollerDoorImg}
                  alt="Modern electric roller garage door in Preston"
                  className="w-full h-44 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-3">
                  <span className="text-xs font-semibold text-white">Electric Roller Conversions</span>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-purple-900 text-white flex flex-col justify-between border border-purple-800">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-purple-300 uppercase tracking-wider mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    Preston PR1
                  </div>
                  <h4 className="text-base font-bold text-white">
                    Centrally Located at 54 Boulevard
                  </h4>
                  <p className="text-xs text-purple-200 mt-1 leading-relaxed">
                    Easy access to all Preston postcodes and surrounding Lancashire towns.
                  </p>
                </div>
                <div className="pt-3 border-t border-purple-700/60 mt-3 flex items-center justify-between text-xs text-purple-200 font-medium">
                  <span>Fast local callout</span>
                  <span className="text-white font-bold">PR1 4PH</span>
                </div>
              </div>
            </div>
          </div>

          {/* Copy Column */}
          <div className="lg:col-span-6">
            <p className="text-xs font-bold text-purple-700 uppercase tracking-widest mb-2">
              About Kieran Mellor
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              A Direct, Reliable Garage Door Specialist You Can Count On
            </h2>

            <div className="mt-6 space-y-4 text-slate-600 text-base leading-relaxed">
              <p>
                When your garage door breaks down or refuses to close, you don’t want to deal with a distant call centre or pay exorbitant middleman markups. Operating directly from <strong className="text-slate-900 font-semibold">54 Boulevard in Preston</strong>, <strong className="text-slate-900 font-semibold">Kieran Mellor</strong> provides hands-on expertise for all garage door faults, repairs, and installations.
              </p>
              <p>
                Every garage door system relies on finely balanced mechanical counterweights, high-tension springs, and steel cables. A worn roller or slipped cable can quickly lead to binding, motor burnout, or a dangerous off-track door. Kieran approaches every repair with safety, correct balancing, and durable replacement components at the forefront.
              </p>
            </div>

            {/* Why dealing directly matters */}
            <div className="mt-8 space-y-3">
              <div className="flex items-start gap-3">
                <div className="mt-1 p-1 bg-purple-100 text-purple-800 rounded-md shrink-0">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Direct Contact With The Tradesman</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Speak directly to Kieran on the phone or WhatsApp. You get clear technical advice immediately without phone menus or salespeople.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 p-1 bg-purple-100 text-purple-800 rounded-md shrink-0">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Practical, Cost-Effective Repairs First</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    If your door can be safely and reliably repaired with new springs, cables, or rollers, that will always be the primary recommendation over an unnecessary full replacement.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 p-1 bg-purple-100 text-purple-800 rounded-md shrink-0">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Upfront Agreement Before Work Begins</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    You receive an honest diagnosis and price estimate before a single bolt is turned.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center gap-4">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(BUSINESS_INFO.whatsappDefaultMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold text-white bg-purple-700 hover:bg-purple-800 transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Message Kieran Directly</span>
              </a>
              <a
                href={`tel:+${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-200 hover:border-slate-300 transition-colors"
              >
                <Phone className="w-4 h-4 text-purple-700" />
                <span>Call {BUSINESS_INFO.phoneFormatted}</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
