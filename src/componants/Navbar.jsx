// import React from 'react'

const Navbar = () => {
  return (
    <div className="Navbar w-100 p-2 bg-success bg-opacity-25 d-flex justify-content-around align-items-center flex-column flex-md-row">
      <div role="button">
        <h5>Burgeno</h5>
      </div>
      <div className="d-flex flex-direction-row justify-content-evenly w-100 ">
        <div className="m-2">
          <a href="#">Home</a>
        </div>
        <div className="m-2"> 
          <a href="#">Products</a>
        </div>
        <div>
          <a href="#">About</a>
        </div>
      </div>
      <div className="d-flex flex-direction-row justify-content-evenly">
        <div>
          <input
            type="text"
            placeholder="Search Item"
            className="form-control"
          />
        </div>
        <div>
          <button className="btn border border-success">Search</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar
