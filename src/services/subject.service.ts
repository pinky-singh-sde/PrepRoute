import { api } from "./api";

export const getSubjects = async () => {
  const response = await api.get("/subjects");
  return response.data;
};

export const getTopicsBySubject = async (
  subjectId: string
) => {
  const response = await api.get(
    `/topics/subject/${subjectId}`
  );

  return response.data;
};

export const getSubTopics = async (
  topicIds: string[]
) => {
  const response = await api.post(
    "/sub-topics/multi-topics",
    {
      topicIds,
    }
  );

  return response.data;
};