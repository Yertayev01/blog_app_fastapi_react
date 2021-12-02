import React, { useEffect, useRef } from "react";
import { NavLinksType } from "../../../types";
import { offClickHelper } from "../../../utils/helpers";

type MobileNavDropdownProps = {
  navLinks: NavLinksType;
  offClick: () => void;
};

const MobileNavDropdown: React.FC<MobileNavDropdownProps> = ({
  navLinks,
  offClick,
}) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const cleanup = offClickHelper(dropdownRef, offClick);
    return cleanup;
  }, [dropdownRef, offClick]);

  const navLinkStyle =
    "flex justify-center py-4 bg-green-50 cursor-pointer text-green-600 font-bold active:text-green-50 active:bg-green-200 animate-fade-in-down-1/4s";

  return (
    <div className="w-screen h-screen top-20 left-0 fixed items-stretch backdrop-filter backdrop-blur-sm">
      <div
        ref={dropdownRef}
        className="flex flex-col divide-y-2 divide-green-150"
      >
        {navLinks(navLinkStyle, offClick)}
      </div>
    </div>
  );
};

export default MobileNavDropdown;
