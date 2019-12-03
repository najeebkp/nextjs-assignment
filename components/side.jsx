import React, { Component } from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../css/style2.css";
class Side extends Component {
  state = {};
  render() {
    return (
      <div
        className="container"
        style={{
          width: 200,
          float: "left",
          marginLeft: -15,
          marginTop: -25
        }}
      >
        <nav
          id="sidebar"
          className=""
          style={{
            height: 590,
            background: "#cbd1ae",
            boxShadow: "0 0.5rem 1rem 0 rgba(0, 0, 0, 0.5)"
          }}
        >
          <link
            rel="stylesheet"
            href="https://bootstrapious.com/tutorial/sidebar/style.css"
          />
          <script
            defer=""
            src="https://use.fontawesome.com/releases/v5.0.13/js/solid.js"
            integrity="sha384-tzzSw1/Vo+0N5UhStP3bvwWPq+uvzCMfrN1fEFe+xBmv1C/AtVX5K0uZtmcHitFZ"
            crossorigin="anonymous"
          ></script>

          <ul className="list-group" style={{ paddingTop: "5vh" }}>
            <li>
              <Link href={`/about?id=1`} as={`/classrooms/1`}>
                <a style={{ color: "black" }}>Class I</a>
              </Link>
            </li>
            <li>
              <Link href={`/about?id=2`} as={`/classrooms/2`}>
                <a style={{ color: "black" }}>Class II</a>
              </Link>
            </li>
            <li>
              <Link href={`/about?id=3`} as={`/classrooms/3`}>
                <a style={{ color: "black" }}>Class III</a>
              </Link>
            </li>
          </ul>
          <div
            class="colorlib-footer"
            style={{
              paddingTop: "50vh",
              fontSize: "10  px",
              color: "black",
              textAlign: "center"
            }}
          >
            <p style={{ color: "black", fontSize: "12px" }}>
              Copyright ©
              <script
                type="text/javascript"
                async=""
                src="https://www.google-analytics.com/analytics.js"
              ></script>
              <script type="text/javascript">
                document.write(new Date().getFullYear());
              </script>
              2019 All rights reserved | This template is made with{" "}
              <i class="icon-heart" aria-hidden="true"></i> by{" "}
              <a href="https://www.teachedison.com/" target="_blank">
                TeachEdison
              </a>
            </p>
            <ul style={{ textAlign: "center" }}>
              <link
                href="https://colorlib.com/preview/theme/elen/css/icomoon.css"
                rel="stylesheet"
              />

              <a href="https://www.facebook.com/TeachEdison">
                <i class="icon-facebook"></i>&emsp;
              </a>

              <a href="https://twitter.com/TeachEdison">
                <i class="icon-twitter"></i>&emsp;
              </a>

              <a href="#">
                <i class="icon-instagram"></i>&emsp;
              </a>

              <a href="https://www.linkedin.com/company/teachedison">
                <i class="icon-linkedin"></i>&emsp;
              </a>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Side;
