import React from 'react'
import Link from 'next/link'
function Nav() {
  return (
  <div>
    
  <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
    <link href="https://getbootstrap.com/docs/4.3/dist/css/bootstrap.min.css" rel="stylesheet"></link>
  <a class="navbar-brand mb-0 h1" href="/index">Home</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-end " id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link" href="/login">Login</a>
      <a class="nav-item nav-link" href="/signup">SignUp</a>
      <a class="nav-item nav-link  " href="/about">AboutUs</a>
      
    </div>
  </div>
</nav>
</div>
  )
}
export default Nav;
