import React from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = ({ users }) => {
  return (
    <div className="p-3 border-end vh-100">
      <div className="d-flex">
        <input type="text" className="form-control" />
        <Link to="add" className="btn btn-outline-success">
          New
        </Link>
      </div>

      <ul className="list-group">
        {users.length > 0 ? users.map((user) => {
          return (
            <li key={user.id} className="list-group-item list-group-item-action">
              <NavLink to={"/contact/" + user.id}>{user.fullName}</NavLink>
            </li>
          );
        }) : <h3 className="mt-5">Users Not Found</h3>}
      </ul>
    </div>
  );
};

export default Sidebar;
