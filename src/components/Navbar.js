import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../index.css";
import backgroundNavbar from "../assets/image/background-navbar.jpg";
import logoWhite from "../assets/image/logo-white.png";
import logoColor from "../assets/image/logo-color.png";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({once: false,easing: 'ease',});


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
      // AOS.refreshHard();
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // State to track the mobile menu toggle
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  // State to track the screen width
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to update the screen width on resize
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    // Add event listener to handle resize
    window.addEventListener("resize", handleResize);

    return () => {
      // Cleanup the event listener on component unmount
      window.removeEventListener("resize", handleResize);
    };
  }, [scrolled]);

  const navbarBackgroundClass = scrolled
    ? " bg-image-navbar  "
    : "bg-transparent ";

  const navbarTextClass = scrolled
    ? "text-[#717171] hover:border-b-4 hover:border-red-700 hover:text-gray-900 pb-3"
    : " hover:border-b-4 hover:border-gray-100 border-gray-100 text-gray-100 hover:text-gray-50 pb-3";
  const ramenClass = scrolled
    ? "text-red-500 text-2xl transition-all duration-300"
    : "text-green-600 text-4xl transition-all duration-300";
  const activeClassName =
    "text-xl  font-bold tracking-wide transition-colors duration-200  border-b-4 border-red-700" +
    " " +
    navbarTextClass;
  const inactiveClassname =
    "text-xl  font-bold tracking-wide  transition-colors duration-200 0 hover:border-b-4 " +
    " " +
    navbarTextClass;
  const activeClassNameMobile =
    "text-2xl  font-bold tracking-wide transition-colors duration-200  border-b-4 border-red-700 hover:border-b-4 hover:border-gray-100 border-gray-100 text-gray-100 hover:text-gray-50";
  const inactiveClassnameMobile =
    "text-2xl  font-bold tracking-wide  transition-colors duration-200 0 hover:border-b-4 hover:border-b-4 hover:border-gray-100 border-gray-100 text-gray-100 hover:text-gray-50";

  return (
    <div>
      {screenWidth <= 768 && !isMobileMenuOpen && scrolled && (
        <div
        data-aos="fade-down"
        data-aos-duration="3000"
          className={`fixed  right-0 left-0 z-10 py-2 flex  justify-around items-center ${navbarBackgroundClass}`}
        >
          <NavLink to="/">
            {scrolled && <img className="w-30 h-12" src={logoColor} />}
            {!scrolled && <img className="w-30 h-12" src={logoWhite} />}{" "}
          </NavLink>
          <button
            className="lg:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {!scrolled && (
              <svg
                className="w-6 h-6 text-gray-900 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 12h18M3 6h18M3 18h18"></path>
              </svg>
            )}
            {scrolled && (
              <svg
                className="w-6 h-6 text-gray-900 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 12h18M3 6h18M3 18h18"></path>
              </svg>
            )}
          </button>
        </div>
      )}
      {screenWidth <= 768 && !isMobileMenuOpen && !scrolled && (
        <div
        data-aos="fade-down"
        data-aos-duration="3000"
          className={`fixed  right-0 left-0 z-10 py-2 flex  justify-around items-center ${navbarBackgroundClass}`}
        >
          <NavLink to="/">
            {scrolled && <img className="w-30 h-12" src={logoColor} />}
            {!scrolled && <img className="w-30 h-12" src={logoWhite} />}{" "}
          </NavLink>
          <button
            className="lg:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {!scrolled && (
              <svg
                className="w-6 h-6 text-gray-900 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 12h18M3 6h18M3 18h18"></path>
              </svg>
            )}
            {scrolled && (
              <svg
                className="w-6 h-6 text-gray-900 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 12h18M3 6h18M3 18h18"></path>
              </svg>
            )}
          </button>
        </div>
      )}

      {isMobileMenuOpen && screenWidth <= 768 && (
        <div  className="">
          <div   data-aos="fade-down"
        data-aos-duration="3000" className=" fixed inset-0 flex flex-col bg-image-navbar-mobile scrollbar-hide z-10">
            <div className="relative py-2">
              <div className="min-h-screen absolute inset-0 bg-image-navbar opacity-50 -z-20"></div>
              <div className=" absolute inset-0 bg-black opacity-70 -z-10"></div>

              <div className="flex justify-around items-around">
                <NavLink to="/" onClick={toggleMobileMenu}>
                  <img className="w-30 h-12" src={logoWhite} />
                </NavLink>
                <button
                  className="lg:hidden"
                  onClick={toggleMobileMenu}
                  aria-label="Toggle mobile menu"
                >
                  <svg
                    className="w-6 h-6 text-gray-900 cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 12h18M3 6h18M3 18h18"></path>
                  </svg>
                </button>
              </div>

              <ul className="min-h-screen flex flex-col items-center justify-center gap-6 pb-[20vh]">
                <li>
                  <NavLink
                    to="/reservation"
                    className={inactiveClassnameMobile}
                    onClick={toggleMobileMenu}
                  >
                    Reservation
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/menu"
                    className={inactiveClassnameMobile}
                    onClick={toggleMobileMenu}
                  >
                    Menu
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={inactiveClassnameMobile}
                    onClick={toggleMobileMenu}
                  >
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={inactiveClassnameMobile}
                    onClick={toggleMobileMenu}
                  >
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {screenWidth > 768 && scrolled && (
        <div
        data-aos="fade-down"
        data-aos-duration="3000"


          className={`fixed h-32 right-0 left-0 z-10 py-4 flex flex-col justify-between items-center ${navbarBackgroundClass}`}
        >
          {" "}
          <NavLink to="/">
            {scrolled && <img className="h-12" src={logoColor} />}
            {!scrolled && <img className="h-20 mb-4" src={logoWhite} />}{" "}
          </NavLink>
          <ul
            className="flex justify-between items-center md:w-2/3 lg:w-1/2 xl:w-1/3
            "
          >
            <li>
              <NavLink
                to="/reservation"
                className={({ isActive }) =>
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
      )}
      {screenWidth > 768 && !scrolled && (
        <div
        data-aos="fade-down"
        data-aos-duration="3000"


          className={`fixed h-32 right-0 left-0 z-10 py-4 flex flex-col justify-between items-center ${navbarBackgroundClass}`}
        >
          {" "}
          <NavLink to="/">
            {scrolled && <img className="h-12" src={logoColor} />}
            {!scrolled && <img className="h-20 mb-4" src={logoWhite} />}{" "}
          </NavLink>
          <ul
            className="flex justify-between items-center md:w-2/3 lg:w-1/2 xl:w-1/3
            "
          >
            <li>
              <NavLink
                to="/reservation"
                className={({ isActive }) =>
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
      )}
    </div>
    // </div>
  );
};
export default Navbar;
