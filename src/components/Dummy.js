import React from "react";

export default (props) => (
  <span onClick={() => console.log(props.text)}>{props.text}</span>
);
