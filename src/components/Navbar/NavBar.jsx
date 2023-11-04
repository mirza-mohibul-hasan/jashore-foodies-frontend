import { useState } from "react";
import {
  PaperAirplaneIcon,
  MoonIcon,
  SunIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const NavBar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="bg-[#FFF8EE]">
      <nav>
        <div className="max-w-7xl mx-auto">
          <div className="flex mx-auto justify-between w-full">
            {/* Primary menu and logo */}
            <div className="flex items-center gap-16 my-6">
              {/* logo */}
              <div>
                <a
                  href="/"
                  className="flex gap-1 font-bold text-gray-700 items-center "
                >
                  <PaperAirplaneIcon className="ml-4 lg:ml-0 h-6 w-6 text-primary" />
                  <span>JASHORE FOODIES</span>
                </a>
              </div>
              {/* primary */}
              <div className="hidden lg:flex gap-8 lg:ml-40">
                <NavLink to='/' className={({ isActive }) => (isActive ? 'text-lg' : 'border-b border-[#E94339] hover:bg-[#E94339]')}>Home</NavLink>
                <a href="#">RESTAURANTS</a>
                <a href="#">FOOD ITEMS</a>
                <a href="#">MY DASHBOARD</a>
              </div>
            </div>
            {/* secondary */}
            <div className="flex gap-6">
              <div className="lg:flex items-center gap-5">
                <div className="flex mt-6 lg:mt-0 items-center gap-2">
                  <MoonIcon className="h-6 w-6 " />
                  <SunIcon className="h-6 w-6" />
                </div>
                <div className="hidden lg:flex">
                  <button className="rounded-lg border-solid border-2 border-[#E94339] py-1 px-4 hover:bg-[#E94339] hover:text-white">
                    LOGIN
                  </button>
                </div>
              </div>
              {/* Mobile navigation toggle */}
              <div className="lg:hidden flex items-center pr-4">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  <Bars3Icon className="h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`w-52 z-50 absolute overflow-hidden bg-red-100 flex flex-col lg:hidden gap-12  origin-top duration-700 rounded-br-xl ${
            !toggleMenu ? "h-0" : "h-2/3"
          }`}
        >
          <div className="px-8">
            <div className="flex flex-col gap-8 text-sm tracking-wider">
              <a href="#">HOME</a>
              <a href="#">RESTAURANTS</a>
              <a href="#">FOOD ITEMS</a>
              <a href="#">MY DASHBOARD</a>
              <button className="rounded-lg border-solid border-2 border-[#E94339] py-1 px-4 hover:bg-[#E94339] hover:text-white">
                LOGIN
              </button>
            </div>
          </div>

        </div>
      </nav>
    </div>
  );
};

export default NavBar;