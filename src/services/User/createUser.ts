import { ICreateUser } from "../../@types/interfaces";
import { api } from "../api";

export const createUser = async ({
  name,
  email,
  password,
  photoBase64,
}: ICreateUser) => {
  try {
    return api.post("/user", {
      name,
      email,
      password,
      photoBase64,
    });
  } catch (error) {
    return Promise.reject(error);
  }
};
