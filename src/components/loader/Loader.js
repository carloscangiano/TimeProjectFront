import React from "react";
//Styles
import "./loader.scss";

export default function Loader({showBackground}) {
  return (
    <>
      <div className={showBackground ? "loader-container" : null}>
        <div className="lds-ripple">
          <div />
          <div />
        </div>
      </div>
    </>
  );
}
