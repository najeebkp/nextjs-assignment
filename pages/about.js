import Link from 'next/link'
import Nav from '../components/nav'
import fetch from 'isomorphic-unfetch'
import React,{Component} from 'react'
import PostData from '../public/sample_data.json'
import { useRouter } from 'next/router';

const Page = (props) => {
  const router = useRouter()
  var section=[];

  var chars=props.data[router.query.id-1].sections;
for(let i=0, len=chars.length; i<len; i++){
  console.log(chars[i]);
  var sections=(chars[i]);
  section.push(sections)
}
console.log(section);
  return (
  
  
<div key={props.data.id}>
  
  
  
  <h1>{props.data[router.query.id-1].id}.{props.data[router.query.id-1].name}</h1>
     {/* <h1>{router.query.id}</h1> */}
     <p>{props.data[router.query.id-1].description}</p>
     {/* <Link href={`/about`} as={`/classrooms`}><a>{section}</a></Link> */}
     {/* <ul> */}
        
          {section.map(section=>( 
          <div key={section.id}>
             <Link  href={`/new?id=${props.data[router.query.id-1].id}&subject=${section.id}`} as={`/classrooms/${props.data[router.query.id-1].id}/${section.id}`}><a>{section.name}</a></Link>
             </div>
          ))
         }        
      {/* </ul> */}
      
      
    
        {/* {
                props.data.map((product,i) =>
                    product.sections.map((productData, j) =>
                        <span>{productData.name}<br></br></span>
                    ))
                    } */}
             
      
      </div>
  )
}

Page.getInitialProps=async function(){

  const res = await fetch('http://localhost:3000/sample_data.json')
  const data = await res.json()
  return {data}
}

export default Page