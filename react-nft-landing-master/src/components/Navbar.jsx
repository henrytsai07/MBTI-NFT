import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";
import logo from "../assets/logo.png";
import { FaDiscord, FaTwitter, FaInstagram } from "react-icons/fa";
import { TbAxe } from "react-icons/tb";

export default function Navbar({ changeTheme, currentTheme }) {
  const [navState, setNavState] = useState(false);
  const [transition, setTransition] = useState(false);

  const toggleDropdown = () => {
    setNavState((prevState) => !prevState);
  };

  return (
    <>
      <nav>
        <div className="brand-container">
          <div className="brand">
            <a
              onClick={() => {
                setTransition(true);
                setTimeout(() => {
                  window.location.href = "/home";
                }, 2000);
              }}
            >
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="toggle-container">
            <div className="toggle">
              {navState ? (
                <MdClose onClick={() => setNavState(false)} />
              ) : (
                <GiHamburgerMenu onClick={() => setNavState(true)} />
              )}
            </div>
            <div className="mode" onClick={changeTheme}>
              {currentTheme === "dark" ? (
                <ImSun className="light" />
              ) : (
                <BsFillMoonFill className="dark" />
              )}
            </div>
          </div>
        </div>
        <div className={`links-container ${navState ? "nav-visible" : ""}`}>
          <ul className="links">
            <li>
              <a
                onClick={() => {
                  setTransition(true);
                  setTimeout(() => {
                    window.location.href = "/home";
                  }, 2000);
                }}
              >
                About
              </a>
              <ul className="dropdown-content">
                <li>
                  <a
                    onClick={() => {
                      setTransition(true);
                      setTimeout(() => {
                        window.location.href = "/AboutOurCollection";
                      }, 2000);
                    }}
                  >
                    About Our Collection
                  </a>
                </li>
                <li>
                <a
                    onClick={() => {
                      setTransition(true);
                      setTimeout(() => {
                        window.location.href = "/Roadmap";
                      }, 2000);
                    }}
                  >
                    Roadmap
                  </a>
                </li>
                <li>
                <a
                    onClick={() => {
                      setTransition(true);
                      setTimeout(() => {
                        window.location.href = "/MeetTheTeam";
                      }, 2000);
                    }}
                  >
                    Meet The Team
                  </a>
                </li>
                {/* Add more feature links as needed */}
              </ul>
            </li>
            <li>
              <a
                onClick={() => {
                  setTransition(true);
                  setTimeout(() => {
                    window.location.href = "/features";
                  }, 2000);
                }}
              >
                Gallery
              </a>

            </li>
            <li className="social">
              <a href="https://discord.gg/uMuaYzskaF" target="_blank">
                <FaDiscord size={28} />
              </a>
              <a href="https://twitter.com/MbtiBunny" target="_blank">
                <FaTwitter size={28} />
              </a>
              <a href="https://www.instagram.com/mbtibunny/?hl=en" target="_blank">
                <FaInstagram size={28} />
              </a>
            </li>
            <li>
              <a
                className="mint"
                onClick={() => {
                  setTransition(true);
                  setTimeout(() => {
                    window.location.href = "/mint";
                  }, 2000);
                }}
              >
                Mint <TbAxe size={15} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className={`r_block ${transition ? "r_shown" : ""}`}></div>
      <div className={`l_block ${transition ? "l_shown" : ""}`}></div>
    </>
  );
}