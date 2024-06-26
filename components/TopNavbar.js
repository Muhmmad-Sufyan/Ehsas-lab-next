import Link from 'next/link'
import React from 'react'

const TopNavbar = () => {
  return (
    <div className="md:block flex justify-center  bg-gray-100 text-gray-700">
      <div className="md:flex  md:flex-row gap-y-4   md:justify-between items-center justify-center md:px-14 md:items-center py-1 md:py-1.5">
      <div className="flex md:items-center pb-2 md:p-0 justify-center space-x-4">
        <div className="md:flex hidden md:items-center md:space-x-1">
          <i className='bx bxs-lock-alt text-sm'></i>
          <Link href="/login"  className="hover:underline text-sm">Customer Login</Link>
        </div>
        <div className="md:flex hidden md:items-center md:space-x-1">
          <i className='bx bx-envelope text-sm'></i>
          <span className="text-sm">name@yoursite.com</span>
        </div>
        <div className="flex  items-center space-x-1">
          <i className='bx bxs-phone text-sm'></i>
          <span className="text-sm">1-900-324-5467</span>
        </div>
      </div>
      <div className="flex  space-x-3 ">
        <Link href="https://www.facebook.com/groups/3716364858690216" className="hover:bg-blue-600 hover:text-white flex items-center space-x-1">
          <i className='bx bxl-facebook md:text-xl text-lg'></i>
        </Link>
        <Link href="https://www.google.com/search?q=ehsas+lab" className="hover:bg-red-600 hover:text-white flex items-center space-x-1">
          <i className='bx bxl-google-plus md:text-xl text-lg'></i>
        </Link>
        <Link href="https://twitter.com" className="hover:bg-blue-400 hover:text-white flex items-center space-x-1">
          <i className='bx bxl-twitter md:text-xl text-lg'></i>
        </Link>
        <Link href="https://www.linkedin.com/company/ehsaslabs/mycompany" className="hover:bg-blue-700 hover:text-white flex items-center space-x-1">
          <i className='bx bxl-linkedin md:text-xl text-lg'></i>
        </Link>
        <Link href="https://www.pinterest.com/hassamnwl/" className="hover:bg-red-600 hover:text-white flex items-center space-x-1">
          <i className='bx bxl-pinterest md:text-xl text-lg'></i>
        </Link>
        <Link href="https://www.skype.com/en/" className="hover:bg-blue-400 hover:text-white flex items-center space-x-1">
          <i className='bx bxl-skype md:text-xl text-lg'></i>
        </Link>
        <Link href="https://vimeo.com" className="hover:bg-blue-500 hover:text-white flex items-center space-x-1">
          <i className='bx bxl-vimeo md:text-xl text-lg'></i>
        </Link>
        <Link href="https://www.youtube.com/@ehsaslabs" className="hover:bg-red-600 hover:text-white flex items-center space-x-1">
          <i className='bx bxl-youtube md:text-xl text-lg'></i>
        </Link>
      </div>
    </div>

    </div>
  )
}

export default TopNavbar
