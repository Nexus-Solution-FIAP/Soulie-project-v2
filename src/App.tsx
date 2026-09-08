import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { Jardim } from './pages/Jardim';
import { Sobre } from './pages/Sobre';
import { Integrantes } from './pages/Integrantes';
import { IntegranteDetail } from './pages/IntegranteDetail';
import { FAQ } from './pages/FAQ';
import { Contato } from './pages/Contato';
import { SoulieProvider } from './context/SoulieContext';

function App() {
  return (
    <SoulieProvider>
      <Router>
        <Layout>
          <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/jardim" element={<Jardim />} />

            <Route path="/sobre" element={<Sobre />} />

            <Route path="/integrantes" element={<Integrantes />} />

            <Route path="/integrante/:id" element={<IntegranteDetail />} />

            <Route path="/faq" element={<FAQ />} />

            <Route path="/contato" element={<Contato />} />

            <Route
              path="*"
              element={
                <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
                  <div className="w-24 h-24 bg-nature-surface rounded-full flex items-center justify-center mb-6 shadow-lg border border-nature-border">
                    <span className="text-4xl">🌱</span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">Página Não Encontrada</h2>
                  <p className="text-gray-400 max-w-md mb-8">
                    Parece que você se perdeu no jardim. A página que você está procurando
                    não existe ou foi movida.
                  </p>
                  <a
                    href="/"
                    className="px-6 py-3 bg-nature-brand text-white font-medium rounded-lg hover:bg-blue-600 transition-colors shadow-lg shadow-nature-brand/20"
                  >
                    Voltar para o Início
                  </a>
                </div>
              }
            />
          </Routes>
        </Layout>
      </Router>
    </SoulieProvider>
  );
}

export default App;

