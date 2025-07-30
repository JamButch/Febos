// src/components/Layout.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    // Estructura simple con un fondo blanco por defecto.
    // El Hero ahora manejará su propio fondo.
    <div className="min-h-screen flex flex-col bg-white font-inter text-gray-800">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
