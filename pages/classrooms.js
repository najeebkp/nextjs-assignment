import Link from "next/link";
import Nav from "../components/nav";
import fetch from "isomorphic-unfetch";
import React, { Component } from "react";
import PostData from "../public/sample_data.json";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "./layout";
function About(props) {
  // console.warn("props", props);
  return (
    <div className="layouts">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      />
      <Layout />
      <div className="conatiner">
        <div className="wrapp">
          <h1
            style={{
              textAlign: "center"
            }}
          >
            Classes
          </h1>
          <style jsx>
            {`
              .card {
                font-family: Arial, Helvetica, sans-serif;
                border-radius: 10px;

                // cursor: pointer;
                float: center;
                width: 50%;

                height: auto;
                display: block;
                margin-left: auto;
                margin-right: auto;
                margin-top: 5px;

                // text-align: center;
                align-items: center;
                vertical-align: middle;
                background-color: #f1f0f0;
                transition: 0.4s ease-out;
              }
            `}
          </style>

          {props.data.map(data => (
            <div className="card" key={data.id}>
              <img
                src="https://mattharrisedd.com/wp-content/uploads/2016/05/ICON_Training.png"
                width="60"
                height="50"
                alt=""
              />
              &emsp;
              {/* <h1>{data.name}</h1> */}
              <Link href={`/side?id=${data.id}`} as={`/classrooms/${data.id}`}>
                <a style={{ color: "black" }}>{data.name}</a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

About.getInitialProps = async function() {
  const res = await fetch("http://localhost:3000/sample_data.json");
  const data = await res.json();
  return { data };
};

export default About;
