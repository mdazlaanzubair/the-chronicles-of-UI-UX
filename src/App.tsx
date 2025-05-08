import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router";

function App() {
  return (
    <div
      className="m-0 p-0 w-full h-full overflow-auto animated-background bg-gradient-to-t from-base-100 to-base-300"
      style={{
        margin: "0 !important",
        padding: "0 !important",
        maxWidth: "100% !important",
        maxHeight: "100% !important",
      }}
    >
      <main className="w-full lg:w-[500px] h-auto flex flex-col items-center justify-center overflow-x-hidden overflow-y-hidden mx-auto my-10 bg-base-200 rounded-2xl">
        <Header />
        <div className="w-full h-full p-4 flex flex-col items-center justify-center gap-3">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default App;
