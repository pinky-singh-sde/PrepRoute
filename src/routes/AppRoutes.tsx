import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import TestCreation from "../pages/TestCreation/TestCreation";
import QuestionManagement from "../pages/QuestionManagement/QuestionManagement";
import PublishTest from "../pages/PublishTest/PublishTest";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/tests/create" element={<TestCreation />} />
      <Route
        path="/tests/questions"
        element={<QuestionManagement />}
      />
      
<Route
  path="/tests/publish"
  element={<PublishTest />}
/>
      <Route path="/tests/preview" element={<div>Preview</div>} />
    </Routes>
  );
};

export default AppRoutes;

