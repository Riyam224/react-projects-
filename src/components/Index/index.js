import React, { Component } from "react";
import About from "../About/about";
import Contact from "../Contact/contact";
import Footer from "../Footer/footer";
import Home from "../Home/home";
import Work from "../Work/work";
import Portfolio from "../Portfolio/portfolio";
import Profile from "../Profile/profile";
import SocialMedia from "../SocialMedia/socialmedia";
const Index = () => {
  return (
    <div>
      <Home />
      <Work />
      <Portfolio />
      <Profile />
      <About />
      <SocialMedia />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
