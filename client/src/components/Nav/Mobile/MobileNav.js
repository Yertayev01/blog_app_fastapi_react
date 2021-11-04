import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import MobileNavDropdown from "./MobileMenuDropdown";

const MobileNav = ({ navLinks, className }) => {
  const [dropdownActive, setDropdownActive] = useState(false);

  const toggleDropdownActive = () => {
    setDropdownActive((s) => !s);
  };

  return (
    <div className={className}>
      {!dropdownActive ? (
        <MenuIcon
          onClick={toggleDropdownActive}
          className="h-14 w-14 p-1 text-white cursor-pointer"
        />
      ) : (
        <>
          <XIcon className="h-14 w-14 p-1 flex justify-center items-center text-white text-2xl cursor-pointer" />
          <MobileNavDropdown
            navLinks={navLinks}
            offClick={toggleDropdownActive}
          />
        </>
      )}
    </div>
  );
};

export default MobileNav;
