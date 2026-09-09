import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Shield, Target, Users, Zap, Droplets, Recycle, Bot, CheckSquare, Sprout, Globe, Trophy, Smartphone } from 'lucide-react';
import { Card } from '../components/Card';

export function Home() {
  return (
    <div className="w-full">

      <section className="relative z-0 px-4 sm:px-6 lg:px-8 py-20 md:py-32 flex flex-col items-center justify-center text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-20"
          style={{ backgroundImage: "url('/hero-background.jfif')" }}
        />
        <div className="absolute inset-0 bg-nature-bg/60 -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-nature-brand/20 via-nature-bg/50 to-nature-bg -z-10" />

        <h1 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-tight mb-6">
          Sua jornada <span className="text-transparent bg-clip-text bg-gradient-to-r from-nature-brand to-nature-accent"> sustentável </span><br /> começa aqui
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
          O Soulie é um ecossistema digital que recompensa suas ações sustentáveis do dia a dia.
          Evolua seu avatar, suba no ranking comunitário e faça a diferença no mundo real.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            to="/dashboard"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-nature-brand text-white font-semibold hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-nature-brand/25 hover:shadow-xl hover:shadow-nature-brand/40 hover:-translate-y-0.5"
          >
            Iniciar Jornada
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/sobre"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-nature-surface border border-nature-border text-white font-semibold hover:bg-nature-border/50 transition-all duration-300 hover:-translate-y-0.5"
          >
            Entender o Projeto
          </Link>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-16 border-y border-nature-border bg-nature-surface/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center bg-nature-bg/50 backdrop-blur-sm" interactive>
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-nature-surface border border-nature-border text-nature-brand">
                  <Shield className="w-8 h-8" />
                </div>
              </div>
              <h4 className="font-mono text-4xl font-bold text-white mb-2">12.4k</h4>
              <p className="text-gray-400 font-medium">Guardiões Ativos</p>
            </Card>

            <Card className="text-center bg-nature-bg/50 backdrop-blur-sm" interactive>
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-nature-surface border border-nature-border text-nature-accent">
                  <Leaf className="w-8 h-8" />
                </div>
              </div>
              <h4 className="font-mono text-4xl font-bold text-white mb-2">142t</h4>
              <p className="text-gray-400 font-medium">CO₂ Evitado Anualmente</p>
            </Card>

            <Card className="text-center bg-nature-bg/50 backdrop-blur-sm" interactive>
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-nature-surface border border-nature-border text-nature-success">
                  <Target className="w-8 h-8" />
                </div>
              </div>
              <h4 className="font-mono text-4xl font-bold text-white mb-2">8.3k</h4>
              <p className="text-gray-400 font-medium">Missões Concluídas Hoje</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-24 max-w-7xl mx-auto border-b border-nature-border/10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Ecologia encontra gamificação;</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            O Soulie fecha o gap entre intenção e ação sustentável através de mecânicas de engajamento inteligentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card icon={Bot} title="Avatar Vivo" subtitle="Evolução contínua" variant="brand" interactive>
            <p className="text-gray-400 text-sm leading-relaxed">
              Seu avatar reage às suas ações. Cuide do meio ambiente e veja seu companheiro virtual crescer e evoluir com você.
            </p>
          </Card>

          <Card icon={CheckSquare} title="Missões Diárias" subtitle="Hábitos sustentáveis" variant="success" interactive>
            <p className="text-gray-400 text-sm leading-relaxed">
              Tarefas simples e impactantes para o seu dia a dia. Complete-as para ganhar pontos e recompensas exclusivas.
            </p>
          </Card>

          <Card icon={Sprout} title="Jardim Comunitário" subtitle="Impacto coletivo" variant="accent" interactive>
            <p className="text-gray-400 text-sm leading-relaxed">
              Una forças com outros usuários. Plantem e cultivem árvores virtuais que se convertem em ações reais de reflorestamento.
            </p>
          </Card>

          <Card icon={Globe} title="Impacto Real" subtitle="Métricas tangíveis" variant="warning" interactive>
            <p className="text-gray-400 text-sm leading-relaxed">
              Acompanhe como suas pequenas ações se transformam em grandes impactos para o nosso planeta.
            </p>
          </Card>

          <Card icon={Trophy} title="Conquistas" subtitle="Reconhecimento" variant="brand" interactive>
            <p className="text-gray-400 text-sm leading-relaxed">
              Desbloqueie medalhas e troféus ao atingir marcos de sustentabilidade e mostre seu engajamento.
            </p>
          </Card>

          <Card icon={Smartphone} title="Responsividade" subtitle="Acesse de qualquer lugar" variant="accent" interactive>
            <p className="text-gray-400 text-sm leading-relaxed">
              Nossa plataforma se adapta perfeitamente a qualquer dispositivo, seja no celular, tablet ou computador.
            </p>
          </Card>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Nossas Frentes de Impacto</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            O sistema monitora e recompensa ações distribuídas em várias categorias,
            garantindo uma abordagem holística para a sustentabilidade diária.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card icon={Droplets} title="Economia de Água" subtitle="Redução de desperdício" variant="accent" interactive>
            <p className="text-gray-400 text-sm leading-relaxed">
              Missões focadas na redução do consumo hídrico em atividades rotineiras, como banhos rápidos e reuso da água.
            </p>
          </Card>

          <Card icon={Zap} title="Energia Limpa" subtitle="Eficiência energética" variant="warning" interactive>
            <p className="text-gray-400 text-sm leading-relaxed">
              Incentivo à diminuição do uso de energia não-renovável e aproveitamento da luz natural e ventilação.
            </p>
          </Card>

          <Card icon={Recycle} title="Reciclagem" subtitle="Gestão de resíduos" variant="success" interactive>
            <p className="text-gray-400 text-sm leading-relaxed">
              Hábitos de separação correta de lixo, compostagem orgânica e redução do uso de plásticos descartáveis.
            </p>
          </Card>

          <Card icon={Users} title="Mobilidade" subtitle="Transporte sustentável" variant="brand" interactive>
            <p className="text-gray-400 text-sm leading-relaxed">
              Estímulo ao uso de transporte público, bicicletas ou caminhadas para diminuir a emissão de gases poluentes.
            </p>
          </Card>
        </div>
      </section>

    </div>
  );
}
