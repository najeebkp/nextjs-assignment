import React from "react";
import Link from "next/link";
function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
        <link
          href="https://getbootstrap.com/docs/4.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        ></link>
        <a className="navbar-brand mb-0 h1" href="/index">
          Home
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end "
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="/login">
              Login
            </a>
            <a className="nav-item nav-link" href="/signup">
              SignUp
            </a>
            <a className="nav-item nav-link  " href="/about">
              AboutUs
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Nav;
