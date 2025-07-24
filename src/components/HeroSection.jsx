import React from 'react';
import hero from '../images/hero.png';
import { Link } from 'gatsby';

const HeroSection = () => {
  return (

    <section className="relative w-full py-20 px-4 text-white
                        bg-gradient-to-r from-indigo-600 to-purple-600 overflow-hidden">

      <div className="container mx-auto text-left relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 max-w-2xl">
          Optimiza tu gestión digital
          <br />
          con <span className="text-yellow-300">Escritorio Digital</span> 
          <br />by <span className="text-yellow-300">FEBOS</span>
        </h1>
        <p className="text-lg md:text-xl max-w-xl mb-10 opacity-90">
          Libera espacio físico, optimiza la gestión documental y potencia la eficiencia de tu equipo con la solución integral de Febos.
        </p>
        <div className="flex flex-col sm:flex-row justify-start space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="#sector-privado" className="bg-white text-indigo-600 px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-gray-100 transition duration-300">
            Sector Privado
          </Link>
          <Link to="#sector-publico" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-indigo-600 transition duration-300">
            Sector Público
          </Link>
        </div>
      </div>

      <div className="hidden md:block absolute inset-y-0 right-0 w-1/2 md:w-2/5 lg:w-1/3 z-0 pointer-events-none">
        <img
          src={hero}
          alt="Escritorio Digital by FEBOS"
          className="h-full w-full object-cover object-right"
        />
      </div>

    </section>
  );
};

export default HeroSection;
