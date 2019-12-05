import React, { Component } from "react";
import Link from "next/link";
import Nav from "../components/nav";
import fetch from "isomorphic-unfetch";
import PostData from "../public/sample_data.json";
import { useRouter } from "next/router";
import "../css/style.css";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <div className="container" style={{ marginTop: 80 }}>
        <div className="header-area">
          {/* <link
            rel="stylesheet"
            href="https://colorlib.com/preview/theme/edumark/css/style.css"
          ></link> */}
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          />
          <link
            rel="stylesheet"
            href="https://colorlib.com/preview/theme/edumark/css/themify-icons.css"
          ></link>
          <link
            rel="stylesheet"
            href="https://colorlib.com/preview/theme/edumark/css/flaticon.css"
          ></link>
          <link
            rel="stylesheet"
            href="https://colorlib.com/preview/theme/edumark/css/font-awesome.min.css"
          ></link>
          <div
            id="sticky-header"
            className="main-header-area sticky"
            style={{
              height: 80
              // backgroundImage: "linear-gradient(to left,#0070ff, #ffff)"
            }}
          >
            <div className="container-fluid p-0">
              <div className="row align-items-center no-gutters">
                <div className="col-xl-2 col-lg-2">
                  <div className="logo-img">
                    <a href="/classrooms">
                      <img
                        style={{ height: 50, width: 200, marginTop: 10 }}
                        src="https://www.edisonlms.com/wp-content/uploads/2019/07/w38.png"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-7" style={{ marginTop: 15 }}>
                  <div className="main-menu  d-none d-lg-block">
                    <nav></nav>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-lg-3 d-none d-lg-block"
                  style={{ marginTop: 10 }}
                >
                  <div className="log_chat_area d-flex align-items-center">
                    <a href="/login" className="login popup-with-form">
                      <i
                        className="flaticon-user"
                        style={{ color: "black" }}
                      ></i>
                      <span style={{ color: "black" }}>log in</span>
                    </a>
                    <div className="live_chat_btn">
                      <a className="boxed_btn_orange" href="/signup">
                        <i className="fa fa-user"></i>
                        <span>SignUp</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="mobile_menu d-block d-lg-none">
                    <div className="slicknav_menu">
                      <a
                        href="#"
                        aria-haspopup="true"
                        role="button"
                        tabindex="0"
                        className="slicknav_btn slicknav_collapsed"
                        style={{ outline: "none" }}
                      >
                        <span className="slicknav_menutxt">MENU</span>
                        <span className="slicknav_icon">
                          <span className="slicknav_icon-bar"></span>
                          <span className="slicknav_icon-bar"></span>
                          <span className="slicknav_icon-bar"></span>
                        </span>
                      </a>
                      <ul
                        className="slicknav_nav slicknav_hidden"
                        aria-hidden="true"
                        role="menu"
                        style={{ display: "none" }}
                      >
                        <li>
                          <a
                            className="active"
                            href="index.html"
                            role="menuitem"
                            tabindex="-1"
                          >
                            home
                          </a>
                        </li>
                        <li>
                          <a href="Courses.html" role="menuitem" tabindex="-1">
                            Courses
                          </a>
                        </li>
                        <li className="slicknav_collapsed slicknav_parent">
                          <a
                            href="#"
                            role="menuitem"
                            aria-haspopup="true"
                            tabindex="-1"
                            className="slicknav_item slicknav_row"
                            style={{ outline: "none" }}
                          >
                            <a href="#" tabindex="-1">
                              pages <i className="ti-angle-down"></i>
                            </a>
                            <span className="slicknav_arrow">+</span>
                          </a>
                          <ul
                            className="submenu slicknav_hidden"
                            role="menu"
                            aria-hidden="true"
                            style={{ display: "none" }}
                          >
                            <li>
                              <a
                                href="course_details.html"
                                role="menuitem"
                                tabindex="-1"
                              >
                                course details
                              </a>
                            </li>
                            <li>
                              <a
                                href="elements.html"
                                role="menuitem"
                                tabindex="-1"
                              >
                                elements
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="about.html" role="menuitem" tabindex="-1">
                            About
                          </a>
                        </li>
                        <li className="slicknav_collapsed slicknav_parent">
                          <a
                            href="#"
                            role="menuitem"
                            aria-haspopup="true"
                            tabindex="-1"
                            className="slicknav_item slicknav_row"
                            style={{ outline: "none" }}
                          >
                            <a href="#" tabindex="-1">
                              blog <i className="ti-angle-down"></i>
                            </a>
                            <span className="slicknav_arrow">+</span>
                          </a>
                          <ul
                            className="submenu slicknav_hidden"
                            role="menu"
                            aria-hidden="true"
                            style={{ display: "none" }}
                          >
                            <li>
                              <a href="blog.html" role="menuitem" tabindex="-1">
                                blog
                              </a>
                            </li>
                            <li>
                              <a
                                href="single-blog.html"
                                role="menuitem"
                                tabindex="-1"
                              >
                                single-blog
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="contact.html" role="menuitem" tabindex="-1">
                            Contact
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
