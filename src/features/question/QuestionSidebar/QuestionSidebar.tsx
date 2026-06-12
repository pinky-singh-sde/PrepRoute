
// import styles from "./QuestionSidebar.module.scss";

// export interface QuestionItem {
//   id: string;
//   title: string;
//   completed: boolean;
// }

// interface QuestionSidebarProps {
//   questions: QuestionItem[];
//   selectedQuestionId: string;
//   totalQuestions: number;
//   onSelectQuestion: (questionId: string) => void;
// }

// export default function QuestionSidebar({
//   questions,
//   selectedQuestionId,
//   totalQuestions,
//   onSelectQuestion,
// }: QuestionSidebarProps) {
//   return (
//     <aside className={styles.sidebar}>
//       <div className={styles.header}>
//         <h4>Question Creation</h4>

//         <span>
//           Total Questions : {totalQuestions}
//         </span>
//       </div>

//       <div className={styles.questionList}>
//         {questions.map((question) => (
//           <button
//             key={question.id}
//             type="button"
//             className={`${styles.questionItem} ${
//               selectedQuestionId === question.id
//                 ? styles.active
//                 : ""
//             }`}
//             onClick={() =>
//               onSelectQuestion(question.id)
//             }
//           >
//             <div className={styles.leftContent}>
//               {question.completed ? (
//                 <span className={styles.completed}>
//                   ✓
//                 </span>
//               ) : (
//                 <span className={styles.pending} />
//               )}

//               <span className={styles.title}>
//                 {question.title}
//               </span>
//             </div>

//             <span className={styles.arrow}>
//               ›
//             </span>
//           </button>
//         ))}
//       </div>
//     </aside>
//   );
// }


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
          Total Questions: {totalQuestions}
        </span>
      </div>

      <div className={styles.questionList}>
        {questions.length === 0 ? (
          <p className={styles.empty}>
            No Questions Added Yet
          </p>
        ) : (
          questions.map((question) => (
            <button
              key={question.id}
              type="button"
              className={`${styles.questionItem} ${
                selectedQuestionId ===
                question.id
                  ? styles.active
                  : ""
              }`}
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
                    : ""}
                </span>

                <span
                  className={styles.title}
                >
                  {question.title}
                </span>
              </div>

              <span
                className={styles.arrow}
              >
                ›
              </span>
            </button>
          ))
        )}
      </div>
    </aside>
  );
}