import Link from "next/link";
import Nav from "../components/nav";
import fetch from "isomorphic-unfetch";
import React, { Component } from "react";
import PostData from "../public/sample_data.json";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "./layout";

function About(props) {
  // console.warn('props',props)
  return (
    <div
      className="layouts"
      style={{
        backgroundImage:
          "url(" +
          "https://educationalexploration.files.wordpress.com/2015/10/cropped-triangle-background-17.png" +
          ")",

        paddingTop: 10
      }}
    >
      <Layout />
      <div
        classname="conatiner"
        style={{
          width: 1145,
          height: 545,
          marginLeft: 200,
          marginTop: 100
        }}
      >
        <div className="wrapp" style={{ marginLeft: 350 }}>
          <h1
            style={{
              textAlign: "center",
              marginRight: 350,

              paddingTop: 15
            }}
          >
            Classes
          </h1>
          <style jsx>
            {`
              .card {
                font-family: Arial, Helvetica, sans-serif;
                border-radius: 10px;
                box-shadow: -1rem 0 3rem #000;
                // cursor: pointer;
                float: left;
                width: 200px;
                height: 280px;
                padding: 100px 10px;
                margin-left: -50px;
                margin-right: 50px;
                margin-top: 60px;
                text-align: center;
                align-items: center;
                vertical-align: middle;
                background-color: #17141d;
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

              {/* <h1>{data.name}</h1> */}
              <Link href={`/about?id=${data.id}`} as={`/classrooms/${data.id}`}>
                <a style={{ color: "white" }}>{data.name}</a>
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
