import React from 'react'

const Header = () => {
  return (
    <header>
        <div className="logo">
          <h2>Mans-Urja</h2>
        </div>

        <nav>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/products">Products</a>
        </nav>

        <div>
          <a href="/contact">Contact</a> 
        </div>
    </header>
  )
}

export default Header