import React, { useState } from 'react';
import { Link } from 'gatsby'; // Usar Link para la navegación interna
import logo from '../images/logo-febos.png'; // Asegúrate de que la ruta sea correcta

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200/80">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-gray-800">
          <img src={logo} alt="Logo de Febos" className="h-11 w-auto" />
        </Link>
        
        {/* **CAMBIO: Contenedor para agrupar la navegación y el botón** */}
        <div className="hidden lg:flex items-center space-x-8">
          {/* Navegación de Escritorio */}
          <nav className="flex items-center space-x-8">
            <Link to="/" className="text-blue-500 hover:text-orange-500 font-medium">Inicio</Link>
            <Link to="/quienes-somos" className="text-blue-500 hover:text-orange-500 font-medium">Quienes somos</Link>
            <Link to="/servicios" className="text-blue-500 hover:text-orange-500 font-medium">Servicios</Link>
            <Link to="/blog" className="text-blue-500 hover:text-orange-500 font-medium">Blog</Link>
          </nav>

          {/* Botón de Acción (Escritorio) */}
          <a href="#" className="bg-orange-500 text-white font-medium py-2 px-5 rounded-lg shadow-md hover:bg-blue-500 transition duration-300 flex items-center space-x-2">
            <span>→</span>
            <span>Ingresar</span>
          </a>
        </div>


        {/* Icono de Menú Móvil (Hamburguesa) */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Contenido del Menú Móvil */}
      {isMenuOpen && (
        <div className="lg:hidden px-6 pb-4 bg-white/95">
          <nav className="flex flex-col space-y-2">
            <Link to="/" className="block py-2 text-gray-600 font-medium">Inicio</Link>
            <Link to="/quienes-somos" className="block py-2 text-gray-600 font-medium">Quienes somos</Link>
            <Link to="/servicios" className="block py-2 text-gray-600 font-medium">Servicios</Link>
            <Link to="/blog" className="block py-2 text-gray-600 font-medium">Blog</Link>
            <hr className="my-2" />
            <a href="#" className="block mt-2 w-full text-center bg-orange-500 text-white font-medium py-2 px-5 rounded-lg shadow-md">
              Ingresar
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
