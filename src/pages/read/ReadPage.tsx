import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { smoothScroller } from "../../utils/pageScrollers";

const ReadPage = () => {

  // hit top on page reload
  useEffect(() => smoothScroller("app-top"), []);

  return (
    <section
      id="read-page"
      className="w-full h-full m-0 p-0 flex flex-col items-center justify-start gap-3"
    >
      <Outlet />
    </section>
  );
};

export default ReadPage;
