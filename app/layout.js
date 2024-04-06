import "./globals.css";
import SideBar from "./components/navigation/SideBar";
import Header from "./components/generic/Header";
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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="text-primary bg-base-300">
      <body className={`${display.variable} ${inter.variable}`}>
        <GeneralProvider>
          <main className="font-inter flex flex-col lg:flex-row items-center bg-base-300 w-full h-[100vh] gap-5 p-3 lg:p-10 overflow-hidden">
            <SideBar />
            <Header />
            <div className="view-port-container w-full h-full lg:w-10/12 bg-base-100/35 scroll-smooth">
              <div className="relative w-full h-full">{children}</div>
              <Footer />
            </div>
          </main>
        </GeneralProvider>
      </body>
    </html>
  );
}
