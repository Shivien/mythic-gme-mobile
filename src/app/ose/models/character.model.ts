export interface CharacterClassModel {
  name: string;
  level: number;
  xpModifier: 0.8 | 0.9 | 1 | 1.05 | 1.1;
}

export interface CharacterModel {
  id: number | null;
  name: string;
  xp: number;
  classes: CharacterClassModel[];
  thac0: number;
  melee: number;
  range: number;
}
