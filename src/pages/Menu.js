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
import backgroundMenu from "../assets/image/image3.jpg";

import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
import backgroundSectionTwo from "../assets/image/images9.jpg";

import cardImageOne from "../assets/image/image1.jpg";
import cardImageTwo from "../assets/image/image2.jpg";
import cardImageFour from "../assets/image/image4.jpg";

import cardImageEight from "../assets/image/image8.jpg";

import logoIcon from "../assets/image/logo-reketek-grey.png";

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
      <div className="h-screen w-full flex justify-center bg-[#011051]">
        <img
          src={backgroundMenu}
          className="w-full object-cover sm:pt-[-8%]  h-screen"
        />
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
            <img
              src={logoIcon}
              alt="logo"
              className="hidden sm:block sm:w-40  mt-16"
            />
            <h2 className="text-3xl sm:text-4xl  mt-6 ">MISI KAMI ADALAH</h2>
            <h2 className="text-3xl sm:text-4xl">MENGHADIRKAN KEASLIAN</h2>
            <h2 className="text-3xl sm:text-4xl  mb-6 ">
              IKAN ARWANA EKSOTIS UNTUK ANDA
            </h2>

            <p className="text-lg md:text-lg mb-4">
              Konsep Toko Ikan Hias Kami berawal dari antusiasme kami terhadap
              ikan arwana eksotis. Kami menyediakan penjualan ikan arwana dan
              layanan pengobatan serta perawatan khusus untuk ikan arwana. Kami
              percaya bahwa keindahan ikan arwana dapat menjadi pengalaman yang
              luar biasa bagi Anda.
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
        <h2 className="text-3xl sm:text-5xl text-center text-gray-500 pt-4">
          TOKO IKAN ARWANA EKSOTIS
        </h2>
        <h2 className="text-3xl sm:text-5xl text-center text-gray-400 pb-8">
          PENJUALAN DAN PERAWATAN
        </h2>
        <p className="text-lg text-center text-gray-600 px-8 sm:px-48">
          Kami dengan bangga menyediakan layanan penjualan ikan arwana eksotis
          dan perawatan khusus untuk menjaga kesehatan dan keindahan ikan arwana
          Anda. Kami berkomitmen untuk memberikan pengalaman yang alami,
          memuaskan, dan profesional dalam merawat ikan arwana Anda. Dari
          pemberian pakan yang tepat hingga pengobatan yang sesuai, tim kami
          siap memberikan perawatan yang optimal untuk ikan arwana kesayangan
          Anda.
        </p>
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
            src={cardImageOne}
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
              <img src={logoIcon} alt="logo" className="w-20 h-20 mr-8" />
              <h2 className="text-3xl font-bold my-6 ">
                Perawatan Ikan Arwana Profesional
              </h2>
            </div>

            <p className="text-lg md:text-lg mb-4">
              Kami dengan bangga menyediakan layanan perawatan ikan arwana yang
              komprehensif. Tim ahli kami memiliki pengalaman dalam merawat dan
              mengobati ikan arwana yang sakit atau memiliki masalah kesehatan.
              Kami berkomitmen untuk memberikan perawatan yang profesional dan
              memastikan kesehatan serta keindahan ikan arwana Anda.
            </p>
            <p className="text-lg md:text-lg mb-4">
              Kami menggunakan pendekatan yang hati-hati dan berdasarkan
              pengetahuan mendalam tentang kebutuhan khusus ikan arwana. Kami
              menawarkan pemeriksaan kesehatan rutin, pengobatan penyakit,
              pengaturan nutrisi yang tepat, serta lingkungan yang optimal untuk
              ikan arwana Anda.
            </p>
            <p className="text-lg md:text-lg mb-4">
              Dengan perawatan yang tepat, ikan arwana dapat tumbuh sehat,
              indah, dan kuat. Tim kami siap membantu Anda menjaga kesehatan
              ikan arwana kesayangan Anda dan memberikan saran yang sesuai untuk
              perawatan lanjutan.
            </p>
            <p className="text-lg md:text-lg mb-4">
              Kami menyadari betapa berharganya ikan arwana bagi Anda, dan
              itulah mengapa kami berkomitmen untuk memberikan layanan perawatan
              terbaik dengan fokus pada kesejahteraan dan kebahagiaan ikan
              arwana Anda.
            </p>
          </div>
        </div>
      </div>
      <div
        className="relative text-[#717171] flex flex-col sm:flex-row justify-center items-center "
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
              <img src={logoIcon} alt="logo" className="w-20 h-20 mr-10" />
              <h2 className="text-3xl font-bold my-6 ">
                Salon Ikan Arwana Terbaik
              </h2>
            </div>

            <p className="text-lg md:text-lg mb-4">
              Kami menyediakan layanan salon ikan arwana yang lengkap untuk
              memperindah dan merawat ikan kesayangan Anda. Dengan layanan kami,
              kami akan memperindah mata, mulut, sisir, dayung, pijat dayung,
              sisir, dan suntik kembung ikan arwana Anda, sehingga menjadikannya
              lebih cantik dan sehat.
            </p>
            <p className="text-lg md:text-lg mb-4">
              Kami sangat memperhatikan detail dan kualitas dalam melakukan
              salon ikan arwana. Dengan menggunakan teknik dan peralatan yang
              tepat, kami akan memberikan perawatan terbaik untuk ikan arwana
              Anda agar tetap sehat dan indah. Kami mengutamakan keamanan dan
              kenyamanan ikan arwana selama proses salon.
            </p>
            <p className="text-lg md:text-lg mb-4">
              Tim kami terdiri dari para ahli yang berpengalaman dalam merawat
              ikan arwana. Kami menggunakan produk berkualitas dan mengikuti
              prosedur yang tepat untuk memastikan bahwa ikan arwana Anda
              mendapatkan perawatan yang terbaik. Anda dapat mempercayakan ikan
              arwana kesayangan Anda kepada kami.
            </p>
            <p className="text-lg md:text-lg mb-4">
              Dengan layanan salon ikan arwana kami, kami berharap dapat
              memberikan pengalaman yang memuaskan bagi Anda dan ikan arwana
              Anda. Kami selalu berusaha memberikan hasil yang memuaskan dan
              menjaga kepercayaan Anda sebagai pelanggan kami.
            </p>
          </div>
        </div>

        <div
          data-aos="flip-right"
          className="sm:w-2/5 h-full flex items-center text-[#717171] justify-center sm:h-[685px]"
        >
          <div className="h-3/4 w-3/4 overflow-hidden">
            <img
              src={cardImageEight}
              alt="background"
              className="h-full w-full object-cover transform transition-transform duration-700 hover:scale-125	 
        "
            />
          </div>
        </div>
      </div>
      <div
        className="flex flex-col sm:flex-row"
        // data-aos="fade-right"
      >
        <div
          data-aos="fade-right"
          className="sm:w-2/5 h-full flex items-center text-[#717171] justify-center sm:h-[685px] hidden sm:block"
        >
          <img
            src={cardImageFour}
            alt="background"
            className="h-full w-full object-cover "
          />
        </div>

        <div
          data-aos="flip-right"
          className="sm:w-3/5 h-full  text-[#717171]  mx-12  sm:h-[685px]  overflow-scroll scrollbar-hide"
        >
          <div className="text-[#717171] ">
            <div className="flex my-6">
              <img src={logoIcon} alt="logo" className="w-20 h-20 mr-8" />
              <h2 className="text-3xl font-bold my-6 ">Titip Ikan Arwana</h2>
            </div>

            <p className="text-lg md:text-lg mb-4">
              Kami mengerti bahwa keamanan dan kenyamanan ikan arwana Anda
              sangat penting. Oleh karena itu, kami akan memberikan perhatian
              penuh dan memastikan bahwa ikan arwana Anda mendapatkan perawatan
              terbaik selama Anda tidak berada di sana.
            </p>
            <p className="text-lg md:text-lg mb-4">
              Anda dapat menitipkan ikan Anda kepada kami dengan keyakinan bahwa
              ikan Anda akan dalam kondisi yang prima sampai Anda mengambilnya
              kembali. Kami memiliki fasilitas yang aman dan lingkungan yang
              mendukung bagi ikan arwana Anda selama Anda tidak dapat merawatnya
              sendiri. Kepercayaan Anda adalah prioritas kami, dan kami akan
              menjaga kesehatan dan keindahan ikan arwana Anda dengan penuh
              dedikasi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
