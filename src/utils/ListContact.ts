import IconEmail from "../components/icons/IconEmail";
import IconFacebook from "../components/icons/IconFacebook";
import IconGithub from "../components/icons/IconGithub";
import IconInstagram from "../components/icons/IconInstagram";

interface IListContact {
  icon: typeof IconGithub;
  link: string;
}

export const listContact: IListContact[] = [
  {
    icon: IconGithub,
    link: "https://github.com/anhcoder03",
  },
  {
    icon: IconFacebook,
    link: "https://facebook.com/anhcoder03",
  },
  {
    icon: IconEmail,
    link: "mailto:anhcoder03@gmail.com",
  },
  {
    icon: IconInstagram,
    link: "https://www.instagram.com/fi_anhh/",
  },
];
