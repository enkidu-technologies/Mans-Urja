import React, { useState } from 'react'
import logo from "../assets/imgs/logo.png"
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  }

  return (
    <header className='backdrop-blur-md'>
      <div className="header-desktop mobile-hidden">
        <div className="logo">
          <img src={logo} width={50} alt="Mans Urja Logo" />
          <h2 className='text-2xl font-bold'>Mans Urja</h2>
        </div>

        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/products">Products</a>
        </nav>

        <div className='nav-btn'>
          <a href="/contact" className='btn'>Contact</a>
        </div>
      </div>

      <div className="header-mobile desktop-hidden">
        <div className="logo">
          <div className="title">
            <img src={logo} width={40} alt="Mans Urja Logo" />
            <h2 className='text-xl font-bold'>Mans Urja</h2>
          </div>
          <div>
            <button className='nav-icon' onClick={toggleNav} aria-label="toggle Navigation"><FaBars className='text-black' /></button>
          </div>
        </div>
        {
          navOpen && (
            <nav>
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/services">Services</a>
              <a href="/products">Products</a>
              <a href="/contact" className='btn'>Contact</a>
            </nav>
          )
        }
      </div>
    </header>
  )
}

export default Header 