import React from "react";
import Menu from "./Menu";
import MobileNav from "./Mobile/MobileNav";

const Nav = () => {
  const items = ["Home", "About", "Profile", "Logout"];

  return (
    <nav className="fixed top-0 w-screen bg-green-500 h-20 flex items-center shadow-lg">
      <div className="px-4 text-white text-2xl">Dope Logo</div>
      <div className="flex flex-grow justify-end items-center h-full">
        <MobileNav className={"lg:hidden"} items={items} />
        <Menu
          className={
            "hidden lg:block lg:flex justify-around items-center w-3/4"
          }
          items={items}
        />
      </div>
    </nav>
  );
};

export default Nav;
