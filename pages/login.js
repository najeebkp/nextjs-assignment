import React from "react";
import Link from "next/link";
import Head from "next/head";
import Layout from "./layout";
import Login from "../components/login";
import NavBar from "../components/navbar";
import Side from "../components/side";

function Form() {
  return (
    <div>
      <NavBar></NavBar>

      <div>
        <Login></Login>
      </div>
    </div>
  );
}

export default Form;
