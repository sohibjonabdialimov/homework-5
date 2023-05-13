import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Contact = ({users}) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const foundUser = users.find(item => item.id === id);
  const onEdit = () => {
    navigate('/edit', {
      state: foundUser,
    });
  }


  if(!foundUser){
    return <h1>Users not found</h1>
  }
  return (
    <>
      <div>Contact s</div>
      <img src={foundUser?.img} alt="" />
      <p>{ id }</p>
      <button onClick={() => onEdit()}>Edit</button>
      <button>Delete</button>
    </>
  );
};

export default Contact;
