import { api } from "../api";

export const getGalaxyById = async (id: string) => {
  try {
    return api.get(`/galaxy/${id}`);
  } catch (error) {
    return Promise.reject(error);
  }
};
