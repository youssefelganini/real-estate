import React from 'react'
import { Link } from 'react-router-dom'
import logoImage from '../assets/Logo Option.png'

export default function Footer() {
  return (
    <>
    <footer className="mt-auto w-full bg-[#EBEBEB] text-[#444444] z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] border-t border-gray-300">
      
      <div className="max-w-[1440px] mx-auto px-10 pt-10 pb-6">
        
        <div className="flex justify-between items-start mb-10">
          
          <div className="flex flex-col items-start gap-4">
            <img src={logoImage} alt="Grand Atlas" className="h-[80px] w-auto object-contain" />
            <div className="flex flex-col gap-2 text-sm font-medium mt-2">
              <p>+1 (7635) 547-12-97</p>
              <p>support@lift.agency</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-gray-900 text-base mb-1">Quick Links</h3>
            <ul className="flex flex-col gap-3 text-sm font-medium list-none p-0 m-0">
              <li><Link to="/home" className="hover:text-red-600 transition-colors">Home</Link></li>
              <li><Link to="/inventories" className="hover:text-red-600 transition-colors">Inventories</Link></li>
              <li><Link to="/zones" className="hover:text-red-600 transition-colors">Zones</Link></li>
              <li><Link to="/developers" className="hover:text-red-600 transition-colors">Developers</Link></li>
              <li><Link to="/contactus" className="hover:text-red-600 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-gray-900 text-base mb-1">About</h3>
            <ul className="flex flex-col gap-3 text-sm font-medium list-none p-0 m-0">
              <li><Link to="/about" className="hover:text-red-600 transition-colors">Grand Atlas</Link></li>
              <li><Link to="/privacy" className="hover:text-red-600 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/legal" className="hover:text-red-600 transition-colors">Legal</Link></li>
              <li><Link to="/help" className="hover:text-red-600 transition-colors">Help</Link></li>
              <li><Link to="/support" className="hover:text-red-600 transition-colors">Support</Link></li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-gray-900 text-base mb-1">Get In touch</h3>

            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden bg-white w-full max-w-[280px]">
              <input 
                type="email" 
                placeholder="Get product updates" 
                className="w-full px-4 py-2.5 text-sm outline-none text-gray-700 bg-transparent"
              />
              <button className="bg-[#8A1538] hover:bg-[#6c102b] transition-colors text-white px-5 py-3 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </div>
          
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-[#8A1538] hover:bg-[#8A1538] hover:text-white transition-colors">
                <span className="text-sm font-bold">in</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-[#8A1538] hover:bg-[#8A1538] hover:text-white transition-colors">
                <span className="text-sm font-bold">f</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-[#8A1538] hover:bg-[#8A1538] hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-300 pt-6 flex justify-center">
          <p className="text-sm font-medium text-gray-600">
            © 2020 Lift Media. All rights reserved
          </p>
        </div>
        
      </div>
    </footer>
    </>
  )
}