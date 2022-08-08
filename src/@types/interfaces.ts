export interface Galaxy {
  id: number;
  name: string;
  photo: string;
  type: "Elíptica" | "Espiral" | "Irregular";
  numberOfPlanets: number;
}
