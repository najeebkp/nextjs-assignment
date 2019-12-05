import Link from "next/link";
import Nav from "../components/nav";
import fetch from "isomorphic-unfetch";
import React, { Component } from "react";
import PostData from "../public/sample_data.json";
import { useRouter, Router } from "next/router";
import { randomFill } from "crypto";
import { request } from "http";
import Header from "../components/header";
import Layout from "./layout";

const Page = props => {
  // console.log("gggg", props.data[a].sections);
  const router = useRouter();
  // var a = parseInt(router.query.id - 1);
  // var b = parseInt(router.query.subject - 1);
  // var section = [];
  // document.write(props.data[a].sections[b]);
  var section = [];
  var chars =
    props.data[router.query.id - 1].sections[router.query.subject - 1].blocks;
  for (let i = 0, len = chars.length; i < len; i++) {
    // console.log("chars[i]", chars[i]);
    var sections = chars[i];
    section.push(sections);
  }
  var blockelement = section.filter(obj => {
    return obj.id === "14";
  });
  console.log("blockelement", blockelement);
  //   if (section.id == router.query.block - 1) {
  //     return <h1>{section.id}</h1>;
  //   }
  //   if (chars.id == router.query.block - 1) {
  //     // console.log("chars[i]", chars[i]);
  //     var sections = chars;
  //     section.push(sections);
  //   }
  // for (let i = 0, len = chars.length; i < len; i++) {
  //   console.log(chars[i]);
  //   var sections = chars[i];
  //   section.push("", sections);
  // }
  console.log("chars", chars);
  return (
    <div className="Layout">
      <Layout />
      <div style={{ marginLeft: 250 }}>
        <style jsx>
          {`
            h1 {
              text-align: center;
              color: #000000;
              margin-top: 100px;
            }
          `}
        </style>

        {/* <p>{section.description}</p> */}

        {/* {section.map(section => (
          <div>
            <p key={section.id}>{section.name}</p>
          </div>
        ))} */}
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
