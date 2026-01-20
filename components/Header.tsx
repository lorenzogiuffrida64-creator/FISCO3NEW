
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Consulenze', path: '/consulenze' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contabilità', path: '/contabilita' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-3xl font-bold tracking-tight text-[#1657e8]">Fisco<span className="text-black">3</span></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-[#1657e8] ${
                  isActive(link.path) ? 'text-[#1657e8]' : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/consulenze"
              className="bg-[#1657e8] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:bg-blue-700 hover:shadow-lg hover:scale-105"
            >
              Richiedi Consulenza
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-black" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block text-lg font-medium ${
                isActive(link.path) ? 'text-[#1657e8]' : 'text-gray-600'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/consulenze"
            className="block bg-[#1657e8] text-white text-center px-6 py-3 rounded-xl font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Consulenza Gratuita
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
