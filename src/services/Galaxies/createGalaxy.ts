import { api } from "../api";

interface ICreateGalaxy {
  name: string;
  description: string;
  color: string;
  size: number;
  type: string;
}

export const createGalaxy = async ({
  name,
  description,
  color,
  size,
  type,
}: ICreateGalaxy) => {
  try {
    return api.post("/galaxy", {
      name,
      description,
      color,
      size,
      type,
    });
  } catch (error) {
    return Promise.reject(error);
  }
};
