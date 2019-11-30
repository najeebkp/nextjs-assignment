import Link from "next/link";
import Nav from "../components/nav";
import fetch from "isomorphic-unfetch";
import React, { Component } from "react";
import PostData from "../public/sample_data.json";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "./layout";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import About from "../pages/homepage";

function Classroom() {
  return (
    <div>
      <Header />
      <Sidebar />
      <About />
    </div>
  );
}
export default Classroom;
