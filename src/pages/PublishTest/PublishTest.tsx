import { useState } from "react";

import { MainLayout } from "../../components/layout";
import { TestSummaryCard } from "../../features/test/TestSummaryCard";

import styles from "./PublishTest.module.scss";

type PublishMode = "now" | "schedule";

export default function PublishTest() {
  const [mode, setMode] =
    useState<PublishMode>("now");

  const [duration, setDuration] =
    useState("always");

  return (
    <MainLayout>
      <div className={styles.page}>
        {/* Breadcrumb */}

        <div className={styles.breadcrumb}>
          Test Creation /
          Create Test /
          Question Creation /
          Publish Test
        </div>

        {/* Success Banner */}

        <div className={styles.successBanner}>
          <div>
            <h2>Test Created</h2>

            <p>
              All 50 Questions have been
              created successfully.
            </p>
          </div>

          <div className={styles.check}>
            ✓
          </div>
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
        />

        {/* Tabs */}

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

        {/* Schedule Fields */}

        {mode === "schedule" && (
          <div
            className={styles.scheduleGrid}
          >
            <div>
              <label>
                Select Date
              </label>

              <input
                type="date"
              />
            </div>

            <div>
              <label>
                Select Time
              </label>

              <input
                type="time"
              />
            </div>
          </div>
        )}

        {/* Live Until */}

        <div className={styles.section}>
          <h3>Live Until</h3>

          <div
            className={
              styles.durationGrid
            }
          >
            {[
              {
                id: "always",
                label:
                  "Always Available",
              },
              {
                id: "1week",
                label: "1 Week",
              },
              {
                id: "2week",
                label: "2 Weeks",
              },
              {
                id: "3week",
                label: "3 Weeks",
              },
              {
                id: "1month",
                label: "1 Month",
              },
              {
                id: "custom",
                label:
                  "Custom Duration",
              },
            ].map((item) => (
              <label
                key={item.id}
                className={
                  styles.radioItem
                }
              >
                <input
                  type="radio"
                  checked={
                    duration ===
                    item.id
                  }
                  onChange={() =>
                    setDuration(
                      item.id
                    )
                  }
                />

                {item.label}
              </label>
            ))}
          </div>
        </div>

        {/* Custom Duration */}

        {duration === "custom" && (
          <div
            className={styles.scheduleGrid}
          >
            <div>
              <label>
                End Date
              </label>

              <input
                type="date"
              />
            </div>

            <div>
              <label>
                End Time
              </label>

              <input
                type="time"
              />
            </div>
          </div>
        )}

        {/* Footer */}

        <div className={styles.footer}>
          <button
            className={
              styles.cancelBtn
            }
          >
            Cancel
          </button>

          <button
            className={
              styles.confirmBtn
            }
          >
            Confirm
          </button>
        </div>
      </div>
    </MainLayout>
  );
}