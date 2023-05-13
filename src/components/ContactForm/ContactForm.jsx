import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {v4} from "uuid"
const ContactForm = ({setUsers, title}) => {
  const navigate = useNavigate();
  const fullName = useRef();
  const phone = useRef();
  const img = useRef();
  const location = useLocation();
  
  if(location.pathname === "/edit"){
    let editUser = location.state;
    // fullName.current.value = editUser.fullName;
    // phone.current.value = editUser.phone;
    // img.current.value = editUser.img;
  }

  const onBack = () => {
    navigate(-1);
  }
  const onAdd = (e) => {
    e.preventDefault();

    const newContact = {
      id: v4(),
      fullName: fullName.current.value,
      phone: phone.current.value,
      img: img.current.value
    }
    setUsers(prev => [...prev, newContact]);
    navigate(`/contact/${newContact.id}`)
  }
  return (
    <div className="w-75 mx-auto">
      <button className="btn btn-outline-primary" onClick={() => onBack()}>Back</button>
      <h1>{title}</h1>
      <form onSubmit={(e) => onAdd(e)}>
        <input
        ref={fullName}
          type="text"
          className="form-control"
          placeholder="Enter your full name"
        />
        <input
        ref={phone}
          type="text"
          className="form-control"
          placeholder="Enter your phone number"
        />
        <input
        ref={img}
          type="url"
          className="form-control"
          placeholder="Enter img"
        />
        <div className="d-flex justify-content-center">
          <button className="btn btn-success">Add</button>
          <button className="btn btn-danger">Delete</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
