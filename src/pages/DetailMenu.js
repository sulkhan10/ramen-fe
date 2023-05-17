import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MoonLoader from "react-spinners/MoonLoader";

let DetailMenu = () => {
  let [detailMenuById, setDetailMenuById] = useState({});
  let [dataIngredients, setDataIngredients] = useState([]);
  let [dataCategory, setDataCategory] = useState("");
  let [loading, setLoading] = useState(true);


  return (
    <div>
     DetailMenu
    </div>
  );
};
export default DetailMenu;
