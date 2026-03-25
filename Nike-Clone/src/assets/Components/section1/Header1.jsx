import React from 'react'

const Header1 = () => {
  return (
    <div className="h-12 bg-gray-100 md:flex justify-end items-center px-10 hidden md:block">

      <div className="flex items-center gap-2 md:gap-5 text-xs md:text-sm font-medium">

        <button className="hover:text-gray-500">Help</button>

        <span className="hidden sm:inline">|</span>

        <button className="hover:text-gray-500">Sign up</button>

        <span className="hidden sm:inline">|</span>

        <button className="hover:text-gray-500">Login</button>

      </div>

    </div>
  )
}

export default Header1