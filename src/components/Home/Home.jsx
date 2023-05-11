import React, { useRef } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const Home = ({ arr }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="app">
        <div className="list">
          <div className="search">
            <input type="search" placeholder="Search" />
            <button className="btn">New</button>
          </div>
          <div className="group">
            {arr.map((item) => {
              return (
                <div
                  key={item.id}
                  className="item"
                  onClick={() => navigate("/home/" + `${item.id}`)}
                >
                  <p>{item.name}</p>
                </div>
              );
            })}
          </div>
        </div>

        <Outlet />
      </div>
    </>
  );
};

export default Home;
