import React, { useContext } from "react";
import Sidebar from "./Sidebar/Sidebar";
import { UsersContext } from "../context/Context";

const Layout = ({ children }) => {
  let {users, setUsers} = useContext(UsersContext);
  return (
    <div className="d-flex">
      <Sidebar users={users} setUsers={setUsers} />
      <div className="w-75">{children}</div>
    </div>
  );
};




export default Layout;
