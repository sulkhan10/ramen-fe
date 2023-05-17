import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import MoonLoader from "react-spinners/MoonLoader";

let Contact = () => {
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  }, []);
  return (
    <div>
      Contact
    </div>
  );
};
export default Contact;
