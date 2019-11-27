import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'

function Layout(props) {
return <Nav></Nav>


    {props.children}
       

}
export default Layout;