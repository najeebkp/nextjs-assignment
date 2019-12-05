import Link from "next/link";
import Nav from "../components/nav";
import fetch from "isomorphic-unfetch";
import React, { Component } from "react";
import PostData from "../public/sample_data.json";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "./layout";
import { route } from "next/dist/next-server/server/router";
import Collapsible from "react-collapsible";

function Side(props) {
  console.warn("props", props);
  const router = useRouter();
  var section = [];

  var chars = props.data[router.query.id - 1].sections;
  for (let i = 0, len = chars.length; i < len; i++) {
    // console.log("chars[i]", chars[i]);
    var sections = chars[i];
    section.push(sections);
  }

  console.log("New", router);
  return (
    <div className="row">
      <Layout></Layout>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      />
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>

      <div
        className="column"
        style={{
          paddingLeft: "40px",
          textAlign: "left",
          paddingTop: "10vh",
          fontSize: "18px",
          // backgroundColor: "#cccc",

          height: "98vh",
          width: "40vh"
        }}
      >
        <ul>
          {section.map(section => (
            <li
              style={{
                borderRight: "1px solid #f1f0f0",
                borderLeft: "1px solid #f1f0f0"
              }}
            >
              <div className="comp" style={{}}>
                <Collapsible
                  trigger={section.name}
                  triggerStyle={{
                    color: "black",
                    cursor: "pointer",
                    backgroundColor: "#F1F0F0",
                    border: "1px solid #cccc",

                    borderRadius: "5px",
                    padding: "10px 75px 0px 10px",
                    lineHeight: "2.0"
                  }}
                >
                  <style jsx>
                    {`
                      p {
                        text-align: left;
                        border-radius: 5px;
                        border-bottom: 1px solid #f1f0f0;
                        // background-color: #f1f0f0;
                        margin-left: -15px;
                        padding-left: 15px;

                        width: 33.5vh;
                      }
                      column {
                        float: left;
                        width: 50%;
                        padding: 10px;
                      }

                      row:after {
                        content: "";
                        display: table;
                        clear: both;
                      }
                    `}
                  </style>
                  <div className="container">
                    <p>
                      <Link
                        href={`/side2?id=${
                          props.data[router.query.id - 1].id
                        }&subject=${section.id}&block=${section.blocks[0].id}`}
                        as={`/classrooms/${
                          props.data[router.query.id - 1].id
                        }/${section.id}/${section.blocks[0].id}`}
                      >
                        {section.blocks[0].name}
                      </Link>
                    </p>

                    <p>
                      <Link
                        href={`/side2?id=${
                          props.data[router.query.id - 1].id
                        }&subject=${section.id}&block=${section.blocks[1].id}`}
                        as={`/classrooms/${
                          props.data[router.query.id - 1].id
                        }/${section.id}/${section.blocks[1].id}`}
                      >
                        {section.blocks[1].name}
                      </Link>
                    </p>

                    <p>
                      <Link
                        href={`/side2?id=${
                          props.data[router.query.id - 1].id
                        }&subject=${section.id}&block=${section.blocks[2].id}`}
                        as={`/classrooms/${
                          props.data[router.query.id - 1].id
                        }/${section.id}/${section.blocks[2].id}`}
                      >
                        {section.blocks[2].name}
                      </Link>
                    </p>

                    <p>
                      <Link
                        href={`/side2?id=${
                          props.data[router.query.id - 1].id
                        }&subject=${section.id}&block=${section.blocks[3].id}`}
                        as={`/classrooms/${
                          props.data[router.query.id - 1].id
                        }/${section.id}/${section.blocks[3].id}`}
                      >
                        {section.blocks[3].name}
                      </Link>
                    </p>
                  </div>
                </Collapsible>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="column"
        style={{ textAlign: "center", width: "150vh", paddingTop: "50px" }}
      >
        <h1>{props.data[router.query.id - 1].name}</h1>
        <p>{props.data[router.query.id - 1].description}</p>
      </div>
    </div>
  );
}

Side.getInitialProps = async function() {
  const res = await fetch("http://localhost:3000/sample_data.json");
  const data = await res.json();
  return { data };
};

export default Side;
