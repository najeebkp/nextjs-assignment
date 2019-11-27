import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Layout from './layout'
function Login() {
    return (
        <div class="display-5">
            <Layout></Layout>
            
         <div class="col-md-3 col-sm-12 mx-auto">
         
        <form>
            
                  <div class="form-group">
                      
                  
                  <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"></link>
                  
                     <label>User Name</label>
                     <input type="text" class="form-control" placeholder="User Name"/>
                  </div>
                  <div class="form-group">
                     <label>Password</label>
                     <input type="password" class="form-control" placeholder="Password"/>
                  </div>
                  <button type="submit" class="btn btn-primary">Login</button>
                  
               </form></div></div>
 )
  }
  
  export default Login;