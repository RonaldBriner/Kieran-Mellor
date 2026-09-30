import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { EmergencyBanner } from './components/EmergencyBanner';
import { Services } from './components/Services';
import { About } from './components/About';
import { TrustReassurance } from './components/TrustReassurance';
import { ServiceArea } from './components/ServiceArea';
import { ContactSection } from './components/ContactSection';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-purple-600 selection:text-white pb-14 sm:pb-0">
      <Header />
      <main className="flex-grow">
        <Hero />
        <EmergencyBanner />
        <Services />
        <About />
        <TrustReassurance />
        <ServiceArea />
        <ContactSection />
        <FAQ />
      </main>
      <Footer />
      <MobileQuickBar />
    </div>
  );
}
