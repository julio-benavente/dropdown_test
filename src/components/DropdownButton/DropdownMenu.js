import React from "react";

import { DropdownMenu } from "./DropdownMenuStyles";

import Provider from "./DropdownContext";

const Component = ({ children, ...props }) => {
  return (
    <Provider>
      <DropdownMenu {...props}>{children}</DropdownMenu>
    </Provider>
  );
};

export default Component;
