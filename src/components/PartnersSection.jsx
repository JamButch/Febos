import React from 'react';
import Slider from 'react-slick';

// 1. Importar los logos desde la carpeta de imágenes
//    (Asegúrate de que estas rutas y nombres de archivo sean correctos)
import logoSeidor from '../images/seidor-logo.png';
import logoEd from '../images/ed-logo.png';
import logoEdigital from '../images/edigital-logo.png';
import logoNarvi from '../images/narvi-logo.png';
import logoStar from '../images/star-logo.png';
import logoEntersoft from '../images/entersoft-logo.png';
import logoEsign from '../images/esign-logo.png';


// 2. Usar las variables importadas en el array de datos
const partners = [
  { name: 'Seidor', logoUrl: logoSeidor },
  { name: 'ED', logoUrl: logoEd },
  { name: 'E-Digital', logoUrl: logoEdigital },
  { name: 'Narvi', logoUrl: logoNarvi },
  { name: 'Star', logoUrl: logoStar },
  { name: 'Entersoft', logoUrl: logoEntersoft },
  { name: 'eSign', logoUrl: logoEsign },
];

const PartnersSection = () => {
  // Configuración del carrusel para un desplazamiento continuo
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000, // Velocidad de la transición
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Sin pausa entre transiciones
    cssEase: 'linear', // Movimiento suave y constante
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768, // Móviles grandes
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 640, // Móviles pequeños
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-orange-500">
            Juntos creamos valor
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Porque queremos otorgarte un servicio de alta calidad, dimos en el clavo con una jugada estratégica, ¡concretamos alianzas con otras empresas!
          </p>
        </div>

        {/* Implementación del carrusel con la nueva configuración */}
        <Slider {...settings}>
          {partners.map((partner, index) => (
            <div key={index} className="px-4">
              <div className="flex items-center justify-center h-24">
                <img 
                  src={partner.logoUrl} 
                  alt={partner.name} 
                  className="max-h-12 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PartnersSection;
