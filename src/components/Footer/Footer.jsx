import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#53290d] text-white py-4">
      <div className="container mx-auto px-4 text-center">
        {/* Footer Text */}
        <p className="mb-2 font-medium">
          &copy; 2026 by <span className="text-[#f9004d]">Aklima Akter</span>. All rights reserved.
        </p>
        

        {/* Social Links */}
        <div className="flex justify-center gap-6">
        <a
            href="https://www.linkedin.com/in/aklimaa773/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#f9004d] transition-colors"
          >
            <FaLinkedin size={25} />
          </a>
          <a
            href="https://github.com/Aklima773"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#f9004d] transition-colors"
          >
            <FaGithub size={25} />
          </a>
          <a
            href=""
            className="text-white hover:text-[#f9004d] transition-colors"
          >
            <span>aklimaa773@gmail.com</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
