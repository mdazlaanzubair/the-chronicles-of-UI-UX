import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import VersionsMenu from "./components/VersionsMenu";
import { useEffect, useState } from "react";
import { DarkModeProvider } from "./provider/DarkModeProvider";
import LoadingTerminal from "./components/LoadingTerminal";

function App() {
  const [showFloatBar, setShowFloatBar] = useState<boolean>(false);
  const [showLoader, setShowLoader] = useState<boolean>(true);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setShowFloatBar(scrollTop > 150);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  return (
    <DarkModeProvider>
      <div
        id="app-top"
        className="m-0 p-0 w-full h-full overflow-auto animated-background bg-gradient-to-t from-base-100 to-base-300 scroll-smooth"
        style={{
          margin: "0 !important",
          padding: "0 !important",
          maxWidth: "100% !important",
          maxHeight: "100% !important",
        }}
      >
        <VersionsMenu />
        <main
          className="w-full lg:w-[500px] h-auto flex flex-col items-center justify-center overflow-x-hidden overflow-y-hidden mx-auto mb-20 lg:mt-10 bg-base-200 lg:rounded-2xl"
        >
          <Header showFloatBar={showFloatBar} scrollProgress={scrollProgress} />
          <div className="w-full h-full p-2 lg:p-4 flex flex-col items-center justify-center gap-3 overflow-x-hidden overflow-y-hidden">
            <Outlet />
            <Footer />
          </div>
        </main>
      </div>

      {(location.pathname === "/" || location.pathname === "/home") &&
      showLoader ? (
        <LoadingTerminal setShowLoader={setShowLoader} />
      ) : null}
    </DarkModeProvider>
  );
}

export default App;
