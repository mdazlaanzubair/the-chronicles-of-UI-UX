import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import VersionsMenu from "./components/VersionsMenu";
import { useEffect, useRef, useState } from "react";

function App() {
  const appRef = useRef<HTMLDivElement>(null); // ✅ ref for the app container
  const [showFloatBar, setShowFloatBar] = useState<boolean>(false);

  useEffect(() => {
    const appElement = appRef.current;

    const handleScroll = () => {
      const scrollY = appElement?.scrollTop ?? 0;

      if (scrollY > 150) setShowFloatBar(true);
      else setShowFloatBar(false);
    };

    if (appElement) {
      appElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (appElement) {
        appElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div
      ref={appRef}
      className="m-0 p-0 w-full h-full overflow-auto animated-background bg-gradient-to-t from-base-100 to-base-300 scroll-smooth"
      style={{
        margin: "0 !important",
        padding: "0 !important",
        maxWidth: "100% !important",
        maxHeight: "100% !important",
      }}
    >
      <VersionsMenu />
      <main className="w-full lg:w-[500px] h-auto flex flex-col items-center justify-center overflow-x-hidden overflow-y-hidden mx-auto mb-20 lg:mt-10 bg-base-200 lg:rounded-2xl">
        <Header showFloatBar={showFloatBar} />
        <div className="w-full h-full p-2 lg:p-4 flex flex-col items-center justify-center gap-3 overflow-x-hidden overflow-y-hidden">
          <Outlet />
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
