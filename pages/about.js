import Link from "next/link";
import Nav from "../components/nav";
import fetch from "isomorphic-unfetch";
import React, { Component } from "react";
import PostData from "../public/sample_data.json";
import { useRouter } from "next/router";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Layout from "./layout";

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
    <div className="layouts">
      <Layout />
      <div key={props.data.id} style={{ marginLeft: 500 }}>
        <style jsx>
          {`
            .card {
              font-family: Arial, Helvetica, sans-serif;
              border-radius: 40px;
              box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.2),
                -5px -5px 30px 7px rgba(0, 0, 0, 0.02);
              cursor: pointer;
              float: left;
              width: 150px;
              height: 350px;
              padding: 130px 10px;
              margin-left: auto;
              margin-right: auto;
              margin-top: 30px;
              text-align: center;
              align-items: center;
              background-color: #ffff;
              transition: 0.4s ease-out;
            }
            h1,
            p {
              text-align: center;
              margin-right: 300px;
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
              <a style={{ color: "blue" }}>{section.name}</a>
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
