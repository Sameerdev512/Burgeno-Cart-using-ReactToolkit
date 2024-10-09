// import React from "react";
import { AiFillStar } from "react-icons/ai";
import './style.css';
import { addToCart } from "../redux/slices/CartSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const FoodItem = ({id,name,price,src,qty,category}) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="foodItem bg-white shadow m-5 m-md-4 mt-0 mt-md-4 mb-4 rounded p-2 ">
        <img
          src={src}
          className="w-100"
          style={{width:'100px',height:'160px'}}
        ></img>
        <div className="d-flex justify-content-between mt-3 w-100 px-1">
          <h5>{name}</h5>
          <span className="fw-bold price">₹{price}</span>
        </div>
        <div className="fw-normal px-1">
          <p>
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet con isicing
            elit Consectetur ea...
          </p>
        </div>
        <div className="d-flex justify-content-between align-items-center p-3">
          <span>
            <AiFillStar /> 4.5
          </span>
          <button
            className="btn btn-success btn-cu"
            onClick={() =>{
              dispatch(
                addToCart({name,price,qty,src,id,category})
              );
              toast.success(`${name} added Sucessfully.`);
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default FoodItem;
