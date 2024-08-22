import exclusive from "../../public/assets/projimages/exclusive.png";
import taskbud from "../../public/assets/projimages/taskbud.png";
import usersDashboard from "../../public/assets/projimages/usersdashboard.png";
import portfolio from "../../public/assets/projimages/portfolio.png";
export const projects = [
  {
    id: 1,

    title: "Users dashboard",
    githubLink: "https://github.com/Smartlify07/Usersdashboard",
    siteLink: "https://usersdashboard.vercel.app/",
    displayImage: usersDashboard,

    description:
      "A users dashboard to track active users on your web app, and view information about your users",
    languages: ["Javascript"],

    frameworks: ["React"],
    otherTools: ["tailwind", "firebase"],
    inProgress: false,
  },

  {
    id: 2,
    title: "Portfolio",
    description:
      "My portfolio website where I showcase all my work and other things about me",
    languages: ["Javascript"],

    githubLink: "https://github.com/Smartlify07/Usersdashboard",
    siteLink: "https://usersdashboard.vercel.app/",

    frameworks: ["React"],
    otherTools: ["tailwind"],
    inProgress: false,
    displayImage: portfolio,
  },

  {
    id: 3,
    title: "Exclusive e-commerce",
    githubLink: "https://github.com/Smartlify07/Exclusive-E-commerce/",
    siteLink: "https://exclusive-e-commerce-eight.vercel.app/",
    description:
      "Exclusive e-commerce website, showcasing various products, and allowing users add to cart and add to their wishlist",
    languages: ["JavaScript"],
    frameworks: ["React"],
    otherTools: ["tailwind", "firebase", "redux"],
    inProgress: false,
    displayImage: exclusive,
  },

  {
    id: 4,
    title: "Taskbud",
    githubLink: "https://github.com/Smartlify07/Tasky",
    siteLink: "https://taskbud-two.vercel.app/",
    languages: ["JavaScript"],
    frameworks: ["NextJs", "React"],
    otherTools: ["tailwind", "firebase"],
    inProgress: true,
    displayImage: taskbud,
    description:
      "Taskbud is a web app that allows you to seamlessly track tasks without the process being boring.",
  },
];
