import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";


import MoonLoader from "react-spinners/MoonLoader";

let Menu = () => {
  let [loading, setLoading] = useState(true);
  let [currentPage, setCurrentPage] = useState(1);
  let [dataMenusPerPage] = useState(6);
  let [searchName, setSearchName] = useState("");



  return (
    <div className="min-h-screen bg-red-400 flex justify-center items-center text-4xl text-white">
     Menu
    </div>
  );
};
export default Menu;
