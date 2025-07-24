// src/components/Header.jsx
import React, { useState } from 'react'; // Importa useState
// Se eliminan las importaciones directas de las imágenes, se usarán rutas absolutas.
import Logo1 from '../images/logo1.png';
import Logo2 from '../images/logo2.png';
import { Link } from 'gatsby'; // Importa Link de Gatsby para navegación interna

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar la visibilidad del menú móvil

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-6 px-4 relative z-50"> {/* z-50 para asegurar que el menú esté por encima de todo */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2 mr-8">
          {/* Se actualizan las rutas de la imagen para que apunten a la carpeta 'static/images/' */}
          <img src={Logo1} alt="Logo Icono" className="h-8" />
          <img src={Logo2} alt="Logo Texto" className="h-8" />
        </div>

        {/* Navigation Menu (Desktop) */}
        <nav className="hidden md:flex space-x-6">
          {/* Usar Link para todas las navegaciones internas */}
          <Link to="/" className="text-white hover:text-yellow-300 font-medium transition duration-300">Inicio</Link>
          <Link to="/#caracteristicas" className="text-white hover:text-yellow-300 font-medium transition duration-300">Características</Link>
          <Link to="/blog/" className="text-white hover:text-yellow-300 font-medium transition duration-300">Blog</Link> {/* Ruta correcta a la página de Blog */}
          <Link to="/#contacto" className="text-white hover:text-yellow-300 font-medium transition duration-300">Contacto</Link>
        </nav>

        {/* Call to Action Button (Desktop) */}
        <div className="hidden md:block ml-auto">
          <button className="px-6 py-2 bg-purple-700 text-white font-semibold rounded-full shadow-md hover:bg-purple-800 transition duration-300">
            Solicitar demo
          </button>
        </div>

        {/* Mobile Menu Icon (Hamburger) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none"> {/* Añadido onClick */}
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> {/* Aumentado el tamaño a w-8 h-8 */}
              {isOpen ? (
                // Icono de X cuando el menú está abierto
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                // Icono de hamburguesa cuando el menú está cerrado
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Content (Overlay o Slide-in) */}
      {/* Condicionalmente renderizado basado en el estado 'isOpen' */}
      {/* Las clases de transición y animación se pueden añadir aquí para un efecto más suave */}
      <div className={`md:hidden fixed inset-0 bg-gray-900 bg-opacity-95 z-40 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex justify-end p-6">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> {/* Icono de X */}
            </svg>
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-8 mt-12">
          {/* Los enlaces del menú móvil */}
          <a onClick={toggleMenu} href="#" className="text-white text-2xl hover:text-yellow-300 font-medium transition duration-300">Inicio</a>
          <a onClick={toggleMenu} href="#caracteristicas" className="text-white text-2xl hover:text-yellow-300 font-medium transition duration-300">Características</a>
          <a onClick={toggleMenu} href="#" className="text-white text-2xl hover:text-yellow-300 font-medium transition duration-300">Blog</a>
          <a onClick={toggleMenu} href="#contacto" className="text-white text-2xl hover:text-yellow-300 font-medium transition duration-300">Contacto</a>

          {/* Botón CTA en el menú móvil */}
          <button onClick={toggleMenu} className="px-8 py-3 bg-purple-700 text-white font-semibold rounded-full shadow-md hover:bg-purple-800 transition duration-300 text-lg mt-8">
            Solicitar demo
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
