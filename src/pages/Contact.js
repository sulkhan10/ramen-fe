import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import MoonLoader from "react-spinners/MoonLoader";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
import backgroundAbout from "../assets/image/images11.jpg";
import backgroundForm from "../assets/image/background-form.jpg";
import backgroundSectionOne from "../assets/image/bg-section-1.jpg";
import backgroundSectionTwo from "../assets/image/images9.jpg";
import backgroundSectionThree from "../assets/image/bg-section-3.jpg";
import backgroundSectionFour from "../assets/image/bg-section-4.jpg";
import backgroundSectionFive from "../assets/image/bg-section-5.jpg";
import backgroundSectionSix from "../assets/image/bg-section-6.jpg";
import backgroundSectionSeven from "../assets/image/bg-section-7.jpg";
import backgroundSectionEight from "../assets/image/bg-section-8.jpg";
import backgroundSectionNine from "../assets/image/bg-section-9.jpg";
import backgroundSectionTen from "../assets/image/bg-section-10.jpg";
import backgroundSectionEleven from "../assets/image/bg-section-11.jpg";
import cardImageOne from "../assets/image/image1.jpg";
import cardImageTwo from "../assets/image/image2.jpg";
import cardImageThree from "../assets/image/image3.jpg";
import cardImageFour from "../assets/image/image4.jpg";
import cardImageFive from "../assets/image/image5.jpg";
import cardImageSix from "../assets/image/image6.jpg";
import cardImageSeven from "../assets/image/image7.jpg";
import cardImageEight from "../assets/image/image8.jpg";
import cardImageNine from "../assets/image/images9.jpg";
import cardImageTen from "../assets/image/images10.jpg";
import cardImageEleven from "../assets/image/images11.jpg";
import logoIcon from "../assets/image/logo-reketek.png";

import { CSSTransition } from "react-transition-group";
import { Transition } from "react-transition-group";
import {
  IoLogoInstagram,
  IoLogoWhatsapp,
  IoMailOutline,
} from "react-icons/io5";
import SimpleMap from "../components/Map";
AOS.init();

let Contact = () => {
  let [loading, setLoading] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };
  useEffect(() => {
    setLoading(true);
    // setLoading(false);
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const MailToLink = ({ email, subject, body }) => {
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    return (
      <a href={mailtoUrl}>
        <IoMailOutline size={40} className="text-[#717171]" />
      </a>
    );
  };

  const WhatsappLink = ({ phoneNumber, message }) => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    return (
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <IoLogoWhatsapp size={40} className="text-[#717171]" />
      </a>
    );
  };

  const InstagramLink = ({ username }) => {
    const instagramUrl = `https://www.instagram.com/${username}`;

    return (
      <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
        <IoLogoInstagram size={40} className="text-[#717171]" />
      </a>
    );
  };
  return (
    <div className="min-h-screen bg-[#f1eee9] flex flex-col  justify-center items-center text-md text-[#717171] ">
      <img
        src={backgroundAbout}
        alt="background"
        className="  w-full h-screen object-cover	"
      />
      <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-20"></div>

      <div
        className="relative p-12 text-[#717171] flex flex-col justify-center items-center w-full  sm:py-24"
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
        <div className="w-full md:w-4/5  ">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-2 w-full">
            <div className="">
              <div className="sm:flex sm:gap-12 sm:justify-between mb-1 sm:mb-8">
                <h2 className="text-xl md:text-2xl font-bold mt-2  sm:mt-0 ">
                  Alamat Workshop
                </h2>
                <div className="text-lg mb-4  mt-2 sm:mt-0">
                  <p className="">666 Jkt 7 Unit 48-47,</p>
                  <p className="mt-1 sm:mt-2">Jakarta, ON L0T 1T1</p>
                </div>
              </div>
              <div className="sm:flex sm:gap-12 sm:justify-between">
                <h2 className="text-xl md:text-2xl font-bold mt-2  sm:mt-0 ">
                  Telephone
                </h2>
                <div className="text-lg  mt-2  sm:mt-0">
                  <p>(123) 456-7890</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-12 justify-between mt-4 sm:mt-0 ">
              <h2 className="text-xl md:text-2xl font-bold mt-2  sm:mt-0">
                Jam Buka
              </h2>
              <div className="text-lg mb-4 mt-2 sm:mt-0">
                <p>Monday: 11a.m. - 8p.m.</p>
                <p className="mt-1 sm:mt-2">Tuesday: 11a.m. - 8p.m.</p>
                <p className="mt-1 sm:mt-2">Wednesday: 11a.m. - 8p.m.</p>
                <p className="mt-1 sm:mt-2">Thursday: 11a.m. - 8p.m.</p>
                <p className="mt-1 sm:mt-2">Friday: 11a.m. - 8:30p.m.</p>
                <p className="mt-1 sm:mt-2">Saturday: 11a.m. - 8:30p.m.</p>
                <p className="mt-1 sm:mt-2">Sunday: 11a.m. - 8p.m.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative text-[#717171] flex flex-col sm:flex-row justify-center items-center py-12 sm:py-0"
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
            <div className="flex my-6 flex-col sm:flex-row">
              <img src={logoIcon} alt="logo" className="w-20 h-20 mr-10" />
              <h2 className="text-2xl sm:text-3xl font-bold my-6 ">
                Bagaimana Kami Bisa Membantu Anda?
              </h2>
            </div>

            <div className="text-lg md:text-lg mb-4 flex gap-8  items-center">
              <WhatsappLink
                phoneNumber="6287785213604"
                message="Halo kak, saya ingin bertanya tentang layanan Reketek Arwana"
              />
              <p className="text-xl sm:text-2xl">6287785213604</p>
            </div>
            <div className="text-lg md:text-lg mb-4 flex gap-8  items-center">
              <InstagramLink username="s.g.sakti" />{" "}
              <p className="text-xl sm:text-2xl">reketek</p>
            </div>

            <div className="text-lg md:text-lg mb-4 flex gap-8  items-center">
              <MailToLink
                email="sulkhangalangsakti@gmail.com"
                subject="Hello"
                body="Halo kak, saya ingin bertanya tentang layanan Reketek Arwana"
              />{" "}
              <p className="text-xl sm:text-2xl">reketek@mail.com</p>
            </div>
          </div>
        </div>

        <div
          data-aos="flip-right"
          className="sm:w-2/5 h-full flex items-center text-[#717171] justify-center sm:h-[685px] hidden sm:block"
        >
          <div className="h-3/4 w-3/4 overflow-hidden">
            <img
              src={cardImageEleven}
              alt="background"
              className="h-full w-full object-cover transform transition-transform duration-700 hover:scale-125	 
        "
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
