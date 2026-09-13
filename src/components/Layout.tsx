import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { pathname } = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-nature-bg flex flex-col font-sans selection:bg-nature-brand selection:text-white relative">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:p-4 focus:bg-nature-brand focus:text-white focus:outline-none focus:ring-4 focus:ring-nature-brand/50 rounded-br-lg font-medium shadow-xl transition-all"
      >
        Pular para o conteúdo principal
      </a>

      <Header />

      <main
        id="main-content"
        className="flex-grow flex flex-col relative w-full"
        aria-label="Conteúdo Principal"
        tabIndex={-1}
      >

        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10" aria-hidden="true">

          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[40%] rounded-full bg-nature-brand/5 blur-[120px]" />

          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[30%] rounded-full bg-nature-accent/5 blur-[120px]" />
        </div>

        <div className="w-full flex-grow flex flex-col">
          {children}
        </div>
      </main>

      <Footer />

      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 p-3 rounded-full bg-nature-brand text-white shadow-lg hover:bg-blue-500 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-nature-brand/50 transition-all duration-300 z-50 ${showScrollTop ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-10 invisible'
          }`}
        aria-label="Voltar ao topo da página"
        title="Voltar ao topo"
      >
        <ChevronUp className="h-6 w-6" />
      </button>

    </div>
  );
}
