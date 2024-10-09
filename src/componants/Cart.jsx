// import React from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import CartItem from "./CartItem";
import "./style.css";
import { useState } from "react";
import { BsCart4 } from "react-icons/bs";
import { useSelector } from "react-redux";

const Cart = () => {
  const [cartDisplay, setCardDisplay] = useState(false);

  const cartItems = useSelector((state)=>state.cart.cart);
  
  const totalPrice = cartItems.reduce((t_amount, item) => {
    return t_amount + item.qty * item.price;
  }, 0);

  const totalQty = cartItems.reduce((result, item) => {
    return result + item.qty;
  }, 0);

  return (
    
    <>
      <div
        className={`cart border border-2 position-fixed px-3 h-100 mx-0 d-flex justify-content-between flex-column d-${
          cartDisplay ? "block" : "none"
        }`}
        style={{ marginRight: "50px" }}
      >
        <div>
          <div
            className="cartHeader d-flex justify-content-between align-items-center w-100"
            style={{ height: "80px" }}
          >
            <div className>
              <h4> My Orders</h4>
            </div>
            <div
              className="border border-primary rounded text-center d-flex align-items-center p-2  justify-content-center"
              style={{ backgroundColor: "#008000", cursor: "pointer" }}
              onClick={() => {
                setCardDisplay(false);
              }}
            >
              <FaArrowLeftLong style={{ color: "white" }} />
            </div>
          </div>
            <hr></hr>

          {cartItems.length ? (
            cartItems.map((item, index) => {
              return (
                <CartItem
                  key={index}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  src={item.src}
                  qty={item.qty}
                />
              );
            })
          ) : (
            <h5 className="text-center">Your cart is empty</h5>
          )}
        </div>

        <div className=" p-2 w-100">
          <div>
            <h6>
              Items :
              {" " +totalQty}
            </h6>
          </div>
          <div>
            <h6>
              Total Price :{" " + totalPrice}.00
            </h6>
          </div>
          <hr></hr>
          <div className="p-2 bg-success rounded text-center text-white fs-6 fw-bold ">
            Checkout
          </div>
        </div>
      </div>

      <div
        className={`cart-icon position-fixed d-${
          cartDisplay ? "none" : "flex"
        }`}
        onClick={() => setCardDisplay(true)}
      >
        <BsCart4 />
      </div>
    </>
  );
};

export default Cart;
