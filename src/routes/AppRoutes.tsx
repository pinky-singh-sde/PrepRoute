import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Login</div>} />
      <Route path="/dashboard" element={<div>Dashboard</div>} />
      <Route path="/tests/create" element={<div>Create Test</div>} />
      <Route path="/tests/questions" element={<div>Questions</div>} />
      <Route path="/tests/preview" element={<div>Preview</div>} />
    </Routes>
  );
};

export default AppRoutes;