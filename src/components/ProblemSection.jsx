import React from 'react';
// 1. Importar los iconos necesarios desde lucide-react
import { Zap, ShieldCheck, LifeBuoy } from 'lucide-react';

// Datos para las 3 tarjetas actualizados con los nuevos iconos
const features = [
  {
    // 2. Usar el componente de icono importado
    icon: <Zap className="h-10 w-10 text-blue-500 group-hover:text-orange-500" />,
    title: 'Tenemos Experiencia',
    description: 'No se nace siendo FEBOS, es por esto que, nos perfeccionamos día a día para ser los mejores y entregarte la mejor experiencia.',
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-blue-500 group-hover:text-orange-500" />,
    title: 'Somos resolutivos',
    description: 'Transformamos tus problemas en eficientes plataformas digitales. Nos adaptamos a tus necesidades y te ofrecemos soluciones personalizadas.',
  },
  {
    icon: <LifeBuoy className="h-10 w-10 text-blue-500 group-hover:text-orange-500" />,
    title: 'Evolucionamos',
    description: 'El ser humano evoluciona y nosotros, también. Mejoramos nuestro trabajo y habilidades e implementamos nuevas herramientas para entregarte lo mejor.',
  },
];

const ProblemSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            ¿Por qué elegir Febos?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Simplificamos la gestión de tu negocio para que puedas enfocarte en lo que más importa.
          </p>
        </div>

        {/* Grid con 3 columnas en escritorio */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md border-2 border-transparent hover:border-orange-500 transition duration-300 group">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
