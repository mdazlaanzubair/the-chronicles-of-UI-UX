// TECH COMPANIES LOGO
import bardLogo from "@/public/tech-logos/bard.svg";
import bootstrapLogo from "@/public/tech-logos/bootstrap.svg";
import bulmaLogo from "@/public/tech-logos/bulma.svg";
import chatgptLogo from "@/public/tech-logos/chatgpt.svg";
import djangoLogo from "@/public/tech-logos/django.svg";
import figmaLogo from "@/public/tech-logos/figma.svg";
import flaskLogo from "@/public/tech-logos/flask.svg";
import githubLogo from "@/public/tech-logos/github.svg";
import illustratorLogo from "@/public/tech-logos/illustrator.svg";
import materialUiLogo from "@/public/tech-logos/material-ui.svg";
import mongodbLogo from "@/public/tech-logos/mongodb.svg";
import nextJsLogo from "@/public/tech-logos/next-js.svg";
import nodeJsLogo from "@/public/tech-logos/nodejs.svg";
import photoshopLogo from "@/public/tech-logos/photoshop.svg";
import pythonLogo from "@/public/tech-logos/python.svg";
import reactJsLogo from "@/public/tech-logos/react-js.svg";
import reduxLogo from "@/public/tech-logos/redux.svg";
import tailwindCssLogo from "@/public/tech-logos/tailwind-css.svg";
import viteJsLogo from "@/public/tech-logos/vitejs.svg";
import vsCodeLogo from "@/public/tech-logos/vs-code.svg";

// EXPORTING ALL LOGOS IN OBJECT FORM
export const techLogos = {
  bard: bardLogo,
  bootstrap: bootstrapLogo,
  bulma: bulmaLogo,
  chatgpt: chatgptLogo,
  django: djangoLogo,
  figma: figmaLogo,
  flask: flaskLogo,
  github: githubLogo,
  illustrator: illustratorLogo,
  materialUi: materialUiLogo,
  mongodb: mongodbLogo,
  nextJs: nextJsLogo,
  nodeJs: nodeJsLogo,
  photoshop: photoshopLogo,
  python: pythonLogo,
  reactJs: reactJsLogo,
  redux: reduxLogo,
  tailwindCss: tailwindCssLogo,
  viteJs: viteJsLogo,
  vsCode: vsCodeLogo,
};

// ONLY MOST USED LOGO EXPORT
export const toolKit = [
  { src: techLogos.reactJs.src, title: "React JS" },
  { src: techLogos.nextJs.src, title: "Next JS" },
  { src: techLogos.nodeJs.src, title: "Node JS" },
  { src: techLogos.mongodb.src, title: "Mongo DB" },
  { src: techLogos.tailwindCss.src, title: "Tailwind CSS" },
  { src: techLogos.github.src, title: "GitHub" },
  { src: techLogos.vsCode.src, title: "VS Code" },
  { src: techLogos.python.src, title: "Python" },
];

// EXPORTING ALL TECH LOGOS FOR TECH SPHERE WITH THEIR RELEVANT TITLE
export const tech_sphere_logos = [
  {
    url: "https://bard.google.com/chat/0c67df6de6a0cc20",
    tooltip: "Bard",
    image: bardLogo.src,
    target: "_blank",
    width: "50",
    height: "50",
  },
  {
    url: "https://getbootstrap.com",
    tooltip: "Bootstrap",
    image: bootstrapLogo.src,
    target: "_blank",
    width: "50",
    height: "50",
  },
  {
    url: "https://bulma.io",
    tooltip: "Bulma",
    image: bulmaLogo.src,
    target: "_blank",
    width: "50",
    height: "50",
  },
  {
    url: "https://openai.com",
    tooltip: "Chatgpt",
    image: chatgptLogo.src,
    target: "_blank",
    width: "50",
    height: "50",
  },
  {
    url: "https://www.djangoproject.com",
    tooltip: "Django",
    image: djangoLogo.src,
    target: "_blank",
    width: "50",
    height: "50",
  },
  {
    url: "https://www.figma.com",
    tooltip: "Figma",
    image: figmaLogo.src,
    target: "_blank",
    width: "50",
    height: "50",
  },
  {
    url: "https://flask.palletsprojects.com",
    tooltip: "Flask",
    image: flaskLogo.src,
    target: "_blank",
    width: "50",
    height: "50",
  },
  {
    url: "https://github.com",
    tooltip: "Github",
    image: githubLogo.src,
    target: "_blank",
    width: "50",
    height: "50",
  },
  {
    url: "https://www.adobe.com/products/illustrator.html",
    tooltip: "Illustrator",
    image: illustratorLogo.src,
    target: "_blank",
    width: "50",
    height: "50",
  },
  {
    url: "https://material-ui.com",
    tooltip: "Material UI",
    image: materialUiLogo.src,
    target: "_blank",
    width: "50",
    height: "50",
  },
  {
    url: "https://www.mongodb.com",
    tooltip: "Mongodb",
    image: mongodbLogo.src,
    target: "_blank",
    width: "50",
    height: "50",
  },
  {
    url: "https://nextjs.org",
    tooltip: "Next JS",
    image: nextJsLogo.src,
    target: "_blank",
    width: "50",
    height: "50",
  },
  {
    url: "https://nodejs.org",
    tooltip: "Node JS",
    image: nodeJsLogo.src,
    target: "_blank",
    width: "50",
    height: "50",
  },
  {
    url: "https://www.adobe.com/products/photoshop.html",
    tooltip: "Photoshop",
    image: photoshopLogo.src,
    target: "_blank",
    width: "50",
    height: "50",
  },
  {
    url: "https://www.python.org",
    tooltip: "Python",
    image: pythonLogo.src,
    target: "_blank",
    width: "50",
    height: "50",
  },
  {
    url: "https://reactjs.org",
    tooltip: "React JS",
    image: reactJsLogo.src,
    target: "_blank",
    width: "50",
    height: "50",
  },
  {
    url: "https://redux.js.org",
    tooltip: "Redux",
    image: reduxLogo.src,
    target: "_blank",
    width: "50",
    height: "50",
  },
  {
    url: "https://tailwindcss.com",
    tooltip: "Tailwind Css",
    image: tailwindCssLogo.src,
    target: "_blank",
    width: "50",
    height: "50",
  },
  {
    url: "https://vitejs.dev",
    tooltip: "Vite JS",
    image: viteJsLogo.src,
    target: "_blank",
    width: "50",
    height: "50",
  },
  {
    url: "https://code.visualstudio.com",
    tooltip: "Vs Code",
    image: vsCodeLogo.src,
    target: "_blank",
    width: "50",
    height: "50",
  },
];

// EXPORTING LIST OF ALL LOGO
export const techLogosArrayComplete = [
  { src: bardLogo.src, title: "Bard" },
  { src: bootstrapLogo.src, title: "Bootstrap" },
  { src: bulmaLogo.src, title: "Bulma" },
  { src: chatgptLogo.src, title: "ChatGPT" },
  // { src: djangoLogo.src, title: "Django" },
  // { src: figmaLogo.src, title: "Figma" },
  // { src: flaskLogo.src, title: "Flask" },
  // { src: githubLogo.src, title: "GitHub" },
  { src: illustratorLogo.src, title: "Illustrator" },
  { src: materialUiLogo.src, title: "Material-UI" },
  { src: mongodbLogo.src, title: "MongoDB" },
  { src: nextJsLogo.src, title: "Next.js" },
  { src: nodeJsLogo.src, title: "Node.js" },
  { src: photoshopLogo.src, title: "Photoshop" },
  { src: pythonLogo.src, title: "Python" },
  { src: reactJsLogo.src, title: "React" },
  { src: reduxLogo.src, title: "Redux" },
  { src: tailwindCssLogo.src, title: "Tailwind CSS" },
  { src: viteJsLogo.src, title: "ViteJS" },
  { src: vsCodeLogo.src, title: "VS Code" },
];
