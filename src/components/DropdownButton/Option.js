import React from "react";
import { Option } from "./DropdownMenuStyles";

const OptionComponent = ({ ...props }) => {
  return (
    <Option as={props.href && "a"} {...props}>
      {props.children}
    </Option>
  );
};

export default OptionComponent;
