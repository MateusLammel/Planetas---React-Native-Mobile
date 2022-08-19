import { IAuthenticateUser } from "../../@types/interfaces";
import { api } from "../api";

export const authentiqueUser = async ({
  email,
  password,
}: IAuthenticateUser) => {
  try {
    return api.post("/user/authenticate", {
      email,
      password,
    });
  } catch (error) {
    return Promise.reject(error);
  }
};
