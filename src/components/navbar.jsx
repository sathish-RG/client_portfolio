import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen && !event.target.closest('.navbar-dropdown')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDropdownOpen]);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      <nav className={`flex flex-row justify-between items-center p-4 text-lg font-semibold ${isScrolled ? 'bg-gray-800' : 'bg-gray-700'} text-white`}>
        {/* Logo/Name */}
        <div className="flex items-center">
          <Link 
            smooth 
            to="#home" 
            className="text-2xl md:text-3xl font-bold hover:text-blue-300 transition-colors"
            onClick={() => setIsDropdownOpen(false)}
          >
            Sathish R
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex lg:flex-row items-center gap-8">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <Link
                smooth
                to={`#${item.toLowerCase()}`}
                className="relative py-2 px-1 hover:text-blue-300 transition-colors group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 focus:outline-none"
          onClick={handleDropdownToggle}
          aria-label="Toggle menu"
          aria-expanded={isDropdownOpen}
        >
          {isDropdownOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
          )}
        </button>

        {/* Mobile Dropdown Menu */}
        {isDropdownOpen && (
          <div className="navbar-dropdown absolute top-16 right-0 left-0 lg:hidden bg-gray-700 shadow-xl rounded-b-lg">
            <ul className="flex flex-col gap-1 p-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    smooth
                    to={`#${item.toLowerCase()}`}
                    className="block py-3 px-4 hover:bg-gray-600 rounded-md transition-colors text-center"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;