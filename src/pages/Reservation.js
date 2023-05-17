import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";

import MoonLoader from "react-spinners/MoonLoader";

let Reservation = () => {
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  }, []);
  return (
    <div className="min-h-screen bg-red-400 flex justify-center items-center text-4xl text-white">
     Reservation
    </div>
  );
};
export default Reservation;
