import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";

import MoonLoader from "react-spinners/MoonLoader";

let Homepage = () => {
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  }, []);
  return (
    // <div className="min-h-screen bg-gray-100 flex justify-center items-center text-4xl text-white">
    // Homepage
    <div className="relative flex items-center 
        justify-center h-screen overflow-hidden">
        <video src=
"https://joy.videvo.net/videvo_files/video/premium/video0253/large_watermarked/1000_00859_preview.mp4"
            autoPlay="{true}" loop muted
            className="absolute  w-auto 
            min-w-full min-h-full max-w-none">
        </video>
    </div>
    // </div>
  );
};
export default Homepage;
