import React from "react";
import { Lightbulb, Globe, ShieldCheck, X } from "lucide-react";

const IntroSection = () => {
  return (
    <section className="bg-white py-16 px-4">
        <div className="container mx-auto text-center">
             <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                ¿Cansado de documentos difíciles de encontrar?
                <div className="w-24 h-1 bg-indigo-600 mt-2 mx-auto rounded-full"></div>
             </h2>
             <p className="text-xl text-gray-700 max-w-2xl mx-auto flex items-center justify-center">
                En la era digital, la gestión documental no debería de ser un dolor de cabeza. 
                <br className="hidden sm:block" />
                 Si te enfrentas a montañas de papel, búsquedas interminables y la ansiedad por la seguridad de tus datos, no estás solo. Es hora de un cambio.
                <X size={20} className="text-purple-600 ml-2 flex-shrink-0" />
             </p>

             <div className="flex flex-wrap justify-center gap-4 mt-12">
                <div className="flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-t from-blue-500 to-indigo-600 text-white shadow-lg md:mb-5">
                   <Lightbulb size={24} className="text-white" />
                   <span className="font-semibold text-lg">Más eficiencia</span>
                </div>
                <div className="flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-t from-blue-500 to-indigo-600 text-white shadow-lg md:mb-5">
                   <Globe size={24} className="text-white" />
                   <span className="font-semibold text-lg">Más movilidad</span>
                </div>
                <div className="flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-t from-blue-500 to-indigo-600 text-white shadow-lg md:mb-5">
                   <ShieldCheck size={24} className="text-white" />
                   <span className="font-semibold text-lg">Más seguridad</span>
                </div>
             </div>

            
        </div>
    </section>
  );
};

export default IntroSection;
