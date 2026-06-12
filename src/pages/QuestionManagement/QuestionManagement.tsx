import { useState, useEffect } from "react";

import { MainLayout } from "../../components/layout";

import {
  QuestionSidebar,
  QuestionItem,
} from "../../features/question/QuestionSidebar";

import { TestSummaryCard } from "../../features/test/TestSummaryCard";
import { useTestStore } from "../../store/testStore";
import styles from "./QuestionManagement.module.scss";
import EditTestModal from "../../components/common/EditTestModal/EditTestModal";
import { useNavigate } from "react-router-dom";

import { createBulkQuestions } from "../../services/question.service";
export default function QuestionManagement() {
  const [selectedQuestionId, setSelectedQuestionId] = useState("");
  const [isEditOpen, setIsEditOpen] = useState(false);
  const {
    testId,
    questions,

    addQuestion,
    updateQuestion,
    deleteQuestion,
    testInfo,
  } = useTestStore();
  const navigate = useNavigate();
  const sidebarQuestions: QuestionItem[] = questions.map((question, index) => ({
    id: question.id,
    title: `Question ${index + 1}`,
    completed: true,
  }));
  const [questionText, setQuestionText] = useState("");

  const [option1, setOption1] = useState("");

  const [option2, setOption2] = useState("");

  const [option3, setOption3] = useState("");

  const [option4, setOption4] = useState("");

  const [correctOption, setCorrectOption] = useState("option1");

  const [explanation, setExplanation] = useState("");

  const handleSaveQuestion = () => {
    const totalQuestions =
  testInfo?.total_questions || 50;

if (
  questions.length >= totalQuestions
) {
  alert(
    `Only ${totalQuestions} questions allowed`
  );

  return;
}
    if (
      !questionText.trim() ||
      !option1.trim() ||
      !option2.trim() ||
      !option3.trim() ||
      !option4.trim()
    ) {
      alert("Please fill question and all options");

      return;
    }

    const newQuestionId = crypto.randomUUID();

    addQuestion({
      id: newQuestionId,

      question: questionText,

      option1,
      option2,
      option3,
      option4,

      correct_option: correctOption,

      explanation,
    });

    setSelectedQuestionId(newQuestionId);

    setQuestionText("");

    setOption1("");
    setOption2("");
    setOption3("");
    setOption4("");

    setCorrectOption("option1");

    setExplanation("");
  };

  const handleSaveAndContinue = async () => {
    try {
      if (!testId) {
        alert("Test ID not found");
        return;
      }

      if (questions.length === 0) {
        alert("Please add at least one question");
        return;
      }

      const payload = questions.map((q) => ({
        type: "mcq",

        question: q.question,

        option1: q.option1,
        option2: q.option2,
        option3: q.option3,
        option4: q.option4,

        correct_option: q.correct_option,

        explanation: q.explanation || "",

        difficulty: q.difficulty || "easy",
        subject: testInfo?.subject,
        test_id: testId,
      }));

      console.log("Submitting Questions:", payload);
      console.log(
        "Questions Store:",
        questions
      );
      
      console.log(
        "Payload:",
        JSON.stringify(
          {
            questions: payload,
          },
          null,
          2
        )
      );
      const response = await createBulkQuestions(payload);

      console.log("Questions Created:", response);

      navigate("/tests/publish");
    } catch (error: any) {
      console.error("Question Create Error:", error.response?.data || error);

      alert(error.response?.data?.message || "Failed to create questions");
    }
  };
  // console.log("Questions:", questions);
  // console.log("Test ID:", testId);
  const totalQuestions = testInfo?.total_questions || 50;

  const currentQuestionNumber =
    questions.length >= totalQuestions ? totalQuestions : questions.length + 1;

  useEffect(() => {
    if (questions.length > 0 && !selectedQuestionId) {
      setSelectedQuestionId(questions[0].id);
    }
  }, [questions]);
  useEffect(() => {
    console.log("Questions in store:", questions);
  }, [questions]);

  return (
    <div className={styles.page}>
      {/* Sidebar */}

      <QuestionSidebar
        questions={sidebarQuestions}
        totalQuestions={testInfo?.total_questions || 50}
        selectedQuestionId={selectedQuestionId}
        onSelectQuestion={(id) => {
          setSelectedQuestionId(id);

          const selectedQuestion = questions.find((q) => q.id === id);

          if (!selectedQuestion) return;

          setQuestionText(selectedQuestion.question);

          setOption1(selectedQuestion.option1);

          setOption2(selectedQuestion.option2);

          setOption3(selectedQuestion.option3);

          setOption4(selectedQuestion.option4);

          setCorrectOption(selectedQuestion.correct_option);

          setExplanation(selectedQuestion.explanation || "");
        }}
      />

      {/* Content */}

      <div className={styles.content}>
        {/* Header */}

        <div className={styles.topBar}>
          <div className={styles.breadcrumb}>
            Test Creation / Create Test / Chapter Wise
          </div>

          <button className={styles.publishBtn}>Publish</button>
        </div>

        {/* Summary */}
        <TestSummaryCard
          testType={testInfo?.type}
          chapter={testInfo?.name}
          difficulty={testInfo?.difficulty}
          subject={testInfo?.subject}
          topics={testInfo?.topics || []}
          subTopics={testInfo?.sub_topics || []}
          duration={testInfo?.total_time}
          questions={testInfo?.total_questions}
          marks={testInfo?.total_marks}
          onEdit={() => setIsEditOpen(true)}
        />

        <EditTestModal open={isEditOpen} onClose={() => setIsEditOpen(false)} />

        {/* Question Header */}

        <div className={styles.questionHeader}>
          <h3>
            Question {currentQuestionNumber}
            <span>/{totalQuestions}</span>
          </h3>

          <div className={styles.actions}>
            <button>+ MCQ</button>

            <button>CSV</button>
          </div>
        </div>

        {/* Question Editor */}

        <div className={styles.editorCard}>
          <textarea
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
            placeholder="Type your question here..."
          />
        </div>

        {/* Options */}

        <div className={styles.optionsSection}>
          <h4>Type the options below</h4>

          <div className={styles.optionRow}>
            <input
              type="radio"
              checked={correctOption === "option1"}
              onChange={() => setCorrectOption("option1")}
            />

            <input
              type="text"
              value={option1}
              onChange={(e) => setOption1(e.target.value)}
              placeholder="Option A"
            />
          </div>

          <div className={styles.optionRow}>
            <input
              type="radio"
              checked={correctOption === "option2"}
              onChange={() => setCorrectOption("option2")}
            />

            <input
              type="text"
              value={option2}
              onChange={(e) => setOption2(e.target.value)}
              placeholder="Option B"
            />
          </div>

          <div className={styles.optionRow}>
            <input
              type="radio"
              checked={correctOption === "option3"}
              onChange={() => setCorrectOption("option3")}
            />

            <input
              type="text"
              value={option3}
              onChange={(e) => setOption3(e.target.value)}
              placeholder="Option C"
            />
          </div>

          <div className={styles.optionRow}>
            <input
              type="radio"
              checked={correctOption === "option4"}
              onChange={() => setCorrectOption("option4")}
            />

            <input
              type="text"
              value={option4}
              onChange={(e) => setOption4(e.target.value)}
              placeholder="Option D"
            />
          </div>
        </div>

        {/* Explanation */}

        <div className={styles.explanation}>
          <label>Explanation</label>

          <textarea
            value={explanation}
            onChange={(e) => setExplanation(e.target.value)}
            placeholder="Enter explanation..."
          />
        </div>

        {/* Footer */}

        <div className={styles.footerActions}>
          <button className={styles.saveBtn} onClick={handleSaveQuestion}>
            Save Question
          </button>

          <button className={styles.nextBtn} onClick={handleSaveAndContinue}>
            Save & Continue
          </button>
        </div>
      </div>
    </div>
  );
}
