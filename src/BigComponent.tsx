import React from "react";
import a from "./big_data.json";

const BigComponent = () => {
  return <div>{JSON.stringify(a, null, 2)}</div>;
};

export default BigComponent;
