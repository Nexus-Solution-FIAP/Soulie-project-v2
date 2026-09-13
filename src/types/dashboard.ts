export interface Mission {
  id: string;
  title: string;
  xpReward: number;
  completed: boolean;
  category: 'Reciclagem' | 'Mobilidade' | 'Água' | 'Energia' | 'Consumo';
}

export interface PlantTypeStyle {
  badge: string;
  bg: string;
  text: string;
  border: string;
  shadow: string;
}

export interface PlantTheme {
  id: string;
  label: string;
  color: string;
}

export interface EvolutionStage {
  name: string;
  emoji: string;
  xp: number;
}
