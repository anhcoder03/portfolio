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
    title: "About",
    path: "/about",
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
