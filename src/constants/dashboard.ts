import type { Mission, PlantTypeStyle, PlantTheme, EvolutionStage } from '../types/dashboard';
import { Recycle, Bike, Droplets, Zap, ShoppingBag, type LucideIcon } from 'lucide-react';

export const PLANT_TYPE_MAP: Record<string, PlantTypeStyle> = {
  paubrasil: { badge: '🌳 Pau-brasil', bg: 'bg-green-600/15', text: 'text-green-500', border: 'border-green-600/40', shadow: 'shadow-[0_0_40px_rgba(22,163,74,0.2)]' },
  samambaia: { badge: '🌿 Samambaia', bg: 'bg-emerald-500/15', text: 'text-emerald-400', border: 'border-emerald-500/40', shadow: 'shadow-[0_0_40px_rgba(16,185,129,0.2)]' },
  acaizeiro: { badge: '🌴 Açaizeiro', bg: 'bg-purple-500/15', text: 'text-purple-400', border: 'border-purple-500/40', shadow: 'shadow-[0_0_40px_rgba(168,85,247,0.2)]' },
  ipeamarelo: { badge: '🌼 Ipê-amarelo', bg: 'bg-yellow-500/15', text: 'text-yellow-400', border: 'border-yellow-500/40', shadow: 'shadow-[0_0_40px_rgba(234,179,8,0.2)]' },
  mandacaru: { badge: '🌵 Mandacaru', bg: 'bg-green-400/15', text: 'text-green-400', border: 'border-green-400/40', shadow: 'shadow-[0_0_40px_rgba(74,222,128,0.2)]' },
};

export const MOOD_LABELS: Record<string, string> = {
  happy: '😊 Soulie está feliz!',
  sad: '😢 Soulie está triste...',
  wilted: '🥀 Soulie está murchando!',
  excited: '🤩 Soulie está animadíssimo!',
};

export const MOOD_COLORS: Record<string, string> = {
  happy: 'text-soulie-happy',
  sad: 'text-soulie-sad',
  wilted: 'text-soulie-wilted',
  excited: 'text-soulie-excited',
};

export const MOOD_BORDER_COLORS: Record<string, string> = {
  happy: 'border-soulie-happy/30',
  sad: 'border-soulie-sad/30',
  wilted: 'border-soulie-wilted/30',
  excited: 'border-soulie-excited/30',
};

export const EVOLUTION_STAGES: EvolutionStage[] = [
  { name: 'Sementinha', emoji: '🌰', xp: 0 },
  { name: 'Broto', emoji: '🌱', xp: 100 },
  { name: 'Muda', emoji: '🌿', xp: 250 },
  { name: 'Arbusto', emoji: '🪴', xp: 450 },
  { name: 'Planta Adulta', emoji: '🌳', xp: 700 },
];

export const NEXT_LEVEL_EMOJIS: Record<string, string> = {
  'Planta Adulta': '🌳', 'Arbusto': '🪴', 'Muda': '🌿', 'Broto': '🌱',
};

export const PLANT_THEMES: PlantTheme[] = [
  { id: 'paubrasil', label: 'Pau-brasil', color: 'bg-green-600' },
  { id: 'samambaia', label: 'Samambaia', color: 'bg-emerald-500' },
  { id: 'acaizeiro', label: 'Açaizeiro', color: 'bg-purple-500' },
  { id: 'ipeamarelo', label: 'Ipê-amarelo', color: 'bg-yellow-500' },
  { id: 'mandacaru', label: 'Mandacaru', color: 'bg-green-400' },
];

export const MISSION_CATEGORY_MAP: Record<string, { icon: LucideIcon; color: string; bg: string }> = {
  'Reciclagem': { icon: Recycle, color: 'text-green-500', bg: 'bg-green-500/10' },
  'Mobilidade': { icon: Bike, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  'Água': { icon: Droplets, color: 'text-cyan-500', bg: 'bg-cyan-500/10' },
  'Energia': { icon: Zap, color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
  'Consumo': { icon: ShoppingBag, color: 'text-purple-500', bg: 'bg-purple-500/10' },
};

export const DEFAULT_MISSIONS: Mission[] = [
  { id: '1', title: 'Reciclar Resíduos Plásticos', xpReward: 100, completed: false, category: 'Reciclagem' },
  { id: '2', title: 'Utilizar Transporte Público', xpReward: 150, completed: false, category: 'Mobilidade' },
  { id: '3', title: 'Economia de Água no Banho', xpReward: 200, completed: false, category: 'Água' },
  { id: '4', title: 'Desligar Aparelhos da Tomada', xpReward: 100, completed: false, category: 'Energia' },
  { id: '5', title: 'Reduzir Consumo de Carne', xpReward: 100, completed: false, category: 'Consumo' },
  { id: '6', title: 'Levar Sacola Reutilizável', xpReward: 50, completed: false, category: 'Consumo' },
];
