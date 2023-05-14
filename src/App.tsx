import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const SkillPage = React.lazy(() => import("./pages/SkillPage"));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/skill" element={<SkillPage />}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
