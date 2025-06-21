import React from 'react'
import logo from '../assets/imgs/logo.png'
import {FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp} from "react-icons/fa"
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className='bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white mt-16'>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Mans Urja logo" className="w-12 h-12 sm:w-16 sm:h-16" />
              <h2 className='text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent'>
                Mans Urja
              </h2>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-md">
              Empowering sustainable energy solutions through innovative solar technology. 
              Building a brighter, cleaner future for generations to come.
            </p>
            
            {/* Social Media */}
            <div className="pt-4">
              <h3 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wide">Follow Us</h3>
              <div className='flex space-x-4'>
                <a href="" target='_blank' 
                   className="text-slate-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
                  <FaFacebook size={20}/>
                </a>
                <a href="" target='_blank' 
                   className="text-slate-400 hover:text-green-400 transition-colors duration-300 transform hover:scale-110">
                  <FaWhatsapp size={20}/>
                </a>
                <a href="" target='_blank' 
                   className="text-slate-400 hover:text-pink-400 transition-colors duration-300 transform hover:scale-110">
                  <FaInstagram size={20}/>
                </a>
                <a href="" target='_blank' 
                   className="text-slate-400 hover:text-blue-500 transition-colors duration-300 transform hover:scale-110">
                  <FaLinkedin size={20}/>
                </a>
                <a href="" target='_blank' 
                   className="text-slate-400 hover:text-slate-200 transition-colors duration-300 transform hover:scale-110">
                  <FaXTwitter size={20}/>
                </a>
              </div>
            </div>
          </div>

          {/* Main Menu */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4 relative">
              Main Menu
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-400"></div>
            </h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-slate-300 hover:text-orange-400 transition-colors duration-300 text-sm">Home</a></li>
              <li><a href="/about" className="text-slate-300 hover:text-orange-400 transition-colors duration-300 text-sm">About</a></li>
              <li><a href="/services" className="text-slate-300 hover:text-orange-400 transition-colors duration-300 text-sm">Services</a></li>
              <li><a href="/products" className="text-slate-300 hover:text-orange-400 transition-colors duration-300 text-sm">Products</a></li>
              <li><a href="/contact" className="text-slate-300 hover:text-orange-400 transition-colors duration-300 text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4 relative">
              Useful Links
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-400"></div>
            </h3>
            <ul className="space-y-3">
              <li><a href="" className="text-slate-300 hover:text-orange-400 transition-colors duration-300 text-sm">Solar Calculator</a></li>
              <li><a href="" className="text-slate-300 hover:text-orange-400 transition-colors duration-300 text-sm">Energy Savings</a></li>
              <li><a href="" className="text-slate-300 hover:text-orange-400 transition-colors duration-300 text-sm">Maintenance Guide</a></li>
              <li><a href="" className="text-slate-300 hover:text-orange-400 transition-colors duration-300 text-sm">Support Center</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-slate-700 bg-slate-900/50'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-slate-400 text-sm text-center sm:text-left">
              &copy; {new Date().getFullYear()} Mans Urja. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm text-center sm:text-right">
              Site Developed by{' '}
              <span className="text-orange-400 hover:text-orange-300 transition-colors duration-300 font-medium">
                Enkidu Technologies Pvt. Ltd.
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer