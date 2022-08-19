import { api } from "../api";

export const deletePlanet = async (id: string) => {
  try {
    return api.delete(`/planet/${id}`);
  } catch (error) {
    return Promise.reject(error);
  }
};
