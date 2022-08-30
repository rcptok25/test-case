import React from 'react'

import Head from "next/head";
import SideNavBar from './../component/SideNavbar'
function users() {
  return (
    <>
      <Head>
        <title>Test Case - Users</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/pro.ico" />
      </Head>
      <div className="md:flex min-h-screen relative bg-neutral-100">
        <SideNavBar />
        <div className="w-full p-10 flex justify-center  flex-col">

          <div className='mb-10 mt-30'>
             <h3 className='text-black font-bold'>User List</h3>
          </div>



          <div className='  flex justify-start items-start h-screen'>
          <table className='shadow-2x1 font-[Poppins] border-2 border-black w-6/12'>
            <thead className='text-black border-2 border-black'>
              <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Username</th>
                <th>Locaitons</th>
              </tr>
            </thead>
            <tbody className='text-cyan-900 text-left'>
              <tr className='bg-neutral-200 cursor-pointer duration-300 '>
                <td className='py-3 px-6'>
                  Recep
                </td>
                <td className='py-3 px-6'>
                  Tok
                </td>
                <td className='py-3 px-6'>
                  rcptok25
                </td>
                <td className='py-3 px-6'>
                  lat: -34.397, lng: 150.644 , lat: -34.397, lng: 150.644
                </td>
              </tr>
              <tr className='bg-neutral-200 cursor-pointer duration-300'>
                <td className='py-3 px-6'>
                  Recep
                </td>
                <td className='py-3 px-6'>
                  Tok
                </td>
                <td className='py-3 px-6'>
                  rcptok25
                </td>
                <td className='py-3 px-6'>
                  lat: -34.397, lng: 150.644 , lat: -34.397, lng: 150.644
                </td>
              </tr>
              <tr className='bg-neutral-200 cursor-pointer duration-300 '>
                <td className='py-3 px-6 '>
                  Recep
                </td>
                <td className='py-3 px-6'>
                  Tok
                </td>
                <td className='py-3 px-6'>
                  rcptok25
                </td>
                <td className='py-3 px-6'>
                  lat: -34.397, lng: 150.644 , lat: -34.397, lng: 150.644
                </td>
              </tr>


            </tbody>
          </table>
          </div>
         
        </div>
      </div>
    </>
  )
}

export default users