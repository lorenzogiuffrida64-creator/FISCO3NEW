
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Dicono di noi</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            La fiducia dei nostri clienti è il nostro asset più importante. Ecco perché scelgono Fisco3.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between h-full">
              <div>
                <div className="flex text-yellow-400 mb-6">
                  {[1,2,3,4,5].map(star => <Star key={star} size={18} fill="currentColor" />)}
                </div>
                <p className="text-gray-700 italic text-lg leading-relaxed mb-8">"{t.content}"</p>
              </div>
              <div className="flex items-center gap-4 border-t border-gray-50 pt-6">
                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full border-2 border-blue-100" />
                <div>
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
