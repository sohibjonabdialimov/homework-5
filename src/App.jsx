import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Contact from "./pages/Contact/Contact";
import ContactForm from "./components/ContactForm/ContactForm";
import Error from "./pages/Error/Error";
import { UsersContext } from "./context/Context";

const App = () => {
  let [users, setUsers] = useState([]);
  return (
    <>
    <UsersContext.Provider value={{users, setUsers}}>
      <Layout>
        <Routes>
          <Route index element={<Contact />} />
          <Route path="contact/:id" element={<Contact />} />
          <Route path="add" element={<ContactForm title="Add User" />} />
          <Route path="edit" element={<ContactForm title="Edit User" />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </UsersContext.Provider>
    </>
  );
};

export default App;
