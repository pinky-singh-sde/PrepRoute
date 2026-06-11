import { api } from "./api";

export const createQuestions =
  async (questions: unknown[]) => {
    const response =
      await api.post(
        "/questions/bulk",
        {
          questions,
        }
      );

    return response.data;
  };