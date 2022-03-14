import React from "react";
import headerLogo from "../image/header-logo.png";
import { Menu, MenuItem, MenuButton, MenuDivider } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header-container">
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
      <div className="header-items">
        <nav>
          <ul>
            <li>
              <Link to="/">
                <img
                  className="header-logo"
                  src={headerLogo}
                  alt="header logo"
                />{" "}
              </Link>
            </li>
            <li>
              <form action="" className="header-search-bar">
                <input
                  placeholder="Start Your Search..."
                  className="search-bar"
                  type="text"
                  id="search"
                />
                <button className="header-search-button" type="button">
                  {" "}
                  Search
                </button>
              </form>
            </li>
            <li>
              <Link className="vacation-properties" to="/listings">
                Vacation Properties
              </Link>
            </li>

            <li>
              <Menu
                menuButton={({ open }) => (
                  <MenuButton>{open ? "Close" : "Menu"}</MenuButton>
                )}
                transition
              >
                <MenuItem>
                  <Link to="/register">Sign Up </Link>
                </MenuItem>
                <MenuDivider />
                <MenuItem>
                  <Link to="/login">Log in</Link>
                </MenuItem>
              </Menu>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
