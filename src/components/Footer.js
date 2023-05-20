import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

import "../index.css";
import {
  IoLogoInstagram,
  IoLogoWhatsapp,
  IoMailOutline,
} from "react-icons/io5";

import logo from '../assets/image/logo-red.png'

const MailToLink = ({ email, subject, body }) => {
  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <a href={mailtoUrl}>
      <IoMailOutline size={30} className="text-[#474747]" />
    </a>
  );
};

const WhatsappLink = ({ phoneNumber, message }) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
      <IoLogoWhatsapp size={30} className="text-[#474747]" />
    </a>
  );
};

const InstagramLink = ({ username }) => {
  const instagramUrl = `https://www.instagram.com/${username}`;

  return (
    <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
      <IoLogoInstagram size={30} className="text-[#474747]" />
      </a>
  );
};

let Footer = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  return (
    <div className="footer py-4">
      <div className="footer-overlay"></div>
      <div className="footer-content flex flex-col items-center justify-center">
        <img src={logo} alt="logo" className=" h-12 mb-4" />
        <h1 className="text-[#474747] tracking-wide">小满米线</h1>
        <p className="text-[#474747] tracking-wide">(123) 456-78910</p>
        <p className="text-[#474747] tracking-wide">ramen@gmail.com</p>
        {screenWidth > 768 ? (
          <div>

        <p className="text-[#474747] tracking-wide">
          666 Ramen 6 Ramen 69-69,            Ramen, ON 36DD 36DD

        </p>
       
        </div>
          ) : (
            <div>
  
          <p className="text-[#474747] tracking-wide">
            666 Ramen 6 Ramen 69-69
          </p>
          <p className="text-[#474747] tracking-wide">
             Ramen, ON 36DD 36DD
          </p>
          </div>
            )}
        <div className="social-media flex py-4 gap-4">
        <InstagramLink username="s.g.sakti"/>
          <WhatsappLink
            phoneNumber="6285858999264"
            message="Hello, I have a question."
          />
          <MailToLink
            email="sulkhangalangsakti@gmail.com"
            subject="Hello"
            body="I'm interested in your services"
          />
        </div>

        <p className="text-[#474747] tracking-wide">© 2023 Ramen Ramen</p>
        <p className="text-[#6e6e6e] tracking-wide">
          Designed by Ramen Creative Lab
        </p>
      </div>
    </div>
  );
};

export default Footer;
