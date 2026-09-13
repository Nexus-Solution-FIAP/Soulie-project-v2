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
