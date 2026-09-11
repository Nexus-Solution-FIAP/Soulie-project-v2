import type { SoulieMood } from '../types/soulie';

export const LEVELS: { level: number; name: string; xpRequired: number }[] = [
  { level: 1, name: 'Sementinha', xpRequired: 0 },
  { level: 2, name: 'Broto', xpRequired: 100 },
  { level: 3, name: 'Muda', xpRequired: 250 },
  { level: 4, name: 'Arbusto', xpRequired: 450 },
  { level: 5, name: 'Planta Adulta', xpRequired: 700 },
];

export const MOOD_ANIMATIONS: Record<SoulieMood, string> = {
  happy: 'animate-soulie-float',
  sad: 'animate-soulie-droop saturate-[0.6] brightness-[0.85]',
  wilted: 'animate-soulie-wilt saturate-[0.3] brightness-[0.7] sepia-[0.2]',
  excited: 'animate-soulie-bounce',
};

export const PLANT_FILTERS: Record<string, string> = {
  paubrasil: '',
  samambaia: '',
  acaizeiro: '',
  ipeamarelo: '',
  mandacaru: '',
};

export const SOULIE_MOOD_LABELS: Record<SoulieMood, string> = {
  happy: '😊 Feliz',
  sad: '😢 Triste',
  wilted: '🥀 Murcho',
  excited: '🤩 Animado',
};

export const STORAGE_KEY = 'soulie_state';
