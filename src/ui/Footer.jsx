import React from 'react'
import logo from '../assets/imgs/logo.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className='bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white'>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Mans Urja logo" className="w-12 h-12 sm:w-16 sm:h-16" />
              <h2 className='text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent'>
                Mans Urja
              </h2>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Empowering sustainable energy solutions through innovative solar technology.
              Building a brighter, cleaner future for generations to come.
            </p>

            {/* Social Media */}
            <div>
              <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-2">Follow Us</h4>
              <div className='flex space-x-4'>
                <a href="#" target='_blank' className="text-slate-400 hover:text-blue-400 transition-transform transform hover:scale-110">
                  <FaFacebook size={20} />
                </a>
                <a href="#" target='_blank' className="text-slate-400 hover:text-green-400 transition-transform transform hover:scale-110">
                  <FaWhatsapp size={20} />
                </a>
                <a href="#" target='_blank' className="text-slate-400 hover:text-pink-400 transition-transform transform hover:scale-110">
                  <FaInstagram size={20} />
                </a>
                <a href="#" target='_blank' className="text-slate-400 hover:text-blue-500 transition-transform transform hover:scale-110">
                  <FaLinkedin size={20} />
                </a>
                <a href="#" target='_blank' className="text-slate-400 hover:text-slate-200 transition-transform transform hover:scale-110">
                  <FaXTwitter size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Main Menu */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-2 relative inline-block">
              Main Menu
              <span className="block w-8 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-400 mt-1"></span>
            </h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Products', 'Contact'].map((label, i) => (
                <li key={i}>
                  <a href={`/${label.toLowerCase()}`} className="text-slate-300 hover:text-orange-400 text-sm transition-colors duration-300">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Products */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-2 relative inline-block">
              Our Products
              <span className="block w-8 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-400 mt-1"></span>
            </h4>
            <ul className="space-y-2">
              <li><a href="/abt-meter" className="text-slate-300 hover:text-orange-400 text-sm transition-colors duration-300">ABT Meter</a></li>
              <li><a href="/ct-pt" className="text-slate-300 hover:text-orange-400 text-sm transition-colors duration-300">CT & PT</a></li>
              <li><a href="/amr" className="text-slate-300 hover:text-orange-400 text-sm transition-colors duration-300">AMR Modem</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-2 relative inline-block">
              Contact Us
              <span className="block w-8 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-400 mt-1"></span>
            </h4>

            <div className='space-y-2 text-sm text-slate-300'>
              <div>
                <strong className='text-white'>Registered Office:</strong>
                <p>H No. 12, First Floor, Vill Adhichini, New Delhi, DL 110017</p>
              </div>
              <div>
                <strong className='text-white'>Corporate Office:</strong>
                <p>FF-46 River Heights Regalia, Rajnagar Extn, Ghaziabad 201017</p>
              </div>
              <div>
                <strong className='text-white'>Phone:</strong>
                <p>+91 83181 78822</p>
                <p>+91 83686 44748</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-slate-700 bg-slate-900/50'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-slate-400 space-y-4 sm:space-y-0">
            <p className="text-center sm:text-left">
              &copy; {new Date().getFullYear()} Mans Urja. All rights reserved.
            </p>
            <p className="text-center sm:text-right">
              Site Developed by{' '}
              <a href='https://enkidu.in' target='_blank' className="text-orange-400 hover:text-orange-300 font-medium transition-colors duration-300">
                Enkidu Technologies Pvt. Ltd.
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
