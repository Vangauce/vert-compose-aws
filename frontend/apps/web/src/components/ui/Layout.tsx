import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar común */}
      <Navbar />

      {/* Contenido dinámico que cambia entre páginas */}
      <div className="flex-1">{children}</div>

      {/* Footer común */}
      <Footer />
    </div>
  );
};

export default Layout;
