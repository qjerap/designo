import React from "react";
import "./linksgrid.scss";

const LinksGrid = (props) => {
  return (

    <div className="links-grid wrapper--phonepad">
        {props.children}
    </div>
  );
};

export default LinksGrid;
