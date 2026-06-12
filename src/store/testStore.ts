import { create } from "zustand";

interface TestStore {
  testId: string;

  setTestId: (
    id: string
  ) => void;
}

export const useTestStore =
  create<TestStore>((set) => ({
    testId: "",

    setTestId: (
      testId
    ) =>
      set({
        testId,
      }),
  }));