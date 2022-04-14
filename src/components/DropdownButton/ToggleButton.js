import React from "react";
import { ToggleButton } from "./DropdownMenuStyles";
import { useDropdownContext } from "./DropdownContext";

const Component = ({ color, size = 24, ...props }) => {
  const { toggleDropdown, dropdownIsOpen } = useDropdownContext();

  return (
    <ToggleButton
      onClick={toggleDropdown}
      dropdownIsOpen={dropdownIsOpen}
      {...props}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.5 16.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm0-4.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm0-4.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z"
          fill={color || "currentColor"}
        />
      </svg>
    </ToggleButton>
  );
};

export default Component;
