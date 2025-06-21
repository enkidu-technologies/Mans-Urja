import React from 'react'
import logo from '../assets/imgs/logo.png'
import {FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp} from "react-icons/fa"
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className='mt-10'>
      <div className="footer-content">
        <div className="logo">
          <img src={logo} alt="Mans logo" width={80} />
          <h1 className='text-3xl font-bold'>Mans Urja</h1>
          <div className='flex gap-2'>
            <a href="" target='_blank'><FaFacebook size={24}/></a>
            <a href="" target='_blank'><FaWhatsapp size={24}/></a>
            <a href="" target='_blank'><FaInstagram size={24}/></a>
            <a href="" target='_blank'><FaLinkedin size={24}/></a>
            <a href="" target='_blank'><FaXTwitter size={24}/></a>
          </div>
        </div>

        <div>
          <h4>Main menu</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4>Useful links</h4>
          <ul>
            <li><a href="">Link1</a></li>
            <li><a href="">Link1</a></li>
            <li><a href="">Link1</a></li>
            <li><a href="">Link1</a></li>
          </ul>
        </div>
      </div>

      <div className='copyright my-4'>
        <p>&copy; {new Date().getFullYear()} Mans Urja. All rights reserved. Site Developed by Enkidu Technologies Pvt. Ltd.</p>
      </div>
    </footer>
  )
}

export default Footer