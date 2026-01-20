
import React from 'react';
import ConsultationForm from '../components/ConsultationForm';

const ConsultationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">
              Inizia la tua <span className="text-[#1657e8]">Rivoluzione Fiscale</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Compila il modulo sottostante per ricevere una prima analisi gratuita della tua situazione. Nessun costo nascosto, solo competenza.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ConsultationForm />
            </div>

            <div className="space-y-8">
              {/* Box 'Altri modi per contattarci' rimosso su richiesta dell'utente */}
              
              <div className="bg-gradient-to-br from-[#1657e8] to-blue-700 p-8 rounded-[2rem] shadow-xl text-white sticky top-32">
                <h3 className="text-xl font-bold mb-4">La nostra promessa</h3>
                <ul className="space-y-3 opacity-90">
                  <li className="flex gap-2"><span>✓</span> Risposta entro 24/48 ore lavorative</li>
                  <li className="flex gap-2"><span>✓</span> Analisi personalizzata e dettagliata</li>
                  <li className="flex gap-2"><span>✓</span> Riservatezza assoluta garantita</li>
                  <li className="flex gap-2"><span>✓</span> Nessun obbligo di acquisto</li>
                </ul>
                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="text-sm italic opacity-80">
                    "Il nostro obiettivo è la tua tranquillità. Ogni caso viene analizzato con la massima cura dai nostri tre esperti."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationPage;
