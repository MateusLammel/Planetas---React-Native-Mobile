import { ICreatePlanet, IUpdatePlanet } from "../../@types/interfaces";
import { api } from "../api";

export const createPlanet = async ({
  name,
  description,
  surfaceArea,
  sunDistance,
  durationDay,
  gravity,
  isActive,
  photoBase64,
}: IUpdatePlanet) => {
  try {
    return api.put("/planet", {
      name,
      description,
      surfaceArea: Number(surfaceArea),
      sunDistance: Number(sunDistance),
      durationDay: Number(durationDay),
      gravity: Number(gravity),
      isActive,
      photoBase64,
    });
  } catch (error) {
    return Promise.reject(error);
  }
};
