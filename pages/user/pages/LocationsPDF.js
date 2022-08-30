import React from 'react'

import Head from "next/head";
import SideNavBar from './../component/SideNavbar'
function usersMapLocations() {
  return (
    <>
    <Head>
      <title>Test Case - Users Map Locations</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/pro.ico" />
    </Head>
    <div className="md:flex min-h-screen relative bg-neutral-100 text-black">
        <SideNavBar />
        <div className="w-full p-10 flex justify-center  flex-col">

          <div className='mb-10 mt-30'>
             <h3 className='text-black font-bold'>Map Locations List</h3>
          </div>



          <div className='  flex justify-start items-start h-screen'>
          <table className='shadow-2x1 font-[Poppins] border-2 border-black w-6/12'>
            <thead className='text-black border-2 border-black'>
              <tr>
                <th className='w-4/5'>Locaitons</th>
                
                <th className='w-1/5'>-</th>
              </tr>
            </thead>
            <tbody className='text-cyan-900 text-left'>
              <tr className='bg-neutral-200 cursor-pointer duration-300 '>
                
               
                <td className='py-3 px-6 w-4/5 '>
                  lat: -34.397, lng: 150.644 | lat: -34.397, lng: 150.644
                </td>
                <td className='py-3 px-6 w-1/5'>
                <button
                  type="submit"
                  className="w-full block  bg-red-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
          px-4 py-3 mt-2"
                >
                  PDF
                </button>
                </td>
              </tr>
              <tr className='bg-neutral-200 cursor-pointer duration-300 '>
                
               
                <td className='py-3 px-6 w-4/5 '>
                  lat: -34.397, lng: 150.644 | lat: -34.397, lng: 150.644
                </td>
                <td className='py-3 px-6 w-1/5'>
                <button
                  type="submit"
                  className="w-full block  bg-red-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
          px-4 py-3 mt-2"
                >
                  PDF
                </button>
                </td>
              </tr>
              <tr className='bg-neutral-200 cursor-pointer duration-300 '>
                
               
                <td className='py-3 px-6 w-4/5 '>
                  lat: -34.397, lng: 150.644 | lat: -34.397, lng: 150.644
                </td>
                <td className='py-3 px-6 w-1/5'>
                <button
                  type="submit"
                  className="w-full block  bg-red-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
          px-4 py-3 mt-2"
                >
                  PDF
                </button>
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

export default usersMapLocations