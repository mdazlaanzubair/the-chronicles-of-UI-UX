import taskVareBg from "@/public/work/taskvare-bg.jpg";
import taskVareLogo from "@/public/work/taskvare-logo.svg";
import talentVareBg from "@/public/work/talentvare-bg.jpg";
import talentVareLogo from "@/public/work/talentvare-logo.svg";
import loadeLogo from "@/public/work/loade-logo.png";
import loadeBg from "@/public/work/loade-bg.jpg";

export const projectList = [
  {
    title: "Fleet Coordination",
    subTitle: "Transport and Delivery Infrastructure",
    bgSrc: loadeBg.src,
    mainSrc: loadeLogo.src,
    isFeatured: true,
    isLocked: false,
  },
  {
    title: "Postman AI",
    subTitle: "AI Social Media Manager",
    bgSrc: talentVareBg.src,
    mainSrc: talentVareLogo.src,
    isFeatured: true,
    isLocked: true,
  },
  {
    title: "Work Organizing Tool",
    subTitle: "Project & Task Management Solution",
    bgSrc: taskVareBg.src,
    mainSrc: taskVareLogo.src,
    isFeatured: true,
    isLocked: false,
  },
];
