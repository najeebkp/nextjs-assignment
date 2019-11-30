import React, { Component } from "react";
import Link from "next/link";
import Counters from "../components/counters";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "../components/navbar";

export default function Index() {
  return (
    <div>
      <NavBar />
      <Counters />
    </div>
  );
}
