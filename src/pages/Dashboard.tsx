import { useState, useEffect } from 'react';
import { Card } from '../components/Card';
import { Soulie } from '../components/Soulie';
import { useSoulie } from '../context/SoulieContext';
import { CheckCircle, Circle, TrendingUp, HeartCrack, Heart, RotateCcw, Settings, X } from 'lucide-react';
import type { Mission } from '../types/dashboard';
import {
  PLANT_TYPE_MAP, MOOD_LABELS, MOOD_COLORS,
  EVOLUTION_STAGES, NEXT_LEVEL_EMOJIS, PLANT_THEMES, DEFAULT_MISSIONS, MISSION_CATEGORY_MAP
} from '../constants/dashboard';


export function Dashboard() {
  const { xp, levelInfo, mood, name, plantType, addXp, removeXp, setMood, setName, setPlantType, progressToNextLevel } = useSoulie();
  const [streak] = useState(7);
  const [showConfig, setShowConfig] = useState(false);
  const [editName, setEditName] = useState(name);
  const [editType, setEditType] = useState(plantType);
  const [xpPopup, setXpPopup] = useState<{ amount: number; key: number } | null>(null);
  const [hearts, setHearts] = useState<{ id: string; x: number; y: number }[]>([]);

  const [missions, setMissions] = useState<Mission[]>(DEFAULT_MISSIONS);

  const handlePetSoulie = (e: React.MouseEvent<HTMLDivElement>) => {
    if (mood === 'sad' || mood === 'wilted') {
      setMood('happy');
    } else if (Math.random() > 0.7) {
      setMood('excited');
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - 15;
    const y = e.clientY - rect.top - 15;
    const id = crypto.randomUUID();

    setHearts(prev => [...prev, { id, x, y }]);
    setTimeout(() => {
      setHearts(prev => prev.filter(h => h.id !== id));
    }, 1200);
  };

  useEffect(() => {
    // Removed to fix react-hooks/set-state-in-effect
  }, []);

  const currentLevelXp = levelInfo.xpRequired;
  const nextLevelXp = levelInfo.nextLevelXp;
  const xpInLevel = xp - currentLevelXp;
  const xpNeeded = nextLevelXp ? nextLevelXp - currentLevelXp : 0;
  const ptStyle = PLANT_TYPE_MAP[plantType] || PLANT_TYPE_MAP.default;

  const handleSaveConfig = () => {
    setName(editName || 'Soulie');
    setPlantType(editType);
    setShowConfig(false);
  };

  const toggleMission = (id: string) => {
    const mission = missions.find(m => m.id === id);
    if (!mission) return;

    if (!mission.completed) {
      addXp(mission.xpReward);
      // eslint-disable-next-line react-hooks/purity
      setXpPopup({ amount: mission.xpReward, key: Date.now() });
      setTimeout(() => setXpPopup(null), 1200);
      if (mood === 'sad' || mood === 'wilted') setMood('happy');
    } else {
      removeXp(mission.xpReward);
    }

    setMissions(cur => cur.map(m => m.id === id ? { ...m, completed: !m.completed } : m));
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

      <header className="mb-10">
        <h1 className="font-display text-3xl font-bold text-white tracking-tight mb-2">Olá, Guardião!</h1>
        <p className="text-gray-400">Aqui está o seu resumo ecológico de hoje.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        <div className="lg:col-span-1 space-y-8 self-start">
          <Card>
            <div className="absolute inset-0 z-0">
              <img src="/plant-bg.jpeg" alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/70" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-nature-surface/80 to-nature-surface" />
            </div>

            <button
              onClick={() => {
                setEditName(name);
                setEditType(plantType);
                setShowConfig(true);
              }}
              className="absolute top-4 right-4 z-20 text-gray-400 hover:text-white bg-black/20 p-2 rounded-full hover:bg-black/40 transition-all"
              title="Configurar Soulie"
            >
              <Settings className="w-5 h-5" />
            </button>

            <div className="flex flex-col items-center justify-center py-4 relative z-10">
              <div
                className={`relative w-48 h-48 rounded-full bg-nature-bg border-4 ${ptStyle.border} flex items-center justify-center mb-4 ${ptStyle.shadow} overflow-visible transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95`}
                onClick={handlePetSoulie}
              >
                <Soulie size={170} />
                {hearts.map(heart => (
                  <span key={heart.id} className="absolute text-2xl animate-soulie-xp-pop pointer-events-none drop-shadow-md" style={{ left: heart.x, top: heart.y }}>❤️</span>
                ))}
                {xpPopup && (
                  <span key={xpPopup.key} className="absolute top-2 right-4 animate-soulie-xp-pop pointer-events-none font-bold text-sm text-nature-success" style={{ textShadow: '0 0 8px rgba(16, 185, 129, 0.5)' }}>
                    +{xpPopup.amount} XP
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold text-white mt-2">{name}</h3>
              <span className={`text-xs font-medium px-3 py-1 rounded-full mt-1 ${ptStyle.bg} ${ptStyle.text}`}>
                {ptStyle.badge}
              </span>

              <p className={`text-xs font-medium mb-2 mt-2 ${MOOD_COLORS[mood]}`}>
                {MOOD_LABELS[mood]}
              </p>

              <div className="w-full mt-2">
                <div className="flex justify-between text-sm font-medium mb-2">
                  <span className="text-gray-400">XP Ecológico</span>
                  <span className="font-mono text-blue-500 font-bold">{nextLevelXp ? `${xpInLevel} / ${xpNeeded}` : 'MAX'}</span>
                </div>
                <div className="w-full h-4 bg-nature-border/50 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 transition-all duration-500 ease-out rounded-full" style={{ width: `${progressToNextLevel}%` }} />
                </div>
                <div className="flex justify-between mt-2 px-1 text-xs">
                  <span>🌱</span><span>🌿</span><span>🌾</span><span>🌳</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 w-full mt-6">
                {[
                  { icon: '🔥', value: `${streak}d`, label: 'Streak' },
                  { icon: '⭐', value: xp >= 1000 ? (xp / 1000).toFixed(1) + 'k' : xp, label: 'XP Total' },
                  { icon: '🏆', value: '#14', label: 'Rank' },
                ].map(stat => (
                  <div key={stat.label} className="bg-nature-bg border border-nature-border rounded-xl p-3 flex flex-col items-center justify-center">
                    <span className="text-xl mb-1">{stat.icon}</span>
                    <span className="font-mono text-white font-bold text-lg">{stat.value}</span>
                    <span className="text-xs text-gray-500">{stat.label}</span>
                  </div>
                ))}
              </div>

              {nextLevelXp && (
                <div className="w-full mt-4 bg-nature-bg border border-nature-border rounded-xl p-4 flex flex-col justify-center">
                  <p className="text-center text-sm text-gray-500 mb-2">Próximo nível</p>
                  <div className="flex justify-between items-center">
                    <span className="text-white font-bold flex items-center gap-2">
                      {levelInfo.nextLevelName} <span>{NEXT_LEVEL_EMOJIS[levelInfo.nextLevelName!] || '🌰'}</span>
                    </span>
                    <span className="font-mono text-blue-500 font-bold">{nextLevelXp - xp} XP</span>
                  </div>
                </div>
              )}

              <div className="flex gap-3 mt-6 w-full">
                <button
                  onClick={() => setMood(mood === 'sad' ? 'wilted' : 'sad')}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium hover:bg-red-500/20 hover:border-red-500/40 transition-all duration-200"
                >
                  <HeartCrack className="w-4 h-4" />
                  <span>{mood === 'sad' ? 'Negligenciar' : 'Abandonar'}</span>
                </button>
                <button
                  onClick={() => setMood('happy')}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium hover:bg-green-500/20 hover:border-green-500/40 transition-all duration-200"
                >
                  <Heart className="w-4 h-4" />
                  <span>Cuidar</span>
                </button>
              </div>

              <button
                onClick={() => { localStorage.removeItem('soulie_state'); window.location.reload(); }}
                className="mt-3 flex items-center gap-1.5 text-xs text-gray-600 hover:text-gray-400 transition-colors"
                title="Resetar progresso do Soulie"
              >
                <RotateCcw className="w-3 h-3" />
                Resetar progresso
              </button>
            </div>
          </Card>

          <Card title="Impacto Semanal" icon={TrendingUp} variant="success">
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 rounded-lg bg-nature-bg border border-nature-border">
                <span className="text-gray-300">CO₂ Evitado</span>
                <span className="font-mono text-white font-bold">2.4 kg <span className="text-nature-success text-xs ml-1">↑ 18%</span></span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-lg bg-nature-bg border border-nature-border">
                <span className="text-gray-300">Água Poupada</span>
                <span className="font-mono text-white font-bold">84 L <span className="text-nature-success text-xs ml-1">↑ 22%</span></span>
              </div>
            </div>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-8">
          <Card title="Missões Diárias" subtitle="Complete ações para ganhar XP e evoluir seu Soulie" variant="accent">
            <div className="space-y-3 mt-4">
              {missions.map(mission => (
                <div
                  key={mission.id}
                  onClick={() => toggleMission(mission.id)}
                  className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-200 cursor-pointer ${mission.completed ? 'bg-nature-brand/10 border-nature-brand/30' : 'bg-nature-bg border-nature-border hover:border-gray-500'
                    }`}
                >
                  <div className="flex items-center gap-4">
                    <button className="focus:outline-none focus:ring-2 focus:ring-nature-brand rounded-full" aria-label={mission.completed ? 'Marcar como incompleto' : 'Marcar como completo'}>
                      {mission.completed
                        ? <CheckCircle className="w-6 h-6 text-nature-brand" />
                        : <Circle className="w-6 h-6 text-gray-500 hover:text-gray-400" />
                      }
                    </button>
                    <div>
                      <h4 className={`font-medium transition-colors ${mission.completed ? 'text-white' : 'text-gray-300'}`}>{mission.title}</h4>
                      {(() => {
                        const style = MISSION_CATEGORY_MAP[mission.category];
                        const Icon = style.icon;
                        return (
                          <div className={`mt-2 inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${style.bg} ${style.color}`}>
                            <Icon className="w-3 h-3" />
                            {mission.category}
                          </div>
                        );
                      })()}
                    </div>
                  </div>
                  <div className={`font-mono font-bold px-3 py-1 rounded-full text-sm ${mission.completed ? 'bg-nature-brand/20 text-nature-brand' : 'bg-nature-surface text-gray-400'}`}>
                    +{mission.xpReward} XP
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-nature-border">
              <h4 className="text-sm font-semibold text-gray-300 mb-4">Caminho da Evolução</h4>
              <div className="flex items-center justify-between gap-1">
                {EVOLUTION_STAGES.map((stage, i) => {
                  const isActive = levelInfo.level === i + 1;
                  const isCompleted = levelInfo.level > i + 1;
                  return (
                    <div key={stage.name} className="flex flex-col items-center flex-1">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg mb-1 transition-all duration-300 ${isActive ? 'bg-nature-brand/20 border-2 border-nature-brand scale-110 shadow-lg shadow-nature-brand/20'
                        : isCompleted ? 'bg-nature-success/20 border border-nature-success/40'
                          : 'bg-nature-surface border border-nature-border opacity-50'
                        }`}>
                        {stage.emoji}
                      </div>
                      <span className={`text-[10px] font-medium ${isActive ? 'text-nature-brand' : isCompleted ? 'text-nature-success' : 'text-gray-600'}`}>{stage.name}</span>
                      <span className={`text-[9px] ${isActive ? 'text-gray-400' : 'text-gray-600'}`}>{stage.xp} XP</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>
        </div>

      </div>

      {showConfig && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-nature-surface border border-nature-border rounded-2xl w-full max-w-md overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center p-5 border-b border-nature-border">
              <h2 className="font-display text-xl font-bold text-white">Configurar Soulie</h2>
              <button onClick={() => setShowConfig(false)} className="text-gray-400 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Nome da Plantinha</label>
                <input
                  type="text"
                  value={editName}
                  onChange={e => setEditName(e.target.value)}
                  className="w-full bg-nature-bg border border-nature-border rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-nature-brand focus:border-transparent transition-all"
                  placeholder="Ex: Verdinho"
                  maxLength={20}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Tipo de Planta (Tema)</label>
                <div className="grid grid-cols-2 gap-3">
                  {PLANT_THEMES.map(type => (
                    <button
                      key={type.id}
                      onClick={() => setEditType(type.id as import('../types/soulie').PlantType)}
                      className={`flex items-center gap-3 p-3 rounded-xl border transition-all ${editType === type.id ? 'bg-nature-brand/20 border-nature-brand text-white' : 'bg-nature-bg border-nature-border text-gray-400 hover:border-gray-500'
                        }`}
                    >
                      <div className={`w-4 h-4 rounded-full ${type.color} shadow-sm`} />
                      <span className="text-sm font-medium">{type.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-5 border-t border-nature-border bg-nature-bg/50 flex justify-end gap-3">
              <button onClick={() => setShowConfig(false)} className="px-5 py-2.5 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors">
                Cancelar
              </button>
              <button onClick={handleSaveConfig} className="px-5 py-2.5 rounded-xl text-sm font-medium bg-nature-brand text-white hover:bg-nature-brand/90 transition-colors shadow-lg shadow-nature-brand/20">
                Salvar Alterações
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
