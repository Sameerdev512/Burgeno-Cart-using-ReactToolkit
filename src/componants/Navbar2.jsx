// import React from "react";

const Navbar2 = () => {
  return (
    <div className="container-cu d-flex flex-column flex-sm-row w-75 justify-content-between p-3 align-items-center m-5 mt-0 mb-0">
      <div className="">
        <div className="fw-lighter">
          {new Date().toUTCString().slice(0, 16)}
        </div>
        <div>
          <h2>Burgeno</h2>
        </div>
      </div> 
      <div className="m-4 mt-sm-3">
        <input type="text" className="p-2 border border-2 rounded border-grey border-opacity-50 w-100" placeholder="Search here"/>
      </div>
    </div>
  );
};

export default Navbar2;
