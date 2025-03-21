"use client";

import React from "react";
import { BarLoader } from "react-spinners";

const LoadingPage = () => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-base-300 flex flex-col w-full items-center justify-center mx-auto overflow-clip">
      <div className="w-2/3 lg:w-1/2 mx-auto text-center p-5">
        <BarLoader color="#f6f6f6" loading={true} width={"100%"} />
      </div>
    </div>
  );
};

export default LoadingPage;
