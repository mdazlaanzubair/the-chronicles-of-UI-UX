// components/AbstractBG.js
import React from "react";
import styles from "./AbstractBG.module.css";

const AbstractBG = ({ color }) => {
  return (
    <div className={styles.abstractBG} style={{ backgroundColor: color }}>
      {/* You can customize the content within the abstract background if needed */}
    </div>
  );
};

export default AbstractBG;
