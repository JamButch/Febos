import React, { useState } from 'react';
import { Send } from 'lucide-react'; // Importa el icono Send
import qr from '../images/qr.png'; // Asegúrate de que la ruta sea correcta

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(''); // 'success', 'error', or ''

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Enviando...'); // Set status to show loading

    // Simular envío de formulario
    // En una aplicación real, enviarías estos datos a un servidor backend.
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' }); // Limpiar formulario
    }, 2000);
  };

  return (
    // Fondo de la sección:
    // - Primera capa (superior): degradado blanco 50%, transparente 50% (cubre la mitad superior).
    // - Segunda capa (inferior): color gris-900 sólido.
    // Esto crea el efecto de mitad superior blanca y mitad inferior gris-900.
    <section id="contacto" className="py-16 px-4 bg-white bg-cover bg-no-repeat"> {/* bg-gray-900 como fondo principal */}
      {/* Contenedor principal del formulario y la imagen.
          Tiene un fondo blanco y es un grid responsivo. */}
      <div className="container mx-auto max-w-5xl bg-white p-8 rounded-lg shadow-xl
                      grid grid-cols-1 md:grid-cols-2 gap-8 items-center"> {/* Grid para 2 columnas en md+ */}

        {/* Columna del Formulario (lado izquierdo) */}
        <div className="text-gray-800"> {/* Color de texto para esta columna */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Contáctanos
            <div className="w-24 h-1 bg-indigo-600 mt-2 mx-auto rounded-full"></div> {/* Línea decorativa */}
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center">
            ¿Tienes preguntas o quieres una demostración? ¡Envíanos un mensaje!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                Nombre Completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                // Estilos de los campos de entrada para el fondo claro
                className="shadow appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 bg-white text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
                placeholder="Tu nombre"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                // Estilos de los campos de entrada para el fondo claro
                className="shadow appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 bg-white text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
                placeholder="tu.correo@ejemplo.com"
                required
              />
            </div>
            <div>
              <label htmlFor="cargo" className="block text-gray-700 text-sm font-bold mb-2">
                Cargo
              </label>
              <input
                type="text"
                id="cargo"
                name="cargo"
                value={formData.cargo}
                onChange={handleChange}
                // Estilos de los campos de entrada para el fondo claro
                className="shadow appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 bg-white text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
                placeholder="Tu cargo"
                required
              />
            </div>
             <div>
              <label htmlFor="empresa" className="block text-gray-700 text-sm font-bold mb-2">
                Empresa
              </label>
              <input
                type="text"
                id="empresa"
                name="empresa"
                value={formData.empresa}
                onChange={handleChange}
                // Estilos de los campos de entrada para el fondo claro
                className="shadow appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 bg-white text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
                placeholder="Tu empresa"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                // Estilos de los campos de entrada para el fondo claro
                className="shadow appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 bg-white text-gray-700 placeholder-gray-400 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
                placeholder="Escribe tu mensaje aquí..."
                required
              ></textarea>
            </div>

            {/* Mensajes de estado ajustados para fondo claro */}
            {status === 'success' && (
              <p className="text-green-600 font-bold text-center">¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.</p>
            )}
            {status === 'error' && (
              <p className="text-red-600 font-bold text-center">Hubo un error al enviar tu mensaje. Inténtalo de nuevo más tarde.</p>
            )}
            {status === 'Enviando...' && (
              <p className="text-indigo-600 font-bold text-center">Enviando mensaje...</p>
            )}

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={status === 'Enviando...'}
                // Estilo del botón consistente con el fondo claro
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
              >
                <span>{status === 'Enviando...' ? 'Enviando...' : 'Enviar Mensaje'}</span>
                <Send size={18} /> {/* Icono de enviar */}
              </button>
            </div>
          </form>
        </div>

        {/* Columna de la Imagen (lado derecho) */}
        <div className="flex justify-center items-center p-4"> {/* Añade padding interno */}
          {/* Placeholder para la imagen. Reemplaza con tu imagen real. */}
          <img
            src={qr}
            alt="Ilustración de Contacto"
            className="w-full h-auto max-w-xs md:max-w-none rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
