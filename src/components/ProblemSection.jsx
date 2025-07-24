import React from 'react';
// Importa los iconos necesarios de lucide-react para los puntos de dolor
import { Archive, Search, Users, AlertTriangle} from 'lucide-react';

const ProblemSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto text-center max-w-4xl"> {/* Centra el contenido y limita el ancho */}
        {/* Titular de la Sección */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          ¿Le Suenan Familiares Estos Problemas?
        </h2>
        <div className="w-24 h-1 bg-indigo-600 mt-2 mx-auto rounded-full"></div>
        {/* Introducción Empática */}
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10">
          En el entorno empresarial actual, la gestión documental ineficiente puede ser un obstáculo significativo para la productividad y el crecimiento.
        </p>

        {/* Lista de Puntos de Dolor */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-10">
          {/* Punto de Dolor 1 */}
          {/* Se añade 'group' al contenedor para usar group-hover en los hijos.
              Se cambian las clases de hover para el fondo a un degradado.
              Se añaden transiciones para todos los cambios. */}
          <div className="group flex items-start bg-white p-6 rounded-lg shadow-md
                        hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600
                        transition-all duration-300 cursor-pointer">
            {/* El icono cambia a blanco en hover del grupo padre */}
            <Archive size={28} className="text-indigo-600 mr-4 flex-shrink-0 mt-1 group-hover:text-white transition-colors duration-300" />
            <div>
              {/* El título cambia a blanco en hover del grupo padre */}
              <h3 className="font-semibold text-xl text-gray-900 mb-2 group-hover:text-white transition-colors duration-300">Espacio y Costos</h3>
              {/* El párrafo cambia a blanco en hover del grupo padre */}
              <p className="text-gray-700 group-hover:text-white transition-colors duration-300">
                ¿Sus archivos físicos consumen espacio valioso en la oficina, limitando su crecimiento y aumentando costos?
              </p>
            </div>
          </div>

          {/* Punto de Dolor 2 */}
          {/* Se añade 'group' al contenedor para usar group-hover en los hijos.
              Se cambian las clases de hover para el fondo a un degradado.
              Se añaden transiciones para todos los cambios. */}
          <div className="group flex items-start bg-white p-6 rounded-lg shadow-md
                        hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600
                        transition-all duration-300 cursor-pointer">
            {/* El icono cambia a blanco en hover del grupo padre */}
            <Search size={28} className="text-indigo-600 mr-4 flex-shrink-0 mt-1 group-hover:text-white transition-colors duration-300" />
            <div>
              {/* El título cambia a blanco en hover del grupo padre */}
              <h3 className="font-semibold text-xl text-gray-900 mb-2 group-hover:text-white transition-colors duration-300">Toma de Decisiones Lenta</h3>
              {/* El párrafo cambia a blanco en hover del grupo padre */}
              <p className="text-gray-700 group-hover:text-white transition-colors duration-300">
                ¿Le cuesta encontrar documentos críticos rápidamente, afectando la toma de decisiones y la agilidad de su negocio?
              </p>
            </div>
          </div>

          {/* Punto de Dolor 3 */}
          {/* Se añade 'group' al contenedor para usar group-hover en los hijos.
              Se cambian las clases de hover para el fondo a un degradado.
              Se añaden transiciones para todos los cambios. */}
          <div className="group flex items-start bg-white p-6 rounded-lg shadow-md
                        hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600
                        transition-all duration-300 cursor-pointer">
            {/* El icono cambia a blanco en hover del grupo padre */}
            <Users size={28} className="text-indigo-600 mr-4 flex-shrink-0 mt-1 group-hover:text-white transition-colors duration-300" />
            <div>
              {/* El título cambia a blanco en hover del grupo padre */}
              <h3 className="font-semibold text-xl text-gray-900 mb-2 group-hover:text-white transition-colors duration-300">Productividad Obstruida</h3>
              {/* El párrafo cambia a blanco en hover del grupo padre */}
              <p className="text-gray-700 group-hover:text-white transition-colors duration-300">
                ¿La productividad de su equipo se ve obstaculizada por procesos manuales, duplicidad de tareas y la falta de colaboración en documentos?
              </p>
            </div>
          </div>

          {/* Punto de Dolor 4 */}
          {/* Se añade 'group' al contenedor para usar group-hover en los hijos.
              Se cambian las clases de hover para el fondo a un degradado.
              Se añaden transiciones para todos los cambios. */}
          <div className="group flex items-start bg-white p-6 rounded-lg shadow-md
                        hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600
                        transition-all duration-300 cursor-pointer">
            {/* El icono cambia a blanco en hover del grupo padre */}
            <AlertTriangle size={28} className="text-indigo-600 mr-4 flex-shrink-0 mt-1 group-hover:text-white transition-colors duration-300" />
            <div>
              {/* El título cambia a blanco en hover del grupo padre */}
              <h3 className="font-semibold text-xl text-gray-900 mb-2 group-hover:text-white transition-colors duration-300">Seguridad y Cumplimiento</h3>
              {/* El párrafo cambia a blanco en hover del grupo padre */}
              <p className="text-gray-700 group-hover:text-white transition-colors duration-300">
                ¿Le preocupa la seguridad de sus documentos sensibles, el riesgo de pérdida de información o el cumplimiento normativo?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
