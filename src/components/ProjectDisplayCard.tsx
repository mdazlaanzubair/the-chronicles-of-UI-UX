import { useNavigate } from "react-router-dom";

type Props = {
  id: number;
  title: string;
  imgSrc: string;
  type: string;

  index?: number;
};

const ProjectDisplayCard = ({ title, imgSrc, id, type }: Props) => {
  const navigate = useNavigate();

  return (
    <div
      className="group relative flex flex-col items-center justify-center w-full h-[356px] max-h-[356px] gap-3 overflow-hidden cursor-pointer"
      title={`${title} Case Study`}
    >
      <div className="w-full h-full rounded-2xl overflow-hidden border-4 border-base-100">
        <img
          className="w-full h-full object-cover"
          src={imgSrc}
          alt={title + " image"}
          title={title}
        />
      </div>
      <div className="opacity-0 group-hover:opacity-100 absolute bottom-0 border-4 border-base-100 right-0 w-full h-full p-1 flex items-center backdrop-blur-md z-10 rounded-2xl transition-all ease-in-out duration-300"></div>
      <div className="group opacity-0 group-hover:opacity-100 -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 absolute top-0 left-0 rounded-tl-lg rounded-br-lg bg-base-100 border-4 border-base-100 w-fit flex flex-wrap items-center justify-center gap-3 py-1 px-3 z-10 transition-all ease-in-out duration-300">
        <h1 className="text-[12px] font-bold leading-relaxed tracking-wide">
          {title}
        </h1>
      </div>
      <button
        onClick={() => navigate(`/work/read/${type}/${id}`)}
        className="opacity-0 group-hover:opacity-100 absolute top-1/2 lef-1/2 group-hover:-translate-y-1/2 btn btn-sm btn-neutral z-20 transition-all ease-in-out duration-300"
        title={`${title} Case Study`}
      >
        Read
      </button>
    </div>
  );
};

export default ProjectDisplayCard;
