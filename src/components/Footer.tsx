import { Link } from 'react-router-dom';
import { Leaf, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-nature-surface border-t border-nature-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 group inline-flex" aria-label="Soulie Home">
              <div className="p-2 bg-nature-bg rounded-lg border border-nature-border group-hover:border-nature-brand transition-colors duration-300">
                <Leaf className="h-6 w-6 text-nature-brand" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-white group-hover:text-nature-brand transition-colors duration-300">
                Soulie
              </span>
            </Link>
            <p className="text-gray-400 max-w-md text-base leading-relaxed mb-6">
              Transformando pequenos hábitos em um impacto gigantesco.
              Nossa plataforma de gamificação ecológica ajuda você a construir
              uma rotina sustentável enquanto evolui seu avatar-planta virtual.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 rounded-full bg-nature-bg text-gray-400 hover:text-white hover:bg-nature-border transition-all duration-200"
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-nature-bg text-gray-400 hover:text-white hover:bg-nature-border transition-all duration-200"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-nature-bg text-gray-400 hover:text-white hover:bg-nature-border transition-all duration-200"
                aria-label="Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-white font-semibold mb-4 text-lg">Navegação</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-nature-brand transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-nature-border"></span>
                  Início
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-400 hover:text-nature-brand transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-nature-border"></span>
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/jardim" className="text-gray-400 hover:text-nature-brand transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-nature-border"></span>
                  Jardim Comunitário
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-400 hover:text-nature-brand transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-nature-border"></span>
                  Sobre o Projeto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-white font-semibold mb-4 text-lg">Suporte</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-nature-brand transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-nature-border"></span>
                  Perguntas Frequentes
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-400 hover:text-nature-brand transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-nature-border"></span>
                  Fale Conosco
                </Link>
              </li>
              <li>
                <Link to="/integrantes" className="text-gray-400 hover:text-nature-brand transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-nature-border"></span>
                  Nossa Equipe
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-nature-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Soulie - Guardiões da Natureza. Todos os direitos reservados.
          </p>

          <div className="flex items-center text-gray-500 text-sm gap-1">
            <span>Desenvolvido com</span>
            <Heart className="h-4 w-4 text-red-500 mx-1 animate-pulse" />
            <span>por Engenharia de Produto Digital FIAP</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
