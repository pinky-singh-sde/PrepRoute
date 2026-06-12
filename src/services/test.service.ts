import { api } from "./api";

export const getTests = async () => {
  const response =
    await api.get("/tests");

  return response.data;
};

export const getTestById = async (
  id: string
) => {
  const response =
    await api.get(`/tests/${id}`);

  return response.data;
};


export const createTest = async (
  payload: any
) => {
  const response = await api.post(
    "/tests",
    payload
  );

  return response.data;
};