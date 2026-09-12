import { Trophy, Medal, Users, Share2, Copy, CheckCircle, Flame } from 'lucide-react';
import { Card } from '../components/Card';
import { useState } from 'react';
import { LEADERBOARD_DATA } from '../constants/jardim';

export function Jardim() {
  const [copied, setCopied] = useState(false);

  const leaderboard = LEADERBOARD_DATA;

  const renderRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Trophy className="w-6 h-6 text-yellow-400 drop-shadow-md" />;
      case 2: return <Medal className="w-6 h-6 text-gray-300 drop-shadow-md" />;
      case 3: return <Medal className="w-6 h-6 text-amber-700 drop-shadow-md" />;
      default: return <span className="font-bold text-gray-500 w-6 text-center">#{rank}</span>;
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText('https://soulie.com.br/invite/guardiao123');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      <header className="mb-10 text-center md:text-left">
        <h1 className="font-display text-3xl font-bold text-white tracking-tight mb-2 flex items-center justify-center md:justify-start gap-3">
          <Users className="w-8 h-8 text-nature-brand" />
          Jardim Comunitário
        </h1>
        <p className="text-gray-400">Acompanhe o impacto global e veja sua posição no ranking.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        <div className="lg:col-span-1 space-y-6 self-start">
          <Card title="Visão Geral" variant="accent">
            <div className="space-y-4">
              <div className="pb-4 border-b border-nature-border">
                <p className="text-sm text-gray-400 mb-1">Membros Ativos</p>
                <p className="font-mono text-2xl font-bold text-white">12.423</p>
              </div>
              <div className="pb-4 border-b border-nature-border">
                <p className="text-sm text-gray-400 mb-1">Comunidades</p>
                <p className="font-mono text-2xl font-bold text-white">420+</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Impacto Coletivo</p>
                <p className="font-mono text-2xl font-bold text-nature-success">142t CO₂</p>
              </div>
            </div>
          </Card>

          <Card title="Convide Amigos" variant="brand">
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Expanda nosso jardim! Convide amigos e ganhe <strong className="text-nature-brand">50 XP</strong> para cada novo guardião que completar a primeira missão.
            </p>
            
            <div className="flex items-center gap-2 p-2 mb-4 rounded-lg bg-nature-bg border border-nature-border shadow-inner">
              <span className="flex-1 truncate text-sm text-gray-500 font-mono px-2 select-all">
                soulie.com.br/invite/guardiao123
              </span>
              <button 
                onClick={handleCopyLink}
                className={`flex-shrink-0 flex items-center justify-center p-2.5 rounded-md transition-all ${copied ? 'bg-nature-success/20 text-nature-success' : 'bg-nature-surface hover:bg-nature-border text-gray-400 hover:text-white'}`}
                title="Copiar Link"
              >
                {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <button className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-nature-brand text-white hover:bg-blue-600 transition-all shadow-lg shadow-nature-brand/25 font-medium hover:-translate-y-0.5">
              <Share2 className="w-5 h-5" />
              <span>Compartilhar Agora</span>
            </button>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card title="Ranking de Impacto Semanal" subtitle="Os maiores contribuidores desta semana" variant="brand">
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-nature-border text-sm text-gray-400">
                    <th className="py-3 px-4 font-medium">Posição</th>
                    <th className="py-3 px-4 font-medium">Guardião</th>
                    <th className="py-3 px-4 font-medium hidden md:table-cell">Status</th>
                    <th className="py-3 px-4 font-medium text-right">XP</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-nature-border/50">
                  {leaderboard.map((user, index) => (
                    <tr 
                      key={user.id} 
                      className={`group transition-colors hover:bg-nature-surface/50 ${user.isCurrentUser ? 'bg-nature-brand/10 border-l-2 border-nature-brand' : ''}`}
                    >
                      <td className="py-4 px-4 flex items-center justify-center w-16">
                        {renderRankIcon(index + 1)}
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                            user.isCurrentUser ? 'bg-nature-brand text-white' : 'bg-nature-surface border border-nature-border text-gray-300'
                          }`}>
                            {user.name.charAt(0)}
                          </div>
                          <div>
                            <p className={`font-semibold ${user.isCurrentUser ? 'text-nature-brand' : 'text-white'}`}>
                              {user.name}
                            </p>
                            <p className="text-xs text-gray-400">{user.avatarLevel}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 hidden md:table-cell">
                        <div className="flex flex-col gap-1">
                          <span className="text-xs flex items-center gap-1 text-orange-400">
                            <Flame className="w-3 h-3" /> {user.streak} dias
                          </span>
                          <span className="text-xs text-gray-400">
                            ♻️ {user.recycled}kg
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <span className="font-mono font-bold text-white bg-nature-surface px-3 py-1 rounded-full border border-nature-border">
                          {user.xp}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 pt-4 border-t border-nature-border text-center text-sm text-gray-400">
              Você está na <strong className="text-nature-brand">2ª posição</strong>! Faltam apenas 30 XP para alcançar o 1º lugar.
            </div>
          </Card>
        </div>
        
      </div>
    </div>
  );
}
