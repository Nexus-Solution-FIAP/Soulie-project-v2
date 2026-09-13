import { CheckCircle2, Sprout, Gamepad2, Target, Route } from 'lucide-react';
import { Card } from '../components/Card';
import { ROADMAP } from '../constants/integrantes';

export function Sobre() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

      <section className="text-center space-y-4">
        <h1 className="font-display text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Nossa Missão
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Fechar a lacuna entre a intenção e a ação sustentável através de suporte 
          contínuo e gamificação envolvente.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card title="O Problema" icon={Target} variant="warning">
          <div className="space-y-4 text-gray-400 leading-relaxed mt-4">
            <p>
              Estudos mostram que <strong>81% das pessoas</strong> não conseguem manter hábitos ecológicos 
              sem suporte constante. A vida moderna é corrida, e as ações sustentáveis muitas vezes 
              são deixadas em segundo plano por falta de incentivo imediato.
            </p>
            <p>
              Sem feedback visual ou uma comunidade para apoiar, as pequenas ações (como economizar água 
              ou separar o lixo) parecem insignificantes e são facilmente esquecidas.
            </p>
          </div>
        </Card>

        <Card title="Nossa Solução" icon={Sprout} variant="success">
          <div className="space-y-4 text-gray-400 leading-relaxed mt-4">
            <p>
              O <strong>Soulie</strong> transforma o ato de ser sustentável em uma jornada recompensadora.
              Utilizamos técnicas de gamificação que geram <strong>68% de retenção</strong> e engajamento contínuo.
            </p>
            <p>
              Ao atrelar o desenvolvimento de um avatar virtual (sua planta) às suas ações reais no dia a dia,
              criamos um vínculo emocional e um incentivo visual claro para manter hábitos ecológicos.
            </p>
          </div>
        </Card>
      </section>

      <section>
        <h2 className="font-display text-2xl font-bold text-white mb-8 flex items-center gap-3 border-b border-nature-border pb-4">
          <Gamepad2 className="text-nature-brand" />
          Por que Gamificação?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-nature-surface p-6 rounded-xl border border-nature-border">
            <div className="w-12 h-12 bg-nature-brand/10 rounded-full flex items-center justify-center mb-4">
              <span className="font-mono text-xl font-bold text-nature-brand">5x</span>
            </div>
            <h3 className="font-display text-white font-semibold mb-2">Mais Engajamento</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Sistemas gamificados comprovadamente geram até cinco vezes mais engajamento diário em comparação a aplicativos tradicionais de rastreamento de hábitos.
            </p>
          </div>
          
          <div className="bg-nature-surface p-6 rounded-xl border border-nature-border">
            <div className="w-12 h-12 bg-nature-accent/10 rounded-full flex items-center justify-center mb-4">
              <span className="font-mono text-xl font-bold text-nature-accent">68%</span>
            </div>
            <h3 className="font-display text-white font-semibold mb-2">Retenção de Longo Prazo</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              O senso de progressão (evolução do avatar) e o pertencimento comunitário (ranking) ancoram o usuário ao propósito do aplicativo.
            </p>
          </div>

          <div className="bg-nature-surface p-6 rounded-xl border border-nature-border">
            <div className="w-12 h-12 bg-nature-success/10 rounded-full flex items-center justify-center mb-4">
              <span className="font-mono text-xl font-bold text-nature-success">100%</span>
            </div>
            <h3 className="font-display text-white font-semibold mb-2">Impacto Real</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Cada XP ganho no jogo é diretamente traduzido em métricas tangíveis de economia de água, redução de carbono e gestão de resíduos.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl font-bold text-white mb-8 flex items-center gap-3 border-b border-nature-border pb-4">
          <Route className="text-nature-accent" />
          Roadmap do Projeto (2026)
        </h2>
        
        <div className="space-y-6">
          {ROADMAP.map((item, index) => (
            <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-4 bg-nature-surface p-4 rounded-lg border border-nature-border">
              <div className="w-32 flex-shrink-0">
                <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">{item.phase}</span>
                <p className="text-xs text-gray-400">{item.date}</p>
              </div>
              <div className="flex-grow">
                <h4 className={`text-lg font-medium ${item.status === 'current' ? 'text-nature-brand font-bold' : 'text-white'}`}>
                  {item.title}
                </h4>
              </div>
              <div className="flex-shrink-0">
                {item.status === 'completed' && <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-nature-success/10 text-nature-success border border-nature-success/20"><CheckCircle2 className="w-3 h-3" /> Concluído</span>}
                {item.status === 'current' && <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-nature-brand/10 text-nature-brand border border-nature-brand/20"><div className="w-2 h-2 rounded-full bg-nature-brand animate-pulse"></div> Em Andamento</span>}
                {item.status === 'pending' && <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-800 text-gray-400 border border-gray-700">Pendente</span>}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
