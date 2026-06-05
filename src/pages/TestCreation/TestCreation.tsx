import { useState } from "react";

import { MainLayout } from "../../components/layout";
import {
  Input,
  Select,
  Radio,
  Button,
  NumberInput,
} from "../../components/common";

import styles from "./TestCreation.module.scss";

export default function TestCreation() {
  const [activeTab, setActiveTab] = useState("chapter");

  const [difficulty, setDifficulty] = useState("easy");

  return (
    <MainLayout>
      <div className={styles.page}>
        {/* Breadcrumb */}

        <div className={styles.breadcrumb}>
          Test Creation
          <span>/</span>
          Create Test
          <span>/</span>
          Chapter Wise
        </div>

        {/* Tabs */}

        <div className={styles.tabs}>
          <button
            className={activeTab === "chapter" ? styles.activeTab : styles.tab}
            onClick={() => setActiveTab("chapter")}
          >
            Chapter Wise
          </button>

          <button
            className={activeTab === "pyq" ? styles.activeTab : styles.tab}
            onClick={() => setActiveTab("pyq")}
          >
            PYQ
          </button>

          <button
            className={activeTab === "mock" ? styles.activeTab : styles.tab}
            onClick={() => setActiveTab("mock")}
          >
            Mock Test
          </button>
        </div>

        {/* Form */}

        <div className={styles.grid}>
          <Select label="Subject" options={[]} />

          <Input label="Name of Test" placeholder="Enter name of Test" />

          <Select label="Topic" options={[]} />

          <Select label="Sub Topic" options={[]} />

          <Input label="Duration (Minutes)" placeholder="Enter the time" />

          <div>
            <label className={styles.label}>Test Difficulty Level</label>

            <div className={styles.difficulty}>
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

        <div className={styles.marking}>
          <h3>Marking Scheme:</h3>

          <div className={styles.markingGrid}>
            {/* <NumberInput label="Wrong Answer" value={-1} />

            <NumberInput label="Unattempted" value={0} />

            <NumberInput label="Correct Answer" value={5} /> */}
            <Input type="number" label="Wrong Answer" defaultValue={-1} />

            <Input type="number" label="Unattempted" defaultValue={0} />

            <Input type="number" label="Correct Answer" defaultValue={5} />

            <Input label="No of Questions" placeholder="Ex:250 Marks" />

            <Input label="Total Marks" placeholder="Ex:250 Marks" />
          </div>
        </div>

        {/* Actions */}

        <div className={styles.actions}>
          <Button variant="secondary">Cancel</Button>

          <Button>Next</Button>
        </div>
      </div>
    </MainLayout>
  );
}
