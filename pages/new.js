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
  var section = [];
  // document.write(props.data[a].sections[b]);
  var chars =
    props.data[router.query.id - 1].sections[router.query.subject - 1];
  var block =
    props.data[router.query.id - 1].sections[router.query.subject - 1].blocks;
  for (let i = 0, len = block.length; i < len; i++) {
    // console.log("chars[i]", chars[i]);
    var sections = block[i];
    section.push(sections);
  }
  // for (let i = 0, len = chars.length; i < len; i++) {
  //   console.log(chars[i]);
  //   var sections = chars[i];
  //   section.push("", sections);
  // }
  console.log("chars", chars);
  return (
    <div className="Layout">
      <Layout />
      <div style={{ marginLeft: 500 }}>
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
        <h1>{chars.name}</h1>
        <p>{chars.description}</p>
        <p>{chars.parent_id}</p>
        {section.map(block => (
          <div className="card" key={block.id}>
            <img
              src="https://changeinstitutes.com/wp/wp-content/uploads/2016/08/coaching_icon.png"
              width="50"
              height="55"
              alt=""
            />

            <Link
              key={props.data}
              href={`/blocks?id=${props.data[router.query.id - 1].id}&subject=${
                props.data[router.query.id - 1].sections[
                  router.query.subject - 1
                ].id
              }&block=${block.id}`}
              as={`/classrooms/${props.data[router.query.id - 1].id}/${
                props.data[router.query.id - 1].sections[
                  router.query.subject - 1
                ].id
              }/${block.id}`}
            >
              <a
                style={{
                  color: "#ffff"
                }}
              >
                {block.name}
              </a>
            </Link>
          </div>
        ))}

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
