import { ICreateGalaxy } from "../../@types/interfaces";
import { api } from "../api";

export const createGalaxy = async ({
  name,
  description,
  color,
  size,
  type,
  photoBase64,
}: ICreateGalaxy) => {
  try {
    return api.post("/galaxy", {
      name,
      description,
      color,
      size: Number(size),
      type,
      photoBase64,
    });
  } catch (error) {
    return Promise.reject(error);
  }
};
