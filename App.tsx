
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import AboutUs from './components/AboutUs.tsx';
import WeddingInfo from './components/WeddingInfo.tsx';
import Destination from './components/Destination.tsx';
import Logistics from './components/Logistics.tsx';
import FlightEstimates from './components/FlightEstimates.tsx';
import Accommodation from './components/Accommodation.tsx';
import PlanningTips from './components/PlanningTips.tsx';
import Footer from './components/Footer.tsx';
import LoadingScreen from './components/LoadingScreen.tsx';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Elegant loading duration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#fdfcf9] text-[#1a1a1a] overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>
      
      <Header />
      <main className="space-y-16 py-16">
        <section id="home" className="scroll-mt-32">
          <Hero />
        </section>
        
        <section id="nosotros" className="container mx-auto px-6 scroll-mt-32">
          <AboutUs />
        </section>

        <section id="el-evento" className="container mx-auto px-6 scroll-mt-32">
          <WeddingInfo />
        </section>

        <section id="joao-pessoa" className="container mx-auto px-6 scroll-mt-32">
          <Destination />
        </section>

        <section id="como-llegar" className="container mx-auto px-6 scroll-mt-32">
          <Logistics />
        </section>

        <section id="vuelos" className="container mx-auto px-6 scroll-mt-32">
          <FlightEstimates />
        </section>

        <section id="hospedaje" className="container mx-auto px-6 scroll-mt-32">
          <Accommodation />
        </section>

        <section id="planificacion" className="container mx-auto px-6 scroll-mt-32">
          <PlanningTips />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
