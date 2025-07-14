import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievement" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1); // Remove the '#' from href
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const navbarHeight = 64; // h-16 = 4rem = 64px
      const elementPosition = targetElement.offsetTop;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/70 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg p-2 shadow-md">
              <img
                src="logo.png"
                alt="Logo"
                className="h-10 w-10 object-contain"
              />
            </div>
          </a>

          {/* Navigation List - Responsive for both Mobile and Desktop */}
          <div
            className={`${
              menuOpen
                ? "absolute top-16 left-0 w-full block bg-white"
                : "hidden sm:block"
            } lg:relative sm:top-0 sm:left-auto sm:w-auto sm:bg-transparent`}
          >
            <ul className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-8 p-4 sm:p-0">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="block text-black hover:text-orange-500 px-3 py-2 text-2xl font-stretch-90%  relative group transition-colors duration-200"
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu Toggle Button */}
          <div className="sm:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-800 hover:text-orange-500 focus:outline-none p-2 rounded-lg hover:bg-gray-100"
              aria-label="Menu Button"
            >
              {menuOpen ? (
                <IoMdClose className="h-6 w-6" />
              ) : (
                <GiHamburgerMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
