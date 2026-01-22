
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, Smile, Star, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sottocomponente per l'Immagine Principale (Allargata e Centrata)
  const MainImage = () => (
    <div className="relative group max-w-5xl mx-auto w-full">
      <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-blue-200/50 bg-gray-100">
        <img
          src="/team-hero.png"
          alt="Il Team di Fisco3" 
          className="w-full h-[25rem] md:h-[35rem] object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div 
        className="absolute -bottom-6 right-10 bg-white p-5 md:p-6 rounded-2xl shadow-2xl flex items-center gap-4 z-20 border border-gray-50"
        style={{ transform: `translateY(${offset * -0.05}px)` }}
      >
        <div className="bg-green-100 p-3 rounded-xl">
          <ShieldCheck className="text-green-600 w-8 h-8" />
        </div>
        <div>
          <p className="text-sm font-bold text-gray-900">Pace della Mente</p>
          <p className="text-xs text-gray-500">Tasse sotto controllo</p>
        </div>
      </div>
    </div>
  );

  // Sottocomponente per l'Box Cartella (Allargato e Centrato)
  const ServiceAnalysisBox = () => (
    <div className="bg-blue-50/50 border border-blue-100 p-8 md:p-14 rounded-[3rem] space-y-6 shadow-sm max-w-5xl mx-auto w-full">
      <div className="text-center md:text-left space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Hai ricevuto una cartella esattoriale?</h2>
        <p className="text-[#1657e8] font-semibold text-xl flex items-center justify-center md:justify-start gap-3">
          <CheckCircle2 className="w-8 h-8" /> Analisi gratuita dei tuoi debiti
        </p>
      </div>
      
      <div className="space-y-6 mt-10">
        <p className="font-bold text-gray-800 uppercase tracking-[0.2em] text-sm text-center md:text-left">Quesiti su:</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Rottamazione 5",
            "Forfettari: risparmi",
            "Modelli 730: Rimborsi",
            "Resto al sud / Contributi"
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-4 text-gray-700 bg-white p-6 rounded-3xl shadow-sm border border-gray-50 transition-all hover:border-[#1657e8] hover:shadow-lg">
              <span className="bg-blue-100 text-[#1657e8] w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">✓</span>
              <span className="font-semibold text-lg">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  // Sottocomponente per il Box Serenità Finanziaria (Allargato e Centrato)
  const CTABox = () => (
    <div className="bg-white p-10 md:p-16 rounded-[4rem] shadow-2xl border border-gray-50 space-y-10 max-w-5xl mx-auto w-full text-center">
      <div className="space-y-6">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">Pronto a recuperare la tua serenità finanziaria?</h3>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Prenota oggi la tua analisi gratuita. Senza impegno, solo pura competenza fiscale per il tuo futuro.</p>
      </div>

      <div className="space-y-6">
        <Link 
          to="/consulenze"
          className="inline-flex w-full md:w-auto bg-[#1657e8] text-white px-16 py-6 rounded-3xl text-2xl font-bold transition-all hover:bg-blue-700 hover:shadow-2xl hover:-translate-y-1 active:scale-95 items-center justify-center gap-4"
        >
          Inizia l'Analisi Gratuita <Smile className="w-8 h-8" />
        </Link>
        <p className="text-sm text-gray-400 font-medium italic">Risposta garantita entro 24 ore dai nostri esperti</p>
      </div>

      <div className="pt-10 border-t border-gray-100 flex flex-col items-center gap-6">
        <div className="flex -space-x-4">
          {[1,2,3,4,5,6].map(i => (
            <img 
              key={i} 
              className="w-14 h-14 rounded-full border-4 border-white shadow-md" 
              src={`https://picsum.photos/seed/accountant${i}/150/150`} 
              alt="Profilo Cliente" 
            />
          ))}
        </div>
        <div>
          <div className="flex justify-center text-yellow-400 mb-2 gap-1">
            {[1,2,3,4,5].map(star => <Star key={star} size={20} fill="currentColor"/>)}
          </div>
          <p className="text-xl text-gray-900 font-bold">Oltre 100 clienti soddisfatti</p>
          <p className="text-sm text-gray-400">Punteggio medio di 5/5 certificato su Google</p>
        </div>
      </div>
    </div>
  );

  // Sottocomponente per l'Ottimizzazione Legale (Allargato e Centrato)
  const HighlightCard = () => (
    <div className="bg-gradient-to-br from-gray-900 to-blue-900 p-10 md:p-16 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden group max-w-5xl mx-auto w-full">
      <div className="absolute top-0 right-0 p-8 opacity-10 transition-transform group-hover:rotate-12">
        <TrendingUp size={150} />
      </div>
      <div className="relative z-10 text-center md:text-left">
        <p className="text-blue-400 font-bold text-sm uppercase tracking-[0.3em] mb-4">La differenza Fisco3</p>
        <h4 className="text-3xl md:text-4xl font-bold mb-6">Ottimizzazione legale al 100%</h4>
        <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">Non ci limitiamo a inserire dati. Analizziamo ogni detrazione possibile per minimizzare il tuo carico fiscale legalmente e strategicamente.</p>
        <Link to="/consulenze" className="inline-flex items-center gap-3 text-white font-bold text-xl group-hover:gap-5 transition-all">
          Scopri il nostro metodo <span className="text-blue-400 text-2xl">→</span>
        </Link>
      </div>
    </div>
  );

  return (
    <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-40">
      {/* Background Decor */}
      <div 
        className="absolute -top-40 -right-40 w-[40rem] h-[40rem] bg-blue-50 rounded-full blur-[120px] opacity-60 pointer-events-none"
        style={{ transform: `translateY(${offset * 0.2}px)` }}
      />
      <div 
        className="absolute top-1/2 -left-40 w-[30rem] h-[30rem] bg-blue-100 rounded-full blur-[100px] opacity-40 pointer-events-none"
        style={{ transform: `translateY(${offset * -0.1}px)` }}
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col items-center space-y-16 md:space-y-24">
          
          {/* 1. Titolo (Centrato) */}
          <div className="text-center space-y-4 order-1">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-black tracking-tighter leading-none">
              Fisco<span className="text-[#1657e8]">3</span>
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-500 font-medium italic">
              Il team lo scegli tu!
            </p>
          </div>

          {/* 2. Immagine del Team */}
          <div className="order-2 w-full">
            <MainImage />
          </div>

          {/* 3. Box Analisi Cartella */}
          <div className="order-3 w-full">
            <ServiceAnalysisBox />
          </div>

          {/* 4. Box Serenità Finanziaria */}
          <div className="order-4 w-full">
            <CTABox />
          </div>

          {/* 5. Ottimizzazione Legale */}
          <div className="order-5 w-full">
            <HighlightCard />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
