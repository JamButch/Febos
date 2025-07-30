import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import videoBg from '../images/awsxfebos.jpg';

const VideoSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoUrl = 'https://www.youtube.com/embed/wueRpUYWx_o';

  return (
    <>
      <section className="overflow-hidden"> {/* Evita que los bordes se desborden */}
        {/* Parte superior con la imagen */}
        <div className="bg-gray-100 pt-20">
          <div className="container mx-auto px-6">
            {/* Se añade z-10 para que la imagen se superponga a la sección oscura */}
            <div 
              onClick={() => setIsModalOpen(true)}
              className="relative z-10 rounded-lg overflow-hidden cursor-pointer group shadow-2xl"
            >
              <img src={videoBg} alt="Tecnología de AWS y Febos" className="w-full h-auto" />
              <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white rounded-full h-20 w-20 flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                  <Play className="h-10 w-10 text-blue-600" fill="currentColor" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Parte inferior con el fondo oscuro */}
        {/* Se añade un margen superior negativo para "subir" esta sección */}
        {/* Se añade padding superior para compensar y bajar el texto */}
        <div className="bg-gray-900 -mt-32 pt-40 pb-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-orange-500">
              Tecnología de Clase Mundial con AWS
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              Descubre cómo Febos, respaldado por la infraestructura de Amazon Web Services (AWS), garantiza seguridad, confiabilidad y rendimiento para tu transformación digital.
            </p>
          </div>
        </div>
      </section>

      {/* Modal del Video */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative w-full max-w-3xl mx-4">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoSection;
