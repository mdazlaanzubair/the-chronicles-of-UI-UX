import React, { JSX } from "react";

type Props = {
  text_1: String;
  text_2?: String;
  icon_1?: JSX.Element;
  icon_2?: JSX.Element;
  className?: String;
  onClick?: () => void;
};

const FancyButton = (props: Props) => {
  return (
    <button
      className={`group relative btn overflow-hidden ${props.className}`}
      onClick={props.onClick}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center gap-2 content-center opacity-100 group-hover:opacity-0 translate-y-0 group-hover:-translate-y-full transition-all ease-in-out duration-500">
        {props.text_1}
        <span className="opacity-100 translate-x-0 group-hover:opacity-0 group-hover:translate-x-full transition-all ease-in-out duration-100">
          {props.icon_1}
        </span>
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center gap-2 content-center opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all ease-in-out duration-500 z-10">
        {props.text_2 ? props.text_2 : props.text_1}
        <span className="opacity-0 -translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-all ease-in-out duration-700">
          {props.icon_2}
        </span>
      </div>
    </button>
  );
};

export default FancyButton;
