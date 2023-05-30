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
