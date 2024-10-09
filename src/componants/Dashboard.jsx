// import React from "react";
import "../index.css";
import "./style.css";
import Cart from "./Cart";
import CategoryMenu from "./CategoryMenu";
// import FetchData from "./CustomHook/FetchData";
import FoodItem from "./FoodItem";
import Navbar2 from "./Navbar2";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

const Dashboard = () => {
  // const data = FetchData();
  // console.log(data)
  //dummy data
  const items = [
    {
      name: "Pizza",
      qty: 1,
      price: 180,
      category: "Dinner",
      src: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Burger",
      qty: 1,
      price: 120,
      category: "Lunch",
      src: "https://images.unsplash.com/photo-1550317138-10000687a72b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
    {
      name: "Pasta",
      qty: 1,
      price: 200,
      category: "Dinner",
      src: "https://images.unsplash.com/photo-1543353071-873f17a7a088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
    {
      name: "Fries",
      qty: 1,
      price: 80,
      category: "Lunch",
      src: "https://images.unsplash.com/photo-1563371351-e53ebb744a1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
    {
      name: "Sandwich",
      qty: 1,
      price: 150,
      category: "Breakfast",
      src: "https://media.istockphoto.com/id/1938232990/photo/creamy-chick-pea-salad-sandwich.webp?a=1&b=1&s=612x612&w=0&k=20&c=AJ98SbDX-rG54aOVQtVGbL4ve4WICGdeZjitOlG1O64=",
    },
    {
      name: "Salad",
      qty: 1,
      price: 100,
      category: "Lunch",
      src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2FsYWR8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Tacos",
      qty: 1,
      price: 90,
      category: "Dinner",
      src: "https://media.istockphoto.com/id/542331706/photo/homemade-spicy-shrimp-tacos.webp?a=1&b=1&s=612x612&w=0&k=20&c=cBeCvYVLdaUxpDyFMOtttvU7EFQTO0wSHh2ZYdsnGW0=",
    },
    {
      name: "Donut",
      qty: 1,
      price: 60,
      category: "Breakfast",
      src: "https://images.unsplash.com/photo-1530016555861-3d1f3f5ca94b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvbnV0fGVufDB8fDB8fHww",
    },
    {
      name: "Ice Cream",
      qty: 1,
      price: 130,
      category: "Snacks",
      src: "https://media.istockphoto.com/id/1466789877/photo/pistachio-chocolate-strawberry-and-vanilla-ice-cream-in-a-cone.jpg?s=612x612&w=0&k=20&c=QDUe-USiueWLuf4SP3jQHQwjP3EToO_gOIR5yEhy7Ko=",
    },
    {
      name: "Smoothie",
      qty: 1,
      price: 110,
      category: "Breakfast",
      src: "https://plus.unsplash.com/premium_photo-1663089587926-ff5a03d17b48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c21vb3RoaWVzfGVufDB8fDB8fHww ",
    },
  ];

  const [choice, setChoice] = useState("All");
  const handleClick = (thechoice) => {
    setChoice(thechoice);
    console.log(choice);
  };
  return (
    <>
      <Navbar2 />
      <CategoryMenu handleClick={handleClick} />
      <div className="cardList">
        <div className="row m-2 row-cols-12 row-cols-md-3 row-cols-lg-3 d-flex justify-content-center justify-content-md-start">
          {items.map((item, index) => {
            return choice == "All" ? (
              <FoodItem
                key={index}
                id={index}
                name={item.name}
                price={item.price}
                qty={item.qty}
                src={item.src}
                category={item.category}
              />
            ) : item.category === choice ? (
              <FoodItem
                key={index}
                id={index}
                name={item.name}
                price={item.price}
                qty={item.qty}
                src={item.src}
                category={item.category}
              />
            ) : (
              ""
            );
          })}
        </div>
      </div>
      <Cart />
      <Toaster position="top-center" />
    </>
  );
};

export default Dashboard;
