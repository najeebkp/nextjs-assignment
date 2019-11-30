import React, { Component } from "react";
import Link from "next/link";
class Sidebar extends Component {
  state = {};
  render() {
    return (
      <div>
        <link
          href="https://colorlib.com/preview/theme/elen/css/style.css"
          rel="stylesheet"
        />
        <aside
          id="colorlib-aside"
          role="complementary"
          className="js-fullheight text-center"
          style={{
            height: 550,
            marginTop: 76,
            width: 250
          }}
        >
          <nav
            id="colorlib-main-menu"
            role="navigation"
            style={{ textAlign: "left", marginLeft: -30, width: "100%" }}
          >
            <ul>
              <li class="colorlib-active">
                <a href="/classrooms">Home</a>
              </li>
              <li>
                <Link href={`/about?id=1`} as={`/classrooms/1`}>
                  <a>Class I</a>
                </Link>
              </li>
              <li>
                <Link href={`/about?id=2`} as={`/classrooms/2`}>
                  <a>Class II</a>
                </Link>
              </li>
              <li>
                <Link href={`/about?id=3`} as={`/classrooms/3`}>
                  <a>Class III</a>
                </Link>
              </li>
            </ul>
          </nav>
          <div class="colorlib-footer">
            <p>
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
            <ul>
              <link
                href="https://colorlib.com/preview/theme/elen/css/icomoon.css"
                rel="stylesheet"
              />
              <li>
                <a href="https://www.facebook.com/TeachEdison">
                  <i class="icon-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/TeachEdison">
                  <i class="icon-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="icon-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/teachedison">
                  <i class="icon-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    );
  }
}

export default Sidebar;
