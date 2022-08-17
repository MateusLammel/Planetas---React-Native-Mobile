import { api } from "../api";

export const deleteGalaxy = async (id: string) => {
  try {
    return api.delete(`/galaxy/${id}`);
  } catch (error) {
    return Promise.reject(error);
  }
};
