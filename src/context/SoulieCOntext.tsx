import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import type { SoulieMood, PlantType, LevelInfo, StoredState } from '../types/soulie';
import { LEVELS, STORAGE_KEY } from '../constants/soulie';

export type { SoulieMood, PlantType, LevelInfo };

function getLevelFromXp(xp: number): LevelInfo {
  let currentLevel = LEVELS[0];
  for (const lvl of LEVELS) {
    if (xp >= lvl.xpRequired) {
      currentLevel = lvl;
    } else {
      break;
    }
  }
  const nextLevel = LEVELS.find(l => l.level === currentLevel.level + 1);
  return {
    level: currentLevel.level,
    name: currentLevel.name,
    xpRequired: currentLevel.xpRequired,
    nextLevelXp: nextLevel ? nextLevel.xpRequired : null,
    nextLevelName: nextLevel ? nextLevel.name : null,
  };
}

interface SoulieContextType {
  xp: number;
  level: number;
  mood: SoulieMood;
  levelInfo: LevelInfo;
  name: string;
  plantType: PlantType;
  addXp: (amount: number) => void;
  removeXp: (amount: number) => void;
  setMood: (mood: SoulieMood) => void;
  setName: (name: string) => void;
  setPlantType: (type: PlantType) => void;
  progressToNextLevel: number;
}

const SoulieContext = createContext<SoulieContextType | null>(null);

function loadState(): StoredState {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return {
        xp: typeof parsed.xp === 'number' ? parsed.xp : 0,
        mood: ['happy', 'sad', 'wilted', 'excited'].includes(parsed.mood) ? parsed.mood : 'happy',
        name: typeof parsed.name === 'string' ? parsed.name : 'Soulie',
        plantType: ['paubrasil', 'samambaia', 'acaizeiro', 'ipeamarelo', 'mandacaru'].includes(parsed.plantType) ? parsed.plantType : 'paubrasil',
      };
    }
  } catch {
  }
  return { xp: 0, mood: 'happy', name: 'Soulie', plantType: 'paubrasil' };
}

function saveState(state: StoredState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
  }
}

export function SoulieProvider({ children }: { children: ReactNode }) {
  const [xp, setXp] = useState(() => loadState().xp);
  const [mood, setMoodState] = useState<SoulieMood>(() => loadState().mood);
  const [name, setNameState] = useState<string>(() => loadState().name);
  const [plantType, setPlantTypeState] = useState<PlantType>(() => loadState().plantType);

  const levelInfo = getLevelFromXp(xp);

  useEffect(() => {
    saveState({ xp, mood, name, plantType });
  }, [xp, mood, name, plantType]);

  const addXp = useCallback((amount: number) => {
    setXp(prev => {
      const newXp = prev + amount;
      const prevLevel = getLevelFromXp(prev);
      const newLevel = getLevelFromXp(newXp);

      if (newLevel.level > prevLevel.level) {
        setMoodState('excited');
        setTimeout(() => setMoodState('happy'), 3000);
      }

      return newXp;
    });
  }, []);

  const removeXp = useCallback((amount: number) => {
    setXp(prev => Math.max(0, prev - amount));
  }, []);

  const setMood = useCallback((newMood: SoulieMood) => {
    setMoodState(newMood);
  }, []);

  const setName = useCallback((newName: string) => {
    setNameState(newName);
  }, []);

  const setPlantType = useCallback((newType: PlantType) => {
    setPlantTypeState(newType);
  }, []);

  const progressToNextLevel = (() => {
    if (levelInfo.nextLevelXp === null) return 100;
    const currentLevelXp = levelInfo.xpRequired;
    const xpInCurrentLevel = xp - currentLevelXp;
    const xpNeededForNext = levelInfo.nextLevelXp - currentLevelXp;
    return Math.min(100, Math.max(0, (xpInCurrentLevel / xpNeededForNext) * 100));
  })();

  return (
    <SoulieContext.Provider value={{
      xp,
      level: levelInfo.level,
      mood,
      levelInfo,
      name,
      plantType,
      addXp,
      removeXp,
      setMood,
      setName,
      setPlantType,
      progressToNextLevel,
    }}>
      {children}
    </SoulieContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useSoulie() {
  const ctx = useContext(SoulieContext);
  if (!ctx) throw new Error('useSoulie must be used within SoulieProvider');
  return ctx;
}
