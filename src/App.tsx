import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = React.lazy(() => import("./pages/HomePage"));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
