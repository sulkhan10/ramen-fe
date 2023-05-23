import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import MoonLoader from "react-spinners/MoonLoader";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
import backgroundAbout from "../assets/image/background-contact.jpg";
import backgroundSectionOne from "../assets/image/bg-section-1.jpg";
import backgroundSectionTwo from "../assets/image/bg-section-2.jpg";
import backgroundSectionThree from "../assets/image/bg-section-3.jpg";
import backgroundSectionFour from "../assets/image/bg-section-4.jpg";
import backgroundSectionFive from "../assets/image/bg-section-5.jpg";
import backgroundSectionSix from "../assets/image/bg-section-6.jpg";
import backgroundSectionSeven from "../assets/image/bg-section-7.jpg";
import backgroundSectionEight from "../assets/image/bg-section-8.jpg";
import backgroundSectionNine from "../assets/image/bg-section-9.jpg";
import backgroundSectionTen from "../assets/image/bg-section-10.jpg";
import backgroundSectionEleven from "../assets/image/bg-section-11.jpg";
import cardImageOne from "../assets/image/card-about-1.jpg";
import cardImageTwo from "../assets/image/card-about-2.jpg";
import cardImageThree from "../assets/image/card-about-3.jpg";
import logoIcon from "../assets/image/logo-icon.png";
import { CSSTransition } from "react-transition-group";
import { Transition } from "react-transition-group";

// import { useTransition, animated } from "react-spring";

AOS.init();

let Contact = () => {
  let [loading, setLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);
  const [stepBefore, setStepBefore] = useState(0);

  const handleStepClick = (step) => {
    // AOS.refresh();
    setStepBefore(currentStep);
    setCurrentStep(step);
  };
  // const transitions = useTransition(currentStep, null, {
  //   from: { opacity: 0, transform: "translateX(-100%)" },
  //   enter: { opacity: 1, transform: "translateX(0%)" },
  //   leave: { opacity: 0, transform: "translateX(100%)" },
  // });
  const getImageUrlByStep = (step) => {
    // Kode untuk mengambil URL gambar berdasarkan langkah
    // Ganti dengan logika yang sesuai dengan langkah-langkah Anda
    switch (step) {
      case 1:
        return cardImageOne;
      case 2:
        return cardImageTwo;
      case 3:
        return cardImageThree;
      case 4:
        return backgroundSectionFour;
      case 5:
        return backgroundSectionFive;
      default:
        return "";
    }
  };
  useEffect(() => {
    setLoading(true);
    // setLoading(false);
    setTimeout(() => setLoading(false), 2000);
  }, []);
  return (
    <div className="min-h-screen bg-[#f1eee9] flex flex-col  justify-center items-center text-md text-[#717171]">
      <img
        src={backgroundAbout}
        alt="background"
        className="  w-full h-screen object-cover	"
      />
      <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-20"></div>

      <div
        className="relative p-12 text-[#717171] flex flex-col justify-center items-center w-full"
        style={{
          backgroundImage: `linear-gradient(rgba(251,	249,	242, 0.8), rgba(251,	249,	242, 0.9)),url("${backgroundSectionTwo}")`,
          // backgroundSize: 'cover',
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
          backdropFilter: "blur(80px)",
        }}
        data-aos="fade-up"
      >
        <div
          className="absolute inset-0 bg-white bg-opacity-50 backdrop-filter backdrop-blur-sm"
          style={{ zIndex: -1 }}
        ></div>
        <div className="w-full md:w-3/4 ">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-2 w-full">
          <div className="">
            <div className="sm:flex sm:gap-12 sm:justify-between">
              <h2 className="text-xl md:text-2xl font-bold mt-2  sm:mt-0 ">
                Address
              </h2>
              <div className="text-lg mb-4">
                <p>505 Hwy 7 Unit 50-53,</p>
                <p>Markham, ON L3T 7T1</p>
              </div>
            </div>
            <div className="sm:flex sm:gap-12 sm:justify-between">
              <h2 className="text-xl md:text-2xl font-bold mt-2  sm:mt-0 ">
                Phone
              </h2>
              <div className="text-lg ">
                <p>(905) 597-0087</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-12 justify-between ">
            <h2 className="text-xl md:text-2xl font-bold mt-2  sm:mt-0">
              Hours
            </h2>
            <div className="text-lg mb-4">
              <p>Monday: 11a.m. - 8p.m.</p>
              <p>Tuesday: 11a.m. - 8p.m.</p>
              <p>Wednesday: 11a.m. - 8p.m.</p>
              <p>Thursday: 11a.m. - 8p.m.</p>
              <p>Friday: 11a.m. - 8:30p.m.</p>
              <p>Saturday: 11a.m. - 8:30p.m.</p>
              <p>Sunday: 11a.m. - 8p.m.</p>
            </div>
          </div>
        </div>

        </div>
      </div>

     
    </div>
  );
};
export default Contact;
