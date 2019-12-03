import React from "react";
import Link from "next/link";
import Head from "next/head";
import Nav from "./layout";
import Header from "../components/header";
import NavBar from "../components/navbar";
import Signup from "../components/signup";
import "bootstrap/dist/css/bootstrap.css";
function SignUp() {
  return (
    <div>
      <NavBar></NavBar>
      <div>
        <Signup></Signup>
      </div>
    </div>
  );
}

export default SignUp;
