import React from "react";
import Footer from "./Footer";
import Home from "./Home";
import Landingpage from "./Landingpage";
import Stacks from "./Stacks";
import Works from "./Works";
const Hero = () => {
  return (
    <div
      className="reveal"
      style={{
        backgroundColor: "black",
        minHeight: "91.5vh",
        paddingTop: "50px",
      }}
    >
      <Landingpage />
      <Home />
      <Stacks />
      <Works />
      {/* <Footer /> */}
    </div>
  );
};

export default Hero;
