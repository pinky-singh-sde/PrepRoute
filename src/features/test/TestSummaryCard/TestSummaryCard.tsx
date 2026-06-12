import styles from "./TestSummaryCard.module.scss";

interface TestSummaryCardProps {
  testType?: string;
  chapter?: string;
  difficulty?: string;

  subject?: string;
  topics?: string[];
  subTopics?: string[];

  duration?: number;
  questions?: number;
  marks?: number;

  onEdit?: () => void;
}

export default function TestSummaryCard({
  testType = "-",
  chapter = "-",
  difficulty = "-",
  subject = "-",
  topics = [],
  subTopics = [],
  duration = 0,
  questions = 0,
  marks = 0,
  onEdit,
}: TestSummaryCardProps) {
  return (
    <div className={styles.card}>
      {/* Top */}

      <div className={styles.top}>
        <span className={styles.badge}>
          {testType}
        </span>

        {onEdit && (
          <button
            type="button"
            className={styles.editBtn}
            onClick={onEdit}
          >
            ✎
          </button>
        )}
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
            {topics.length > 0 ? (
              topics.map((item) => (
                <div
                  key={item}
                  className={styles.tag}
                >
                  {item}
                </div>
              ))
            ) : (
              <p>No Topics</p>
            )}
          </div>
        </div>

        <div>
          <span>Sub Topic</span>

          <div className={styles.tags}>
            {subTopics.length > 0 ? (
              subTopics.map((item) => (
                <div
                  key={item}
                  className={styles.tag}
                >
                  {item}
                </div>
              ))
            ) : (
              <p>No Sub Topics</p>
            )}
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