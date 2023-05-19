import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Loading from "./components/common/Loading";
import routes from "./routers";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      {useRoutes(routes())}
      {/* <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/skill" element={<SkillPage />}></Route>
        <Route path="/project" element={<ProjectPage />}></Route>
      </Routes> */}
    </Suspense>
  );
}

export default App;
