import React from "react";
import Link from "next/link";
import Head from "next/head";
import Nav from "../components/nav";
import Header from "../components/header";
import Sidebar from "../components/sidebar";

function Layout(props) {
  return [<Header></Header>, <Sidebar></Sidebar>];

  {
    props.children;
  }
}
export default Layout;
