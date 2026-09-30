import React, { useState } from 'react';
import { 
  Wrench, 
  Settings, 
  RefreshCw, 
  Cpu, 
  Sliders, 
  AlertTriangle, 
  Zap, 
  Layers, 
  Compass, 
  Disc, 
  ShieldCheck, 
  MessageCircle, 
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { SERVICES, BUSINESS_INFO, ServiceItem } from '../data/businessData';

// Map service IDs to appropriate functional icons
const getServiceIcon = (id: string) => {
  switch (id) {
    case 'installation':
      return <Layers className="w-5 h-5 text-purple-700" />;
    case 'repair':
      return <Wrench className="w-5 h-5 text-purple-700" />;
    case 'replacement':
      return <RefreshCw className="w-5 h-5 text-purple-700" />;
    case 'opener-repair':
      return <Settings className="w-5 h-5 text-purple-700" />;
    case 'opener-installation':
      return <Cpu className="w-5 h-5 text-purple-700" />;
    case 'broken-spring':
      return <Sliders className="w-5 h-5 text-purple-700" />;
    case 'cable-repair':
      return <Zap className="w-5 h-5 text-purple-700" />;
    case 'panel-replacement':
      return <Layers className="w-5 h-5 text-purple-700" />;
    case 'track-repair':
      return <Compass className="w-5 h-5 text-purple-700" />;
    case 'roller-replacement':
      return <Disc className="w-5 h-5 text-purple-700" />;
    case 'maintenance':
      return <ShieldCheck className="w-5 h-5 text-purple-700" />;
    case 'emergency-service':
      return <AlertTriangle className="w-5 h-5 text-amber-600" />;
    default:
      return <Wrench className="w-5 h-5 text-purple-700" />;
  }
};

export const Services: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'repairs' | 'installations' | 'openers' | 'maintenance'>('all');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const filteredServices = selectedCategory === 'all' 
    ? SERVICES 
    : SERVICES.filter(service => service.category === selectedCategory);

  return (
    <section id="services" className="py-20 sm:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold text-purple-700 uppercase tracking-widest mb-2">
            Specialist Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Complete Garage Door Services Across Preston
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            From emergency repairs on snapped cables and high-tension springs to the installation of electric automated doors, every job is handled with meticulous mechanical attention.
          </p>

          {/* Interactive Category Filter Tabs (Zero-pill discipline: Segmented control) */}
          <div className="mt-8 flex flex-wrap gap-2 p-1.5 bg-slate-100/90 rounded-xl border border-slate-200/80 inline-flex">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap ${
                selectedCategory === 'all'
                  ? 'bg-purple-700 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              All Services ({SERVICES.length})
            </button>
            <button
              onClick={() => setSelectedCategory('repairs')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap ${
                selectedCategory === 'repairs'
                  ? 'bg-purple-700 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              Repairs & Cables
            </button>
            <button
              onClick={() => setSelectedCategory('openers')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap ${
                selectedCategory === 'openers'
                  ? 'bg-purple-700 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              Openers & Motors
            </button>
            <button
              onClick={() => setSelectedCategory('installations')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap ${
                selectedCategory === 'installations'
                  ? 'bg-purple-700 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              Installations
            </button>
            <button
              onClick={() => setSelectedCategory('maintenance')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap ${
                selectedCategory === 'maintenance'
                  ? 'bg-purple-700 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              Maintenance
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between bg-slate-50 hover:bg-white p-7 rounded-2xl border border-slate-200/80 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-900/5 transition-all duration-200"
            >
              <div>
                {/* Header row with functional icon and index */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-purple-50 group-hover:bg-purple-100 text-purple-700 transition-colors">
                    {getServiceIcon(service.id)}
                  </div>
                  <span className="text-xs font-semibold text-slate-400 font-mono">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-purple-900 transition-colors">
                  {service.name}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {service.shortDesc}
                </p>

                <p className="text-xs text-slate-500 border-t border-slate-200/70 pt-3">
                  {service.details}
                </p>
              </div>

              {/* Direct Action Footer */}
              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(`Hi Kieran, I need a quote for ${service.name} in Preston.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-700 group-hover:text-purple-900 hover:underline"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Ask Kieran on WhatsApp</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </a>

                <button
                  type="button"
                  onClick={() => setActiveModalService(service)}
                  className="text-xs font-medium text-slate-500 hover:text-slate-800"
                >
                  Quick details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Contact Prompt Footer */}
        <div className="mt-14 p-6 sm:p-8 bg-slate-900 rounded-2xl text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-white mb-1">
              Not sure which service you need?
            </h4>
            <p className="text-sm text-slate-300 max-w-xl">
              Snap a quick photo of your door or broken hardware and send it over WhatsApp. Kieran will identify the issue and explain the repair options.
            </p>
          </div>
          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent("Hi Kieran, I'm not sure what is wrong with my garage door. Can I send a photo?")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 transition-colors shrink-0 shadow-md"
          >
            <MessageCircle className="w-4 h-4 text-purple-700" />
            <span>Send Photo on WhatsApp</span>
            <ChevronRight className="w-4 h-4 text-slate-500" />
          </a>
        </div>
      </div>

      {/* Simple Service Detail Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 border border-slate-200 shadow-2xl relative">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-purple-50 rounded-xl text-purple-700">
                  {getServiceIcon(activeModalService.id)}
                </div>
                <div>
                  <span className="text-xs font-semibold text-purple-700 uppercase tracking-wider">
                    {activeModalService.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">
                    {activeModalService.name}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setActiveModalService(null)}
                className="text-slate-400 hover:text-slate-700 p-1"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-slate-600 mb-4 leading-relaxed">
              {activeModalService.shortDesc}
            </p>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/70 mb-6">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                What this service includes:
              </h4>
              <p className="text-sm text-slate-700">
                {activeModalService.details}
              </p>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setActiveModalService(null)}
                className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900"
              >
                Close
              </button>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(`Hi Kieran, I would like to book or get a quote for ${activeModalService.name} at my property in Preston.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold text-white bg-purple-700 hover:bg-purple-800 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
