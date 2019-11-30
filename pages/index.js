import React from "react";
import Link from "next/link";
import Head from "next/head";
import Layout from "./layout";

const Home = () => (
  <div>
    <Layout></Layout>
    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 className="display-4">Welcome</h1>
      <p className="display-5" align="center">
        Please login to continue...
      </p>
      <link
        href="https://getbootstrap.com/docs/4.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
      ></link>
    </div>

    <div className="container h-200">
      <div className="d-flex h-200">
        <div className="align-self-center mx-auto">
          {" "}
          <a href="/login">
            <button type="button" className="btn btn-primary btn-lg">
              Login
            </button>
          </a>
          &emsp;
          <a href="/signup">
            <button type="button" className="btn btn-primary btn-lg">
              SignUp
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
