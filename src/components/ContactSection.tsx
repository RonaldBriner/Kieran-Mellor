import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Send, CheckCircle, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/businessData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    postcode: '',
    service: 'Garage Door Repair',
    urgency: 'Standard',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Please enter your name and contact phone number.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  const handleSendViaWhatsApp = () => {
    const text = `Hi Kieran, my name is ${formData.name || 'a customer'}. 
I live at postcode: ${formData.postcode || 'Preston'}. 
Service needed: ${formData.service}. 
Urgency: ${formData.urgency}. 
Details: ${formData.message || 'Please contact me regarding my garage door.'}`;
    
    const url = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-bold text-purple-700 uppercase tracking-widest mb-2">
            Get In Touch Directly
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contact Kieran Mellor for Quotes & Emergency Repairs
          </h2>
          <p className="mt-3 text-base text-slate-600">
            For fastest response, call directly or send a message on WhatsApp. You'll speak directly with Kieran, not a receptionist or call center.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Action Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp Card (Primary Action) */}
            <div className="p-6 rounded-2xl bg-purple-700 text-white shadow-lg shadow-purple-950/10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-200">
                  Fastest Communication
                </span>
                <span className="text-xs bg-purple-600 px-2 py-0.5 rounded text-white font-medium">
                  Photos Welcome
                </span>
              </div>
              <h3 className="text-xl font-extrabold mb-1">
                Message on WhatsApp
              </h3>
              <p className="text-sm text-purple-100 mb-6 leading-relaxed">
                Send photos of your broken spring, cable, or motor label for an immediate assessment.
              </p>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(BUSINESS_INFO.whatsappDefaultMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white text-purple-900 hover:bg-purple-50 font-bold text-sm transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-purple-700 text-white" />
                <span>Start WhatsApp Chat Now</span>
              </a>
            </div>

            {/* Direct Phone Call Card */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-purple-300 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Direct Phone Line
                </span>
                <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Direct Tradesman
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                {BUSINESS_INFO.phoneFormatted}
              </h3>
              <p className="text-xs text-slate-600 mb-4">
                International: {BUSINESS_INFO.phoneInternational}
              </p>
              <a
                href={`tel:+${BUSINESS_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-purple-400" />
                <span>Call Kieran Now</span>
              </a>
            </div>

            {/* Address & Service Base Card */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-purple-100 text-purple-800 rounded-lg shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Preston Base</h4>
                  <p className="text-sm text-slate-700 mt-0.5 font-medium">{BUSINESS_INFO.fullAddress}</p>
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-purple-700 hover:underline mt-2"
                  >
                    <span>View Location on Map</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Reassurance pill notes */}
            <div className="p-4 rounded-xl bg-slate-100/70 border border-slate-200/60 text-xs text-slate-600 space-y-1.5">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-purple-700" />
                <span>Transparent quotes with no obligation</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-purple-700" />
                <span>Same-day priority for secure closure issues</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Quote / Callback Form */}
          <div className="lg:col-span-7 bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Request a Callback or Quote
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              Fill in your details below and Kieran will review your request. You can also send the details straight to WhatsApp with one click.
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-white border border-emerald-200 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">Thank You, {formData.name}!</h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Your details regarding <strong className="text-slate-800">{formData.service}</strong> have been received. Kieran Mellor will be in touch shortly on <strong className="text-slate-800">{formData.phone}</strong>.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleSendViaWhatsApp}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-700 text-white font-bold text-sm hover:bg-purple-800 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Also Send to Kieran's WhatsApp</span>
                  </button>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        postcode: '',
                        service: 'Garage Door Repair',
                        urgency: 'Standard',
                        message: ''
                      });
                    }}
                    className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
                  >
                    Submit another request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold rounded-lg">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 07123 456789"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Postcode / Area
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. PR1, PR2, Fulwood"
                      value={formData.postcode}
                      onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Service Required
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-sm"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.name}>
                          {s.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Urgency Level
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Emergency (Today)', 'Within 48h', 'General Query'].map((lvl) => (
                      <button
                        type="button"
                        key={lvl}
                        onClick={() => setFormData({ ...formData, urgency: lvl })}
                        className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-colors ${
                          formData.urgency === lvl
                            ? 'bg-purple-700 text-white border-purple-700'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {lvl}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Brief Description of the Problem
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Door is stuck halfway down, loud bang heard, snapped cable on left side, remote not operating motor..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-sm resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-sm shadow-md transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Request to Kieran</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendViaWhatsApp}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-900 font-semibold text-sm transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-purple-700" />
                    <span>Send Via WhatsApp</span>
                  </button>
                </div>

                <p className="text-xs text-slate-500 pt-2">
                  No obligation · Direct tradesman response · Honest diagnostics
                </p>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
