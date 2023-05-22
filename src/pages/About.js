import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import MoonLoader from "react-spinners/MoonLoader";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
import backgroundAbout from "../assets/image/background-about.jpg";
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

let About = () => {
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
        className="  w-full h-screen object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-20"></div>

      <div
        className="relative p-12 text-[#717171] flex flex-col justify-center items-center"
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
          <h2 className="text-xl md:text-3xl font-bold mt-2  md:mt-6 text-center">
            The Idea Behind Ramen Restaurant G:
          </h2>
          <h2 className="text-3xl font-bold mb-4 md:mb-6 text-center">
            Celebrating Food and Culture
          </h2>
          <p className="text-lg mb-4 text-center">
            Ramen Restaurant G is a culinary venture that originated from a deep
            passion for exceptional food and rich cultural experiences. We
            believe that food has the power to bring people together and create
            memorable moments.
          </p>
          <p className="text-lg mb-4 text-center">
            Our journey began with a genuine appreciation for the diverse
            culinary traditions across different cultures. We wanted to create a
            space where food enthusiasts could explore and indulge in a wide
            range of flavors, while also celebrating the cultural heritage
            behind each dish.
          </p>
          <p className="text-lg mb-4 text-center">
            At Ramen Restaurant G, we pay homage to the culinary arts and
            cultural traditions that have shaped our menu. We meticulously
            curate our ingredients, sourcing them from local farmers and
            suppliers who share our commitment to quality and sustainability.
          </p>
          {/* <p className="text-lg mb-4">
            Our chefs and culinary experts are dedicated to crafting dishes that
            highlight the authenticity and depth of flavors from various
            culinary traditions. From traditional recipes handed down through
            generations to innovative fusion creations, our menu is a reflection
            of our passion for culinary excellence.
          </p> */}
          <p className="text-lg mb-4 text-center">
            We invite you to join us on a gastronomic adventure where you can
            savor the remarkable flavors, aromas, and textures of our carefully
            curated dishes. Each bite at Ramen Restaurant G is a journey through
            culinary traditions, allowing you to experience the rich tapestry of
            flavors that our diverse world has to offer.
          </p>
        </div>
      </div>

      <div
        className="flex flex-col sm:flex-row"
        // data-aos="fade-right"
      >
        <div
          data-aos="fade-right"
          className="sm:w-2/5 h-full flex items-center text-[#717171] justify-center sm:h-[685px]"
        >
          <img
            src={cardImageThree}
            alt="background"
            className="h-full w-full object-cover"
          />
        </div>

        <div
          data-aos="flip-right"
          className="sm:w-3/5 h-full  text-[#717171]  mx-12  sm:h-[685px]  overflow-scroll scrollbar-hide"
        >
          <div className="text-[#717171] ">
            <div className="flex my-6">
              <img src={logoIcon} alt="logo" className="w-20 h-20" />
              <h2 className="text-3xl font-bold my-6 ">
                Indonesian-Chinese Fusion Style Ramen
              </h2>
            </div>
            {/* <div className="flex flex-col items-center justify-center"> */}

            <p className="text-lg md:text-lg mb-4">
              The idea of "Ramen Restaurant G" was born out of an enthusiasm for
              great food and culture. In Indonesia, we embrace the rich culinary
              heritage of both Indonesian and Chinese cuisines. We believe that
              blending these two culinary traditions creates a unique and
              flavorful experience.
            </p>
            <p className="text-lg md:text-lg mb-4">
              Our fusion-style Ramen showcases the best of both worlds. We
              combine traditional Indonesian spices and ingredients with the art
              of Chinese noodle-making to create a truly satisfying and
              delicious bowl of ramen.
            </p>
            <p className="text-lg md:text-lg mb-4">
              At Ramen Restaurant G, we take pride in our carefully crafted
              recipes and attention to detail. Our broth is simmered for hours
              using a combination of Indonesian spices and Chinese cooking
              techniques, resulting in a rich and flavorful base. We source the
              freshest ingredients, including local produce and quality meats,
              to ensure the highest quality in every bowl.
            </p>
            <p className="text-lg md:text-lg mb-4">
              The noodles in our fusion ramen are a combination of Indonesian
              and Chinese styles. We use thin, chewy noodles that have been
              infused with Indonesian spices, giving them a unique and aromatic
              flavor. These noodles perfectly complement the rich broth and
              toppings, creating a harmonious blend of flavors.
            </p>
            {/* </div> */}
            {/* <p className="text-lg md:text-xl mb-4">
        Join us at Ramen Restaurant G for an unforgettable culinary experience.
        Our Indonesian-Chinese fusion style ramen will take you on a journey of
        flavors, combining the best of both cuisines in a single bowl. Taste
        the harmony of Indonesian and Chinese influences and indulge in the
        exquisite flavors that only fusion cuisine can offer.
      </p> */}
          </div>
        </div>
      </div>
     
        <div
          className="relative p-12 text-[#717171] flex flex-col sm:flex-row justify-center items-center"
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
              <div className="flex my-6">
                <img src={logoIcon} alt="logo" className="w-20 h-20" />
                <h2 className="text-3xl font-bold my-6 ">
                  Indonesian-Chinese Fusion Style Ramen
                </h2>
              </div>

              <p className="text-lg md:text-lg mb-4">
                The idea of "Ramen Restaurant G" was born out of an enthusiasm for
                great food and culture. In Indonesia, we embrace the rich culinary
                heritage of both Indonesian and Chinese cuisines. We believe that
                blending these two culinary traditions creates a unique and
                flavorful experience.
              </p>
              <p className="text-lg md:text-lg mb-4">
                Our fusion-style Ramen showcases the best of both worlds. We
                combine traditional Indonesian spices and ingredients with the art
                of Chinese noodle-making to create a truly satisfying and
                delicious bowl of ramen.
              </p>
              <p className="text-lg md:text-lg mb-4">
                At Ramen Restaurant G, we take pride in our carefully crafted
                recipes and attention to detail. Our broth is simmered for hours
                using a combination of Indonesian spices and Chinese cooking
                techniques, resulting in a rich and flavorful base. We source the
                freshest ingredients, including local produce and quality meats,
                to ensure the highest quality in every bowl.
              </p>
              <p className="text-lg md:text-lg mb-4">
                The noodles in our fusion ramen are a combination of Indonesian
                and Chinese styles. We use thin, chewy noodles that have been
                infused with Indonesian spices, giving them a unique and aromatic
                flavor. These noodles perfectly complement the rich broth and
                toppings, creating a harmonious blend of flavors.
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

      <div className="flex">
      <div className="w-1/2  transition-all">
      
          <img
            src={getImageUrlByStep(currentStep)}
            alt="Step Image"
            className="h-[480px] w-auto object-fill "
            // data-aos="flip-right"
            style={{ objectPosition: "center",
            // transition: `${currentStep === stepBefore ? " 1s ease-in-out" : " 1s ease-in-out"}`,
            // filter: `${currentStep === stepBefore ? "brightness(100%)" : "brightness(50%)"}`,
            // opacity: `${currentStep === stepBefore ? "100%" : "50%"}`
            

          }
          }
          />
      </div>
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-4">小满米线 The Process</h2>
          <ul className="mb-4">
            <li
              className={`cursor-pointer mb-2 ${
                currentStep === 1 ? "font-bold" : ""
              }`}
              onClick={() => handleStepClick(1)}
            >
              Step 1: Separate the quail egg yolk from egg white, put the egg
              yolk into the boiling soup.
            </li>
            <li
              className={`cursor-pointer mb-2 ${
                currentStep === 2 ? "font-bold" : ""
              }`}
              onClick={() => handleStepClick(2)}
            >
              Step 2: Batter the raw chicken, fish, and beef slices in slightly
              beaten egg whites to tenderize the meat.
            </li>
            <li
              className={`cursor-pointer mb-2 ${
                currentStep === 3 ? "font-bold" : ""
              }`}
              onClick={() => handleStepClick(3)}
            >
              Step 3: Quickly dip the meats a few times in boiling broth, as
              this will intensify the flavor.
            </li>
            <li
              className={`cursor-pointer mb-2 ${
                currentStep === 4 ? "font-bold" : ""
              }`}
              onClick={() => handleStepClick(4)}
            >
              Step 4: Then, place all ingredients into the broth, and add chili
              oil based on preference.
            </li>
            <li
              className={`cursor-pointer mb-2 ${
                currentStep === 5 ? "font-bold" : ""
              }`}
              onClick={() => handleStepClick(5)}
            >
              Step 5: Use chopsticks to pick up the rice noodles and place it
              into the broth.
            </li>
          </ul>
          <p>
            Done: Slurp the noodles, enjoy the texture and flavor that melts in
            your mouth. When the noodles are finished, take your time and enjoy
            the broth.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
