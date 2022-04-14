import React, { createContext, useState, useContext } from "react";

const DropdownContext = createContext();
export const useDropdownContext = () => useContext(DropdownContext);

const DropdownProvider = ({ children }) => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const toggleDropdown = () => setDropdownIsOpen(!dropdownIsOpen);

  const dropdownContextValue = { dropdownIsOpen, toggleDropdown };

  return (
    <DropdownContext.Provider value={dropdownContextValue}>
      {children}
    </DropdownContext.Provider>
  );
};

export default DropdownProvider;
