export interface Galaxy {
  id: string;
  name: string;
  description: string;
  color: string;
  size: string;
  type: string;
  created_at: string;
  updated_at: string;
  photoBase64: string;
}

export interface ICreateGalaxy {
  name: string;
  description: string;
  color: string;
  size: string;
  type: string;
  photoBase64: string;
}

export interface Planet {
  id: string;
  name: string;
  description: string;
  surfaceArea: number;
  sunDistance: number;
  durationDay: number;
  gravity: number;
  isActive: boolean;
  galaxy_id: string;
  photoBase64: string;
}

export interface ICreatePlanet {
  name: string;
  description: string;
  surfaceArea: string;
  sunDistance: string;
  durationDay: string;
  gravity: string;
  isActive: boolean;
  galaxy_id: string;
  photoBase64: string;
}

export interface IUpdatePlanet {
  id: string;
  name: string;
  description: string;
  surfaceArea: string;
  sunDistance: string;
  durationDay: string;
  gravity: string;
  isActive: boolean;
  photoBase64: string;
}

export interface ICreateUser {
  name: string;
  email: string;
  password: string;
  photoBase64: string;
}

export interface IAuthenticateUser {
  email: string;
  password: string;
}
