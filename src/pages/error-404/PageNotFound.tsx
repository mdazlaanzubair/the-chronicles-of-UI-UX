import error_404 from "../../assets/other/404.jpg";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { smoothScroller } from "../../utils/pageScrollers";

const PageNotFound = () => {
  const navigate = useNavigate();

  // hit top on page reload
  useEffect(() => smoothScroller("app-top"), []);

  return (
    <section
      id="page-not-found"
      className="w-full h-full m-0 p-0 flex flex-col items-center justify-center gap-3"
    >
      <div className={`flex flex-col items-center justify-center gap-3`}>
        <p className="flex w-full items-center justify-start text-[10px] text-base-content/60 gap-3">
          <strong className="px-2 py-1 rounded text-base-content/40 bg-base-100 border-2 border-base-300 uppercase font-bold">
            Error Page
          </strong>
          <span className="mt-px mb-px font-semibold">
            The page you're requesting doesn't exist
          </span>
        </p>
        <div className="ring-2 ring-base-300 rounded-lg overflow-hidden">
          <img
            className="w-full h-full object-center object-cover"
            src={error_404}
            alt="page not found image"
          />
        </div>
      </div>
      <button
        onClick={() => navigate(`/`)}
        className="opacity-0 group-hover:opacity-100 absolute top-1/2 lef-1/2 group-hover:-translate-y-1/2 btn btn-sm btn-neutral z-20 transition-all ease-in-out duration-300"
        title={`Back to home`}
      >
        Go back
      </button>
    </section>
  );
};

export default PageNotFound;
