// THIS FILE HOLD THE DYNAMIC DATA OF THIS WEBSITE
import taskVareImg from "@/public/work/taskvare-img.jpg";
import taskVareCoverImg from "@/public/work/taskvare-cover-img.jpg";
import noImage from "@/public/backgrounds/card-bg-img.jpg";
import loadeImg from "@/public/work/loade-img.jpg";
import loadeCoverImg from "@/public/work/loade-cover-img.jpg";

export const caseStudyNotFound = {
  id: 0,
  title: "Case Study Not Found",
  subTitle: "Project Management Tool",
  url: "https://www.taskvare.com/",
  imgSrc: noImage.src,
};

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
        myRole: "Frontend Development, Research & Integration",
        team: "Shebaan (Design), Maheer (Backend), Noman (Backend)",
        timeline: "Jan 2024 - Feb 2024",
        desc: {
          para1:
            "TaskVare is a web-based project and task management software designed to streamline workflows and boost team productivity. It boasts a user-friendly interface, robust features, and seamless integration with various tools. However, a critical limitation existed for organizations using Azure Active Directory (AAD) for employee data management. TaskVare lacked the ability to access and synchronize employee data directly from AAD, hindering a smooth user experience.",
          para2:
            "This case study explores the collaborative effort undertaken by a development team to bridge this gap. We successfully implemented Azure Active Directory (AAD) syncing functionality within TaskVare, allowing organizations to leverage their existing employee data structure seamlessly.",
        },
      },
      projectDesc: {
        para1:
          "A task management solution designed to streamline work processes and foster seamless teamwork within organizations. With a focus on enhancing productivity and efficiency, TaskVare offers a user-friendly platform that caters to the diverse needs of businesses seeking to optimize their project management workflows.",
        para2:
          "The platform aims to elevate efficiency by 20% and establish itself as a leading force within the industry. TaskVare is committed to collaborating closely with customers and partners to shape the future of work and deliver impactful outcomes.",
      },
      problemStatement: {
        para1:
          "Many organizations rely on Azure Active Directory for centralized user authentication and management. TaskVare, while offering exceptional project management capabilities, lacked integration with AAD. ",
        para2:
          "This meant that organizations using AAD had to manually add employee data to both platforms, creating a time-consuming and error-prone process. Additionally, maintaining data consistency across AAD and TaskVare proved challenging.",
      },
      solution: {
        para: "To achieve our goal, we opted following technologies:",
        list: [
          {
            title: "Azure Graph API",
            desc: "This Microsoft API granted us access to AAD user data, allowing us to retrieve and manipulate employee information programmatically.",
          },
          {
            title: "MSAL Library",
            desc: "The Microsoft Authentication Library (MSAL) facilitated secure authentication between TaskVare and AAD.",
          },
          {
            title: "Two-Way Data Binding",
            desc: "We implemented a two-way data binding mechanism, ensuring that any updates made to employee data within TaskVare automatically reflected in AAD, and vice versa. This eliminated the need for manual data entry and ensured consistency across both platforms.",
          },
        ],
      },
      impact: {
        para: "The successful integration of AAD syncing into TaskVare yielded significant benefits for organizations using the platform:",
        list: [
          {
            title: "Reduced Administrative Burden",
            desc: "Manual data entry for employees was eliminated, saving administrators valuable time and minimizing errors.",
          },
          {
            title: "Enhanced Data Consistency",
            desc: "Two-way data binding ensured that employee data remained consistent across AAD and TaskVare, improving data integrity and reducing the risk of discrepancies.",
          },
          {
            title: "Streamlined User Management",
            desc: "Organizations could leverage their existing AAD user structure for TaskVare, simplifying user provisioning and access control.",
          },
        ],
      },
      closingNotes: {
        para1:
          "This project exemplifies the power of collaboration and technical expertise. By strategically integrating AAD syncing into TaskVare, we empowered organizations to streamline their user management processes and enhance overall efficiency.",
        para2:
          "The success of this project reinforces the importance of staying up-to-date with the latest technologies and adapting software to accommodate evolving user needs. As a developer, I am  proud to have contributed to a solution that directly benefits our users and strengthens TaskVare's position as a leading project management platform.",
      },
    },
  },
  {
    id: 2,
    title: "Logistics and Delivery Ecosystem (LOADe)",
    subTitle: "Fleet Management & Control System",
    url: "https://loade.net/",
    imgSrc: loadeImg.src,
    isFeatured: true,
    isLocked: false,
    details: {
      coverImgSrc: loadeCoverImg.src,
      overview: {
        myRole: "Frontend Development & Integration",
        team: "Shebaan (Design), Maheer (Backend Lead), Abdul Rehman (Backend)",
        timeline: "Oct 2023 - Jan 2024",
        desc: {
          para1:
            "A revolutionary Pakistani startup, established itself as a leading force in tech-enabled logistics and delivery. Their platform offered on-demand booking for businesses requiring transportation and logistics services. However, a specific pain point emerged for clients who needed frequent deliveries to the same locations.",
          para2:
            "This case study explores the development of a new module within the LOADe platform: Fixed Vehicle Orders. This feature addressed the challenge of repetitive bookings and driver assignments for recurring deliveries.",
        },
      },
      projectDesc: {
        para1:
          "LOADe is a pioneering start-up in Pakistan, dedicated to revolutionizing the logistics and delivery sector through the implementation of cutting-edge technology. The company's focus lies in addressing the challenges within the fragmented logistics and delivery landscape, extending from the harbor to end consumers, while also catering to various business verticals seeking comprehensive platform solutions to optimize their operations.",
        para2:
          "The primary objective of LOADe is to mitigate supply-demand challenges across the entire logistics service spectrum and offer a unified platform that minimizes capital expenditure and enhances profitability for businesses.",
      },
      problemStatement: {
        para1:
          "LOADe initially functioned as a ride-hailing app for logistics, similar to Uber or Careem. Businesses could book individual deliveries, but those with frequent or recurring needs faced an inefficient process. Clients requiring deliveries to the same locations multiple times a week or month were forced to create separate requests for each instance.",
        para2:
          "Companies had to repeatedly enter delivery details, wasting valuable time and effort.",
        para3:
          "Each new request resulted in a different driver assignment, requiring repeated instructions and potentially delaying deliveries.",
        para4:
          "Monitoring driver performance and delivery schedules became increasingly cumbersome with numerous individual requests.",
      },
      solution: {
        para: "The Fixed Vehicle Orders module offers companies an alternative booking option specifically designed for recurring deliveries. Key features include:",
        list: [
          {
            title: "Quotation Management",
            desc: "Businesses can create a single quotation outlining the delivery details, such as pickup and drop-off locations, frequency, and timeframes.",
          },
          {
            title: "Dedicated Driver Assignment",
            desc: "With a fixed order, a single driver is assigned for the entire duration of the service. This fosters familiarity with the delivery route and reduces the need for repeated instructions.",
          },
          {
            title: "Driver Change Request",
            desc: "Companies can request a new driver assignment through the LOADe admin panel for unforeseen circumstances.",
          },
          {
            title: "Subscription Model",
            desc: "Businesses can choose between the existing variable order option (individual bookings) or the new fixed vehicle order module.",
          },
          {
            title: "Driver Monitoring",
            desc: "Companies can track driver attendance, check-in/check-out locations, and overall performance.",
          },
          {
            title: "Invoice Generation",
            desc: "LOADe automatically generates invoices based on the chosen subscription type and service consumption. The system supports online payments through IBFT and credit card options.",
          },
          {
            title: "Reporting",
            desc: "Companies receive monthly reports based on their subscription plan, providing valuable insights into their delivery data.",
          },
        ],
      },
      impact: {
        para: "The Fixed Vehicle Orders module has significantly improved the delivery management experience for LOADe's corporate clients. Benefits include:",
        list: [
          {
            title: "Increased Efficiency",
            desc: "Companies save time with reduced booking requirements and streamlined communication with drivers.",
          },
          {
            title: "Improved Consistency",
            desc: "Dedicated driver assignments provide a reliable delivery experience with increased familiarity with routes and client needs.",
          },
          {
            title: "Enhanced Control",
            desc: "Businesses gain greater control over their delivery operations through driver monitoring and flexible driver change requests.",
          },
          {
            title: "Simplified Billing",
            desc: "Automatic invoice generation and online payment options using PayFast to ensure a seamless financial management experience.",
          },
        ],
      },
      closingNotes: {
        para1:
          "The introduction of Fixed Vehicle Orders demonstrates LOADe's commitment to user-centric innovation. This feature empowers companies with recurring delivery needs, enhancing logistical efficiency and customer satisfaction.",
        para2:
          "As a developer, I am proud to have contributed to a solution that directly empowers businesses and strengthens LOADe's position as a leading logistics platform.",
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
