// src/components/Footer.jsx
import React from 'react';
import { Mail, Phone, MapPin, Twitter, Facebook, Linkedin, Instagram } from 'lucide-react';
import logo from '../images/logo2.png'
import aws from '../images/awspartner.png'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <img src={logo} alt="Escritorio Digital" className="mb-4" />
          <p className="text-sm">
            Soluciones integrales para la digitalización de tu empresa.
            Simplificamos tus procesos y potenciamos tu crecimiento.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Enlaces Rápidos</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300 text-sm">Inicio</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300 text-sm">Características</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300 text-sm">Precios</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300 text-sm">Blog</a></li>
            <li><a href="https://docs.febos.cl/docs/escritorio-digital/a6577c02f4060-bienvenida" className="text-gray-400 hover:text-white transition duration-300 text-sm">Documentación</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contacto</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <Mail className="mr-2 flex-shrink-0" size={18} /> contacto@febos.cl
            </li>
            <li className="flex items-center">
              <MapPin className="mr-2 flex-shrink-0" size={18} /> Bajadoz #100 of.523, Las Condes, Santiago.
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Síguenos</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              <Instagram size={24} />
            </a>
          </div>
          <div className="mt-6">
            <img src={aws} alt="AWS Partner" className="w-1/2 h-auto" />
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Escritorio Digital. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;