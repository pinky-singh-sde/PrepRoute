import { create } from "zustand";

interface User {
  id?: string;
  name?: string;
}

interface AuthState {
  token: string | null;
  user: User | null;

  login: (
    token: string,
    user: User
  ) => void;

  logout: () => void;
}

export const useAuthStore =
  create<AuthState>((set) => ({
    token:
      localStorage.getItem(
        "preproute_token"
      ),

    user: null,

    login: (token, user) => {
      localStorage.setItem(
        "preproute_token",
        token
      );

      set({
        token,
        user,
      });
    },

    logout: () => {
      localStorage.removeItem(
        "preproute_token"
      );

      set({
        token: null,
        user: null,
      });
    },
  }));