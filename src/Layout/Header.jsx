import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCircle, setIsCircle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setIsCircle(true);
      } else {
        setIsCircle(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="w-full h-28 shadow-lg flex">
      {/* Logo Section */}
      <div
        className={`h-20 w-40 m-4 transition-all duration-300 ${
          isCircle ? 'rounded-full' : 'rounded-md'
        } bg-blue-500 flex items-center justify-center`}
      >
        <Link to="/" className="text-2xl text-black font-bold">
          <h1>Hii</h1>
        </Link>
      </div>

      <nav className="mx-auto my-4 flex justify-center md:px-6 lg:px-8">
        {/* Navigation Links */}
        <div
        className={`transition-all duration-300 ${isCircle ? 'rounded-full' : 'rounded-md'}  
          bg-blue-500 flex items-center justify-center 
          ${isOpen ? 'block' : 'hidden'} ${isCircle ? 'w-14':'w-40'} w-40 h-14 border-2 border-black rounded-3xl md:flex md:items-center md:w-auto`}
      >
        
          <ul className="flex flex-col md:flex-row gap-4 md:gap-8 font-serif font-semibold text-lg items-center">
            <li>
              <NavLink
                to="/Real-Estate/"
                className={({ isActive }) =>
                  `block py-2 px-4 duration-200 ${
                    isActive
                      ? 'text-orange-400 underline underline-offset-8'
                      : 'text-pink-600'
                  } hover:text-red-600`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `block py-2 px-4 duration-200 ${
                    isActive
                      ? 'text-orange-400 underline underline-offset-8'
                      : 'text-pink-600'
                  } hover:text-red-600`
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block py-2 px-4 duration-200 ${
                    isActive
                      ? 'text-orange-400 underline underline-offset-8'
                      : 'text-pink-600'
                  } hover:text-red-600`
                }
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 px-4 duration-200 ${
                    isActive
                      ? 'text-orange-400 underline underline-offset-8'
                      : 'text-pink-600'
                  } hover:text-red-600`
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
