import React from 'react';
import { SERVICES } from '../constants';

const ValueProposition: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            La nostra proposta di valore: <span className="text-[#1657e8]">Libertà Fiscale</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Non siamo solo contabili. Siamo partner strategici che ti aiutano a fare chiarezza sul fisco, a toglierti ogni dubbio e a vivere la gestione burocratica con più serenità, prendendoci cura delle parti più complesse per te.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-2 group"
            >
              <div className="mb-6 p-4 bg-blue-50 w-fit rounded-2xl group-hover:bg-[#1657e8] transition-colors">
                <div className="group-hover:text-white transition-colors">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
           <div className="order-2 md:order-1">
             <img 
               src="https://images.unsplash.com/photo-1521791136364-798a7bc0d262?auto=format&fit=crop&q=80&w=800" 
               alt="Team di esperti felici" 
               className="rounded-3xl shadow-2xl"
             />
           </div>
           <div className="space-y-6 order-1 md:order-2">
             <h3 className="text-3xl font-bold text-gray-900">Perché scegliere Fisco3?</h3>
             <ul className="space-y-4">
               {[
                 "Competenza Multidisciplinare: 3 professionisti al tuo servizio.",
                 "Approccio Umano: Niente linguaggi tecnici incomprensibili.",
                 "Trasparenza Totale: Costi chiari e risultati misurabili.",
                 "Velocità Digitale: Risposte rapide via mail o WhatsApp."
               ].map((item, i) => (
                 <li key={i} className="flex items-start gap-3">
                   <div className="mt-1 bg-blue-100 p-1 rounded-full">
                     <svg className="w-4 h-4 text-[#1657e8]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                   </div>
                   <span className="text-lg text-gray-700 font-medium">{item}</span>
                 </li>
               ))}
             </ul>
           </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;