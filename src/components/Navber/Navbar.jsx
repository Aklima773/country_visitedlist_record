import React, { useEffect, useState } from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { FaAngleLeft, FaAngleRight, FaGithub, FaSun, FaMoon } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState(localStorage.theme || "light");

  const sections = ["home", "about","skills", "projects", "contact"];

  // Scroll spy (SPA)
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY + 120;
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Theme sync
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "";
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? "hidden" : "";
  };

  return (
    <nav className="fixed w-full z-50 bg-background-light dark:bg-background-dark backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo (UNCHANGED) */}
          <div
            onClick={() => scrollTo("home")}
            className="w-12 h-12 rounded-full bg-black dark:bg-white flex items-center justify-center relative overflow-hidden cursor-pointer shadow-lg"
          >
            <div className="text-[#f57722] absolute right-3.5 top-1">
              <FaAngleLeft size={35} />
            </div>
            <div className="text-[#f9004d] absolute top-3 left-4">
              <FaAngleRight size={35} />
            </div>
          </div>

          {/* Desktop Nav (ALIGNMENT UNCHANGED) */}
          <div className="hidden md:flex items-center gap-8">

            {sections.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`relative capitalize font-medium
                  ${activeSection === item
                    ? "text-[#f9004d]"
                    : "text-gray-700 dark:text-gray-300 hover:text-[#f9004d]"}
                `}
              >
                {item}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-full
                  bg-gradient-to-r from-[#f9004d] to-[#f57722]
                  transition-transform duration-300 origin-left
                  ${activeSection === item ? "scale-x-100" : "scale-x-0"}`}
                />
              </button>
            ))}

            {/* Social icons (UNCHANGED) */}
            <a href="https://www.linkedin.com/in/aklimaa773/" className="text-gray-700 dark:text-gray-300">
              <AiFillLinkedin size={22} />
            </a>
            <a href="https://github.com/Aklima773" className="text-gray-700 dark:text-gray-300">
              <FaGithub size={22} />
            </a>

            {/* Theme Toggle (ADDED ONLY) */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800
              hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {theme === "dark" ? (
                <FaSun className="text-yellow-400" />
              ) : (
                <FaMoon />
              )}
            </button>
          </div>

          {/* Mobile menu button (UNCHANGED) */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu}>
              <MdMenu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (STRUCTURE UNCHANGED) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-background-light dark:bg-background-dark z-50 flex flex-col items-center justify-center gap-8">
          <button
            onClick={toggleMobileMenu}
            className="absolute top-6 right-6"
          >
            <IoIosCloseCircle size={32} />
          </button>

          {sections.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={`text-2xl capitalize font-semibold
                ${activeSection === item
                  ? "text-[#f9004d]"
                  : "text-gray-700 dark:text-gray-300"}`}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
