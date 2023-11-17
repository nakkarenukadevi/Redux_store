import React from "react";

import { useSelector } from "react-redux";

const Cart = () => {
  let cartList = useSelector((state) => state.cart.count);
  console.log(cartList);
  return (
    <div className="h-96 ">
      <div className="flex  items-center">
        <>
          {cartList.map((item) => {
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
                  <div className="text-center p-1">Price:Rs/-{item.price}</div>
                  <div className="text-center p-1">
                    Tating:{item.rating.rate}
                  </div>
                  <div className="h-10 text-center py-3 px-4 bg-blue-800 text-white m-2">
                    <button>Add</button>
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

export default Cart;
