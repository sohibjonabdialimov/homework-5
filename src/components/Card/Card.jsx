import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
const Card = ({ arr }) => {
  let { id } = useParams();
  let newObj = arr.find((item) => item.id === id);

  return (
    <>
      <div className="card">
        <img src={newObj?.img} alt="" />
        <div className="desc">
          <h3>{newObj?.name}</h3>
          <span>{newObj?.email}</span>
          <p>{newObj?.text}</p>
          <div className="buttons">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
