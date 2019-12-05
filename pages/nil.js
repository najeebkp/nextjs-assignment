import Link from "next/link";
import fetch from "isomorphic-unfetch";
import React, { Component } from "react";
import PostData from "../public/sample_data.json";
import { useRouter } from "next/router";
import Layout from "./layout";

function Side(props) {
  console.log("props", props);
  // const router = useRouter();
  // var section = [];

  // var chars = props.data[0].sections;
  // for (let i = 0, len = chars.length; i < len; i++) {
  //   // console.log("chars[i]", chars[i]);
  //   var sections = chars[i];
  //   section.push(sections);
  // }
  // console.log(props);
  return (
    <div
      className="container"
      style={{
        maxWidth: 300,
        height: 700,
        float: "left",
        backgroundColor: "#ffff"
      }}
    >
      <title>Bootstrap Example</title>
      {/* <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      />
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
      <div className="container">
        <h2>Simple Collapsible</h2>
        <a href="#demo1" data-toggle="collapse">
          +Simple collapsible
        </a>
        <div id="demo1" className="collapse">
          <ul>
            {section.map(section => (
              <li>
                <Link
                  key={data.id}
                  href={`/new?id=${data.id}`}
                  as={`/classrooms/${data.id}`}
                >
                  <a>{section.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container">
        <a href="#demo2" data-toggle="collapse">
          +Simple collapsible
        </a>
        <div id="demo2" className="collapse">
          <ul>
            {section.map(section => (
              <li>
                <Link
                  key={data.id}
                  href={`/new?id=${data.id}`}
                  as={`/classrooms/${data.id}`}
                >
                  <a>{section.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container">
        <a href="#demo3" data-toggle="collapse">
          +Simple collapsible
        </a>
        <div id="demo3" className="collapse">
          <ul>
            {section.map(section => (
              <li>
                <Link
                  key={data.id}
                  href={`/new?id=${data.id}`}
                  as={`/classrooms/${data.id}`}
                >
                  <a>{section.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container">
        <a href="#demo4" data-toggle="collapse">
          +Simple collapsible
        </a>
        <div id="demo4" className="collapse">
          <ul>
            {section.map(section => (
              <li>
                <Link
                  key={data.id}
                  href={`/new?id=${data.id}`}
                  as={`/classrooms/${data.id}`}
                >
                  <a>{section.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div> */}
    </div>
  );
}

Side.getInitialProps = async function() {
  const res = await fetch("http://localhost:3000/sample_data.json");
  const data = await res.json();
  return { data };
};

export default Side;
