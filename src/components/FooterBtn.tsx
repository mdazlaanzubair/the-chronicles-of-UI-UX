import type { JSX } from "react";

type FooterBtnProps = {
  mode: string; // light or dark
  label: string;
  icon_1: JSX.Element;
  icon_2: JSX.Element;
  onClickHandler: () => void;
};

const FooterBtn = (props: FooterBtnProps) => {
  return (
    <button
      className={`group relative btn btn-block h-full overflow-hidden py-4 border-transparent 
        ${
          props.mode === "light"
            ? "bg-base-100 text-base-content"
            : "bg-base-content text-base-200"
        }`}
      onClick={props.onClickHandler}
    >
      <span className="text-[12px] mr-auto font-medium">{props.label}</span>
      {props.icon_1 && (
        <div className="absolute w-5 top-0 right-3 bottom-0 flex items-center justify-center gap-2 content-center opacity-100 group-hover:opacity-0 translate-y-0 group-hover:-translate-y-full transition-all ease-in-out duration-500">
          {props.icon_1}
        </div>
      )}
      {props.icon_2 && (
        <div className="absolute w-5 top-0 right-3 bottom-0 flex items-center justify-center gap-2 content-center opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all ease-in-out duration-500 z-10">
          {props.icon_2}
        </div>
      )}
    </button>
  );
};

export default FooterBtn;
