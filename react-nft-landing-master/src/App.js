import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Free from "./components/Free";
import Home from "./components/Home";
import Like from "./components/Like";
import Navbar from "./components/Navbar";
import Release from "./components/Release";
import ScrollToTop from "./components/ScrollToTop";
import Signup from "./components/Signup";
import SuperRare from "./components/SuperRare";
import scrollreveal from "scrollreveal";
import "./sass/index.scss";
import videoBG from './assets/cloud.mp4';

function App() {
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  useEffect(() => {
    const registerAnimations = () => {
      const sr = scrollreveal({
        origin: "bottom",
        distance: "80px",
        duration: 2000,
        reset: false,
      });
      sr.reveal(
        `
        nav,
        .home,
        .free,
        .clients,
        .super-rare,
        .releases,
        .like,
        .signup,
        footer
    `,
        {
          interval: 500,
        }
      );
    };
    registerAnimations();
  }, []);
  window.setTimeout(() => {
    const home = document.getElementsByClassName("home");
    home[0].style.transform = "none";
    const nav = document.getElementsByTagName("nav");
    nav[0].style.transform = "none";
  }, 1500);
  return (
    // <Router>
    <><video src={videoBG} autoPlay muted loop />
      <div data-theme={theme} className="nav-container">
      <Navbar changeTheme={changeTheme} currentTheme={theme} />
    </div><>
        <div data-theme={theme} className="app-container">
          <ScrollToTop />
          <Home />
          <Free />
          <Like />
          <SuperRare />
          <Release />
          <Signup />
          <Footer />

          </div></></>
      
  );
}

export default App;


{/* <Routes>
        <Route path="/">
        <ScrollToTop />
          <Home />
          <Free />
          <Like />
          <SuperRare />
          <Release />
          <Signup />
          <Footer />
        </Route>
        <Route path="/about">
          {/* <div data-theme={theme} className="nav-container"> */}
    //       <Navbar changeTheme={changeTheme} currentTheme={theme} />
    //       {/* </div> */}
    //     </Route>
    //   </Routes>
    // </Router> */}