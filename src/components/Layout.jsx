import React from "react";
import Sidebar from "./Sidebar/Sidebar";

const Layout = ({ children, users }) => {
  return (
    <div className="d-flex">
      <Sidebar users={users} />
      <div className="w-75">{children}</div>
    </div>
  );
};




export default Layout;
