import React, { useContext } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { UsersContext } from "../../context/Context";
import "./style.css";

const Contact = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  let { users, setUsers } = useContext(UsersContext);
  const foundUser = users.find((item) => item.id === id);
  const onEdit = () => {
    navigate("/edit", {
      state: foundUser,
    });
  };

  if (!foundUser) {
    return <h1 className="h1-title">User Not Selected</h1>;
  }

  const onDelete = () => {
    users = users.filter((item) => item.id !== id);
    setUsers([...users]);
  };
  return (
    <>
      <div className="app">
        <img src={foundUser?.img} alt="" />
        <div className="app__desc">
          <h1>{foundUser?.fullName}</h1>
          <p>{foundUser?.phone}</p>
          <span>{foundUser?.textarea}</span>
          <div className="btns">
            <button
              onClick={() => onEdit()}
              className="edit-btn"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete()}
              className="delete-btn"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
