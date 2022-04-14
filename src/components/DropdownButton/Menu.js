import React from "react";
import { Menu } from "./DropdownMenuStyles";
import { useDropdownContext } from "./DropdownContext";

const Component = ({ alignBottom = true, alignRight = true, ...props }) => {
  const { dropdownIsOpen } = useDropdownContext();

  return (
    dropdownIsOpen && (
      <Menu alignBottom={alignBottom} alignRight={alignRight} {...props}>
        {props.children}
      </Menu>
    )
  );
};

export default Component;
