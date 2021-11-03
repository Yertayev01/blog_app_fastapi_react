import React, { useEffect, useState } from "react";
import { MenuIcon } from "@heroicons/react/outline";

const Nav = () => {
  const [dropdownActive, setDropdownActive] = useState(false);

  useEffect(() => {}, [dropdownActive]);

  const toggleDropdown = () => {
    setDropdownActive((prevState) => !prevState);
  };

  const items = ["Home", "About", "Profile", "Logout"];

  const dropdownMenu = (
    <div className="w-screen h-screen top-20 left-0 absolute flex flex-col items-stretch backdrop-filter backdrop-blur-sm divide-y-2 divide-green-150">
      {items.map((item) => {
        return (
          <span
            onClick={(e) => console.log(e.target)}
            className="flex justify-center py-4 bg-green-50 cursor-pointer text-green-600 font-bold active:text-green-50 active:bg-green-200"
          >
            {item}
          </span>
        );
      })}
    </div>
  );

  return (
    <nav className="fixed top-0 w-screen bg-green-500 h-20 flex items-center shadow-lg">
      <div className="px-4 text-white text-2xl">Dope Logo</div>
      <div className="flex flex-grow justify-end items-center h-full">
        <div className="lg:hidden">
          {!dropdownActive ? (
            <MenuIcon
              onClick={toggleDropdown}
              className="h-14 w-14 p-1 text-white cursor-pointer"
            />
          ) : (
            <>
              <span
                onClick={toggleDropdown}
                className="h-14 w-14 flex justify-center items-center text-white text-2xl cursor-pointer"
              >
                X
              </span>
              {dropdownMenu}
            </>
          )}
        </div>
        <div className="hidden lg:block lg:flex justify-around items-center w-3/4">
          {items.map((item) => {
            return (
              <span className="px-10 py-2 text-lg text-white border hover:border-b-2 border-green-50 border-opacity-0 active:text-green-100 hover:border-opacity-50 hover:shadow active:border-b-0 active:border-opacity-0 active:shadow-inner active:bg-green-600 active:bg-opacity-30 rounded cursor-pointer">
                {item}
              </span>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
