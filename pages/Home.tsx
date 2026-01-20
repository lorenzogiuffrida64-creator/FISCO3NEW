
import React from 'react';
import Hero from '../components/Hero';
import ValueProposition from '../components/ValueProposition';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <ValueProposition />
      
      {/* Final CTA Section */}
      <section className="py-24 bg-[#1657e8]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-[3rem] p-8 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-20"><Sparkles size={100} /></div>
            <div className="absolute bottom-0 left-0 p-8 opacity-20"><Sparkles size={80} /></div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Pronto a dire addio allo stress fiscale?
            </h2>
            <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Unisciti a centinaia di professionisti e aziende che hanno già ottimizzato la loro posizione fiscale con il team di Fisco3.
            </p>
            <Link 
              to="/consulenze"
              className="inline-flex items-center gap-3 bg-white text-[#1657e8] px-12 py-5 rounded-2xl text-xl font-bold transition-all hover:bg-gray-100 hover:scale-105 active:scale-95 shadow-2xl"
            >
              Richiedi la tua Analisi Gratuita <ArrowRight size={24} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
