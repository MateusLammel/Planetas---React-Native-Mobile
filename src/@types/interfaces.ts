export interface Galaxy {
  id: string;
  name: string;
  description: string;
  photo: string;
  type: string;
  numberOfPlanets: number;
}

export interface Planet {
  id: string;
  name: string;
  description: string;
  size: number;
  photo: string;
  galaxy_id: string;
}
