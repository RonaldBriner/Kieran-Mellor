import React from 'react';
import { ShieldCheck, AlertCircle, Wrench, CheckCircle2, Clock, MapPin } from 'lucide-react';
import { TRUST_POINTS, BUSINESS_INFO } from '../data/businessData';

export const TrustReassurance: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold text-purple-700 uppercase tracking-widest mb-2">
            Why Choose Kieran Mellor
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Straightforward Service, Safe Workmanship
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Garage doors are heavy moving structures with high-tension springs. Here is the standard of service you can expect on every single job in Preston.
          </p>
        </div>

        {/* 5 Core Trust Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {TRUST_POINTS.map((point, index) => (
            <div 
              key={index} 
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-purple-200 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-100/80 text-purple-800 flex items-center justify-center font-bold text-sm mb-4">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {point.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}

          {/* 6th Card: Local presence anchor */}
          <div className="p-6 rounded-2xl bg-purple-50/70 border border-purple-200/80 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-700 text-white flex items-center justify-center font-bold text-sm mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Preston Rooted & Accountable
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Located at 54 Boulevard, PR1 4PH. As a dedicated local tradesperson, ongoing reputation in Preston is everything.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-purple-200 text-xs font-semibold text-purple-800">
              PR1, PR2, PR3, PR4, PR5 Covered
            </div>
          </div>
        </div>

        {/* Credibility & Workmanship Commitment Box (Anti-Fake-Review replacement) */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl">
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-purple-400 uppercase mb-3">
              <ShieldCheck className="w-4 h-4" />
              <span>Service Standard Reassurance</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
              Our 4-Point Job Completion Protocol
            </h3>
            <p className="text-sm sm:text-base text-slate-300 mb-8 leading-relaxed">
              We never leave a job with loose ends. Every repair and installation adheres to four non-negotiable safety and quality steps:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white">Manual Balance Check</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    The door is tested by hand without the motor engaged to verify it lifts effortlessly and stays balanced midway without dropping.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white">Auto-Reverse Safety Test</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    For electric automated openers, the obstacle detection and auto-reverse safety sensors are fully tested with a physical block.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white">Heavy-Duty Hardware Installed</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Cables, springs, drums, and rollers fitted are high-spec, rust-resistant materials suited to frequent daily cycles.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white">Clean Site & Responsible Disposal</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    All broken springs, severed cables, or removed old doors are cleared away neatly, leaving your garage clean and ready to use.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
