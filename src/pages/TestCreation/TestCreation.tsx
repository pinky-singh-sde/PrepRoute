import { MainLayout } from "../../components/layout";
import {
  Input,
  Select,
  Radio,
  Button,
  NumberInput,
} from "../../components/common";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  getSubjects,
  getTopicsBySubject,
  getSubTopics,
} from "../../services/subject.service";

import { createTest } from "../../services/test.service";

import { useTestStore } from "../../store/testStore";
import styles from "./TestCreation.module.scss";

export default function TestCreation() {
  const [activeTab, setActiveTab] = useState("chapter");

  const [difficulty, setDifficulty] = useState("easy");
  const navigate = useNavigate();
  const {
    setTestId,
    setTestInfo,
  } = useTestStore();
  // const setTestId = useTestStore((state) => state.setTestId);

  const [subjects, setSubjects] = useState<any[]>([]);
  const [topics, setTopics] = useState<any[]>([]);
  const [subTopics, setSubTopics] = useState<any[]>([]);

  const [selectedSubject, setSelectedSubject] = useState("");

  const [selectedTopic, setSelectedTopic] = useState("");

  const [selectedSubTopic, setSelectedSubTopic] = useState("");

  const [testName, setTestName] = useState("");

  const [duration, setDuration] = useState("");

  const [totalQuestions, setTotalQuestions] = useState("");

  const [totalMarks, setTotalMarks] = useState("");

  const [loading, setLoading] = useState(false);
  const testTypeMap = {
    chapter: "chapterwise",
    pyq: "pyq",
    mock: "mock",
  };
  useEffect(() => {
    fetchSubjects();
  }, []);

  const fetchSubjects = async () => {
    try {
      const response = await getSubjects();

      setSubjects(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubjectChange = async (subjectId: string) => {
    setSelectedSubject(subjectId);

    try {
      const response = await getTopicsBySubject(subjectId);

      setTopics(response.data);
      setSubTopics([]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleTopicChange = async (topicId: string) => {
    setSelectedTopic(topicId);

    try {
      const response = await getSubTopics([topicId]);

      setSubTopics(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  const handleCreateTest = async () => {
    try {
      setLoading(true);
  
      const payload = {
        name: testName,
  
        type: testTypeMap[
          activeTab as keyof typeof testTypeMap
        ],
  
        subject: selectedSubject,
  
        topics: [selectedTopic],
  
        sub_topics: [selectedSubTopic],
  
        correct_marks: 5,
  
        wrong_marks: -1,
  
        unattempt_marks: 0,
  
        difficulty,
  
        total_time: Number(duration),
  
        total_marks: Number(totalMarks),
  
        total_questions: Number(totalQuestions),
  
        status: "draft",
      };
  
      // console.log("Payload:", payload);
  
      const response =
        await createTest(payload);
  
      console.log(
        "Create Test Response:",
        response
      );

      setTestId(
        response.data.id
      );
      const subjectName =
  subjects.find(
    (s) => s.id === selectedSubject
  )?.name || "";

const topicName =
  topics.find(
    (t) => t.id === selectedTopic
  )?.name || "";

const subTopicName =
  subTopics.find(
    (s) => s.id === selectedSubTopic
  )?.name || "";
      
  setTestInfo({
    ...response.data,
  
    subject: subjectName,
  
    topics: [topicName],
  
    sub_topics: [subTopicName],
  
    difficulty,
  
    total_time: Number(duration),
  
    total_marks: Number(totalMarks),
  
    total_questions:
      Number(totalQuestions),
  
    name: testName,
  
    type:
      testTypeMap[
        activeTab as keyof typeof testTypeMap
      ],
  });
  
     
  
      navigate("/tests/questions");
    } catch (error: any) {
      console.log(
        "Status:",
        error.response?.status
      );
  
      console.log(
        "Backend Error:",
        error.response?.data
      );
  
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

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
          {/* <Select label="Subject" options={[]} />
           */}

          <Select
            label="Subject"
            value={selectedSubject}
            onChange={(e) => handleSubjectChange(e.target.value)}
            options={subjects.map((subject) => ({
              label: subject.name,
              value: subject.id,
            }))}
          />
          <Input
            label="Name of Test"
            placeholder="Enter name of Test"
            value={testName}
            onChange={(e) => setTestName(e.target.value)}
          />
          {/* <Input label="Name of Test" placeholder="Enter name of Test" /> */}

          {/* <Select label="Topic" options={[]} /> */}
          <Select
            label="Topic"
            value={selectedTopic}
            onChange={(e) => handleTopicChange(e.target.value)}
            options={topics.map((topic) => ({
              label: topic.name,
              value: topic.id,
            }))}
          />

          {/* <Select label="Sub Topic" options={[]} /> */}
          <Select
            label="Sub Topic"
            value={selectedSubTopic}
            onChange={(e) => setSelectedSubTopic(e.target.value)}
            options={subTopics.map((subTopic) => ({
              label: subTopic.name,
              value: subTopic.id,
            }))}
          />

          <Input
            label="Duration (Minutes)"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
          {/* <Input label="Duration (Minutes)" placeholder="Enter the time" /> */}

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

            {/* <Input label="No of Questions" placeholder="Ex:250 Marks" /> */}
            <Input
              label="No of Questions"
              value={totalQuestions}
              onChange={(e) => setTotalQuestions(e.target.value)}
            />
            {/* <Input label="Total Marks" placeholder="Ex:250 Marks" /> */}
            <Input
              label="Total Marks"
              value={totalMarks}
              onChange={(e) => setTotalMarks(e.target.value)}
            />
          </div>
        </div>

        {/* Actions */}

        <div className={styles.actions}>
          <Button variant="secondary">Cancel</Button>

          {/* <Button>Next</Button> */}
          <Button onClick={handleCreateTest}>
            {loading ? "Creating..." : "Next"}
          </Button>
        </div>
      </div>
    </MainLayout>
  );
}
