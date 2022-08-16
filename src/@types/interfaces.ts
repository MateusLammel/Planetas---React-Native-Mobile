export interface Galaxy {
  id: string;
  name: string;
  description: string;
  color: string;
  size: number;
  type: string;
  created_at: string;
  updated_at: string;
}

export interface Planet {
  name: string;
  description: string;
  surfaceArea: number;
  sunDistance: number;
  durationDay: number;
  gravity: number;
  isActive: boolean;
  galaxy_id: string;
}
