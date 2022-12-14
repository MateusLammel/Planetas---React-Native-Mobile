import { ICreatePlanet } from "../../@types/interfaces";
import { api } from "../api";

export const createPlanet = async ({
  name,
  description,
  surfaceArea,
  sunDistance,
  durationDay,
  gravity,
  isActive,
  galaxy_id,
  photoBase64,
}: ICreatePlanet) => {
  try {
    return api.post("/planet", {
      name,
      description,
      surfaceArea: Number(surfaceArea),
      sunDistance: Number(sunDistance),
      durationDay: Number(durationDay),
      gravity: Number(gravity),
      isActive,
      galaxy_id,
      photoBase64,
    });
  } catch (error) {
    return Promise.reject(error);
  }
};
