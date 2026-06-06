import styles from "./TestSummaryCard.module.scss";

interface TestSummaryCardProps {
  testType: string;
  chapter: string;
  difficulty: string;

  subject: string;
  topics: string[];
  subTopics: string[];

  duration: number;
  questions: number;
  marks: number;

  onEdit?: () => void;
}

export default function TestSummaryCard({
  testType,
  chapter,
  difficulty,
  subject,
  topics,
  subTopics,
  duration,
  questions,
  marks,
  onEdit,
}: TestSummaryCardProps) {
  return (
    <div className={styles.card}>
      {/* Top */}

      <div className={styles.top}>
        <span className={styles.badge}>
          {testType}
        </span>

        <button
          className={styles.editBtn}
          onClick={onEdit}
        >
          ✎
        </button>
      </div>

      {/* Chapter */}

      <div className={styles.chapterRow}>
        <h3>{chapter}</h3>

        <span className={styles.easy}>
          {difficulty}
        </span>
      </div>

      {/* Details */}

      <div className={styles.details}>
        <div>
          <span>Subject</span>
          <p>{subject}</p>
        </div>

        <div>
          <span>Topic</span>

          <div className={styles.tags}>
            {topics.map((item) => (
              <div
                key={item}
                className={styles.tag}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div>
          <span>Sub Topic</span>

          <div className={styles.tags}>
            {subTopics.map((item) => (
              <div
                key={item}
                className={styles.tag}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}

      <div className={styles.stats}>
        <div>{duration} Min</div>

        <div>{questions} Q's</div>

        <div>{marks} Marks</div>
      </div>
    </div>
  );
}