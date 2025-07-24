// src/components/PartnerLogosSection.jsx
import React from 'react';
import saval from '../images/saval-logo-new.png'
import UdeAysen from '../images/UniversidadAysen.png'
import Siss from '../images/LogoSiss.png'
import AguasAndinas from '../images/aguasAndinas.png'

const PartnerLogosSection = () => {
  const partnerLogos = [
    saval,
    UdeAysen,
    Siss,
    AguasAndinas,
  ];


  return (
    // Se cambió el fondo de la sección a la gradiente de la página
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16 px-4">
      <div className="container mx-auto text-center max-w-5xl">
        {/* Se cambió el color del texto a blanco para que contraste con el fondo oscuro */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Empresas que Confían en Escritorio Digital
          {/* Se cambió el color de la línea a blanco para que contraste con el fondo oscuro */}
          <div className="w-24 h-1 bg-white mt-2 mx-auto rounded-full"></div>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
          {partnerLogos.map((logoSrc, index) => (
            // Se cambió el fondo de las tarjetas de logos a blanco para que resalten
            <div key={index} className="flex justify-center items-center p-4 bg-white rounded-lg shadow-sm">
              <img
                src={logoSrc}
                alt={`Logo de Partner ${index + 1}`}
                // w-full h-auto: La imagen ocupa todo el ancho de su columna y mantiene la proporción.
                // object-contain: Asegura que el logo completo sea visible dentro de la caja sin recortes.
                className="w-full h-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
        <br />
        {/* Se cambió el color del texto a blanco para que contraste con el fondo oscuro */}
        <p className="text-lg text-white mb-8 opacity-90">
           Ellos ya están experimentando los beneficios de una gestión documental eficiente, un espacio optimizado y un control total. Descubra cómo su organización puede lograr resultados similares.
        </p>
        {/* Se ajustó el color del botón para que contraste mejor con el nuevo fondo */}
        <button className="bg-white text-indigo-800 px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-gray-100 transition duration-300">
          Solicitar Demo Gratuita
        </button>
      </div>
    </section>
  );
};

export default PartnerLogosSection;
