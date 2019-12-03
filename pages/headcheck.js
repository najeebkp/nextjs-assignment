import Link from "next/link";
import Nav from "../components/nav";
import fetch from "isomorphic-unfetch";
import React, { Component } from "react";
import PostData from "../public/sample_data.json";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.css";

function Classroom() {
  return (
    <div className="header-area ">
      <link
        rel="stylesheet"
        href="https://colorlib.com/preview/theme/edumark/css/style.css"
      ></link>
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
      <div id="sticky-header" className="main-header-area sticky">
        <div className="container-fluid p-0">
          <div className="row align-items-center no-gutters">
            <div className="col-xl-2 col-lg-2">
              <div className="logo-img">
                <a href="index.html">
                  <img
                    style={{ height: 50, width: 200 }}
                    src="https://www.edisonlms.com/wp-content/uploads/2019/07/w38.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7">
              <div className="main-menu  d-none d-lg-block">
                <nav>
                  <ul id="navigation">
                    <li>
                      <a className="active" href="index.html">
                        home
                      </a>
                    </li>
                    <li>
                      <a href="Courses.html">Courses</a>
                    </li>
                    <li>
                      <a href="#">
                        pages <i className="ti-angle-down"></i>
                      </a>
                      <ul className="submenu">
                        <li>
                          <a href="course_details.html">course details</a>
                        </li>
                        <li>
                          <a href="elements.html">elements</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="#">
                        blog <i className="ti-angle-down"></i>
                      </a>
                      <ul className="submenu">
                        <li>
                          <a href="blog.html">blog</a>
                        </li>
                        <li>
                          <a href="single-blog.html">single-blog</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 d-none d-lg-block">
              <div className="log_chat_area d-flex align-items-center">
                <a href="#test-form" className="login popup-with-form">
                  <i className="flaticon-user"></i>
                  <span>log in</span>
                </a>
                <div className="live_chat_btn">
                  <a className="boxed_btn_orange" href="#">
                    <i className="fa fa-phone"></i>
                    <span>+10 378 467 3672</span>
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
                          <a href="elements.html" role="menuitem" tabindex="-1">
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
  );
}
export default Classroom;
