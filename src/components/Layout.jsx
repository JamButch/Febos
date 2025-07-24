// src/components/Layout.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 font-inter text-gray-800">
      <Header />
      <main>
        {children} {/* Aquí se renderizará el contenido de cada página */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;