// import React from 'react'

const CategoryMenu = ({handleClick}) => {
  return (
    <div className="m-3">
      <div className="mt-0 m-2">
        <h6 className="fw-semibold fs-5">Find the best food</h6>
      </div>
      <div className="d-flex justify-content-evenly w-25 mt-3">
        <button
          className="btn p-2 btn-success border border-2 fw-semibold btn-hover"
          onClick={() => handleClick("All")}
        >
          All
        </button>
        <button
          className="btn p-2 btn-success border border-2 fw-semibold"
          onClick={()=>handleClick("Lunch")}
        >
          Lunch
        </button>
        <button
          className="btn p-2 btn-success border border-2 fw-semibold"
          onClick={() => handleClick("Breakfast")}
        >
          Breakfast
        </button>
        <button
          className="btn p-2 btn-success border border-2 fw-semibold"
          onClick={() => handleClick("Dinner")}
        >
          Dinner
        </button>
        <button
          className="btn p-2 btn-success border border-2 fw-semibold"
          onClick={() => handleClick("Snacks")}
        >
          Snacks
        </button>
      </div>
    </div>
  );
}

export default CategoryMenu

