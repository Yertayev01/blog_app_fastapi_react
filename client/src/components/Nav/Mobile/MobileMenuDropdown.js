import React, { useEffect, useRef } from "react";
import { offClickHelper } from "../../../utils";

const MobileNavDropdown = ({ items, offClick }) => {
  const dropdownRef = useRef();

  useEffect(() => {
    const cleanup = offClickHelper(dropdownRef, offClick);
    return cleanup;
  }, [dropdownRef, offClick]);

  return (
    <div className="w-screen h-screen top-20 left-0 absolute items-stretch backdrop-filter backdrop-blur-sm ">
      <div
        ref={dropdownRef}
        className="flex flex-col divide-y-2 divide-green-150"
      >
        {items.map((item) => {
          return (
            <span
              key={item}
              onClick={() => {}}
              className="flex justify-center py-4 bg-green-50 cursor-pointer text-green-600 font-bold active:text-green-50 active:bg-green-200"
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default MobileNavDropdown;
