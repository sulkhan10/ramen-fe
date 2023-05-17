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
    <div>
    Homepage
    </div>
  );
};
export default Homepage;
