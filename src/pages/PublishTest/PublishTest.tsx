import { useState } from "react";

import styles from "./PublishTest.module.scss";

import { QuestionSidebar } from "../../features/question/QuestionSidebar";
import { TestSummaryCard } from "../../features/test/TestSummaryCard";

type PublishMode = "now" | "schedule";

const mockQuestions = [
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
    completed: true,
  },
  {
    id: "5",
    title: "Question 5",
    completed: true,
  },
  {
    id: "6",
    title: "Question 6",
    completed: true,
  },
];

export default function PublishTest() {
  const [mode, setMode] =
    useState<PublishMode>("now");

  const [duration, setDuration] =
    useState("always");

  const [selectedQuestionId, setSelectedQuestionId] =
    useState("1");

  return (
    <div className={styles.page}>
      {/* Left Panel */}

      <QuestionSidebar
        questions={mockQuestions}
        totalQuestions={50}
        selectedQuestionId={selectedQuestionId}
        onSelectQuestion={setSelectedQuestionId}
      />

      {/* Right Content */}

      <div className={styles.content}>
        <div className={styles.breadcrumb}>
          Test Creation / Create Test /
          Question Creation / Publish Test
        </div>

        <div className={styles.successBanner}>
          <h2>Test Created</h2>

          <span>
            ✓ All 50 Questions Done
          </span>
        </div>

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
        />

        {/* Publish Tabs */}

        <div className={styles.tabs}>
          <button
            className={
              mode === "now"
                ? styles.activeTab
                : styles.tab
            }
            onClick={() =>
              setMode("now")
            }
          >
            Publish Now
          </button>

          <button
            className={
              mode === "schedule"
                ? styles.activeTab
                : styles.tab
            }
            onClick={() =>
              setMode("schedule")
            }
          >
            Schedule Publish
          </button>
        </div>

        {/* Schedule */}

        {mode === "schedule" && (
          <div className={styles.scheduleGrid}>
            <input type="date" />
            <input type="time" />
          </div>
        )}

        {/* Duration */}

        <div className={styles.section}>
          <h3>Live Until</h3>

          <div className={styles.durationGrid}>
            {[
              "Always Available",
              "1 Week",
              "2 Weeks",
              "3 Weeks",
              "1 Month",
              "Custom Duration",
            ].map((item) => (
              <label
                key={item}
                className={styles.radioItem}
              >
                <input
                  type="radio"
                  name="duration"
                />
                {item}
              </label>
            ))}
          </div>
        </div>

        {/* Custom Duration */}

        {duration === "custom" && (
          <div className={styles.scheduleGrid}>
            <input type="date" />
            <input type="time" />
          </div>
        )}

        <div className={styles.footer}>
          <button
            className={styles.cancelBtn}
          >
            Cancel
          </button>

          <button
            className={styles.confirmBtn}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}