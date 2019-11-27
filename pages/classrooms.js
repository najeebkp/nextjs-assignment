import Link from 'next/link'
import Nav from '../components/nav'
import fetch from 'isomorphic-unfetch'
import React,{Component} from 'react'
import PostData from '../public/sample_data.json'
import { useRouter } from 'next/router';

function About(props){
  // console.warn('props',props)
  return <div>
    
  
  {
    props.data.map(data=>(
      <div  key={data.id}> 
        {/* <h1>{data.name}</h1> */}
        <Link  href={`/about?id=${data.id}`} as={`/classrooms/${data.id}`}><a>{data.name}</a></Link>
      </div>
    ))
  }

  </div>
}


About.getInitialProps=async function(){

      const res = await fetch('http://localhost:3000/sample_data.json')
      const data = await res.json()
      return {data}
  }

export default About
