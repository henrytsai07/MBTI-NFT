import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Free from "./components/Free";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Signup from "./components/Signup";
import SuperRare from "./components/SuperRare";
import scrollreveal from "scrollreveal";
import "./sass/index.scss";
import videoBG from "./assets/new_b.mp4";
import { Features } from "./components/features";
import Creater from "./components/Creater";
import roadmap from "./assets/Roadmap.png";
import { MintPage } from "./mint/Mint";
import Cursor from "./components/cursor";
import Landing from "./components/landing";
import Loading from "./components/Loading";
import Banner from "./components/Banner/Banner";
import Loader from "./components/Banner/Loader";
import Story from "./components/Story";

import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

function App() {
  const [theme, setTheme] = useState("dark");
  const [transition, setTransition] = useState(true);

  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3500);

    setTimeout(() => {
      setLoading(false);
      setTransition(false);
    }, 6000);

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
        .story,
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
  async function getBunnyJson() {
    const map1 = new Map();

    for (var num = 1; num < 30; num++) {
      try {
        let name = await fetch(
          "https://mbtibunny.mypinata.cloud/ipfs/QmZCUkZY1sHjmRBCrYywWnLPf7CzgWgEkKbxtpGLXvqVAP/" +
            num +
            ".json"
        );
        let image = await fetch(
          "https://mbtibunny.mypinata.cloud/ipfs/QmNqNYbuuGK2LLCPhEu1BtyfdCGwjpL8ocM2yMUtgFbeSw/" +
            num +
            ".png"
        );
        map1.set(await name.json(), URL.createObjectURL(await image.blob()));

        //responseJson.push(await response.json());
      } catch (error) {
        console.error(error);
      }
    }

    return map1;
  }
  getBunnyJson();

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <AnimateSharedLayout type="crossfade">
                <AnimatePresence>
                  {loading ? (
                    <>
                      <div
                        className={`r_block ${transition ? "r_shown" : ""}`}
                      ></div>
                      <div
                        className={`l_block ${transition ? "l_shown" : ""}`}
                      ></div>
                      <Loading />
                    </>
                  ) : (
                    <>
                      <div
                        className={`r_block ${transition ? "r_shown" : ""}`}
                      ></div>
                      <div
                        className={`l_block ${transition ? "l_shown" : ""}`}
                      ></div>
                      {transition ? (
                        <div></div>
                      ) : (
                        <>
                          <Loader />
                          <Banner />
                          <Cursor />
                          <div className="black_back"/>
                        </>
                      )}
                    </>
                  )}
                </AnimatePresence>
              </AnimateSharedLayout>
            </>
          }
        />
        <Route
          exact
          path="/home"
          element={
            <>
              <AnimateSharedLayout type="crossfade">
                <AnimatePresence>
                  {loading ? (
                    <>
                    <div
                        className={`r_block ${transition ? "r_shown" : ""}`}
                      ></div>
                      <div
                        className={`l_block ${transition ? "l_shown" : ""}`}
                      ></div>
                      <Loading />
                    </>
                  ) : (
                    <>
                      <div
                        className={`r_block ${transition ? "r_shown" : ""}`}
                      ></div>
                      <div
                        className={`l_block ${transition ? "l_shown" : ""}`}
                      ></div>

                      <div className="background_image">
                        <div data-theme={theme} className="nav-container">
                          <Navbar
                            changeTheme={changeTheme}
                            currentTheme={theme}
                          />
                        </div>
                        <div data-theme={theme} className="app-container">
                          <ScrollToTop />

                          <Home />
                          <Story/>
                          <Free />
                          {/* <Like /> */}
                          <SuperRare />
                          {/* <Release /> */}
                          <img className="road" src={roadmap} />
                          <Creater />
                          <Signup />
                        </div>

                        <div data-theme={theme} className="footer-container">
                          <Footer />
                        </div>
                        <Cursor />
                      </div>
                    </>
                  )}
                </AnimatePresence>
              </AnimateSharedLayout>
            </>
          }
        />
        <Route
          exact
          path="/features"
          element={
            <>
              {loading ? (
                <>
                  <div
                    className={`r_block ${transition ? "r_shown" : ""}`}
                  ></div>
                  <div
                    className={`l_block ${transition ? "l_shown" : ""}`}
                  ></div>
                  <Loading />
                </>
              ) : (
                <>
                  <div
                    className={`r_block ${transition ? "r_shown" : ""}`}
                  ></div>
                  <div
                    className={`l_block ${transition ? "l_shown" : ""}`}
                  ></div>

                  <video src={videoBG} autoPlay muted loop />
                  <div data-theme={theme} className="nav-container">
                    <Navbar changeTheme={changeTheme} currentTheme={theme} />
                  </div>
                  <div data-theme={theme} className="filter-container">
                    <Features />
                  </div>
                  <Cursor />
                </>
              )}
            </>
          }
        />
        <Route
          exact
          path="/mint"
          element={
            <>
              {loading ? (
                <>
                  <div
                    className={`r_block ${transition ? "r_shown" : ""}`}
                  ></div>
                  <div
                    className={`l_block ${transition ? "l_shown" : ""}`}
                  ></div>
                  <Loading />
                </>
              ) : (
                <>
                  <div
                    className={`r_block ${transition ? "r_shown" : ""}`}
                  ></div>
                  <div
                    className={`l_block ${transition ? "l_shown" : ""}`}
                  ></div>
                  <video src={videoBG} autoPlay muted loop />
                  <div data-theme={theme} className="nav-container">
                    <Navbar changeTheme={changeTheme} currentTheme={theme} />
                  </div>
                  <div data-theme={theme} className="mint-container">
                    <MintPage />
                  </div>
                  <Cursor />
                </>
              )}
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
