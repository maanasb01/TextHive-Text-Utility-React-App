import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  let mode = props.mode;
  return (
    <nav className={`navbar navbar-expand-lg bg-${mode?"dark":"light"} sticky-top`} data-bs-theme={`${mode?"dark":"light"}`}>
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
        <img src="../.././favicon/favicon.ico" alt="Logo" width="30" height="30" class="d-inline-block align-text-top me-2"/>
          TextHive
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to={"/"} className="nav-link" aria-current="page" >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"About/"} className="nav-link" >
                About
              </NavLink>
            </li>
          </ul>
          <div className="form-check form-switch form-check-reverse">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckReverse"
              onChange={props.toToggle}
            />
            <label
              className={`form-check-label  text-${mode?"light":"dark"}`}
              htmlFor="flexSwitchCheckReverse"
            >
              Dark Mode
            </label>
          </div>

          {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
        </div>
      </div>
    </nav>
  );
}
