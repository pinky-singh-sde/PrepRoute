import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import TestCreation from "../pages/TestCreation/TestCreation";
import QuestionManagement from "../pages/QuestionManagement/QuestionManagement";
import PublishTest from "../pages/PublishTest/PublishTest";

import QuestionLayout from "../components/layout/QuestionLayout/QuestionLayout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/tests/create"
        element={<TestCreation />}
      />

      <Route
        path="/tests/questions"
        element={
          <QuestionLayout>
            <QuestionManagement />
          </QuestionLayout>
        }
      />

      <Route
        path="/tests/publish"
        element={
          <QuestionLayout>
            <PublishTest />
          </QuestionLayout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;