import { useState } from "react";

import { MainLayout } from "../../components/layout";

import {
  QuestionSidebar,
  QuestionItem,
} from "../../features/question/QuestionSidebar";

import { TestSummaryCard } from "../../features/test/TestSummaryCard";

import styles from "./QuestionManagement.module.scss";
import EditTestModal from "../../components/common/EditTestModal/EditTestModal";
const mockQuestions: QuestionItem[] = [
  {
    id: "1",
    title: "Question 1",
    completed: true,
  },
  {
    id: "2",
    title: "Question 2",
    completed: true,
  },
  {
    id: "3",
    title: "Question 3",
    completed: true,
  },
  {
    id: "4",
    title: "Question 4",
    completed: false,
  },
  {
    id: "5",
    title: "Question 5",
    completed: false,
  },
];
export default function QuestionManagement() {
  const [selectedQuestionId, setSelectedQuestionId] =
    useState("4");
    const [isEditOpen, setIsEditOpen] =
  useState(false);

  return (
    <MainLayout>
      <div className={styles.page}>
        {/* Sidebar */}

        <QuestionSidebar
          questions={mockQuestions}
          totalQuestions={50}
          selectedQuestionId={
            selectedQuestionId
          }
          onSelectQuestion={
            setSelectedQuestionId
          }
        />

        {/* Content */}

        <div className={styles.content}>
          {/* Header */}

          <div className={styles.topBar}>
            <div
              className={
                styles.breadcrumb
              }
            >
              Test Creation /
              Create Test /
              Chapter Wise
            </div>

            <button
              className={
                styles.publishBtn
              }
            >
              Publish
            </button>
          </div>

          {/* Summary */}

          <TestSummaryCard
            testType="Chapter Wise"
            chapter="Chapter 1"
            difficulty="Easy"
            subject="English"
            topics={[
              "Grammar",
              "Writing",
            ]}
            subTopics={[
              "Application",
            ]}
            duration={60}
            questions={50}
            marks={250}
            onEdit={() =>
    setIsEditOpen(true)
  }
          />
          <EditTestModal
  open={isEditOpen}
  onClose={() =>
    setIsEditOpen(false)
  }
/>

          {/* Question Header */}

          <div
            className={
              styles.questionHeader
            }
          >
            <h3>
              Question 4
              <span>/50</span>
            </h3>

            <div
              className={
                styles.actions
              }
            >
              <button>
                + MCQ
              </button>

              <button>
                CSV
              </button>
            </div>
          </div>

          {/* Question Editor */}

          <div
            className={
              styles.editorCard
            }
          >
            <textarea
              placeholder="Type your question here..."
            />
          </div>

          {/* Options */}

          <div
            className={
              styles.optionsSection
            }
          >
            <h4>
              Type the options
              below
            </h4>

            {[
              "A",
              "B",
              "C",
              "D",
            ].map((option) => (
              <div
                key={option}
                className={
                  styles.optionRow
                }
              >
                <input
                  type="radio"
                  name="correct"
                />

                <input
                  type="text"
                  placeholder={`Option ${option}`}
                />
              </div>
            ))}
          </div>

          {/* Explanation */}

          <div
            className={
              styles.explanation
            }
          >
            <label>
              Explanation
            </label>

            <textarea
              placeholder="Enter explanation..."
            />
          </div>

          {/* Footer */}

          <div
            className={
              styles.footerActions
            }
          >
            <button
              className={
                styles.saveBtn
              }
            >
              Save Question
            </button>

            <button
              className={
                styles.nextBtn
              }
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}