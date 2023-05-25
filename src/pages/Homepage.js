import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import backgroundSectionTwo from "../assets/image/bg-section-2.jpg";
import logoColor from "../assets/image/logo-color.png";
import MoonLoader from "react-spinners/MoonLoader";

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
          <p className="text-lg mb-4 text-center">
            The concept of "Ramen Restaurant G" originated from a deep passion
            for exquisite cuisine and cultural experiences.
          </p>
          <p className="text-lg mb-4 text-center">
            Having dedicated years to meticulous planning and refinement, we are
            thrilled to present you with an extraordinary dish: Yunnan's
            renowned "crossing-the-bridge" noodles.
          </p>
          <p className="text-lg mb-4 text-center">
            Embark on a culinary journey with us as we showcase the freshness of
            our thoughtfully sourced ingredients. Delight in the harmony of
            flavors as our signature base broth, painstakingly simmered using
            premium chicken bones for up to 10 hours, intermingles with the
            texture of our delectable rice noodles, prepared right at your
            table.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
