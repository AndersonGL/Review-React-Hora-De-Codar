/* eslint-disable no-unused-vars */
import React from "react";

import "./StylesExamples.css";

import styles from "./StyleExamples.module.css";


const StylesExamples = () => {
  // inline styles

  const inlineStyle = {
    color: "blue",
    fontSize: "20px",
  };

  return (
    <div>
      <h2 style={inlineStyle}>Estilo Inline</h2>

      {/* arquivo CSS */}

      <p className="text">Meu CSS </p>

      {/* CSS Modules */}
      <p className={styles.textPurple}>CSS Modules</p>
    </div>
  );
};

export default StylesExamples;
