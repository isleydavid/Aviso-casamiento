
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import WeddingInfo from './components/WeddingInfo';
import Destination from './components/Destination';
import Logistics from './components/Logistics';
import FlightEstimates from './components/FlightEstimates';
import Accommodation from './components/Accommodation';
import PlanningTips from './components/PlanningTips';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fdfcf9] text-[#1a1a1a] overflow-x-hidden">
      <Header />
      <main className="space-y-16 py-16">
        <section id="home">
          <Hero />
        </section>
        
        <section id="nosotros" className="container mx-auto px-6">
          <AboutUs />
        </section>

        <section id="el-evento" className="container mx-auto px-6">
          <WeddingInfo />
        </section>

        <section id="joao-pessoa" className="container mx-auto px-6">
          <Destination />
        </section>

        <section id="como-llegar" className="container mx-auto px-6">
          <Logistics />
        </section>

        <section id="vuelos" className="container mx-auto px-6">
          <FlightEstimates />
        </section>

        <section id="hospedaje" className="container mx-auto px-6">
          <Accommodation />
        </section>

        <section id="planificacion" className="container mx-auto px-6">
          <PlanningTips />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
