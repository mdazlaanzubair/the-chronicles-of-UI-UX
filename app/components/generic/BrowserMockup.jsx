import React from "react";

const BrowserMockup = () => {
  return (
    <div class="w-[40vh] h-[25vh] mt-16">
      <div class="w-full h-8 rounded-t-lg bg-gray-200 flex justify-start items-center space-x-1.5 px-3">
        <span class="w-3 h-3 rounded-full bg-red-400"></span>
        <span class="w-3 h-3 rounded-full bg-yellow-400"></span>
        <span class="w-3 h-3 rounded-full bg-green-400"></span>
      </div>
      <div class="relative bg-gray-100 border-t-0 w-full h-full rounded-b-lg">
        <img
          className="w-full h-full"
          src={
            "https://www.taskvare.com/wp-content/uploads/2022/12/TaskVare-Logo-Updated-Version.svg"
          }
          // alt={title}
        />
      </div>
    </div>
  );
};

export default BrowserMockup;
