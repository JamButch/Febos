import React from 'react';
import { Link } from 'gatsby';
import { MapPin, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
// Importar logos
import footerLogo from '../images/logo-febos.png';
import awsLogo from '../images/aws-logo.png';
// Importar la imagen de fondo
import footerBackground from '../images/footer-bg.png';

const Footer = () => {
  return (
    // 1. El footer ahora es un contenedor relativo con un color de fondo sólido.
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      
      {/* 2. La imagen de fondo ahora es un elemento <img> centrado y animado */}
      <img 
        src={footerBackground} 
        alt="" 
        className="absolute top-1/2 left-1/2 max-w-4xl w-full -translate-x-1/2 -translate-y-1/2 opacity-5 [animation:spin_30s_linear_infinite]"
      />

      {/* 3. Contenido del footer posicionado sobre el fondo */}
      <div className="relative z-10 container mx-auto px-6 pt-16 pb-8">
        {/* Sección principal del footer con 4 columnas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Columna 1: Logo y Redes Sociales */}
          <div className="lg:col-span-1">
            <Link to="/">
              <img src={footerLogo} alt="Logo de Febos" className="h-10 w-auto mb-4" />
            </Link>
            <p className="text-gray-400 text-sm">
              Apoyamos y gestionamos la comunicación entre clientes y proveedores, con una solución integral.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.facebook.com/FebosCL" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/febos_cl/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white">
                <Instagram size={24} />
              </a>
              <a href="https://cl.linkedin.com/company/febos" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Columna 2: Explora */}
          <div>
            <h3 className="text-lg font-bold mb-4">Explora</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Inicio</Link></li>
              <li><Link to="/quienes-somos" className="text-gray-400 hover:text-white">Nosotros</Link></li>
            </ul>
          </div>

          {/* Columna 3: Recursos */}
          <div>
            <h3 className="text-lg font-bold mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li><a href="https://febos.slack.com" className="text-gray-400 hover:text-white">Febos VIC (Slack)</a></li>
              <li><a href="https://ayuda.febos.cl" className="text-gray-400 hover:text-white">Portal de ayuda</a></li>
              <li><a href="https://docs.febos.cl" className="text-gray-400 hover:text-white">Guías de usuario</a></li>
              <li><a href="https://docs.febos.cl" className="text-gray-400 hover:text-white">Documentación API</a></li>
            </ul>
          </div>

          {/* Columna 4: Dirección */}
          <div>
            <h3 className="text-lg font-bold mb-4">Dirección comercial</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="flex-shrink-0 mr-3 mt-1 text-gray-400" />
                <span className="text-gray-400">Badajoz #100 of. 523, Las Condes, Santiago.</span>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="flex-shrink-0 mr-3 mt-1 text-gray-400" />
                <a href="mailto:contacto@febos.cl" className="text-gray-400 hover:text-white">contacto@febos.cl</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Sección inferior del footer */}
        <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-500 text-center md:text-left mb-4 md:mb-0">
            Copyright @{new Date().getFullYear()} <strong>Febos AMI SpA</strong> Todos los derechos reservados.
          </p>
          <div className="flex items-center space-x-6">
            <a href="https://aws.amazon.com/what-is-cloud-computing" target="_blank" rel="noreferrer">
              <img src={awsLogo} alt="Powered by AWS Cloud Computing" className="h-12" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
