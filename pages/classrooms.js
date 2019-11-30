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
    <div classname="layouts">
      <Layout />

      <div className="wrapp" style={{ marginLeft: 550 }}>
        <h1 style={{ textAlign: "center", marginRight: 350 }}>Classes</h1>
        <style jsx>
          {`
            .card {
              font-family: Arial, Helvetica, sans-serif;
              border-radius: 40px;
              box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.2),
                -5px -5px 30px 7px rgba(0, 0, 0, 0.02);
              cursor: pointer;
              float: left;
              width: 159px;
              height: 350px;
              padding: 130px 10px;
              margin-left: auto;
              margin-right: auto;
              margin-top: 30px;
              text-align: center;
              align-items: center;
              vertical-align: middle;
              background-color: #ffff;
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
              <a style={{ color: "blue" }}>{data.name}</a>
            </Link>
          </div>
        ))}
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
