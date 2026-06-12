import Modal from "../Modal";
import styles from "./EditTestModal.module.scss";
import { useState, useEffect } from "react";
import { useTestStore } from "../../../store/testStore";

import { Input, Select, Radio, Button } from "../../common";

interface EditTestModalProps {
  open: boolean;
  onClose: () => void;
}

export default function EditTestModal({ open, onClose }: EditTestModalProps) {
  const { testInfo } = useTestStore();

  const [testName, setTestName] = useState("");

  const [difficulty, setDifficulty] = useState("easy");

  useEffect(() => {
    if (testInfo) {
      setTestName(testInfo.name || "");

      setDifficulty(testInfo.difficulty || "easy");
    }
  }, [testInfo]);
  return (
    <Modal open={open} onClose={onClose}>
      <div className={styles.header}>
        <h2>Edit Test</h2>
      </div>

      {/* Tabs */}

      <div className={styles.tabs}>
        <button className={styles.active}>Chapter Wise</button>

        <button>PYQ</button>

        <button>Mock Test</button>
      </div>

      {/* Form */}

      <div className={styles.grid}>
        <Input label="Subject" value={testInfo?.subject || ""} />
        <Input
          label="Name Of Test"
          value={testName}
          onChange={(e) => setTestName(e.target.value)}
        />
        <Input label="Topic" value={testInfo?.topics?.join(", ") || ""} />

        <Input
          label="Sub Topic"
          value={testInfo?.sub_topics?.join(", ") || ""}
        />
        <Input label="Duration" value={String(testInfo?.total_time || "")} />

        <div>
          <label>Difficulty Level</label>

          <div className={styles.radioGroup}>
            <Radio
              label="Easy"
              checked={difficulty === "easy"}
              onChange={() => setDifficulty("easy")}
            />

            <Radio
              label="Medium"
              checked={difficulty === "medium"}
              onChange={() => setDifficulty("medium")}
            />

            <Radio
              label="Difficult"
              checked={difficulty === "difficult"}
              onChange={() => setDifficulty("difficult")}
            />
          </div>
        </div>
      </div>

      {/* Marking */}

      <h3 className={styles.sectionTitle}>Marking Scheme</h3>

      <div className={styles.markingGrid}>
        <Input label="Wrong Answer" value="-1" />

        <Input label="Unattempted" value="0" />

        <Input label="Correct Answer" value="5" />

        <Input
          label="No. Questions"
          value={String(testInfo?.total_questions || "")}
        />

        <Input
          label="Total Marks"
          value={String(testInfo?.total_marks || "")}
        />
      </div>

      <div className={styles.footer}>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>

        <Button
          onClick={() => {
            console.log("Update Test");

            onClose();
          }}
        >
          Save
        </Button>
      </div>
    </Modal>
  );
}
