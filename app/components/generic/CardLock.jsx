import React from "react";

const CardLock = () => {
  return (
    <div className="absolute opacity-50 group-hover:opacity-100 flex flex-col items-center rounded-md justify-center z-10 top-0 bottom-0 left-0 right-0 bg-black/85 text-primary group-hover:text-accent transition-all ease-in-out duration-300">
      <div className="relative p-10 bg-base-300 rounded-full">
        <div
          className={`absolute left-0 right-0 top-0 bottom-0 rounded-full opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300`}
          style={{
            background: `radial-gradient(circle at 50% 50%, rgb(51 255 0 / 0.1) 10%, rgb(51 255 0 / 0.1) 40%, transparent)`,
          }}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-10"
        >
          <path
            fillRule="evenodd"
            d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <h1 className="opacity-0 font-semibold text-sm mt-3 uppercase group-hover:opacity-100">
        UpComing
      </h1>
    </div>
  );
};

export default CardLock;
