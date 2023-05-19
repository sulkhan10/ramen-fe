import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../index.css";
import backgroundNavbar from "../assets/image/background-navbar.jpg";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarBackgroundClass = scrolled ? " bg-image  active" : "bg-transparent inactive";

  const navbarTextClass = scrolled ? "text-[#717171] hover:border-b-4 hover:border-red-700 hover:text-gray-900" : " hover:border-b-4 hover:border-gray-100 border-gray-100 text-gray-100 hover:text-gray-50";
  const ramenClass = scrolled
    ? "text-red-500 text-2xl transition-all duration-300"
    : "text-green-600 text-4xl transition-all duration-300";
  const activeClassName =
    "text-xl  font-bold tracking-wide transition-colors duration-200  border-b-4 border-red-700" + " " + navbarTextClass;
  const inactiveClassname =
    "text-xl  font-bold tracking-wide  transition-colors duration-200 0 hover:border-b-4 " + " " + navbarTextClass;

  return (
    <div>
      <div
        className={` fixed h-28 right-0 left-0 z-40 py-4  flex flex-col justify-between items-center ${navbarBackgroundClass}`}
        // style={{
        //   transition: "all 0.6s ease-out", // Add transition CSS property
        // }}
      >
        <NavLink
           to="/"
           className={({ isActive }) =>
             isActive ? activeClassName : inactiveClassname
           }
         >
           <h1 className={`font-bold ${ramenClass}`}>Ramen</h1>
         </NavLink>
          <ul className="flex items-center mx-16 gap-16 space-x-10 lg:flex">
            <li>
              <NavLink
                to="/reservation"
                className={({ isActive}) =>
                  isActive ? activeClassName : inactiveClassname 
                }
              >
                Reservation
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu"
                className={({ isActive }) =>
                  isActive ? activeClassName : inactiveClassname
                }
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? activeClassName : inactiveClassname
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? activeClassName : inactiveClassname
                }
              >
                About
              </NavLink>
            </li>
          </ul>

       
        </div>
    </div>
  );
};

export default Navbar;
