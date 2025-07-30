import React from 'react';
import { Link } from 'gatsby';

const CtaSection = () => {
  return (
    // La sección principal con el color de fondo azul y texto blanco.
    <section className="bg-blue-500 text-white">
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          ¿Listo para Digitalizar tu Negocio?
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-blue-100">
          Únete a miles de pymes que ya gestionan su facturación electrónica de forma fácil, rápida y segura con Febos.
        </p>
        <Link 
          to="/#contacto" // Puedes cambiar este enlace a tu página de registro o contacto
          className="inline-block bg-orange-500 text-white font-bold py-4 px-10 rounded-lg shadow-lg text-lg hover:bg-orange-600 transition duration-300 transform hover:scale-105"
        >
          Crear mi Cuenta Gratis
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;
