import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";
import logo from "../assets/logo.png";
import { FaDiscord, FaTwitter, FaInstagram } from 'react-icons/fa';
import { TbAxe } from 'react-icons/tb';




export default function Navbar({ changeTheme, currentTheme }) {
  const [navState, setNavState] = useState(false);
  return (
    <nav>
      <div className="brand-container">
        <div className="brand">
          <img src={logo} alt="logo"/>
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
            <a href="/">About</a>

          </li>
          <li>
            <a href="/features">Features</a>
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
            <a href="/mint" className="mint">Mint <TbAxe size={15}/></a>
          </li>
          {/* <li onClick={changeTheme}>
            {currentTheme === "dark" ? (
              <ImSun className="light" />
            ) : (
              <BsFillMoonFill className="dark" />
            )}
          </li> */}
        </ul>
      </div>
    </nav>
  );
}
