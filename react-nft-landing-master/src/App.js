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
    }, 2500);

    setTimeout(() => {
      setLoading(false);
      setTransition(false);
    }, 5000);

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
  async function getBunnyJson() {
    const map1 = new Map();

    for (var num = 1; num < 61; num++) {
      try {
        let name = await fetch(
          "https://mbtibunny.mypinata.cloud/ipfs/QmWFXAtS4Cm5M3f7wJXwXgmjL6z3dpDyDmxWQZ4414vb9C/" +
            num +
            ".json"
        );
        let image = await fetch(
          "https://mbtibunny.mypinata.cloud/ipfs/QmZ2TdWZa9vhDLc8XV1TTo3sBUY8Y625ibnRozt1oiCW98/" +
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
          path="/landing"
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
                  {transition ? <div></div> : <Landing />}
                </>
              )}
            </>
          }
        />
        <Route
          exact
          path="/"
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
