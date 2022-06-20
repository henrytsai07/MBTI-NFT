import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import videoBG from "./assets/new_b.mp4";
import { Features } from "./components/features";
import Creater from "./components/Creater";
import roadmap from "./assets/Roadmap.png";
import {MintPage} from "./mint/Mint"

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
        .creater,
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
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              {/* <video src={videoBG} autoPlay muted loop /> */}
              {/* <img className="background" src={test_background} alt="logo" /> */}
              <div className="background_image">
                <div data-theme={theme} className="nav-container">
                  <Navbar changeTheme={changeTheme} currentTheme={theme} />
                </div>
                <div data-theme={theme} className="app-container">
                  <ScrollToTop />
                  <Home />
                  <Free />
                  {/* <Like /> */}
                  <SuperRare />
                  <Release />
                  <img className="road" src={roadmap} />
                  <Creater />
                  <Signup />
                </div>

                <div data-theme={theme} className="footer-container">
                  <Footer />
                </div>
              </div>
            </>
          }
        />
        <Route
          exact
          path="/features"
          element={
            <>
              <video src={videoBG} autoPlay muted loop />
              <div data-theme={theme} className="nav-container">
                <Navbar changeTheme={changeTheme} currentTheme={theme} />
              </div>
              <div data-theme={theme} className="filter-container">
                <Features />
              </div>
            </>
          }
        />
        <Route
          exact
          path="/mint"
          element={
            <>
              <video src={videoBG} autoPlay muted loop />
              <div data-theme={theme} className="nav-container">
                <Navbar changeTheme={changeTheme} currentTheme={theme} />
              </div>
              <div data-theme={theme} className="filter-container">
                <MintPage/>
              </div>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
