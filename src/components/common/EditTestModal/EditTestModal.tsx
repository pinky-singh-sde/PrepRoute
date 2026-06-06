import Modal from "../Modal";
import styles from "./EditTestModal.module.scss";

import {
  Input,
  Select,
  Radio,
  Button,
} from "../../common";

interface EditTestModalProps {
  open: boolean;
  onClose: () => void;
}

export default function EditTestModal({
  open,
  onClose,
}: EditTestModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <div className={styles.header}>
        <h2>Edit Test</h2>
      </div>

      {/* Tabs */}

      <div className={styles.tabs}>
        <button
          className={styles.active}
        >
          Chapter Wise
        </button>

        <button>PYQ</button>

        <button>Mock Test</button>
      </div>

      {/* Form */}

      <div className={styles.grid}>
        <Select
          label="Subject"
          options={[]}
        />

        <Input
          label="Name Of Test"
          placeholder="Enter name"
        />

        <Select
          label="Topic"
          options={[]}
        />

        <Select
          label="Sub Topic"
          options={[]}
        />

        <Input
          label="Duration"
          placeholder="60"
        />

        <div>
          <label>
            Difficulty Level
          </label>

          <div
            className={
              styles.radioGroup
            }
          >
            <Radio
              label="Easy"
              checked
              onChange={() => {}}
            />

            <Radio
              label="Medium"
              checked={false}
              onChange={() => {}}
            />

            <Radio
              label="Difficult"
              checked={false}
              onChange={() => {}}
            />
          </div>
        </div>
      </div>

      {/* Marking */}

      <h3
        className={
          styles.sectionTitle
        }
      >
        Marking Scheme
      </h3>

      <div
        className={styles.markingGrid}
      >
        <Input
          label="Wrong Answer"
          placeholder="-1"
        />

        <Input
          label="Unattempted"
          placeholder="0"
        />

        <Input
          label="Correct Answer"
          placeholder="+5"
        />

        <Input
          label="No. Questions"
          placeholder="50"
        />

        <Input
          label="Total Marks"
          placeholder="250"
        />
      </div>

      <div className={styles.footer}>
        <Button
          variant="secondary"
          onClick={onClose}
        >
          Cancel
        </Button>

        <Button>
          Save
        </Button>
      </div>
    </Modal>
  );
}