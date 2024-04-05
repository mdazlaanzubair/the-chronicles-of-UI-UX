"use client";

import React from "react";
import Tilt from "react-parallax-tilt";

const Tilter = ({ children }) => (
  <Tilt className="background-stripes parallax-effect" perspective={1000}>
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
