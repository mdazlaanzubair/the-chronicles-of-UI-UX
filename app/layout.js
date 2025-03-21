import "./globals.css";
import SideBar from "./components/navigation/SideBar";
import Footer from "./components/generic/Footer";
import GeneralProvider from "./context/GeneralContext";
import { Red_Hat_Display, Inter } from "next/font/google";

const display = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--display",
  weight: "variable",
});

const inter = Inter({ subsets: ["latin"], variable: "--inter" });

export const metadata = {
  title: "Muhammad Azlaan Zubair - Portfolio Website",
  description:
    "This website showcases my skills as a web developer and designer. I have experience with a variety of programming languages and technologies, and I am always looking for new challenges. I offer here services that matters and you need. I offer here cheap services. Looking for a freelancer, I'm here to help.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="text-primary bg-base-300">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${display.variable} ${inter.variable}`}>
        <GeneralProvider>
          <main className="font-inter relative flex flex-col items-center bg-base-300 w-full h-[100vh] lg:px-28 p-5 overflow-hidden">
            <SideBar />
            <div className="view-port-container w-full h-full bg-base-100/35 scroll-smooth">
              <div className="relative w-full h-auto">{children}</div>
              <Footer />
            </div>
          </main>
        </GeneralProvider>
      </body>
    </html>
  );
}
