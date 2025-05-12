import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import VersionsMenu from "./components/VersionsMenu";

function App() {
  return (
    <div
      className="m-0 p-0 w-full h-full overflow-auto animated-background bg-gradient-to-t from-base-100 to-base-300 scroll-smooth"
      style={{
        margin: "0 !important",
        padding: "0 !important",
        maxWidth: "100% !important",
        maxHeight: "100% !important",
      }}
    >
      <VersionsMenu />

      <main className="w-full lg:w-[500px] h-auto flex flex-col items-center justify-center overflow-x-hidden overflow-y-hidden mx-auto my-10 bg-base-200 rounded-2xl">
        <Header />
        <div className="w-full h-full p-4 flex flex-col items-center justify-center gap-3">
          <Outlet />
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
