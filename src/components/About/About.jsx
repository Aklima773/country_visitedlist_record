import React from "react";
import aboutImg from "./portfolio.jpeg";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 bg-[#f5762215] dark:bg-background-dark overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE + ICON ORBIT */}
        <div className="relative flex justify-center">
          <div className="relative w-[320px] h-[360px] sm:w-[380px] sm:h-[380px] rounded-full flex items-center justify-center">

            {/* soft glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#f9004d]/20 to-[#f57722]/20 blur-3xl" />

            {/* image */}
            <img
              src={aboutImg}
              alt="About Aklima"
              className="relative z-0 w-72 h-72 rounded-2xl object-cover shadow-xl"
            />


<div className="absolute inset-0 bg-[#f9004d] opacity-15"></div>

            {/* orbit icons */}
            <FaReact className="absolute top-0 left-1/2 -translate-x-1/2 text-blue-500 text-4xl animate-floatSlow" />
            <FaNodeJs className="absolute right-0 top-1/2 -translate-y-1/2 text-green-600 text-4xl animate-float" />
            <SiMongodb className="absolute bottom-0 left-1/2 -translate-x-1/2 text-green-500 text-4xl animate-floatReverse" />
            <FaHtml5 className="absolute left-0 top-1/2 -translate-y-1/2 text-orange-600 text-4xl animate-float" />
            <FaCss3Alt className="absolute top-12 right-12 text-blue-600 text-3xl animate-floatSlow" />
            <SiTailwindcss className="absolute bottom-12 left-12 text-sky-400 text-3xl animate-float" />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="text-center lg:text-left">
          <span className="text-sm uppercase tracking-widest text-[#f57722] font-semibold">
            About Me
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            My approach to building <br />
            modern, scalable web applications
          </h2>

          <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed">
            I am a dedicated Full Stack Developer specializing in the MERN stack,
            with a strong focus on clean architecture, performance, and
            user-centered design. I enjoy transforming complex ideas into
            intuitive, reliable digital solutions that solve real-world problems.
          </p>

          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed">
            With experience across both frontend and backend development, I focus
            on writing maintainable code, building responsive interfaces, and
            developing scalable APIs.
          </p>

          <a
            href="#projects"
            className="inline-block mt-8 px-8 py-3 rounded-full font-semibold text-white
            bg-gradient-to-r from-[#f9004d] to-[#f57722]
            hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            Explore My Work
          </a>
        </div>

      </div>
    </section>
  );
};

export default About;
