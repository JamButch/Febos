import { Lightbulb, Globe, ShieldCheck } from 'lucide-react';
import React from 'react';

const CtaSection = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 px-4 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Trabaja desde cualquier lugar
        </h2>
        <p className="text-lg mb-8 opacity-90">
          Digitaliza tus documentos y accede a ellos encualquier momento y lugar.
        </p>
        <button className="bg-white text-indigo-700 px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-gray-100 transition duration-300">
          Comienza ahora
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-12">
                <div className="flex items-center space-x-2 px-6 py-3  text-white md:mb-5">
                   <Lightbulb size={24} className="text-white" />
                   <span className="font-semibold text-lg">Más eficiencia</span>
                </div>
                <div className="flex items-center space-x-2 px-6 py-3  text-white md:mb-5">
                   <Globe size={24} className="text-white" />
                   <span className="font-semibold text-lg">Más movilidad</span>
                </div>
                <div className="flex items-center space-x-2 px-6 py-3  text-white md:mb-5">
                   <ShieldCheck size={24} className="text-white" />
                   <span className="font-semibold text-lg">Más seguridad</span>
                </div>
             </div>
    </section>
  );
};

export default CtaSection;