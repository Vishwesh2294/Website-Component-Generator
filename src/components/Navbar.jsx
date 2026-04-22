import React from 'react'
import { FaUser } from 'react-icons/fa'
import { HiSun } from 'react-icons/hi'
import { RiSettings3Fill } from 'react-icons/ri'

const Navbar = () => {
  return (
    <div className="nav flex items-center justify-between 
                    px-4 sm:px-8 lg:px-[100px] 
                    h-[70px] lg:h-[90px] 
                    border-b border-gray-800">

      {/* Logo */}
      <div className="logo">
        <h3 className='text-[20px] sm:text-[22px] lg:text-[25px] font-[700] sp-text'>
          CompAI
        </h3>
      </div>

      {/* Icons */}
      <div className="icons flex items-center gap-[10px] sm:gap-[12px] lg:gap-[15px]">
        <div className="icon"><HiSun /></div>
        <div className="icon"><FaUser /></div>
        <div className="icon"><RiSettings3Fill /></div>
      </div>

    </div>
  )
}

export default Navbar