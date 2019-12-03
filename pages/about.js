import Link from "next/link";

import fetch from "isomorphic-unfetch";
import React, { Component } from "react";
import PostData from "../public/sample_data.json";
import { useRouter } from "next/router";
import Layout from "./layout";
import Nav from "./layout";
import Header from "../components/header";
import NavBar from "../components/navbar";
import Signup from "../components/signup";

const Page = props => {
  const router = useRouter();
  var section = [];
  var a = router.query.id;

  var chars = props.data[router.query.id - 1].sections;
  for (let i = 0, len = chars.length; i < len; i++) {
    // console.log("chars[i]", chars[i]);
    var sections = chars[i];
    section.push(sections);
  }
  console.log("section", section);
  return (
    <div
      className="layout"
      style={{
        backgroundImage:
          "url(" +
          "https://educationalexploration.files.wordpress.com/2015/10/cropped-triangle-background-17.png" +
          ")",
        paddingTop: 10,

        width: 1350,
        height: 656
      }}
    >
      <Layout />
      <div key={props.data.id} style={{ marginLeft: 500 }}>
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
              margin-left: -80px;
              margin-right: 80px;
              margin-top: 20px;
              text-align: center;
              align-items: center;
              background-color: #17141d;
              transition: 0.4s ease-out;
            }
            h1 {
              text-align: center;
              margin-right: 300px;
              color: #000000;
              margin-top: 100px;
            }
            p {
              color: #000000;
            }
          `}
        </style>

        <h1>{props.data[router.query.id - 1].name}</h1>
        {/* <h1>{router.query.id}</h1> */}
        <p>{props.data[router.query.id - 1].description}</p>
        {/* <Link href={`/about`} as={`/classrooms`}><a>{section}</a></Link> */}
        {/* <ul> */}

        {section.map(section => (
          <div className="card" key={section.id}>
            <img
              src="https://changeinstitutes.com/wp/wp-content/uploads/2016/08/coaching_icon.png"
              width="50"
              height="55"
              alt=""
            />

            <Link
              key={props.data}
              href={`/new?id=${props.data[router.query.id - 1].id}&subject=${
                section.id
              }`}
              as={`/classrooms/${props.data[router.query.id - 1].id}/${
                section.id
              }`}
            >
              <a
                style={{
                  color: "#fff"
                }}
              >
                {section.name}
              </a>
            </Link>
          </div>
        ))}
        {/* </ul> */}

        {/* {
                props.data.map((product,i) =>
                    product.sections.map((productData, j) =>
                        <span>{productData.name}<br></br></span>
                    ))
                    } */}
      </div>
    </div>
  );
};

Page.getInitialProps = async function() {
  const res = await fetch("http://localhost:3000/sample_data.json");
  const data = await res.json();
  return { data };
};

export default Page;
