import React from "react";
import { NavLink } from "react-router-dom";
import { NavLinksType } from "../../types";
import { isAuthenticated } from "../../utils/auth";
import { useAuth } from "../Auth/AuthContext";
import Menu from "./Menu";
import MobileNav from "./Mobile/MobileNav";

const Nav = () => {
  const auth = useAuth();

  const navLinks: NavLinksType = (className, onClick = () => {}) => {
    const items = ["Home", "About", "Profile", "Login"];
    return items.map((item) => {
      if (isAuthenticated() && item === "Login") {
        const signOutAndClose = () => {
          auth.signout();
          onClick();
        };

        return (
          <>
            <NavLink
              key={"logout"}
              to={"/"}
              className={className}
              onClick={signOutAndClose}
            >
              Logout
            </NavLink>
          </>
        );
      }
      return (
        <>
          <NavLink
            key={item}
            to={`/${item.toLowerCase()}`}
            className={className}
            onClick={onClick}
          >
            {item}
          </NavLink>
        </>
      );
    });
  };

  return (
    <nav className="fixed top-0 w-screen bg-green-500 h-20  lg:h-16 flex items-center shadow-lg z-50">
      <div className="px-4 text-white text-2xl">wethinky</div>
      <div className="flex flex-grow justify-end items-center h-full">
        <MobileNav className={"lg:hidden"} navLinks={navLinks} />
        <Menu
          className={"hidden lg:flex justify-around items-center w-1/2"}
          navLinks={navLinks}
        />
      </div>
    </nav>
  );
};

export default Nav;
