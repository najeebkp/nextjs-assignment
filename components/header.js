import React from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
const Header = () => (
  <nav className="navbar navbar-light bg-light">
    <a className="navbar-brand" href="/classrooms">
      <img
        src="https://www.edisonlms.com/wp-content/uploads/2019/07/w38.png"
        width="188.69"
        height="50"
        className="d-inline-block align-top"
        alt=""
      />
    </a>
    <div
      style={{
        textAlign: "right",
        fontFamily: "Sans-serif",
        fontWeight: "bold"
      }}
    >
      <a href="/login">Login</a>
      &nbsp;&nbsp;
      <a href="/signup">Signup</a>
      <style jsx>
        {`
          a {
            color: #000000;
          }
        `}
      </style>
    </div>
  </nav>
);

export default Header;
