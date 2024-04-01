import React from "react";

const ToolTip = ({ tooltip, children }) => {
  return (
    <div className="group relative inline-block cursor-pointer">
      {children}
      <span className="absolute font-semibold z-10 -top-10 left-1/2 -translate-x-1/2 invisible group-hover:visible opacity-0 group-hover:opacity-100 rounded-lg px-5 py-1 text-base text-accent bg-base-300 transition-all ease-in-out duration-300 whitespace-nowrap">
        {tooltip}
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-base-300 w-3 h-3 rotate-45"></span>
      </span>
    </div>
  );
};

export default ToolTip;
