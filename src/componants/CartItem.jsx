// import React from 'react'
import { MdAddBox } from "react-icons/md";
import { FaSquareMinus } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import './style.css'
import { decreaseQuantity, removeFromCart } from "../redux/slices/CartSlice";
import { increseQuantity } from "../redux/slices/CartSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const CartItem = ({id,name,price,src,qty}) => {
  const dispatch = useDispatch();

  return (
    <div className=" cartItem d-flex flex-row justify-content-between align-items-center w-100 my-2 mx-auto rounded p-1">
      <img
        src={src}
        alt="1"
        style={{ width: "50px", height: "50px" }}
        className="rounded-circle"
      />
      <div className=" d-flex align-items-center flex-column">
        <div className="mb-0 fs-6 fw-normal">{name}</div>
        <div className="fw-bold">₹{price}</div>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center w-25">
        <div
          className="position-relative right-0"
        >
          <MdDeleteForever
          onClick={() => {dispatch(removeFromCart(id))
            toast(`${name} Removed !!!`, {
              icon: "👋",
            });;
          }}
          />
        </div>
        <div className="d-flex flex-row align-items-center">
          <FaSquareMinus onClick={() => dispatch(decreaseQuantity(id))} />
          <div className="px-1">{qty}</div>
          <MdAddBox onClick={() => dispatch(increseQuantity(id))} />
        </div>
      </div>
    </div>
  );
}

export default CartItem
