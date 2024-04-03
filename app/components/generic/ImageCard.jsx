import React from "react";
import CardLock from "./CardLock";

const dummyData = {
  title: "Project Title",
  subTitle: "Project Long Sub Title",
  bgSrc:
    "https://plus..com/premium_photo-1671726992841-0d44a12ccacd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  mainSrc:
    "https://www.taskvare.com/wp-content/uploads/2022/12/TaskVare-Logo-Updated-Version.svg",
  isFeatured: true,
  isLocked: false,
};

const ImageCard = ({ data }) => {
  const { title, subTitle, bgSrc, mainSrc, isLocked } = data ?? dummyData;

  return (
    <div className="w-full group h-[65vh] border border-primary/30 p-[.35rem] rounded-lg shadow-md overflow-hidden cursor-pointer">
      <div className="relative w-full h-full flex flex-col rounded-md">
        <div
          className="absolute bg-secondary inset-0 top-0 bottom-0 left-0 right-0 bg-center bg-cover rounded-md"
          style={{
            backgroundImage: `url(${bgSrc})`,
          }}
        />
        <div className="absolute inset-0 top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-base-300 via-transparent to-transparent rounded-md" />
        {isLocked && <CardLock />}

        <div className="relative w-full h-full flex flex-col items-center justify-center rounded-md pt-3">
          <img
            width={150}
            height={70}
            className="grayscale-0 brightness-0 saturate-200 drop-shadow-xl shadow-black object-cover scale-150 group-hover:scale-125 transition-all ease-in-out duration-300"
            src={mainSrc}
            alt={title}
          />

          <div className="absolute left-0 bottom-0 p-4 group-hover:p-6 transition-all ease-in-out duration-300 rounded-md">
            <p className="text-[10px] font-medium text-accent uppercase mb-1 opacity-0 group-hover:mb-2 group-hover:opacity-100 transition-all ease-in-out duration-300">
              {subTitle}
            </p>
            <h3 className="text-base font-semibold text-secondary">{title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
