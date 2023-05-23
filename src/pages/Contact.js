import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import MoonLoader from "react-spinners/MoonLoader";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
import backgroundAbout from "../assets/image/background-contact.jpg";
import backgroundForm from "../assets/image/background-form.jpg";
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
import logoWhite from "../assets/image/logo-white.png";
import logoRed from "../assets/image/logo-red.png";
import { CSSTransition } from "react-transition-group";
import { Transition } from "react-transition-group";
import {
  IoLogoInstagram,
  IoLogoWhatsapp,
  IoMailOutline,
} from "react-icons/io5";

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
        <IoMailOutline size={30} className="text-[#f1eee9]" />
      </a>
    );
  };

  const WhatsappLink = ({ phoneNumber, message }) => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    return (
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <IoLogoWhatsapp size={30} className="text-[#f1eee9]" />
      </a>
    );
  };

  const InstagramLink = ({ username }) => {
    const instagramUrl = `https://www.instagram.com/${username}`;

    return (
      <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
        <IoLogoInstagram size={30} className="text-[#f1eee9]" />
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
        className="relative p-12 text-[#717171] flex flex-col justify-center items-center w-full sm:py-24"
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
                  Address
                </h2>
                <div className="text-lg mb-4  mt-2 sm:mt-0">
                  <p className="">666 Jkt 7 Unit 48-47,</p>
                  <p className="mt-1 sm:mt-2">Jakarta, ON L0T 1T1</p>
                </div>
              </div>
              <div className="sm:flex sm:gap-12 sm:justify-between">
                <h2 className="text-xl md:text-2xl font-bold mt-2  sm:mt-0 ">
                  Phone
                </h2>
                <div className="text-lg  mt-2  sm:mt-0">
                  <p>(123) 456-7890</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-12 justify-between mt-4 sm:mt-0 ">
              <h2 className="text-xl md:text-2xl font-bold mt-2  sm:mt-0">
                Hours
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
        className="relative p-12  flex flex-col justify-center items-center w-full text-gray-50 sm:py-24"
        style={{
          backgroundImage: `linear-gradient(rgba(251,	249,	242, 0.7), rgba(251,	249,	242, 0.7)),url("${backgroundForm}")`,
          // backgroundSize: 'cover',
          backgroundPosition: "left",
          // backgroundRepeat: "no-repeat",
          // backdropFilter: "blur(10px)",
        }}
        data-aos="fade-up"
      >
        <div
          className="absolute inset-0 bg-[#baa484] bg-opacity-80 backdrop-filter backdrop-blur-xs"
          style={{ zIndex: -1 }}
        ></div>
        <div className="w-full md:w-4/5  ">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-2 w-full">
            <div className="flex gap-2 items-center mb-8">
              <img src={logoRed} alt="logo" className="w-28  mr-2" />
              <h2 className="text-3xl font-normal">Contact</h2>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-2 w-full">
            <div className="sm:w-1/3">
              <div className="flex gap-8 mb-2 sm:mb-4">
                <InstagramLink username="s.g.sakti" />
                <p>s.g.sakti</p>
              </div>
              <div className="flex gap-8 mb-2 sm:mb-4">
                <WhatsappLink
                  phoneNumber="6285858999264"
                  message="Hello, I have a question."
                />
                <p>6285858999264</p>
              </div>
              <div className="flex gap-8 mb-2 sm:mb-4">
                <MailToLink
                  email="sulkhangalangsakti@gmail.com"
                  subject="Hello"
                  body="I'm interested in your services"
                />{" "}
                <p>sulkhangalangsakti@gmail.com</p>
              </div>
            </div>
            <div className="sm:w-2/3">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex gap-5">
                  <div className="w-1/2">
                    <label htmlFor="name" className="font-normal text-lg">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full border rounded-md py-1 mt-2 px-4 bg-transparent  border-gray-50 focus:outline-none focus:border-amber-900 focus:ring-1 focus:ring-amber-900 "
                    />
                  </div>
                  <div className="w-1/2">
                    <label htmlFor="email" className="font-normal text-lg">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full border rounded-md py-1 mt-2 px-4 bg-transparent  border-gray-50 focus:outline-none focus:border-amber-900 focus:ring-1 focus:ring-amber-900 "
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="font-normal text-lg">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full border rounded-md py-1 mt-2 px-4 bg-transparent  border-gray-50 focus:outline-none focus:border-amber-900 focus:ring-1 focus:ring-amber-900 "
                  />
                </div>
                <div>
                  <label htmlFor="message" className="font-normal text-lg">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="w-full border rounded-md py-1 mt-2 px-4 bg-transparent  border-gray-50 focus:outline-none focus:border-amber-900 focus:ring-1 focus:ring-amber-900 "
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-amber-800 text-white py-2 px-4 rounded-md hover:bg-amber-900"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
