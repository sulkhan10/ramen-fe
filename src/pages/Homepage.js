import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import backgroundSectionTwo from "../assets/image/bg-section-2.jpg";
import logoColor from "../assets/image/logo-color.png";
import MoonLoader from "react-spinners/MoonLoader";
import backgroundHomepage from "../assets/image/background-homepage.jpg";
import cardImageTwo from "../assets/image/card-about-2.jpg";
import logoIcon from "../assets/image/logo-icon.png";
import imageCard from "../assets/image/bg-section-12.jpg";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

let Homepage = () => {
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  }, []);
  return (
    <div>
      <div className="min-h-screen bg-[#f1eee9]  text-md text-[#717171]">
        <div
          className="relative flex items-center 
        justify-center h-screen overflow-hidden"
        >
          <video
            src="https://joy.videvo.net/videvo_files/video/premium/video0253/large_watermarked/1000_00859_preview.mp4"
            autoPlay="{true}"
            loop
            muted
            className="absolute  w-auto 
            min-w-full min-h-full max-w-none"
          ></video>
        </div>
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
            <img
              src={logoColor}
              alt="Logo-1"
              border="0"
              className="mx-auto w-40 py-8"
            />
            <p className="text-lg mb-4 text-justify sm:text-center">
              &nbsp; The concept of "Ramen Restaurant G" originated from a deep
              passion for exquisite cuisine and cultural experiences.
            </p>
            <p className="text-lg mb-4 text-justify sm:text-center">
              &nbsp; Having dedicated years to meticulous planning and
              refinement, we are thrilled to present you with an extraordinary
              dish: Yunnan's renowned "crossing-the-bridge" noodles.
            </p>
            <p className="text-lg mb-4 text-justify sm:text-center">
              &nbsp; Embark on a culinary journey with us as we showcase the
              freshness of our thoughtfully sourced ingredients. Delight in the
              harmony of flavors as our signature base broth, painstakingly
              simmered using premium chicken bones for up to 10 hours,
              intermingles with the texture of our delectable rice noodles,
              prepared right at your table.
            </p>
          </div>
        </div>

        <div
          data-aos="fade-down"
          data-aos-duration="3000"
          className="  inset-0 flex flex-col z-10"
        >
          <div className="relative flex items-center justify-center ">
            <div className="h-[80vh] absolute inset-0 bg-image-navbar opacity-40 -z-20"></div>
            <div className=" absolute inset-0 bg-black opacity-70 -z-10"></div>
            <img
              src={backgroundHomepage}
              className="absolute h-[80vh] w-full object-cover inset-0 -z-30"
            />

            <ul className="h-[80vh] flex flex-col items-center justify-center gap-8 sm:gap-20 w-4/5 sm:w-3/4">
              <li className="text-3xl sm:text-5xl text-gray-50 font-semibold text-center">
                The Enduring Delight of a Satisfied Soul
              </li>
              <li>
                <button
                  type="submit"
                  className="text-white py-2 px-4 rounded-3xl border-2 border-white hover:bg-gray-50 hover:text-gray-700 transition duration-600"
                >
                  &nbsp; &nbsp; About Us &nbsp; &nbsp;
                </button>{" "}
              </li>
            </ul>
          </div>
        </div>

        <div
          className="relative p-12 text-[#717171] flex flex-col justify-center items-center sm:flex-row"
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
          <div className="w-full md:w-7/8 flex flex-col justify-center items-center sm:flex-row gap-8 sm:px-8">
            <div className="mx-auto py-2 w-full sm:w-1/3">
              <div className="h-3/4 w-full overflow-hidden">
                <img
                  src={cardImageTwo}
                  alt="background"
                  className="h-full w-full object-cover transform transition-transform duration-700 hover:scale-125	 
        "
                />
              </div>
              <h2 className="text-xl font-bold my-4 ">
                Indonesian-Chinese Fusion Style Ramen
              </h2>{" "}
              <p className="text-sm md:text-sm mb-1">
                The idea of "Ramen Restaurant G" was born out of an enthusiasm
                for great food and culture. In Indonesia, we embrace the rich
                culinary heritage of both Indonesian and Chinese cuisines. We
                believe that blending these two culinary traditions creates a
                unique and flavorful experience.
              </p>
            </div>
            <div className="mx-auto py-2 w-full sm:w-1/3">
              <div className="h-3/4 w-full overflow-hidden">
                <img
                  src={cardImageTwo}
                  alt="background"
                  className="h-full w-full object-cover transform transition-transform duration-700 hover:scale-125	 
        "
                />
              </div>
              <h2 className="text-xl font-bold my-4 ">
                Indonesian-Chinese Fusion Style Ramen
              </h2>{" "}
              <p className="text-sm md:text-sm mb-1">
                The idea of "Ramen Restaurant G" was born out of an enthusiasm
                for great food and culture. In Indonesia, we embrace the rich
                culinary heritage of both Indonesian and Chinese cuisines. We
                believe that blending these two culinary traditions creates a
                unique and flavorful experience.
              </p>
            </div>
            <div className="mx-auto py-2 w-full sm:w-1/3">
              <div className="h-3/4 w-full overflow-hidden">
                <img
                  src={cardImageTwo}
                  alt="background"
                  className="h-full w-full object-cover transform transition-transform duration-700 hover:scale-125	 
        "
                />
              </div>
              <h2 className="text-xl font-bold my-4 ">
                Indonesian-Chinese Fusion Style Ramen
              </h2>{" "}
              <p className="text-sm md:text-sm mb-1">
                The idea of "Ramen Restaurant G" was born out of an enthusiasm
                for great food and culture. In Indonesia, we embrace the rich
                culinary heritage of both Indonesian and Chinese cuisines. We
                believe that blending these two culinary traditions creates a
                unique and flavorful experience.
              </p>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="  inset-0 flex flex-col z-10"
        >
          <div className="relative flex items-center justify-center ">
            <div className="h-[80vh] absolute inset-0 bg-image-navbar opacity-40 -z-20"></div>
            <div className=" absolute inset-0 bg-black opacity-70 -z-10"></div>
            <img
              src={backgroundHomepage}
              className="absolute h-[80vh] w-full object-cover inset-0 -z-30"
            />

            <ul className="h-[80vh] flex flex-col items-center justify-center gap-4  w-4/5 sm:w-3/4">
              <li className="text-3xl sm:text-5xl text-gray-50 font-semibold text-center">
                Reward Program
              </li>
              <li className="text-3xl sm:text-5xl text-gray-50 font-semibold text-center">
                Coming Soon
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
