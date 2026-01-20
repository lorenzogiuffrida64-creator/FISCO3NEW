
import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ConsultationForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white p-12 rounded-[2.5rem] shadow-2xl text-center space-y-6">
        <div className="flex justify-center">
          <CheckCircle className="w-20 h-20 text-green-500" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900">Richiesta Inviata!</h2>
        <p className="text-lg text-gray-600 max-w-md mx-auto">
          Un nostro esperto ti contatterà entro le prossime 24/48 ore lavorative per l'analisi gratuita dei tuoi quesiti fiscali.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-[#1657e8] font-bold hover:underline"
        >
          Invia un'altra richiesta
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl space-y-6 border border-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700 ml-1">Nome Completo</label>
          <input 
            type="text" 
            required 
            placeholder="Es. Mario Rossi"
            className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-[#1657e8] focus:bg-white outline-none transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700 ml-1">Email</label>
          <input 
            type="email" 
            required 
            placeholder="mario@esempio.it"
            className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-[#1657e8] focus:bg-white outline-none transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700 ml-1">Telefono</label>
          <input 
            type="tel" 
            required 
            placeholder="+39 000 0000000"
            className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-[#1657e8] focus:bg-white outline-none transition-all"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700 ml-1">Tipo di Quesito</label>
          <select className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-[#1657e8] focus:bg-white outline-none transition-all appearance-none cursor-pointer">
            <option>Cartelle Esattoriali / Rottamazione</option>
            <option>Regime Forfettario</option>
            <option>Modello 730 / Rimborsi</option>
            <option>Resto al Sud / Finanziamenti</option>
            <option>Altro</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-gray-700 ml-1">Messaggio (Opzionale)</label>
        <textarea 
          rows={4}
          placeholder="Raccontaci brevemente di cosa hai bisogno..."
          className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-[#1657e8] focus:bg-white outline-none transition-all resize-none"
        ></textarea>
      </div>

      <div className="pt-4">
        <button 
          type="submit"
          className="w-full bg-[#1657e8] text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1 active:scale-[0.98]"
        >
          Richiedi Analisi Gratuita <Send size={20} />
        </button>
        <p className="text-center text-xs text-gray-400 mt-4">
          I tuoi dati sono al sicuro. Ai sensi del GDPR, garantiamo la massima riservatezza.
        </p>
      </div>
    </form>
  );
};

export default ConsultationForm;
