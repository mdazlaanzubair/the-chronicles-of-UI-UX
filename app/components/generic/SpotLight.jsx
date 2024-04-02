import React from "react";

const SpotLight = ({
  isHideOnPhone = true,
  top = "top-0",
  right = "right-0",
  bottom = "bottom-0",
  left = "left-0",
  position = "50% 50%",
  spread = "25%",
  opacity = "0.15",
}) => {
  return (
    <div
      className={`${
        isHideOnPhone && "hidden lg:flex"
      } absolute ${top} ${right} ${bottom} ${left}`}
      style={{
        background: `radial-gradient(circle at ${position}, rgb(133 136 144 / ${opacity}) ${spread}, transparent, transparent )`,
      }}
    />
  );
};

export default SpotLight;
