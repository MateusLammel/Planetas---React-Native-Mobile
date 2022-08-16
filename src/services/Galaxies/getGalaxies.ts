import { api } from "../api";

export const getGalaxies = async () => {
  try {
    return api.get("/galaxy");
  } catch (error) {
    return Promise.reject(error);
  }
};
