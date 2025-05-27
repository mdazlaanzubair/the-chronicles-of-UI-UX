import type { JSX } from "react";

type FooterBtnProps = {
  mode: string; // light or dark
  label: string;
  username?: string;
  classNames?: string;
  icon_1: JSX.Element;
  icon_2: JSX.Element;
  onClickHandler: () => void;
};

const FooterBtn = (props: FooterBtnProps) => {
  return (
    <button
      className={`group relative btn btn-block h-full overflow-hidden py-4 border-transparent shadow-none ${
        props.mode === "light"
          ? "bg-base-100 text-base-content"
          : "bg-base-content text-base-200"
      } ${props.classNames}`}
      onClick={props.onClickHandler}
    >
      <div className="grow text-left flex flex-col">
        <span className="text-[12px] font-medium">{props.label}</span>
        {props.username && (
          <span className="text-[10px] font-light text-base-content/50 group-hover:text-accent transition-all ease-in-out duration-300">
            {"@" + props.username}
          </span>
        )}
      </div>
      {props.icon_1 && (
        <div className="absolute text-xl w-5 top-0 right-3 bottom-0 flex items-center justify-center gap-2 content-center opacity-100 group-hover:opacity-0 translate-y-0 group-hover:-translate-y-full transition-all ease-in-out duration-500">
          {props.icon_1}
        </div>
      )}
      {props.icon_2 && (
        <div className="absolute text-xl w-5 top-0 right-3 bottom-0 flex items-center justify-center gap-2 content-center opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all ease-in-out duration-500 z-10">
          {props.icon_2}
        </div>
      )}
    </button>
  );
};

export default FooterBtn;
