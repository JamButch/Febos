// src/components/FeatureSection.jsx
import React from 'react';
// 1. Importa Slider de react-slick
import Slider from 'react-slick';

// El componente ahora acepta una nueva prop 'logos'
const FeatureSection = ({
  title,
  description,
  features = [],
  imageSrc,
  imageSrcs,
  imageAlt,
  bgColor,
  reverseLayout = false,
  iconColorClass,
  sectionId = 'caracteristicas',
  logos, // Prop para el array de logos del carrusel
}) => {
  
  // 2. Define la configuración para el carrusel aquí adentro
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1,
    cssEase: 'linear',
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section id={sectionId} className={`py-20 px-4 ${bgColor}`}>
      {/* Se usa un contenedor principal para toda la sección */}
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Contenedor de la(s) Imagen(es) */}
          <div className={`flex justify-center items-center ${reverseLayout ? 'md:order-2' : 'md:order-1'}`}>
            {imageSrcs && imageSrcs.length > 0 ? (
              <div className="flex flex-col md:flex-row gap-4 w-full justify-center items-center">
                {imageSrcs.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`${imageAlt} - ${index + 1}`}
                    className="w-full md:w-1/2 h-auto object-contain"
                  />
                ))}
              </div>
            ) : (
              imageSrc && (
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-full h-auto object-contain"
                />
              )
            )}
          </div>

          {/* Contenedor del Contenido de Texto */}
          <div className={`${reverseLayout ? 'md:order-1' : 'md:order-2'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {title}
              <div className="w-24 h-1 bg-orange-500 mt-2 rounded-full"></div>
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              {description}
            </p>
            <ul className="space-y-3 text-gray-700 text-lg">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  {feature.icon && React.createElement(feature.icon, { className: `${iconColorClass} mr-3 flex-shrink-0`, size: 24 })}
                  {feature.text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 3. Renderiza el carrusel si se proporcionan logos */}
        {logos && logos.length > 0 && (
          <div className="mt-16">
            <h4 className="text-lg font-semibold text-gray-800 mb-6 text-center">Algunas marcas que confían en nosotros:</h4>
            <Slider {...sliderSettings}>
              {logos.map((logo, index) => (
                <div key={index} className="px-4">
                  <div className="flex items-center justify-center h-24">
                    <img 
                      src={logo.logoUrl} 
                      alt={logo.name} 
                      className="max-h-12 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeatureSection;
