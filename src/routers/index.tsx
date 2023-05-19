import publicRoutes from "./publicRoutes";

const publicRoute = publicRoutes.map(({ path, element }) => ({
  path,
  element,
}));

const routes = () => [...publicRoute];

export default routes;
