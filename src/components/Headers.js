import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Headers = () => {
  let cartitem = useSelector((state) => state.cart.count);
  console.log(cartitem);
  return (
    <div className="bg-black ">
      <ul className="flex justify-end mr-5">
        <Link to="/">
          <li className="mx-5 hover:bg-blue-700 hover:block  p-5 hover:rounded-lg text-white hover:text-white font-bold">
            Home
          </li>
        </Link>
        <Link to="about">
          <li className="mx-5  hover:bg-blue-700 hover:block  p-5 hover:rounded-lg text-white hover:text-white font-bold">
            About
          </li>
        </Link>
        <Link to="/">
          <li className="  hover:bg-blue-700 hover:block  p-5 hover:rounded-lg text-white hover:text-white font-bold">
            contact
          </li>
        </Link>
        <Link to="cart">
          <li className="text-white p-5 ">cart:{cartitem.length}</li>
        </Link>
      </ul>
    </div>
  );
};

export default Headers;
