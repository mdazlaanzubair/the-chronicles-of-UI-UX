import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { case_studies } from "../../utils/constant_export";

const ReadCaseStudyPage = () => {
  let { id } = useParams();
  const navigate = useNavigate();

  const [readData, setReadData] = useState<object | null>();

  useEffect(() => {
    const parsedId = parseInt(id || "", 10);

    // redirect if id is not a number
    if (isNaN(parsedId)) {
      console.warn("Invalid ID:", id);
      navigate("/work");
      return;
    }

    // extracting data from list
    const data = case_studies.filter((item) => item.id === parsedId);

    // if no data redirect
    if (data.length <= 0) {
      console.warn("No data found for ID:", id);
      navigate("/work");
      return;
    }

    setReadData(data[0]);
  }, [id]);

  if (!readData) {
    console.log("Redirecting...");
    navigate("/work");
  } else {
    return (
      <section
        id="read-page"
        className="w-full h-full m-0 p-0 flex flex-col items-center justify-start gap-3"
      >
        <div
          id="project-overview"
          className="relative w-full h-auto flex flex-col justify-between p-5 bg-base-100 rounded-lg border overflow-hidden border-base-300"
        >
          <h1 className="text-[32px] font-light mb-3">ReadCaseStudyPage</h1>
          <p className="text-base-content/60 text-[16px] font-light mb-3 leading-relaxed tracking-wide">
            I craft web to{" "}
            <span className="text-base-content font-medium">
              establish your online presence
            </span>
            . I'm a <br />
            software engineer, specialized in{" "}
            <span className="text-base-content font-medium">
              building &amp; designing <br /> things for the web
            </span>
            .
          </p>
          <p className="text-base-content/60 text-[16px] font-light leading-relaxed tracking-tight">
            Constantly pushing the boundaries of web development. I offer{" "}
            <span className="text-base-content font-medium">
              User-Centric Solutions
            </span>{" "}
            with{" "}
            <span className="text-base-content font-medium">
              Pixel-Powered Innovation
            </span>
            .
          </p>
        </div>
      </section>
    );
  }
};

export default ReadCaseStudyPage;
