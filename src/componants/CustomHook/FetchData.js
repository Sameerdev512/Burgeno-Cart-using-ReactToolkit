// // import React from 'react'
// import { useState } from 'react'
// import { useEffect } from 'react';
// const FetchData = () => {
//     const [data,setData]=useState([]);

//   const url = "https://burgers-hub.p.rapidapi.com/burgers";
// const options = {
//   method: "GET",
//   headers: {
//     "x-rapidapi-key": "d1b0ff6210msh667e78eebf1764ep1db157jsn17a753c2129b",
//     "x-rapidapi-host": "burgers-hub.p.rapidapi.com",
//   },
// };

// const fetchData=async()=>{
// 	try {
//     const response = await fetch(url, options);
//     const result = await response.json();
//     setData[result]
//     console.log(data)
//   } catch (error) {
//     console.log(error);
//   }
// }

// useEffect(()=>
// {
//     fetchData();
// });

//   return (
//     data
//   )
// }

// export default FetchData;
