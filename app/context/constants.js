// THIS FILE HOLD THE DYNAMIC DATA OF THIS WEBSITE
import taskVareImg from "@/public/work/taskvare-img.jpg";
import taskVareCoverImg from "@/public/work/taskvare-cover-img.jpg";
import noImage from "@/public/backgrounds/card-bg-img.jpg";
import loadeImg from "@/public/work/loade-img.jpg";
import loadeCoverImg from "@/public/work/loade-cover-img.jpg";

export const workListData = [
  {
    id: 1,
    title: "TaskVare",
    subTitle: "Project Management Tool",
    url: "https://www.taskvare.com/",
    imgSrc: taskVareImg.src,
    isFeatured: true,
    isLocked: false,
    details: {
      coverImgSrc: taskVareCoverImg.src,
      overview: {
        myRole: "Frontend Development, Azure Research & Integration",
        team: "Shebaan (Design), Maheer (Backend), Noman (Backend)",
        timeline: "Jan 2024 - Feb 2024",
        desc: {
          para1:
            "This project involved integrating Azure Active Directory (AAD) syncing functionality into TaskVare, a web-based project and task management software. TaskVare boasts a user-friendly interface and robust features, but lacked the ability to seamlessly connect with existing AAD employee data within organizations.",
          para2:
            "Our solution bridged this gap, enhancing TaskVare's functionality and streamlining data management for its users.",
        },
      },
      projectDesc: {
        para1:
          "TaskVare empowers teams to stay organized and achieve project goals with features like task tracking, team performance analysis, and customizable dashboards. However, many organizations using TaskVare also rely on AAD for employee data management. ",
        para2:
          "The inability to synchronize data between these two platforms created a cumbersome workflow for adding, updating, and managing employee information.",
      },
      problemStatement: {
        para1:
          "Organizations using both TaskVare and AAD faced challenges in maintaining consistent employee data across both platforms. Manually adding and updating employee information in each system was time-consuming and prone to errors. ",
        para2:
          "This inefficiency hindered productivity and could lead to data inconsistencies, impacting user experience and potentially causing administrative headaches.",
      },
      solution: {
        para1:
          "We developed and implemented a feature that enables seamless synchronization between TaskVare and AAD. This functionality leverages the Azure Graph API along with the MSAL library.",
        para2:
          "We implemented two-way data binding, ensuring that any updates made to employee information in TaskVare are automatically reflected in AAD, and vice versa.",
      },
      impact: {
        para1:
          "The integration of AAD syncing into TaskVare delivers significant benefits to organizations. Admins can now effortlessly add, update, and manage employee data within a single platform, eliminating the need for manual data entry in both TaskVare and AAD.",
        para2:
          "Two-way data binding ensures data consistency across both platforms, minimizing errors and discrepancies.",
        para3:
          "Streamlined data management reduces administrative burden and frees up valuable time for teams to focus on core tasks.",
      },
      closingNotes: {
        para1:
          "The successful integration of AAD syncing into TaskVare provides a valuable solution for organizations seeking a more efficient and streamlined approach to employee data management.",
        para2:
          "Looking ahead, we envision further enhancements like user-defined data mapping options and the ability to synchronize additional data points between TaskVare and AAD, further optimizing workflows and user experience.",
      },
    },
  },
  {
    id: 2,
    title: "LOADe",
    subTitle: "Fleet Control & Delivery Ecosystem",
    url: "https://loade.net/",
    imgSrc: loadeImg.src,
    isFeatured: false,
    isLocked: true,
    details: {
      coverImgSrc: loadeCoverImg.src,
      overview: {
        myRole: "Frontend Developer, API Integrator",
        team: "Shebaan (Design), Maheer (Backend Lead), Abdul Rehman (Backend Developer)",
        timeline: "Oct 2023 - Jan 2024",
        desc: {
          para1: "",
        },
      },
      projectDesc: {
        para1: "",
      },
      problemStatement: {
        para1: "",
      },
      solution: {
        para1: "",
      },
      impact: {
        para1: "",
      },
      closingNotes: {
        para1: "",
      },
    },
  },
  {
    id: 3,
    title: "TalentVare",
    subTitle: "Workforce Management Tool",
    url: "https://www.talentvare.com/",
    imgSrc: noImage.src,
    isFeatured: false,
    isLocked: true,
    details: {
      coverImgSrc: taskVareCoverImg.src,
      overview: {
        myRole: "Frontend Developer, API Integrator",
        team: "Shebaan (Design), Musaddiq (Frontend Lead), Maheer (Backend Lead), Noman (Backend Developer)",
        timeline: "Mar 2024 - May 2024",
        desc: {
          para1: "",
        },
      },
      projectDesc: {
        para1: "",
      },
      problemStatement: {
        para1: "",
      },
      solution: {
        para1: "",
      },
      impact: {
        para1: "",
      },
      closingNotes: {
        para1: "",
      },
    },
  },
];

export const projectListData = [
  {
    id: 1,
    title: "Fleet Coordination",
    subTitle: "Transport and Delivery Infrastructure",
    imgSrc: loadeImg.src,
    isFeatured: true,
    isLocked: false,
    details: {
      coverImgSrc: loadeCoverImg.src,
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
];
