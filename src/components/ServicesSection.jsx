import React from 'react';
// 1. Importar los iconos necesarios desde lucide-react
import { Workflow, Receipt, Users, LayoutDashboard, FileSignature, Calculator } from 'lucide-react';

// Datos para las 6 tarjetas de servicios, ahora con iconos
const services = [
  {
    icon: <Workflow className="h-12 w-12 text-blue-600" />,
    title: 'Flujos de Aprobaciones',
    description: 'Realiza acciones tales como aprobar, rechazar, firmar electrónicamente documentos, entre otros.',
  },
  {
    icon: <Receipt className="h-12 w-12 text-blue-600" />,
    title: 'Factura y Boleta Electrónica',
    description: 'Gestiona los recursos y procesos de tus facturas y boletas electrónicas. Utiliza tus puntos de ventas o ¡los de Febos!',
  },
  {
    icon: <Users className="h-12 w-12 text-blue-600" />,
    title: 'Portal Proveedores',
    description: 'Comunícate con tus proveedores, para que puedan buscar información relevante como los compromisos de pago.',
  },
  {
    icon: <LayoutDashboard className="h-12 w-12 text-blue-600" />,
    title: 'Escritorio Digital',
    description: 'Crea, gestiona, edita y mucho más, tus documentos de manera digital y de forma segura.',
  },
  {
    icon: <FileSignature className="h-12 w-12 text-blue-600" />,
    title: 'Gestión de contratos',
    description: 'Lleva el control de los contratos con seguimiento, trazabilidad, estado y notificaciones según tus necesidades.',
  },
  {
    icon: <Calculator className="h-12 w-12 text-blue-600" />,
    title: 'Rendición de Gastos',
    description: 'Echa un vistazo a la rendición de gastos y lleva un seguimiento en tiempo real, de manera rápida y sencilla.',
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-gray-50 py-20" id="servicios">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Nuestros principales servicios
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Todos nuestros servicios trabajan en conjunto como un equipo y están conectados entre sí, para una mayor experiencia.
          </p>
        </div>

        {/* 2. Grid de tarjetas rediseñado para usar iconos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
