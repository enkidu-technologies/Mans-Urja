import React, { useState, useEffect } from 'react'
import logo from "../assets/imgs/logo.png"
import { FaBars, FaCaretDown } from 'react-icons/fa';

const Header = () => {
  const [navOpen, setNavOpen] = useState({
    menu: false,
    states: false,
  });

  const [scrolled, setScrolled] = useState(false);

  const toggleNav = () => {
    setNavOpen(prev => ({ ...prev, menu: !prev.menu }));
  };


  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
      ? 'backdrop-blur-lg bg-white/80 shadow-lg border-b border-white/20'
      : 'backdrop-blur-sm bg-white/60'
      }`}>
      {/* Desktop Header */}
      <div className="hidden md:flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 items-center justify-between">
        <div className="flex items-center space-x-3">
          <a href="/"><img src={logo} width={50} alt="Mans Urja Logo" className="transition-transform duration-300 hover:scale-105" /></a>
          <h2 className={`text-2xl font-bold transition-colors duration-300 ${scrolled ? 'text-gray-800' : 'text-gray-900'
            }`}>
            <a href="/">Mans Urja</a>
          </h2>
        </div>

        <nav className="flex items-center space-x-8">
          <a href="/" className={`relative font-medium transition-colors duration-300 hover:text-orange-500 ${scrolled ? 'text-gray-700' : 'text-gray-800'
            } after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-orange-400 after:to-yellow-400 after:transition-all after:duration-300 hover:after:w-full`}>
            Home
          </a>
          <a href="/about" className={`relative font-medium transition-colors duration-300 hover:text-orange-500 ${scrolled ? 'text-gray-700' : 'text-gray-800'
            } after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-orange-400 after:to-yellow-400 after:transition-all after:duration-300 hover:after:w-full`}>
            About
          </a>
          <a href="/services" className={`relative font-medium transition-colors duration-300 hover:text-orange-500 ${scrolled ? 'text-gray-700' : 'text-gray-800'
            } after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-orange-400 after:to-yellow-400 after:transition-all after:duration-300 hover:after:w-full`}>
            Services
          </a>
          <a href="/products" className={`relative font-medium transition-colors duration-300 hover:text-orange-500 ${scrolled ? 'text-gray-700' : 'text-gray-800'
            } after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-orange-400 after:to-yellow-400 after:transition-all after:duration-300 hover:after:w-full`}>
            Products
          </a>
          <div className="relative group">
            <button
              className={`relative font-medium transition-colors duration-300 hover:text-orange-500 ${scrolled ? 'text-gray-700' : 'text-gray-800'
                } after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-orange-400 after:to-yellow-400 after:transition-all after:duration-300 group-hover:after:w-full`}
            >
              States
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <a href="/services?state=Uttar+Pradesh" className="block px-4 py-2 hover:bg-orange-50 text-gray-700">Uttar Pradesh</a>
              <a href="/services?state=Haryana" className="block px-4 py-2 hover:bg-orange-50 text-gray-700">Haryana</a>
              <a href="/services?state=Uttarakhand" className="block px-4 py-2 hover:bg-orange-50 rounded-lg text-gray-700">Uttarakhand</a>
            </div>
          </div>

        </nav>

        <div>
          <a href="/contact" className="btn">
            Contact
          </a>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden">
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center space-x-2">
            <a href="/"><img src={logo} width={40} alt="Mans Urja Logo" className="transition-transform duration-300" /></a>
            <h2 className={`text-xl font-bold transition-colors duration-300 ${scrolled ? 'text-gray-800' : 'text-gray-900'
              }`}>
              <a href="/">Mans Urja</a>
            </h2>
          </div>

          <button
            className={`p-2 rounded-lg transition-all duration-300 ${scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-gray-800 hover:bg-white/20'
              }`}
            onClick={toggleNav}
            aria-label="toggle Navigation"
          >
            <FaBars size={20} />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${navOpen.menu ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>

          <nav className={`px-4 pb-4 space-y-1 border-t ${scrolled ? 'border-gray-200 bg-white/90' : 'border-white/30 bg-white/70'
            } backdrop-blur-md`}>
            <a href="/" className={`block py-3 px-4 rounded-lg font-medium transition-all duration-300 ${scrolled
              ? 'text-gray-700 hover:bg-gray-100 hover:text-orange-500'
              : 'text-gray-800 hover:bg-white/30 hover:text-orange-500'
              }`}>
              Home
            </a>
            <a href="/about" className={`block py-3 px-4 rounded-lg font-medium transition-all duration-300 ${scrolled
              ? 'text-gray-700 hover:bg-gray-100 hover:text-orange-500'
              : 'text-gray-800 hover:bg-white/30 hover:text-orange-500'
              }`}>
              About
            </a>
            <a href="/services" className={`block py-3 px-4 rounded-lg font-medium transition-all duration-300 ${scrolled
              ? 'text-gray-700 hover:bg-gray-100 hover:text-orange-500'
              : 'text-gray-800 hover:bg-white/30 hover:text-orange-500'
              }`}>
              Services
            </a>
            <a href="/products" className={`block py-3 px-4 rounded-lg font-medium transition-all duration-300 ${scrolled
              ? 'text-gray-700 hover:bg-gray-100 hover:text-orange-500'
              : 'text-gray-800 hover:bg-white/30 hover:text-orange-500'
              }`}>
              Products
            </a>
            {/* States Dropdown */}
            <div className="space-y-1">
              <button
                onClick={() =>
                  setNavOpen(prev => ({ ...prev, states: !prev.states }))
                }
                className={`w-full text-left block py-3 px-4 rounded-lg font-medium transition-all duration-300 ${scrolled
                  ? 'text-gray-700 hover:bg-gray-100 hover:text-orange-500'
                  : 'text-gray-800 hover:bg-white/30 hover:text-orange-500'
                  }`}
              >
                States <FaCaretDown style={{ display: "inline" }} />
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${navOpen.states ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <a
                  href="/services?state=Uttar+Pradesh"
                  className="block py-2 pl-8 pr-4 text-sm rounded-lg font-medium text-gray-700 hover:bg-orange-50"
                >
                  Uttar Pradesh
                </a>
                <a
                  href="/services?state=Haryana"
                  className="block py-2 pl-8 pr-4 text-sm rounded-lg font-medium text-gray-700 hover:bg-orange-50"
                >
                  Haryana
                </a>
                <a
                  href="/services?state=Uttarakhand"
                  className="block py-2 pl-8 pr-4 text-sm rounded-lg font-medium text-gray-700 hover:bg-orange-50"
                >
                  Uttarakhand
                </a>
              </div>
            </div>

            <a href="/contact" className="btn">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
