import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Card from "./components/Card/Card";
import { v4 } from "uuid";
import img1 from "./img/76729750.jpg";
import img2 from "./img/user2.jpg";
import img3 from "./img/user3.webp";
import img4 from "./img/user4.jpg";

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/home');
  }, [])

  let obj = [
    {
      id: v4(),
      name: "Dennis Beatty",
      img: img1,
      email: "Nimadur@gmail.com",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit harum adipisci deserunt excepturi fugit quas at voluptate voluptas accusamus aliquam.",
    },
    {
      id: v4(),
      name: "Axad Qayum",
      img: img2,
      email: "Nimadur@gmail.com",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit harum adipisci deserunt excepturi fugit quas at voluptate voluptas accusamus aliquam.",
    },
    {
      id: v4(),
      name: "Lill Xurram",
      img: img3,
      email: "Nimadur@gmail.com",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit harum adipisci deserunt excepturi fugit quas at voluptate voluptas accusamus aliquam.",
    },
    {
      id: v4(),
      name: "Jasur Umirov",
      img: img4,
      email: "Nimadur@gmail.com",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit harum adipisci deserunt excepturi fugit quas at voluptate voluptas accusamus aliquam.",
    },
    {
      id: v4(),
      name: "Dennis Beatty",
      img: img1,
      email: "Nimadur@gmail.com",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit harum adipisci deserunt excepturi fugit quas at voluptate voluptas accusamus aliquam.",
    },
    {
      id: v4(),
      name: "Axad Qayum",
      img: img2,
      email: "Nimadur@gmail.com",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit harum adipisci deserunt excepturi fugit quas at voluptate voluptas accusamus aliquam.",
    },
    {
      id: v4(),
      name: "Lill Xurram",
      img: img3,
      email: "Nimadur@gmail.com",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit harum adipisci deserunt excepturi fugit quas at voluptate voluptas accusamus aliquam.",
    },
    {
      id: v4(),
      name: "Jasur Umirov",
      img: img4,
      email: "Nimadur@gmail.com",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit harum adipisci deserunt excepturi fugit quas at voluptate voluptas accusamus aliquam.",
    },
    {
      id: v4(),
      name: "Dennis Beatty",
      img: img1,
      email: "Nimadur@gmail.com",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit harum adipisci deserunt excepturi fugit quas at voluptate voluptas accusamus aliquam.",
    },
    {
      id: v4(),
      name: "Axad Qayum",
      img: img2,
      email: "Nimadur@gmail.com",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit harum adipisci deserunt excepturi fugit quas at voluptate voluptas accusamus aliquam.",
    },
    {
      id: v4(),
      name: "Lill Xurram",
      img: img3,
      email: "Nimadur@gmail.com",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit harum adipisci deserunt excepturi fugit quas at voluptate voluptas accusamus aliquam.",
    },
    {
      id: v4(),
      name: "Jasur Umirov",
      img: img4,
      email: "Nimadur@gmail.com",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit harum adipisci deserunt excepturi fugit quas at voluptate voluptas accusamus aliquam.",
    },
  ]

  const [arr, setArr] = useState([...obj]);
  return (
  <>
    <Routes>
      <Route path="home" element={<Home arr={arr}  />}>
        <Route path=":id" element={<Card arr={arr} />} />
      </Route>
    </Routes>
  </>
  )
};

export default App;
