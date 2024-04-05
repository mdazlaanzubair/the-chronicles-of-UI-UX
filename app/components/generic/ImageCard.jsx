import React from "react";
import CardLock from "./CardLock";
import Tilter from "./Tilter";

const dummyData = {
  id: 0,
  title: "Project Title",
  subTitle: "Project Long Sub Title",
  imgSrc:
    "https://plus..com/premium_photo-1671726992841-0d44a12ccacd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  isFeatured: true,
  isLocked: false,
};

const ImageCard = ({ data, clickHandler }) => {
  const { id, title, subTitle, imgSrc, isLocked } = data ?? dummyData;

  if (isLocked) {
    return (
      <div className="w-full group h-[55vh] border-4 border-transparent hover:bg-primary/20 hover:border-primary/30 p-[.35rem] rounded-lg overflow-hidden cursor-pointer transition-all ease-in-out duration-1000">
        <div className="relative w-full h-full flex flex-col rounded-md">
          <div
            className="absolute bg-secondary inset-0 top-0 bottom-0 left-0 right-0 bg-center bg-cover rounded-md"
            style={{
              backgroundImage: `url(${imgSrc})`,
            }}
          />
          <div className="absolute inset-0 top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-md" />
          {isLocked && <CardLock />}

          <div className="relative w-full h-full flex flex-col items-center justify-center rounded-md pt-3">
            <div className="absolute left-0 bottom-0 p-4 group-hover:p-6 transition-all ease-in-out duration-300 rounded-md">
              <p className="text-[10px] font-medium text-primary uppercase mb-1 opacity-0 group-hover:mb-2 group-hover:opacity-100 transition-all ease-in-out duration-300">
                {subTitle}
              </p>
              <h3 className="text-base font-semibold text-secondary">
                {title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <Tilter>
        <div
          onClick={() => clickHandler && clickHandler()}
          className="w-full group h-[55vh] border-4 border-transparent hover:bg-primary/20 hover:border-primary/30 p-[.35rem] rounded-lg overflow-hidden cursor-pointer transition-all ease-in-out duration-1000"
        >
          <div className="relative w-full h-full flex flex-col rounded-md">
            <div
              className="absolute bg-secondary inset-0 top-0 bottom-0 left-0 right-0 bg-center bg-cover rounded-md"
              style={{
                backgroundImage: `url(${imgSrc})`,
              }}
            />
            <div className="absolute inset-0 top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-md" />
            {isLocked && <CardLock />}

            <div className="relative w-full h-full flex flex-col items-center justify-center rounded-md pt-3">
              <div className="absolute left-0 bottom-0 p-4 group-hover:p-6 transition-all ease-in-out duration-300 rounded-md">
                <p className="text-[10px] font-medium text-primary uppercase mb-1 opacity-0 group-hover:mb-2 group-hover:opacity-100 transition-all ease-in-out duration-300">
                  {subTitle}
                </p>
                <h3 className="text-base font-semibold text-secondary">
                  {title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Tilter>
    );
  }
};

export default ImageCard;
