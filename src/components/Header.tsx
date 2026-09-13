import { Link, useLocation } from 'react-router-dom';
import { Leaf, Menu, X, Home, Users, Info, HelpCircle, Mail, Activity, TreePine } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-nature-brand bg-nature-surface/50' : 'text-gray-300 hover:text-white hover:bg-nature-surface/30';
  };

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-nature-bg/90 backdrop-blur-md border-b border-nature-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <div className="flex-shrink-0 flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2 group" aria-label="Soulie Home">
              <div className="p-2 bg-nature-surface rounded-lg group-hover:bg-nature-border transition-colors duration-300">
                <Leaf className="h-6 w-6 text-nature-brand" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-nature-brand transition-colors duration-300">
                Soulie
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-1" aria-label="Desktop Navigation">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-all duration-200 ${isActive('/')}`}
            >
              <Home className="h-4 w-4" />
              Início
            </Link>

            <Link
              to="/dashboard"
              className={`px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-all duration-200 ${isActive('/dashboard')}`}
            >
              <Activity className="h-4 w-4" />
              Dashboard
            </Link>

            <Link
              to="/jardim"
              className={`px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-all duration-200 ${isActive('/jardim')}`}
            >
              <TreePine className="h-4 w-4" />
              Jardim
            </Link>

            <Link
              to="/sobre"
              className={`px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-all duration-200 ${isActive('/sobre')}`}
            >
              <Info className="h-4 w-4" />
              Sobre
            </Link>

            <Link
              to="/integrantes"
              className={`px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-all duration-200 ${isActive('/integrantes')}`}
            >
              <Users className="h-4 w-4" />
              Equipe
            </Link>

            <Link
              to="/faq"
              className={`px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-all duration-200 ${isActive('/faq')}`}
            >
              <HelpCircle className="h-4 w-4" />
              FAQ
            </Link>

            <Link
              to="/contato"
              className={`px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-all duration-200 ${isActive('/contato')}`}
            >
              <Mail className="h-4 w-4" />
              Contato
            </Link>
          </nav>

          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-nature-surface focus:outline-none focus:ring-2 focus:ring-inset focus:ring-nature-brand transition-colors duration-200"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Abrir menu principal</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden absolute w-full bg-nature-bg border-b border-nature-border transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible overflow-hidden'}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 shadow-xl">
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block px-3 py-3 rounded-md text-base font-medium flex items-center gap-3 ${isActive('/')}`}
          >
            <Home className="h-5 w-5" />
            Início
          </Link>
          <Link
            to="/dashboard"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block px-3 py-3 rounded-md text-base font-medium flex items-center gap-3 ${isActive('/dashboard')}`}
          >
            <Activity className="h-5 w-5" />
            Dashboard
          </Link>
          <Link
            to="/jardim"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block px-3 py-3 rounded-md text-base font-medium flex items-center gap-3 ${isActive('/jardim')}`}
          >
            <TreePine className="h-5 w-5" />
            Jardim
          </Link>
          <Link
            to="/sobre"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block px-3 py-3 rounded-md text-base font-medium flex items-center gap-3 ${isActive('/sobre')}`}
          >
            <Info className="h-5 w-5" />
            Sobre
          </Link>
          <Link
            to="/integrantes"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block px-3 py-3 rounded-md text-base font-medium flex items-center gap-3 ${isActive('/integrantes')}`}
          >
            <Users className="h-5 w-5" />
            Equipe
          </Link>
          <Link
            to="/faq"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block px-3 py-3 rounded-md text-base font-medium flex items-center gap-3 ${isActive('/faq')}`}
          >
            <HelpCircle className="h-5 w-5" />
            FAQ
          </Link>
          <Link
            to="/contato"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block px-3 py-3 rounded-md text-base font-medium flex items-center gap-3 ${isActive('/contato')}`}
          >
            <Mail className="h-5 w-5" />
            Contato
          </Link>
        </div>
      </div>
    </header>
  );
}
