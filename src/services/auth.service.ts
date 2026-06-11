import { api } from "./api";

import {
  LoginPayload,
  LoginResponse,
} from "../types/auth.types";

export const login = async (
  payload: LoginPayload
) => {
  const response =
    await api.post<LoginResponse>(
      "/auth/login",
      payload
    );

  return response.data;
};