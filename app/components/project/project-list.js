import taskVareImg from "@/public/work/taskvare-img.jpg";
import taskVareCoverImg from "@/public/work/taskvare-cover-img.jpg";
import socialMediaBotImg from "@/public/projects/social-media-bot.jpg";
import loadeImg from "@/public/work/loade-img.jpg";

export const projectList = [
  {
    id: 1,
    title: "Fleet Coordination",
    subTitle: "Transport and Delivery Infrastructure",
    imgSrc: loadeImg.src,
    isFeatured: true,
    isLocked: false,
    details: {
      coverImgSrc: taskVareCoverImg.src,
      overview: {
        myRole: "Frontend Developer, API Integrator",
        techUsed: "React, Open AI, Mongo DB, Python, Django",
        team: "Shebaan - Design, Maheer - Backend",
        timeline: "October 2023 - January 2024",
        projectDesc: {
          para1:
            "Newton School is an Indian ed-tech startup that focuses on building a futuristic online university. Their goal is to offer a highly immersive and interactive learning path to millions of students, enabling them to tap into new-age tech opportunities. They achieve this by offering paid tech courses and providing free products for coding and interview practice for public use.",
          para2:
            "In my role, I initiated and led a comprehensive redesign of the entire product's navigation, addressing a crucial element that was causing user friction at various stages.",
        },
      },
    },
  },
  {
    id: 2,
    title: "Postman AI",
    subTitle: "AI Social Media Manager",
    imgSrc: socialMediaBotImg.src,
    isFeatured: true,
    isLocked: false,
  },
  {
    id: 3,
    title: "Work Organizing Tool",
    subTitle: "Project & Task Management Solution",
    imgSrc: taskVareImg.src,
    isFeatured: true,
    isLocked: false,
  },
  {
    id: 4,
    title: "Fleet Coordination",
    subTitle: "Transport and Delivery Infrastructure",
    imgSrc: loadeImg.src,
    isFeatured: false,
    isLocked: false,
  },
  {
    id: 5,
    title: "Postman AI",
    subTitle: "AI Social Media Manager",
    imgSrc: socialMediaBotImg.src,
    isFeatured: false,
    isLocked: false,
  },
  {
    id: 6,
    title: "Work Organizing Tool",
    subTitle: "Project & Task Management Solution",
    imgSrc: taskVareImg.src,
    isFeatured: false,
    isLocked: false,
  },
];
