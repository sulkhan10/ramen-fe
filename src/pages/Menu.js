import React, { useEffect, useState, useRef } from "react";
import "../index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper.min.css";
import {
  IoLogoInstagram,
  IoLogoWhatsapp,
  IoMailOutline,
  IoArrowForwardCircleOutline,
  IoArrowBackCircleOutline,
  IoRemove,
} from "react-icons/io5";
import { useMediaQuery } from "react-responsive";
import backgroundMenu from "../assets/image/background-menu-1.webp";
import cardMenuOne from "../assets/image/card-menu-1.jpg";
import cardMenuTwo from "../assets/image/card-menu-2.jpg";
import MoonLoader from "react-spinners/MoonLoader";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
import backgroundSectionTwo from "../assets/image/bg-section-2.jpg";

import cardImageTwo from "../assets/image/card-about-2.jpg";

import logoIcon from "../assets/image/logo-icon.png";

AOS.init();
SwiperCore.use([Navigation]);

const Menu = () => {
  const [loading, setLoading] = useState(true);
  const swiperRef = useRef(null);

  useEffect(() => {
    setLoading(false);
  }, []);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  const [isNextHovered, setIsNextHovered] = useState(false);
  const [isPrevHovered, setIsPrevHovered] = useState(false);

  const isSmallScreen = useMediaQuery({ query: "(max-width: 640px)" });

  const handleClickNext = () => {
    goNext();

    if (isSmallScreen) {
      handleMouseLeaveNext();
    }
  };
  const handleClickPrev = () => {
    goPrev();

    if (isSmallScreen) {
      handleMouseLeavePrev();
    }
  };

  const handleMouseEnterPrev = () => {
    setIsPrevHovered(true);
  };

  const handleMouseLeavePrev = () => {
    setIsPrevHovered(false);
  };
  const handleMouseEnterNext = () => {
    setIsNextHovered(true);
  };

  const handleMouseLeaveNext = () => {
    setIsNextHovered(false);
  };
  const iconSizeNext = isNextHovered ? "scale-125" : "scale-100";
  const iconSizePrev = isPrevHovered ? "scale-125" : "scale-100";

  return (
    <div className="min-h-screen bg-[#f1eee9] flex flex-col  justify-center items-center text-md text-[#717171] ">
      <div className="h-screen ">
        <img src={backgroundMenu} className="h-full object-cover" />
      </div>{" "}
      <div
        className="relative text-[#717171] flex flex-col sm:flex-row justify-center items-center  py-12"
        style={{
          backgroundImage: `linear-gradient(rgba(251,	249,	242, 0.8), rgba(251,	249,	242, 0.9)),url("${backgroundSectionTwo}")`,
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
          backdropFilter: "blur(80px)",
        }}
      >
        <div
          className="absolute inset-0 bg-white bg-opacity-50 backdrop-filter backdrop-blur-sm"
          style={{ zIndex: -1 }}
        ></div>
        <div
          data-aos="fade-right"
          className="sm:w-3/5 h-full  text-[#717171]  mx-12  sm:h-[685px]  overflow-scroll scrollbar-hide"
        >
          <div className="text-[#717171] ">
            <img src={logoIcon} alt="logo" className="hidden sm:block sm:w-40 sm:h-40 mt-16" />
            <h2 className="text-3xl sm:text-5xl  mt-6 ">OUR MISSION IS TO </h2>
            <h2 className="text-3xl sm:text-5xl">BRING TRUE ITALIAN</h2>
            <h2 className="text-3xl sm:text-5xl  mb-6 ">FLAVOURS TO YOU </h2>

            <p className="text-lg md:text-lg mb-4">
              The idea of "Ramen Restaurant G" was born out of an enthusiasm for
              great food and culture. In Indonesia, we embrace the rich culinary
              heritage of both Indonesian and Chinese cuisines. We believe that
              blending these two culinary traditions creates a unique and
              flavorful experience.
            </p>
          </div>
        </div>

        <div
          data-aos="flip-right"
          className="sm:w-2/5 h-full flex items-center text-[#717171] justify-center sm:h-[685px]"
        >
          <div className="h-3/4 w-3/4 overflow-hidden">
            <img
              src={cardImageTwo}
              alt="background"
              className="h-full w-full object-cover transform transition-transform duration-700 hover:scale-125	 
        "
            />
          </div>
        </div>
      </div>
      <div className="sm:py-8 pt-8">
        <h2 className="text-3xl sm:text-5xl  text-center text-gray-500 pt-4">
          WE MADE ORGANIC
        </h2>
        <h2 className="text-3xl sm:text-5xl  text-center text-gray-400 pb-8">
          TASTEFUL, AND DELICIOUS FOOD
        </h2>
        <p className="text-lg text-center text-gray-600 px-8 sm:px-48">
          Morbi non arcu risus quis. Elementum tempus donne egestas sed sed
          risus pretium quam vulputate. Etiam sit amet nisl purus. Lorem mollis
          aliquam ut porttitor leo a diam sollicitudin tempor. Sed vulputate
          odio ut enim.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row flex-wrap py-12 px-4 sm:p-2 items-center justify-evenly w-full">
        <div className="w-3/4 sm:w-1/5  sm:m-2 sm:my-5 relative m-8 ">
          <Link to="/your-page-url">
            <div className="w-full ">
              <img
                src={cardMenuOne}
                alt="card menu"
                className="h-full w-full object-cover "
              />
              <div className="absolute top-0 left-0 h-full w-full bg-black opacity-50"></div>
            </div>
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-3xl text-white cursor-pointer">
              <span className="neon-effect-hover">MARGHERITA</span>
            </p>
          </Link>
        </div>
        <div className="w-3/4 sm:w-1/5  sm:m-2 sm:my-5 relative m-8 ">
          <Link to="/your-page-url">
            <div className="w-full ">
              <img
                src={cardMenuOne}
                alt="card menu"
                className="h-full w-full object-cover "
              />
              <div className="absolute top-0 left-0 h-full w-full bg-black opacity-50"></div>
            </div>
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-3xl text-white cursor-pointer">
              <span className="neon-effect-hover">MARGHERITA</span>
            </p>
          </Link>
        </div>
        <div className="w-3/4 sm:w-1/5  sm:m-2 sm:my-5 relative m-8 ">
          <Link to="/your-page-url">
            <div className="w-full ">
              <img
                src={cardMenuOne}
                alt="card menu"
                className="h-full w-full object-cover "
              />
              <div className="absolute top-0 left-0 h-full w-full bg-black opacity-50"></div>
            </div>
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-3xl text-white cursor-pointer">
              <span className="neon-effect-hover">MARGHERITA</span>
            </p>
          </Link>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row  pt-8 px-8 sm:p-12 sm:mt-12 items-center justify-evenly w-full">
        <div className="w-full sm:w-1/3 py-4 sm:py-0">
          <p className="text-[#cb6037] text-3xl sm:text-5xl">OUR MENU </p>
        </div>
        <div className="w-full sm:w-2/3">
          <p className="text-gray-500 sm:text-xl">
            Morbi non arcu risus quis. Elementum tempus donne egestas sed sed
            risus pretium quam vulputate. Etiam sit amet nisl purus. Lorem
            mollis aliquam ut porttitor leo a diam sollicitudin tempor. Sed
            vulputate odio ut enim.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap py-12 px-4 sm:p-2 items-center justify-evenly w-full">
        <div className=" w-1/2 sm:w-1/5 p-2 sm:p-0 sm:m-2 sm:my-5">
          <div className=" w-full overflow-hidden ">
            <img
              src={cardMenuOne}
              alt="card menu"
              className="h-full w-full object-cover transform transition-transform duration-700 hover:scale-125	 
      "
            />{" "}
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-8 font-semibold p-2 sm:justify-around">
            <p className="cursor-default hover:text-[#cb6037] transition-colors duration-400 hover:cursor-pointer">
              MARGHERITA
            </p>
            <p className="cursor-default text-[#cb6037]"> $ 11.99 USD</p>
          </div>
        </div>
        <div className=" w-1/2 sm:w-1/5 p-2 sm:p-0 sm:m-2 sm:my-5">
          <div className=" w-full overflow-hidden ">
            <img
              src={cardMenuOne}
              alt="card menu"
              className="h-full w-full object-cover transform transition-transform duration-700 hover:scale-125	 
      "
            />{" "}
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-8 font-semibold p-2 sm:justify-around">
            <p className="cursor-default hover:text-[#cb6037] transition-colors duration-400 hover:cursor-pointer">
              MARGHERITA
            </p>
            <p className="cursor-default text-[#cb6037]"> $ 11.99 USD</p>
          </div>
        </div>
        <div className=" w-1/2 sm:w-1/5 p-2 sm:p-0 sm:m-2 sm:my-5">
          <div className=" w-full overflow-hidden ">
            <img
              src={cardMenuOne}
              alt="card menu"
              className="h-full w-full object-cover transform transition-transform duration-700 hover:scale-125	 
      "
            />{" "}
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-8 font-semibold p-2 sm:justify-around">
            <p className="cursor-default hover:text-[#cb6037] transition-colors duration-400 hover:cursor-pointer">
              MARGHERITA
            </p>
            <p className="cursor-default text-[#cb6037]"> $ 11.99 USD</p>
          </div>
        </div>
        <div className=" w-1/2 sm:w-1/5 p-2 sm:p-0 sm:m-2 sm:my-5">
          <div className=" w-full overflow-hidden ">
            <img
              src={cardMenuOne}
              alt="card menu"
              className="h-full w-full object-cover transform transition-transform duration-700 hover:scale-125	 
      "
            />{" "}
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-8 font-semibold p-2 sm:justify-around">
            <p className="cursor-default hover:text-[#cb6037] transition-colors duration-400 hover:cursor-pointer">
              MARGHERITA
            </p>
            <p className="cursor-default text-[#cb6037]"> $ 11.99 USD</p>
          </div>
        </div>
        <div className=" w-1/2 sm:w-1/5 p-2 sm:p-0 sm:m-2 sm:my-5">
          <div className=" w-full overflow-hidden ">
            <img
              src={cardMenuOne}
              alt="card menu"
              className="h-full w-full object-cover transform transition-transform duration-700 hover:scale-125	 
      "
            />{" "}
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-8 font-semibold p-2 sm:justify-around">
            <p className="cursor-default hover:text-[#cb6037] transition-colors duration-400 hover:cursor-pointer">
              MARGHERITA
            </p>
            <p className="cursor-default text-[#cb6037]"> $ 11.99 USD</p>
          </div>
        </div>
        <div className=" w-1/2 sm:w-1/5 p-2 sm:p-0 sm:m-2 sm:my-5">
          <div className=" w-full overflow-hidden ">
            <img
              src={cardMenuOne}
              alt="card menu"
              className="h-full w-full object-cover transform transition-transform duration-700 hover:scale-125	 
      "
            />{" "}
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-8 font-semibold p-2 sm:justify-around">
            <p className="cursor-default hover:text-[#cb6037] transition-colors duration-400 hover:cursor-pointer">
              MARGHERITA
            </p>
            <p className="cursor-default text-[#cb6037]"> $ 11.99 USD</p>
          </div>
        </div>
        <div className=" w-1/2 sm:w-1/5 p-2 sm:p-0 sm:m-2 sm:my-5">
          <div className=" w-full overflow-hidden ">
            <img
              src={cardMenuOne}
              alt="card menu"
              className="h-full w-full object-cover transform transition-transform duration-700 hover:scale-125	 
      "
            />{" "}
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-8 font-semibold p-2 sm:justify-around">
            <p className="cursor-default hover:text-[#cb6037] transition-colors duration-400 hover:cursor-pointer">
              MARGHERITA
            </p>
            <p className="cursor-default text-[#cb6037]"> $ 11.99 USD</p>
          </div>
        </div>
        <div className=" w-1/2 sm:w-1/5 p-2 sm:p-0 sm:m-2 sm:my-5">
          <div className=" w-full overflow-hidden ">
            <img
              src={cardMenuOne}
              alt="card menu"
              className="h-full w-full object-cover transform transition-transform duration-700 hover:scale-125	 
      "
            />{" "}
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-8 font-semibold p-2 sm:justify-around">
            <p className="cursor-default hover:text-[#cb6037] transition-colors duration-400 hover:cursor-pointer">
              MARGHERITA
            </p>
            <p className="cursor-default text-[#cb6037]"> $ 11.99 USD</p>
          </div>
        </div>
      </div>
      <div className="w-full sm:h-[70vh] relative p-12 mb-20 ">
        <Swiper
          ref={swiperRef}
          slidesPerView="auto"
          navigation
          loop={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="flex gap-8 bg-[#f5f0ec] flex-col sm:flex-row  ">
              <div className="w-full sm:w-1/3 flex flex-col gap-6">
                <p className="cursor-default text-xl font-semibold tracking-wider	">
                  SPECIAL TASTE
                </p>
                <p className="cursor-default text-5xl font-semobild text-[#cb6037] py-2 tracking-wider">
                  PIZZA
                </p>
                <p className="cursor-default text-lg 	">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="w-full sm:w-1/3 flex flex-col gap-6">
                <div>
                  <div className="flex gap-8 text-xl pb-2">
                    <p className="cursor-default hover:text-[#cb6037] transition-colors duration-400 hover:cursor-pointer">
                      MARGHERITA
                    </p>
                    <p className="cursor-default text-[#cb6037]">
                      {" "}
                      $ 11.99 USD
                    </p>
                  </div>
                  <p className="cursor-default">Vegeterian</p>
                </div>

                <div>
                  <div className="flex gap-8 text-xl pb-2">
                    <p className="cursor-default hover:text-[#cb6037] transition-colors duration-400 hover:cursor-pointer">
                      CALZONE
                    </p>
                    <p className="cursor-default text-[#cb6037]">
                      {" "}
                      $ 11.99 USD
                    </p>
                  </div>
                  <p>Meat</p>
                </div>
                <div>
                  <div className="flex gap-8 text-xl pb-2">
                    <p className="cursor-default hover:text-[#cb6037] transition-colors duration-400 hover:cursor-pointer">
                      PEPPERONI
                    </p>
                    <p className="cursor-default text-[#cb6037]">
                      {" "}
                      $ 11.99 USD
                    </p>
                  </div>
                  <p>Meat</p>
                </div>
                <div>
                  <div className="flex gap-8 text-xl pb-2">
                    <p className="cursor-default hover:text-[#cb6037] transition-colors duration-400 hover:cursor-pointer">
                      HAWAIIAN
                    </p>
                    <p className="cursor-default text-[#cb6037]">
                      {" "}
                      $ 11.99 USD
                    </p>
                  </div>
                  <p>Meat</p>
                </div>
              </div>
              <div className="w-full sm:w-1/3 flex flex-col gap-6">
                <div>
                  <div className="flex gap-8 text-xl pb-2">
                    <p className="cursor-default hover:text-[#cb6037] transition-colors duration-400 hover:cursor-pointer">
                      TRIPLE MUSHROOM
                    </p>
                    <p className="cursor-default text-[#cb6037]">
                      {" "}
                      $ 11.99 USD
                    </p>
                  </div>
                  <p className="cursor-default">Vegeterian</p>
                </div>
                <div>
                  <div className="flex gap-8 text-xl pb-2">
                    <p className="cursor-default hover:text-[#cb6037] transition-colors duration-400 hover:cursor-pointer">
                      MEAT FEAST
                    </p>
                    <p className="cursor-default text-[#cb6037]">
                      {" "}
                      $ 11.99 USD
                    </p>
                  </div>
                  <p>Meat</p>
                </div>
                <div>
                  <div className="flex gap-8 text-xl pb-2">
                    <p className="cursor-default hover:text-[#cb6037] transition-colors duration-400 hover:cursor-pointer">
                      QUATTRO FORMAGGI
                    </p>
                    <p className="cursor-default text-[#cb6037]">
                      {" "}
                      $ 11.99 USD
                    </p>
                  </div>
                  <p className="cursor-default">Vegeterian</p>
                </div>
                <div>
                  <div className="flex gap-8 text-xl pb-2">
                    <p className="cursor-default hover:text-[#cb6037] transition-colors duration-400 hover:cursor-pointer">
                      TONNO
                    </p>
                    <p className="cursor-default text-[#cb6037]">
                      {" "}
                      $ 11.99 USD
                    </p>
                  </div>
                  <p>Fish</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex gap-8 bg-[#f5f0ec] flex-col sm:flex-row  ">
              <div className="w-full sm:w-1/3 flex flex-col gap-6">
                <p className="cursor-default text-xl font-semibold tracking-wider	">
                  SPECIAL TASTE
                </p>
                <p className="cursor-default text-5xl font-semobild text-[#cb6037] py-2 tracking-wider">
                  PIZZA
                </p>
                <p className="cursor-default text-lg	">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="w-full sm:w-1/3 flex flex-col gap-6">
                <div>
                  <div className="flex gap-8 text-xl pb-2">
                    <p className="cursor-default hover:text-[#cb6037] transition-colors duration-400 hover:cursor-pointer">
                      MARGHERITA
                    </p>
                    <p className="cursor-default text-[#cb6037]">
                      {" "}
                      $ 11.99 USD
                    </p>
                  </div>
                  <p className="cursor-default">Vegeterian</p>
                </div>

                <div>
                  <div className="flex gap-8 text-xl pb-2">
                    <p className="cursor-default hover:text-[#cb6037] transition-colors duration-400 hover:cursor-pointer">
                      CALZONE
                    </p>
                    <p className="cursor-default text-[#cb6037]">
                      {" "}
                      $ 11.99 USD
                    </p>
                  </div>
                  <p>Meat</p>
                </div>
                <div>
                  <div className="flex gap-8 text-xl pb-2">
                    <p className="cursor-default hover:text-[#cb6037] transition-colors duration-400 hover:cursor-pointer">
                      PEPPERONI
                    </p>
                    <p className="cursor-default text-[#cb6037]">
                      {" "}
                      $ 11.99 USD
                    </p>
                  </div>
                  <p>Meat</p>
                </div>
                <div>
                  <div className="flex gap-8 text-xl pb-2">
                    <p className="cursor-default hover:text-[#cb6037] transition-colors duration-400 hover:cursor-pointer">
                      HAWAIIAN
                    </p>
                    <p className="cursor-default text-[#cb6037]">
                      {" "}
                      $ 11.99 USD
                    </p>
                  </div>
                  <p>Meat</p>
                </div>
              </div>
              <div className="w-full sm:w-1/3 flex flex-col gap-6">
                <div>
                  <div className="flex gap-8 text-xl pb-2">
                    <p className="cursor-default hover:text-[#cb6037] transition-colors duration-400 hover:cursor-pointer">
                      TRIPLE MUSHROOM
                    </p>
                    <p className="cursor-default text-[#cb6037]">
                      {" "}
                      $ 11.99 USD
                    </p>
                  </div>
                  <p className="cursor-default">Vegeterian</p>
                </div>
                <div>
                  <div className="flex gap-8 text-xl pb-2">
                    <p className="cursor-default hover:text-[#cb6037] transition-colors duration-400 hover:cursor-pointer">
                      MEAT FEAST
                    </p>
                    <p className="cursor-default text-[#cb6037]">
                      {" "}
                      $ 11.99 USD
                    </p>
                  </div>
                  <p>Meat</p>
                </div>
                <div>
                  <div className="flex gap-8 text-xl pb-2">
                    <p className="cursor-default hover:text-[#cb6037] transition-colors duration-400 hover:cursor-pointer">
                      QUATTRO FORMAGGI
                    </p>
                    <p className="cursor-default text-[#cb6037]">
                      {" "}
                      $ 11.99 USD
                    </p>
                  </div>
                  <p className="cursor-default">Vegeterian</p>
                </div>
                <div>
                  <div className="flex gap-8 text-xl pb-2">
                    <p className="cursor-default hover:text-[#cb6037] transition-colors duration-400 hover:cursor-pointer">
                      TONNO
                    </p>
                    <p className="cursor-default text-[#cb6037]">
                      {" "}
                      $ 11.99 USD
                    </p>
                  </div>
                  <p>Fish</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="absolute sm:left-0 -bottom-16 w-1/3  left-1/3 sm:bottom-[20%] transform -translate-y-1/2 z-10 ">
          <div className="flex items-center justify-center">
            <button
              className={`focus:outline-none transform transition-transform duration-200 ${iconSizePrev}`}
              onMouseEnter={handleMouseEnterPrev}
              onMouseLeave={handleMouseLeavePrev}
              onClick={handleClickPrev}
            >
              <IoArrowBackCircleOutline size={32} color="#cf6e49" />
            </button>
            <div className="border-b-2 border-[#cf6e49] w-[100px]"></div>
            <button
              className={`focus:outline-none transform transition-transform duration-200 ${iconSizeNext}`}
              onMouseEnter={handleMouseEnterNext}
              onMouseLeave={handleMouseLeaveNext}
              onClick={handleClickNext}
            >
              <IoArrowForwardCircleOutline size={32} color="#cf6e49" />
            </button>
          </div>
        </div>
      </div>
      <div className="h-screen ">
        <img src={backgroundMenu} className="h-full object-cover" />
      </div>
    </div>
  );
};

export default Menu;
