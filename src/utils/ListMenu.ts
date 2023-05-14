interface IListMenu {
  title: string;
  path: string;
  icon?: React.ReactNode;
}

export const listMenu: IListMenu[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Skill",
    path: "/skill",
  },
  {
    title: "Project",
    path: "/project",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];
