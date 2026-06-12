// import { api } from "./api";

// export const createQuestions =
//   async (questions: unknown[]) => {
//     const response =
//       await api.post(
//         "/questions/bulk",
//         {
//           questions,
//         }
//       );

//     return response.data;
//   };


import { api } from "./api";

export const createBulkQuestions =
  async (
    questions: unknown[]
  ) => {
    const response =
      await api.post(
        "/questions/bulk",
        {
          questions,
        }
      );

    return response.data;
  };

export const fetchBulkQuestions =
  async (
    questionIds: string[]
  ) => {
    const response =
      await api.post(
        "/questions/fetchBulk",
        {
          question_ids:
            questionIds,
        }
      );

    return response.data;
  };