import React from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">Next Lead</span>
          </div>
          
          <nav className="hidden md:flex space-x-10">
            <a href="#services" className="text-gray-700 hover:text-blue-600">Serviços</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600">Sobre</a>
            <a href="#portfolio" className="text-gray-700 hover:text-blue-600">Portfolio</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Contato</a>
          </nav>

          <div className="hidden md:flex">
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
              <MessageSquare className="w-4 h-4 mr-2" />
              Fale Conosco
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Serviços</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Sobre</a>
            <a href="#portfolio" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Portfolio</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contato</a>
          </div>
        </div>
      )}
    </header>
  );
}