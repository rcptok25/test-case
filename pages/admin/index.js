import React from 'react'

import Head from "next/head";
import Users from './pages/users'
import SideNavBar from './component/SideNavbar'
function Index() {
  const a= window.localStorage.getItem("username");
  console.log(a);
  return (
    
    <>
      <Head>
        <title>Test Case - Home</title>
        <meta name="description" content="Generated by create next app" />
       

      </Head>
      <div className="md:flex min-h-screen relative">
      <SideNavBar />
      <div className="w-full p-10">
        
        
        
           </div>
    </div>
    
    
    </>
    
      







  )
}

export default Index