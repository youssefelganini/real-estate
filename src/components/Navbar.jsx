import React from 'react'
import { Link } from 'react-router-dom'
import logoImage from '../assets/Logo Option.png'

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 w-full h-[105px] flex items-center">
      

      <nav className="flex items-center justify-between w-full max-w-[1440px] mx-auto px-10">
        
        <div className="flex-1 flex justify-start">
          <Link to="/home" className="flex items-center h-full">
            <img 
              src={logoImage} 
              alt="Grand Atlas" 
              className="max-h-[80px] w-auto object-contain" 
            />
          </Link>
        </div>


        <ul className="flex items-center gap-10 text-[#444444] text-base font-medium list-none m-0 p-0">
          
          <li className="cursor-pointer hover:text-red-600 transition-colors">
            <Link to="/home">Home</Link>
          </li>

          <li className="cursor-pointer hover:text-red-600 transition-colors">
            <Link to="/units">Units</Link>
          </li>

          <li className="cursor-pointer hover:text-red-600 transition-colors">
            <Link to="/zones">Zones</Link>
          </li>

          <li className="cursor-pointer hover:text-red-600 transition-colors">
            <Link to="/developers">Developers</Link>
          </li>
          
          <li className="cursor-pointer hover:text-red-600 transition-colors">
            <Link to="/contactus">Contact Us</Link>
          </li>

        </ul>


        <div className="flex-1 flex justify-end">
          <Link 
            to="/register" 
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-2.5 rounded-md font-medium transition-colors"
          >
            Register
          </Link>
        </div>

      </nav>
    </header>
  )
}