import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/common/Loading";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const SkillPage = React.lazy(() => import("./pages/SkillPage"));
const ProjectPage = React.lazy(() => import("./pages/ProjectPage"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/skill" element={<SkillPage />}></Route>
        <Route path="/project" element={<ProjectPage />}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
