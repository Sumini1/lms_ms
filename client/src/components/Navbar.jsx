import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProgramDropdownOpen, setIsProgramDropdownOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function toggleProgramDropdown() {
    setIsProgramDropdownOpen(!isProgramDropdownOpen);
  }

  return (
    <div className="bg-white flex justify-between text-[#246124] text-md font-bold h-20 items-center pr-10 sticky top-0">
      <div className="flex">
        <img className="h-20 pl-10" src="/logoms.png" alt="" srcSet="" />
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu}>☰</button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b-2 border-[#246124]">
          <div className="flex flex-col text-left gap-4 px-4 py-2">
            <Link to="/">Home</Link>
            <div className="relative">
              <span
                onClick={toggleProgramDropdown}
                className="flex items-center"
              >
                Program <ChevronDownIcon className="h-4 w-4 ml-1" />
              </span>
              {isProgramDropdownOpen && (
                <div className="absolute top-full left-0 bg-white border-l border-t border-r border-[#246124]">
                  <ul className="py-2">
                    <li>
                      <Link to="/program/diplomabahasaarab">
                        Diploma Bahasa Arab
                      </Link>
                    </li>
                    <li>
                      <Link to="/program/diplomailmii">Diploma Ilmi</Link>
                    </li>
                    <li>
                      <Link to="/program/diplomaquran">Diploma Qur'an</Link>
                    </li>
                    <li>
                      <Link to="/program/s1resmi">S1 Resmi</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <Link to="/#">Kelasku</Link>
            <Link to="/register">Jadwal</Link>
            <Link to="/login">
              <button className="bg-[#246124] text-white px-4 py-2 rounded-lg">
                Login
              </button>
            </Link>
          </div>
        </div>
      )}
      <div className="hidden md:flex">
        <div className="flex text-left items-center gap-10 space-between">
          <Link to="/">Home</Link>
          <div className="relative">
            <span onClick={toggleProgramDropdown} className="flex items-center">
              Program <ChevronDownIcon className="h-4 w-4 ml-1" />
            </span>
            {isProgramDropdownOpen && (
              <div className="absolute top-full left-0 bg-white  pt-5">
                <ul className="py-2 w-40 text-left pl-2 text-sm">
                  <li>
                    <Link to="/program/diplomabahasaarab">Diploma Bahasa Arab</Link>
                  </li>
                  <li>
                    <Link to="/program/diplomailmii">Diploma Ilmi</Link>
                  </li>
                  <li>
                    <Link to="/program/diplomaquran">Diploma Qur'an</Link>
                  </li>
                  <li>
                    <Link to="/program/s1resmi">S1 Resmi</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <Link to="/#">Kelasku</Link>
          <Link to="/register">Jadwal</Link>
          <Link to="/login">
            <button className="bg-[#246124] text-white px-4 py-2 rounded-lg">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
