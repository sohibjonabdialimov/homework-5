import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Contact from "./pages/Contact/Contact";
import ContactForm from "./components/ContactForm/ContactForm";
import Error from "./pages/Error/Error";

const App = () => {
  let [users, setUsers] = useState([]);
  return (
    <>
      <Layout users={users}>
        <Routes>
          <Route path="contact/:id" element={<Contact users={users} />} />
          <Route path="add" element={<ContactForm title="Add User" setUsers={setUsers} />} />
          <Route path="edit" element={<ContactForm title="Edit User" setUsers={setUsers} />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
