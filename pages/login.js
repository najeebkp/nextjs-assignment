import React from "react";
import Link from "next/link";
import Head from "next/head";
import Layout from "./layout";
import Login from "../components/login";
import Header from "../components/header";
import "bootstrap/dist/css/bootstrap.css";

function Form() {
  return (
    <div>
      <Header></Header>
      <div>
        <Login></Login>
      </div>
    </div>
  );
}

export default Form;
