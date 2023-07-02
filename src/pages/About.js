import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
import backgroundAbout from "../assets/image/image4.jpg";
import backgroundSectionTwo from "../assets/image/images9.jpg";


AOS.init();

let About = () => {

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
          <h2 className="text-2xl md:text-4xl font-bold mt-2  md:mt-6 text-center">
            Reketek Arwana
          </h2>
          <h2 className="text-xl md:text-2xl font-bold mb-4 mt-2 md:mb-6 text-center">
          Toko Ikan Arwana Reliable, Terjangkau, Handal       </h2>
          <p className="text-lg mb-4 text-justify sm:text-center">
  &nbsp; Selamat datang di Toko Ikan Arwana Kami - destinasi terbaik bagi pecinta ikan arwana. Kami menawarkan kualitas terbaik dalam penjualan ikan arwana eksotis serta layanan perawatan dan pengobatan yang profesional.
</p>
<p className="text-lg mb-4 text-justify sm:text-center">
  &nbsp; Dedikasi kami terhadap kualitas dan keindahan ikan arwana membawa kami pada pengalaman yang tak tertandingi. Jadikan kami mitra terpercaya Anda dalam memilih ikan arwana berkualitas tinggi yang akan mempercantik akuarium Anda.
</p>
<p className="text-lg mb-4 text-justify sm:text-center">
  &nbsp; Bersama kami, Anda akan menemukan berbagai jenis ikan arwana yang memukau dengan warna dan corak yang menakjubkan. Kami juga menyediakan layanan pengobatan dan perawatan terbaik untuk memastikan kesehatan ikan arwana kesayangan Anda.
</p>
<p className="text-lg mb-4 text-justify sm:text-center">
  &nbsp; Kami dengan bangga menyediakan layanan penjualan ikan arwana eksotis dan perawatan khusus untuk menjaga kesehatan dan keindahan ikan arwana Anda. Kami berkomitmen untuk memberikan pengalaman yang alami, memuaskan, dan profesional dalam merawat ikan arwana Anda. Dari pemberian pakan yang tepat hingga pengobatan yang sesuai, tim kami siap memberikan perawatan yang optimal untuk ikan arwana kesayangan Anda.
</p>

        </div>
      </div>

   
      
    </div>
  );
};
export default About;
