import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import MobileNavDropdown from "./MobileMenuDropdown";
import { NavLinksType } from "../../../types";

type MobileNavProps = {
  navLinks: NavLinksType;
  className: string;
};

const MobileNav: React.FC<MobileNavProps> = ({ navLinks, className }) => {
  const [dropdownActive, setDropdownActive] = useState(false);

  const openDropdown = () => {
    setDropdownActive(true);
  };

  const closeDropdown = () => {
    setDropdownActive(false);
  };

  return (
    <div className={className}>
      {!dropdownActive ? (
        <MenuIcon
          onClick={openDropdown}
          className="h-14 w-14 p-1 text-white cursor-pointer"
        />
      ) : (
        <>
          <XIcon className="h-14 w-14 p-1 flex justify-center items-center text-white text-2xl cursor-pointer" />
          <MobileNavDropdown navLinks={navLinks} offClick={closeDropdown} />
        </>
      )}
    </div>
  );
};

export default MobileNav;
