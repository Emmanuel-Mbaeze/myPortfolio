import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./Components/Homescreen/Hero";
import Home from "./Components/Homescreen/Home";
import Stacks from "./Components/Homescreen/Stacks";
import Works from "./Components/Homescreen/Works";
import Header from "./Components/Header/Header";
import Landingpage from "./Components/Homescreen/Landingpage";

const App = () => {
  const [scroll, setScroll] = useState(false);

  const getScroll = () => {
    const check = window.scrollY;
    if (check >= 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", getScroll);

  return (
    <BrowserRouter>
      <Header bg={scroll ? "bg" : ""} />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/Stacks" element={<Stacks />} />
        <Route path="/Works" element={<Works />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
