import { MenuIcon } from "@heroicons/react/outline";

const Nav = () => {
  return (
    <nav className="bg-green-500 h-20 flex items-center filter drop-shadow">
      <div className="px-4 text-white text-2xl">Dope Logo</div>
      <div className="flex-grow flex justify-end ">
        <MenuIcon className="h-14 w-14 p-1 text-white" />
      </div>
    </nav>
  );
};

export default Nav;
