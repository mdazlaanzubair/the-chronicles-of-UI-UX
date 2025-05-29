import { Outlet } from "react-router-dom";

const ReadPage = () => {
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
