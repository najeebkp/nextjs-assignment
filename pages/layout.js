import React from "react";
import Link from "next/link";
import Head from "next/head";
import NavBar from "../components/navbar";

function Layout(props) {
  return [<NavBar></NavBar>];

  {
    props.children;
  }
}
export default Layout;
