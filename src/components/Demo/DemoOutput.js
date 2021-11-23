import React from "react";

const DemoOutput = (props) => {
  console.log("🚀 ~ file: DemoOutput.js ~ line 6 ~ DemoOutput ~ DemoOutput");
  return <p>{props.show ? "This is new" : ""}</p>;
};

export default React.memo(DemoOutput);
