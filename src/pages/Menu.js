import React, { useEffect, useState, useRef } from "react";
import "../index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper.min.css";
// import "swiper/components/navigation/navigation.min.css";
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
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-red-700 z-10">
          <button onClick={goPrev}>Previous</button>
          <button onClick={goNext}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
