import React from 'react';
import AnimatedBackground from './AnimatedBackground'; // Importar el fondo
import herologo from '../images/hero.png'; // Asegúrate de que la ruta sea correcta

// Nota: He quitado las importaciones no usadas para evitar warnings.
const HeroSection = () => {
  return (
    // 1. Contenedor principal con 'relative' para anclar el fondo.
    //    El fondo blanco se aplica aquí para que el texto sea legible.
    <section className="relative overflow-hidden">
      
      {/* 2. El fondo animado se coloca aquí. Se posicionará absolutamente
             dentro de esta sección. */}
      <div className="absolute inset-0 z-0">
        <AnimatedBackground />
      </div>

      {/* 3. El contenido del Hero se coloca en un contenedor con 'z-10'
             para asegurarse de que esté por encima del fondo. */}
      <div className="relative z-10 container mx-auto px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Columna Izquierda: Contenido de Texto */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Somos Transformación Digital
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
              Somos el puente que conecta clientes con proveedores, mediante herramientas y soluciones tecnológicas 100% digitales. De esta forma, estamos ayudando al planeta a reducir el consumo de papel. Con Febos, podrás crear, almacenar y dar seguimiento a tus boletas, facturas, contratos, firmas, entre muchas otras cosas más, de manera digital.
            </p>
            <div className="mt-10">
              <a href="#" className="inline-flex items-center space-x-3 bg-orange-500 text-white font-bold py-4 px-8 rounded-lg shadow-lg text-lg hover:bg-blue-500 transition duration-300 transform hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <span>Comencemos</span>
              </a>
            </div>
          </div>

          {/* Columna Derecha: Imagen */}
          <div className="mt-10 lg:mt-0">
            <img 
              src={herologo} 
              alt="Ilustración de transformación digital con un planeta y orbes tecnológicos" 
              className="w-full h-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
