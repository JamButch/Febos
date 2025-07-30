import React from 'react';
// 1. Importar los iconos necesarios desde lucide-react
import { MessagesSquare, FileClock, Clock, Cloud, ServerOff, Crown } from 'lucide-react';
// Importar la imagen de fondo
import bgSupport from '../images/bg-support.jpg';

// Datos para las 6 tarjetas de la sección de ayuda.
// El color del icono se definirá al renderizarlo.
const supportFeatures = [
  {
    icon: <MessagesSquare />,
    title: 'Chat veloz',
    description: 'Chatea online con nosotros y haznos saber tus inquietudes, nuestro equipo responderá en un abrir y cerrar de ojos.',
  },
  {
    icon: <FileClock />,
    title: 'Gestión S.O.S.',
    description: 'Si tu requerimiento nos toma algo más de tiempo, la plataforma de incidentes, nos ayudará a dar seguimiento.',
  },
  {
    icon: <Clock />,
    title: 'Atención 12/5',
    description: 'Atendemos tus requerimientos desde temprano y hasta tarde, de lunes a viernes, entre las 08:00 y las 20:00.',
  },
  {
    icon: <Cloud />,
    title: 'Uptime de 99,9%',
    description: 'Nuestros servicios se ejecutan de forma eficiente e inteligente gracias a la plataforma Amazon Web Services (AWS).',
  },
  {
    icon: <ServerOff />,
    title: 'A prueba de fallos',
    description: 'Nuestras soluciones están elaboradas con la mejor tecnología Serverless, sin servidores.',
  },
  {
    icon: <Crown />,
    title: 'Soporte Exclusivo',
    description: 'Si necesitas comunicarte con todo nuestro equipo, te presentamos Febos VIC (Very Important Client).',
  },
];

const SupportSection = () => {
  return (
    // 2. Aplicar la imagen de fondo con efecto fijo
    <section 
      className="relative bg-cover bg-center bg-fixed py-20"
      style={{ backgroundImage: `url(${bgSupport})` }}
    >
      {/* 3. Añadir una capa oscura semitransparente para mejorar la legibilidad */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* 4. Colocar el contenido por encima del fondo y la capa oscura */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          {/* 5. Cambiar el color del texto a blanco */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-orange-500">
            Estamos para ayudarte
          </h2>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            Te acompañamos durante todo el proceso de trabajo, en las buenas y en las malas, mediante nuestra buena atención al cliente y excelente calidad de servicio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {supportFeatures.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <div className="flex justify-center mb-4">
                {/* 6. Clonar el icono para cambiar su color a blanco dinámicamente */}
                {React.cloneElement(feature.icon, { className: 'h-12 w-12 text-blue-500 opacity-90' })}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
