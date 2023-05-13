import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import "./style.css";
const Card = ({ arr }) => {
  let { id } = useParams();
  localStorage.setItem('findElement', JSON.stringify(arr.filter((item) => item.id === id)));
  
  
  let newObj = JSON.parse(localStorage.getItem('findElement')) || [];

  return (
    <>
      {newObj?.map((item) => {
        return (
          <div key={item.id} className="card">
            <img src={item.img} alt="" />
            <div className="desc">
              <h3>{item.name}</h3>
              <span>{item.email}</span>
              <p>{item.text}</p>
              <div className="buttons">
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
