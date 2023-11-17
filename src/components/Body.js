import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { additem, datafetch } from "./utils/cartSlice";

const Body = () => {
  let store_res = useSelector((state) => state.cart.data);
  console.log(store_res);

  let dispatch = useDispatch();
  useEffect(() => {
    handleData();
  }, []);

  const handleData = async () => {
    let data = await fetch(
      "https://corsproxy.io/?https://fakestoreapi.com/products/category/jewelery"
    );
    let json = await data.json();

    dispatch(datafetch(json));
  };

  const addCart = (item) => {
    dispatch(additem(item));
  };
  return (
    <div className="h-96 ">
      <div className="flex justify-around items-center">
        <>
          {store_res.map((item) => {
            return (
              <div
                className="  my-5 w-52 border-2  overflow-hidden p-5 w-58  rounded-lg shadow-md  "
                key={item.id}
              >
                <div className="">
                  <img
                    src={item.image}
                    style={{ width: "200px", height: "200px" }}
                  />
                </div>
                <div className="">
                  <div className="text-center p-1">Price:Rs/-{item.price}</div>
                  <div className="text-center p-1">
                    Tating:{item.rating.rate}
                  </div>
                  <div className="h-10 text-center py-3 px-4 bg-blue-800 text-white m-2">
                    <button
                      onClick={() => {
                        addCart(item);
                      }}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      </div>
    </div>
  );
};

export default Body;
