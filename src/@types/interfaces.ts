export interface Galaxy {
  id: number;
  name: string;
  photo: string;
  type: Types;
  numberOfPlanets: number;
}

export type Types = "Elíptica" | "Espiral" | "Irregular";
