import React from "react";

const divStyle = {
  overflow: "scroll",
  border: "5px solid black",
  height: "800px",
};
const Scroll = (props) => {
  return <div style={divStyle}>{props.children}</div>;
};

export default Scroll;
