import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const AboutPage = React.lazy(() => import("./pages/AboutPage"));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
