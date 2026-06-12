import { create } from "zustand";

export interface Question {
  id: string;

  question: string;

  option1: string;
  option2: string;
  option3: string;
  option4: string;

  correct_option: string;

  explanation?: string;

  difficulty?: string;

  topic?: string;
  sub_topic?: string;
}

export interface TestInfo {
  id?: string;
  name?: string;
  type?: string;

  subject?: string;

  topics?: string[];
  sub_topics?: string[];

  difficulty?: string;

  total_time?: number;
  total_marks?: number;
  total_questions?: number;
}

interface TestStore {
  testId: string;

  testInfo: TestInfo | null;

  questions: Question[];

  setTestId: (id: string) => void;

  setTestInfo: (
    test: TestInfo
  ) => void;

  addQuestion: (
    question: Question
  ) => void;

  updateQuestion: (
    id: string,
    question: Question
  ) => void;

  deleteQuestion: (
    id: string
  ) => void;

  clearQuestions: () => void;

  clearTest: () => void;
}

export const useTestStore =
  create<TestStore>((set) => ({
    testId: "",

    testInfo: null,

    questions: [],

    setTestId: (id) =>
      set({
        testId: id,
      }),

    setTestInfo: (test) =>
      set({
        testInfo: test,
      }),

    addQuestion: (question) =>
      set((state) => ({
        questions: [
          ...state.questions,
          question,
        ],
      })),

    updateQuestion: (
      id,
      updatedQuestion
    ) =>
      set((state) => ({
        questions:
          state.questions.map(
            (q) =>
              q.id === id
                ? updatedQuestion
                : q
          ),
      })),

    deleteQuestion: (id) =>
      set((state) => ({
        questions:
          state.questions.filter(
            (q) => q.id !== id
          ),
      })),

    clearQuestions: () =>
      set({
        questions: [],
      }),

    clearTest: () =>
      set({
        testId: "",
        testInfo: null,
        questions: [],
      }),
  }));