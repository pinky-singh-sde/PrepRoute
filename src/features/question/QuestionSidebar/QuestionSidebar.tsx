import styles from "./QuestionSidebar.module.scss";

export interface QuestionItem {
  id: string;
  title: string;
  completed: boolean;
}

interface QuestionSidebarProps {
  questions: QuestionItem[];
  selectedQuestionId: string;
  totalQuestions: number;

  onSelectQuestion: (
    questionId: string
  ) => void;
}

export default function QuestionSidebar({
  questions,
  selectedQuestionId,
  totalQuestions,
  onSelectQuestion,
}: QuestionSidebarProps) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>
        <h4>Question Creation</h4>

        <span>
          Total Questions :
          {" "}
          {totalQuestions}
        </span>
      </div>

      <div className={styles.questionList}>
        {questions.map((question) => (
          <button
            key={question.id}
            className={`${styles.questionItem}
              ${
                selectedQuestionId ===
                question.id
                  ? styles.active
                  : ""
              }
            `}
            onClick={() =>
              onSelectQuestion(
                question.id
              )
            }
          >
            <div
              className={
                styles.leftContent
              }
            >
              <span
                className={
                  question.completed
                    ? styles.completed
                    : styles.pending
                }
              >
                {question.completed
                  ? "✓"
                  : "○"}
              </span>

              <span>
                {question.title}
              </span>
            </div>

            <span
              className={
                styles.arrow
              }
            >
              ›
            </span>
          </button>
        ))}
      </div>
    </aside>
  );
}