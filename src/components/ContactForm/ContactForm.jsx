import React, { useContext, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import { UsersContext } from "../../context/Context";
import "./style.css";

const ContactForm = ({ title }) => {
  const navigate = useNavigate();
  let {users, setUsers} = useContext(UsersContext);
  const fullName = useRef();
  const phone = useRef();
  const img = useRef();
  const textarea = useRef();
  const location = useLocation();
  let globalObj;

  const onAdd = (e) => {
    e.preventDefault();
  };

  const onOldPage = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (location.pathname === "/edit" && location.state) {
      let editUser = location.state;
      let findedElement = users.findIndex((item) => item.id === editUser.id);
      globalObj = {
        id: editUser.id,
        index: findedElement,
      };
      fullName.current.value = editUser.fullName;
      phone.current.value = editUser.phone;
      img.current.value = editUser.img;
      textarea.current.value = editUser.textarea;
    }
    if (location.pathname === "/add") {
      fullName.current.value = "";
      phone.current.value = "";
       img.current.value = "";
       textarea.current.value = "";
    }
  }, [location.pathname]);

  const onSave = () => {
    if (location.pathname === "/add") {
      const newContact = {
        id: v4(),
        fullName: fullName.current.value,
        phone: phone.current.value,
        img: img.current.value,
        textarea: textarea.current.value,
      };
      if (newContact.fullName && newContact.phone && newContact.img) {
        setUsers((prev) => [...prev, newContact]);
        navigate(`/contact/${newContact.id}`);
      }
    }
    if (location.pathname === "/edit") {
      if(fullName.current.value && phone.current.value && img.current.value){
        let findElement = {
          id: globalObj.id,
          fullName: fullName.current.value, 
          phone: phone.current.value,
          img: img.current.value,
          textarea: textarea.current.value
        };
        users.splice(globalObj.index, 1, findElement);
      }
      console.log(users);
      setUsers([...users]);
      navigate(`/contact/${globalObj.id}`);
    }
  };

  return (
    <div className="forma">
      
      <h1 className="title">{title}</h1>
      <form onSubmit={(e) => onAdd(e)}>
        <input
          ref={fullName}
          className="input"
          type="text"
          placeholder="FISH"
        />
        <input
          ref={phone}
          type="text"
          className="input"
          placeholder="Telefon raqam -> M-n: +998971234567"
        />
        <input
          ref={img}
          type="url"
          className="input"
          placeholder="Rasm linkini jo'nating"
        />
        <textarea ref={textarea} className="input" placeholder="Sizning fikringiz ..."></textarea>
        <div className="btn-group">
          <button
            className="button btn-save"
            type="submit"
            onClick={() => onSave()}
          >
            Save
          </button>
          <button
            className="button btn-cancel"
            type="button"
            onClick={() => onOldPage()}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
