import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Intro from "./components/About/Intro";
import Home from "./components/Home_page/Home";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Signup from "./components/Signup";
import SuperRare from "./components/SuperRare";
import scrollreveal from "scrollreveal";
import "./sass/index.scss";
import videoBG from "./assets/new_b.mp4";
import { Features } from "./components/features";
import Creater from "./components/About/Creater";
import { MintPage } from "./mint/Mint";
import Cursor from "./components/cursor";
import Loader from "./components/Intro_Loader/Loader";
import Story from "./components/About/Story";
import Roadmap from "./components/About/Roadmap";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import PreLoader from "./components/PreLoader";
import Banner from "./components/Intro_Loader/Banner";


import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

function App() {
  const [theme, setTheme] = useState("dark");


  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

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
        .Intro,
        .clients,
        .super-rare,
        .releases,
        .like,
        .roadmap,
        .creater,
        .signup,
        .footer
      `,
      {
        interval: 200,
      }
    );
  };


  async function particlesInit(main) {
    await loadFull(main);
  }
  useEffect(() => {
    setTimeout(() => {

      registerAnimations();

    }, 4000);

    window.setTimeout(() => {
      const home = document.getElementsByClassName("home");
      home[0].style.transform = "none";
      const nav = document.getElementsByTagName("nav");
      nav[0].style.transform = "none";

    }, 1500);




    async function getBunnyJson() {
      const map1 = new Map();

      for (var num = 1; num <= 1; num++) {
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
        } catch (error) {
          console.error(error);
        }
      }

      return map1;
    }



    getBunnyJson();


  }, []);

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
                  <>
                    <>
                      <Loader />
                      <Banner />
                      <Cursor />
                    </>
                  </>
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
              <PreLoader></PreLoader>
              <AnimateSharedLayout type="crossfade">
                <AnimatePresence>
                  <>
                    <div className="background_image">
                      <div data-theme={theme} className="nav-container">
                        <Navbar
                          changeTheme={changeTheme}
                          currentTheme={theme}
                        />
                      </div>
                      <div data-theme={theme} className="app-container">
                        <Home />
                        <Roadmap />
                        <SuperRare />
                        <Creater />
                        <Signup />
                      </div>

                      <div data-theme={theme} className="footer-container">
                        <Footer />
                      </div>
                      <Cursor />
                    </div>
                  </>
                </AnimatePresence>
              </AnimateSharedLayout>
            </>
          }
        />
        <Route
          exact
          path="/AboutOurCollection"
          element={
            <>
              <>
                <PreLoader></PreLoader>
              </>
              <div className="background_image">
                <div data-theme={theme} className="nav-container">
                  <Navbar
                    changeTheme={changeTheme}
                    currentTheme={theme}
                  />
                </div>

                <ScrollToTop />
                <Story />
                <Intro />
              </div>
              <div data-theme={theme} className="footer-container">
                <Footer />
              </div>
              <Cursor />
            </>
          }
        />

        <Route
          exact
          path="/features"
          element={
            <>
              <PreLoader></PreLoader>
              <>
                <Particles
                  id="tsparticles"
                  init={particlesInit}

                  options={{
                    "fullScreen": {
                      "enable": true,
                      "zIndex": 1
                    },
                    "particles": {
                      "number": {
                        "value": 30,
                        "density": {
                          "enable": false,
                          "value_area": 800
                        }
                      },
                      "color": {
                        "value": "#fea"
                      },
                      "shape": {
                        "type": "star",
                        "options": {
                          "sides": 5
                        }
                      },
                      "opacity": {
                        "value": 0.8,
                        "random": false,
                        "anim": {
                          "enable": true,
                          "speed": 1,
                          "opacity_min": 0.1,
                          "sync": false
                        }
                      },
                      "size": {
                        "value": 5,
                        "random": false,
                        "anim": {
                          "enable": false,
                          "speed": 40,
                          "size_min": 0.1,
                          "sync": false
                        }
                      },
                      "rotate": {
                        "value": 0,
                        "random": true,
                        "direction": "clockwise",
                        "animation": {
                          "enable": true,
                          "speed": 5,
                          "sync": false
                        }
                      },
                      "line_linked": {
                        "enable": true,
                        "distance": 600,
                        "color": "#ffffff",
                        "opacity": 0.4,
                        "width": 2
                      },
                      "move": {
                        "enable": true,
                        "speed": 2,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "attract": {
                          "enable": false,
                          "rotateX": 600,
                          "rotateY": 1200
                        }
                      }
                    },
                    "interactivity": {
                      "events": {
                        "onhover": {
                          "enable": true,
                          "mode": ["grab"]
                        },
                        "onclick": {
                          "enable": false,
                          "mode": "bubble"
                        },
                        "resize": true
                      },
                      "modes": {
                        "grab": {
                          "distance": 400,
                          "line_linked": {
                            "opacity": 1
                          }
                        },
                        "bubble": {
                          "distance": 400,
                          "size": 40,
                          "duration": 2,
                          "opacity": 8,
                          "speed": 3
                        },
                        "repulse": {
                          "distance": 200
                        },
                        "push": {
                          "particles_nb": 4
                        },
                        "remove": {
                          "particles_nb": 2
                        }
                      }
                    },
                    "retina_detect": true,
                    "background": {
                      "color": "#111",
                      "image": "",
                      "position": "50% 50%",
                      "repeat": "no-repeat",
                      "size": "cover"
                    }
                  }}
                />
                <div data-theme={theme} className="nav-container">
                  <Navbar changeTheme={changeTheme} currentTheme={theme} />
                </div>
                <div data-theme={theme} className="filter-container">
                  <Features />
                </div>
                <Cursor />

              </>
            </>
          }
        />
        <Route
          exact
          path="/mint"
          element={
            <>
              <>
                <PreLoader></PreLoader>
              </>
              <>
                <video src={videoBG} autoPlay muted loop />
                <div data-theme={theme} className="nav-container">
                  <Navbar changeTheme={changeTheme} currentTheme={theme} />
                </div>
                <div data-theme={theme} className="mint-container">
                  <MintPage />
                </div>
                <Cursor />
              </>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
