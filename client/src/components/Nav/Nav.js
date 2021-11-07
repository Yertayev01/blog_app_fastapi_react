import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";
import Menu from "./Menu";
import MobileNav from "./Mobile/MobileNav";

const Nav = () => {
  const auth = useAuth();

  const logoutButton = (className, onClick = () => {}) => {
    const signOutAndClose = () => {
      auth.signout();
      onClick();
    };

    return (
      <div key={"logout"} className={className} onClick={signOutAndClose}>
        Logout
      </div>
    );
  };

  const navLinks = (className, onClick) => {
    const items = ["Home", "About", "Profile", "Login"];
    return items.map((item) => {
      if (auth.user && item === "Login")
        return logoutButton(className, onClick);
      return (
        <NavLink
          key={item}
          to={`/${item.toLowerCase()}`}
          className={className}
          onClick={onClick}
        >
          {item}
        </NavLink>
      );
    });
  };

  return (
    <nav className="fixed top-0 w-screen bg-green-500 h-20 flex items-center shadow-lg z-50">
      <div className="px-4 text-white text-2xl">Dope Logo</div>
      <div className="flex flex-grow justify-end items-center h-full">
        <MobileNav className={"lg:hidden"} navLinks={navLinks} />
        <Menu
          className={
            "hidden lg:block lg:flex justify-around items-center w-3/4"
          }
          navLinks={navLinks}
        />
      </div>
    </nav>
  );
};

export default Nav;
