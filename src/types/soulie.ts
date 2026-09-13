export type SoulieMood = 'happy' | 'sad' | 'wilted' | 'excited';
export type PlantType = 'paubrasil' | 'samambaia' | 'acaizeiro' | 'ipeamarelo' | 'mandacaru';

export interface LevelInfo {
  level: number;
  name: string;
  xpRequired: number;
  nextLevelXp: number | null;
  nextLevelName: string | null;
}

export interface StoredState {
  xp: number;
  mood: SoulieMood;
  name: string;
  plantType: PlantType;
}
