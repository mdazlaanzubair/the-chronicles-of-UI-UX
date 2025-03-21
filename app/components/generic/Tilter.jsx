"use client";

import React from "react";
import Tilt from "react-parallax-tilt";

const Tilter = ({ children }) => (
  <Tilt perspective={1000} tiltMaxAngleX={5} tiltMaxAngleY={5}>
    <div className="inner-element">
      {children ? (
        children
      ) : (
        <div>
          <div>React</div>
          <div>Parallax Tilt</div>
          <div>👀</div>
        </div>
      )}
    </div>
  </Tilt>
);

export default Tilter;
