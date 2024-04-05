import React from "react";
import ButtonLink from "../generic/ButtonLink";

// SOCIAL NAVIGATION LIST
const socialNavList = [
  {
    title: "Instagram",
    url: "https://www.instagram.com/mdazlaanzubair/",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke-width="1"
        stroke="#ffffff"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
        <path d="M16.5 7.5l0 .01" />
      </svg>
    ),
  },
];
const SocialNavigation = () => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <h2 className="text-xs font-semibold text-secondary mx-3 my-4">
        I&apos;M SOCIAL
      </h2>
      <div className="flex flex-wrap items-center space-x-2">
        {socialNavList?.map((item, index) => (
          <ButtonLink
            key={index}
            link={item?.url}
            label={item?.title}
            target="_blank"
            icon={<span className="w-5 h-5">{item?.icon()}</span>}
          />
        ))}
      </div>
    </div>
  );
};

export default SocialNavigation;
