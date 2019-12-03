import React from "react";
import Link from "next/link";
import Head from "next/head";
import NavBar from "../components/navbar";

import Side from "../components/side";

function Layout(props) {
  return [<NavBar></NavBar>, <Side></Side>];

  {
    props.children;
  }
}
export default Layout;
