import HomePage from "../../pages/HomePage";
import ProjectPage from "../../pages/ProjectPage";
import SkillPage from "../../pages/SkillPage";

export default [
  { path: "/", element: <HomePage /> },
  { path: "/skill", element: <SkillPage /> },
  { path: "/project", element: <ProjectPage /> },
];
