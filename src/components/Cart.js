import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { removerItem } from "./utils/cartSlice";

const Cart = () => {
  let cartList = useSelector((state) => state.cart.count);
  console.log(cartList);
  let dispatch = useDispatch();
  const handleremoveItem = (id) => {
    dispatch(removerItem(id));
  };
  return (
    <div className="h-96 ">
      <div className="flex  items-center">
        <>
          {cartList == "" ? (
            <div className=" font-bold  m-auto px-4  my-10 ">
              your cart is empty
            </div>
          ) : (
            cartList.map((item) => {
              return (
                <div
                  className="  my-5 w-52 border-2  overflow-hidden p-5 w-58  rounded-lg shadow-md  mx-8 "
                  key={item.id}
                >
                  <div className="">
                    <img
                      src={item.image}
                      style={{ width: "200px", height: "200px" }}
                    />
                  </div>
                  <div className="">
                    <div className="text-center p-1">
                      Price:Rs/-{item.price}
                    </div>
                    <div className="text-center p-1">
                      Tating:{item.rating.rate}
                    </div>
                    <div className=" flex items-center">
                      <button className=" flex justify-center items-center h-10 text-center py-3 px-4 bg-blue-800 text-white m-2 rounded-lg">
                        Buy
                      </button>
                      <button
                        className=" flex h-10 justify-center items-center py-3 px-4 bg-blue-800 text-white m-2 rounded-lg"
                        onClick={() => {
                          handleremoveItem(item.id);
                        }}
                      >
                        remove
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </>
      </div>
    </div>
  );
};

export default Cart;
