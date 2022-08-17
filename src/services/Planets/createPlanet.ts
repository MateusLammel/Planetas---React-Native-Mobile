import { api } from "../api";

interface ICreatePlanet {
  name: string;
  description: string;
  surfaceArea: number;
  sunDistance: number;
  durationDay: number;
  gravity: number;
  isActive: boolean;
  galaxy_id: string;
}

export const createPlanet = async ({
  name,
  description,
  surfaceArea,
  sunDistance,
  durationDay,
  gravity,
  isActive,
  galaxy_id,
}: ICreatePlanet) => {
  try {
    return api.post("/planet", {
      name,
      description,
      surfaceArea,
      sunDistance,
      durationDay,
      gravity,
      isActive,
      galaxy_id,
    });
  } catch (error) {
    return Promise.reject(error);
  }
};
