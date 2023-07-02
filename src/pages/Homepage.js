import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import backgroundSectionTwo from "../assets/image/images9.jpg";
import logoColor from "../assets/image/logo-reketek.png";
import MoonLoader from "react-spinners/MoonLoader";
import backgroundHomepage from "../assets/image/images10.jpg";
import cardImageOne from "../assets/image/image6.jpg";
import cardImageTwo from "../assets/image/image2.jpg";
import cardImageThree from "../assets/image/image7.jpg";
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
            src="https://www.shutterstock.com/shutterstock/videos/1103972075/preview/stock-footage-arowana-fish-swimming-in-a-clear-aquarium.webm"
            // src="https://joy.videvo.net/videvo_files/video/premium/video0253/large_watermarked/1000_00859_preview.mp4"
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
              &nbsp; Selamat datang di Toko Ikan Hias Kami - destinasi
              terbaik untuk pecinta ikan arwana. Kami menghadirkan kualitas
              terbaik dalam penjualan ikan arwana eksotis serta layanan
              perawatan dan pengobatan yang profesional.
            </p>
            <p className="text-lg mb-4 text-justify sm:text-center">
              &nbsp; Dedikasi kami terhadap kualitas dan keindahan ikan arwana
              membawa kami pada pengalaman yang tak tertandingi. Jadikan kami
              mitra terpercaya Anda dalam memilih ikan arwana berkualitas tinggi
              yang akan mempercantik akuarium Anda.
            </p>
            <p className="text-lg mb-4 text-justify sm:text-center">
              &nbsp; Bersama kami, Anda akan menemukan berbagai jenis ikan
              arwana yang memukau dengan warna dan corak yang menakjubkan. Kami
              juga menyediakan layanan pengobatan dan perawatan terbaik untuk
              memastikan kesehatan ikan arwana kesayangan
              Anda.
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
  Pesona Eksotis Ikan Arwana yang Tak Terlupakan
</li>
              <Link to="/about">
              <li>
                <button
                  type="submit"
                  className="text-white py-2 px-4 rounded-3xl border-2 border-white hover:bg-gray-50 hover:text-gray-700 transition duration-600"
                  >
                  &nbsp; &nbsp; About Us &nbsp; &nbsp;
                </button>{" "}
              </li>
                  </Link>
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
                  src={cardImageOne}
                  alt="background"
                  className="h-full w-full object-cover transform transition-transform duration-700 hover:scale-125	 
        "
                />
              </div>
              <h2 className="text-xl font-bold my-4">
  Keindahan Ikan Arwana Silver
</h2>{" "}
<p className="text-sm md:text-sm mb-1">
  Ikan Arwana Silver adalah salah satu jenis ikan hias yang menakjubkan. Keunikan warna peraknya yang mempesona serta gerakan yang anggun membuatnya menjadi pilihan yang sempurna untuk menghiasi akuarium Anda.
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
              <h2 className="text-xl font-bold my-4">
   Arwana Super Red yang Menakjubkan
</h2>
<p className="text-sm md:text-sm mb-1">
  Arwana Super Red adalah salah satu varietas ikan Arwana yang paling menarik dan diminati di dunia akuatik. Dikenal karena warna merahnya yang mencolok dan sisik yang mengkilap, Arwana Super Red memberikan keindahan yang memukau di dalam akuarium Anda.
</p>
            </div>
            <div className="mx-auto py-2 w-full sm:w-1/3">
              <div className="h-3/4 w-full overflow-hidden">
                <img
                  src={cardImageThree}
                  alt="background"
                  className="h-full w-full object-cover transform transition-transform duration-700 hover:scale-125	 
        "
                />
              </div>
              <h2 className="text-xl font-bold my-4">
  Tips Merawat Ikan Arwana
</h2>
<p className="text-sm md:text-sm mb-1">
  - Pilih akuarium yang cukup besar dan jaga kualitas air.
  - Berikan makanan seimbang dan berkualitas tinggi.
  - Lakukan pemeliharaan rutin dan perhatikan perilaku ikan.
  - Beri ikan arwana ruang yang cukup dan hiaslah akuarium dengan elemen alami.
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
                Nantikan Layanan Terbaik Kami
              </li>
              <li className="text-3xl sm:text-3xl text-gray-50 font-semibold text-center">
                Segera Hubungi Kami Untuk Informasi lebih lanjut
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
