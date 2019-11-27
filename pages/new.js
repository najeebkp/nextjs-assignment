import Link from 'next/link'
import Nav from '../components/nav'
import fetch from 'isomorphic-unfetch'
import React,{Component} from 'react'
import PostData from '../public/sample_data.json'
import { useRouter } from 'next/router';

const Page = (props) => {
  const router = useRouter()
  var section=[];

  var chars=props.data[router.query.id-1].sections[router.query.subject-1];
// for(let i=0, len=chars.length; i<len; i++){
//   console.log(chars[i]);
//   var sections=(chars[i]);
//   section.push("",sections)
// }
console.log("gggg",chars);
  return (
  
  
<div>
  <h1>{chars.name}</h1>
<p>{chars.description}</p>
        
          {/* {section.map(section=>( 
          <div>
<p key={section.id}>{section.name}</p>
             </div>
          ))
         }         */}
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