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
import { useMediaQuery } from 'react-responsive';

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

  const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' });

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
    <div className="min-h-screen bg-red-400 flex justify-center items-center text-4xl text-white ">
      <div className="w-full bg-sky-600 relative">
        <Swiper
          ref={swiperRef}
          slidesPerView="auto"
          navigation
          loop={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="bg-sky-100">
              Slide 1
              <div className="flex gap-8 bg-gray-100">
                <div>
                  SPECIAL TASTE PIZZA Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </div>
                <div>
                  MARGHERITA $ 11.99 USD Vegeterian СALZONE $ 13.99 USD Meat
                  PEPPERONI $ 12.99 USD Meat HAWAIIAN $ 12.99 USD Meat
                </div>
                <div>
                  TRIPLE MUSHROOM $ 12.99 USD Vegeterian MEAT FEAST $ 12.99 USD
                  Meat QUATTRO FORMAGGI $ 12.99 USD Vegeterian TONNO $ 12.99 USD
                  Fish
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-sky-100">
              Slide 2
              <div className="flex gap-8 bg-gray-100">
                <div>
                  SPECIAL TASTE PIZZA Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </div>
                <div>
                  MARGHERITA $ 11.99 USD Vegeterian СALZONE $ 13.99 USD Meat
                  PEPPERONI $ 12.99 USD Meat HAWAIIAN $ 12.99 USD Meat
                </div>
                <div>
                  TRIPLE MUSHROOM $ 12.99 USD Vegeterian MEAT FEAST $ 12.99 USD
                  Meat QUATTRO FORMAGGI $ 12.99 USD Vegeterian TONNO $ 12.99 USD
                  Fish
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-sky-100">
              Slide 3
              <div className="flex gap-8 bg-gray-100">
                <div>
                  SPECIAL TASTE PIZZA Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </div>
                <div>
                  MARGHERITA $ 11.99 USD Vegeterian СALZONE $ 13.99 USD Meat
                  PEPPERONI $ 12.99 USD Meat HAWAIIAN $ 12.99 USD Meat
                </div>
                <div>
                  TRIPLE MUSHROOM $ 12.99 USD Vegeterian MEAT FEAST $ 12.99 USD
                  Meat QUATTRO FORMAGGI $ 12.99 USD Vegeterian TONNO $ 12.99 USD
                  Fish
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="absolute sm:left-0 bottom-4 w-1/3  left-1/3 sm:bottom-1/8 transform -translate-y-1/2 bg-red-100 z-10">
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
              onClick={
                handleClickNext
              }            >
              <IoArrowForwardCircleOutline size={32} color="#cf6e49" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
