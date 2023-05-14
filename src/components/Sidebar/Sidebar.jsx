import React, { useContext, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { UsersContext } from "../../context/Context";
import "./style.css";

const Sidebar = () => {
  let {users} = useContext(UsersContext);
  let [searchUsers, setSearchUsers] = useState([]);
  let [isBool, setIsBool] = useState(true);

  function onSearch(e){
    if(e.target.value){
      searchUsers = users.filter(item => item.fullName.toLowerCase().includes(e.target.value.toLowerCase()));
      setSearchUsers([...searchUsers]);
      setIsBool(false);
    }else{
      searchUsers = [];
      setSearchUsers([...searchUsers]);
      setIsBool(true)
    }
    
  }
  return (
    <div className="sidebar">
      <div className="search">
        <input onChange={(e) => onSearch(e)} type="text" className="form-control" placeholder="Search" />
        <Link to="add" className="btn btn-outline-primary">
          New
        </Link>
      </div>

      <ul className="group-list">
        {searchUsers.length > 0 ? searchUsers.map((searchUser) => {
          return (
            <li key={searchUser.id} className="list-item">
              <NavLink to={"/contact/" + searchUser.id}>{searchUser.fullName}</NavLink>
            </li>
          );
        }) : (users.length > 0 && isBool ? users.map((user) => {
          return (
            <li key={user.id} className="list-item">
              <NavLink to={"/contact/" + user.id}>{user.fullName}</NavLink>
            </li>
          );
        }) : <h3 className="sub-title">Users Not Found</h3>)}
      </ul>
    </div>
  );
};

export default Sidebar;
