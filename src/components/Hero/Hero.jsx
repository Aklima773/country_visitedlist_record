import React from "react";
import { Typewriter } from "react-simple-typewriter";
import portfolio from "./portfolio.jpeg"
import { FaCss3Alt, FaHtml5, FaJsSquare, FaNodeJs, FaReact } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";

const Hero = () => {
  return (
    <section id="home"
    className=" relative pt-24 min-h-screen flex flex-col lg:flex-row items-center lg:items-center justify-center overflow-hidden"
   >  {/* Background image */}
   <div
     className="absolute inset-0 bg-cover bg-center opacity-10"
     style={{ backgroundImage: `url(${portfolio})` }}
   />
 
   {/* Light white overlay */}
   <div className="absolute inset-0 bg-gray-600 opacity-25"></div>
      {/* Background Decorations */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-pink-100 dark:bg-pink-900/20 rounded-full blur-3xl -z-10 opacity-60"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-50 dark:bg-blue-900/10 rounded-full blur-3xl -z-10 opacity-60"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row h-full">
        {/* Left Content */}
        <div className="w-full  pt-20 pb-12 lg:pb-20 lg:pt-20 flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
          <span className="text-sm font-medium tracking-[0.2em] text-gray-500 dark:text-gray-400 uppercase mb-4 block">
            MERN Stack Web Developer
          </span>
          <h1 className="text-4xl py-5 sm:text-4xl md:text-5xl lg:text-[4.5rem] font-black leading-tight tracking-tight text-gray-900 dark:text-white mb-6">
            Hello, I’m <span className="text-primary block lg:inline text-[#f9004d]">Aklima</span> <br className="hidden lg:block" />
            <h2 className="text-2xl sm:text-2xl md:text-5xl lg:text-5xl font-bold">
  <span
    className="text-[#f57722]"
  >
    <Typewriter
      words={[
        'Full Stack Developer',
        'MERN Stack Specialist',
        'Building Scalable Web Applications',
        'Turning Ideas Into Clean Code',
      ]}
      loop
      cursor={false}
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1500}
    />
  </span>

  {/* cursor */}
  <span className="ml-1 text-[#f9004d] animate-pulse">|</span>
</h2>


          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
          I am a passionate Full Stack Developer focused on building scalable, high-performance web applications with clean code and intuitive user experiences. I enjoy turning ideas into reliable, real-world solutions.
          </p>

          {/* button 
           */}

           {/* CTA Buttons */}
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-10">

<a
  href="#projects"
  className="px-8 py-3 rounded-full font-semibold text-white
  bg-gradient-to-r from-[#f9004d] to-[#f57722]
  hover:scale-105 transition-transform duration-300 shadow-lg"
>
  View My Portfolio
</a>

<a
  href="#contact"
  className="px-8 py-3 rounded-full font-semibold
  border-2 border-[#f9004d] text-[#f9004d]
  hover:bg-[#f9004d] hover:text-white
  transition-all duration-300 shadow-md"
>
  Contact Me
</a>

{/* Download Resume */}
<a
  href="/resume.pdf"
  download="Aklima_Full_Stack_Developer_Resume.pdf"
  className="px-8 py-3 rounded-full font-semibold
  border-2 border-[#f57722] text-[#f57722]
  hover:bg-[#f57722] hover:text-white
  transition-all duration-300 shadow-md"
>
  Download Resume
</a>

</div>

        </div>

        {/* Right Content */}
       {/* Right Content */}
<div className="w-full lg:w-1/2 flex items-center justify-center relative order-1 lg:order-2">

{/* Tech Orbit */}
<div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] rounded-full flex items-center justify-center">

  {/* Center Glow */}
  <div className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-[#f9004d] to-[#f57722] opacity-20 blur-2xl">
    <h1 className="text-2xl font-bold text-white text-center absolute top-8 opacity-55">Full Stack developer</h1>
    </div>

  {/* Icons arranged */}
  <FaReact className="absolute top-0 left-1/2 -translate-x-1/2 text-blue-500 text-4xl animate-floatSlow" />
  <FaNodeJs className="absolute right-0 top-1/2 -translate-y-1/2 text-green-600 text-4xl animate-float" />
  <SiMongodb className="absolute bottom-0 left-1/2 -translate-x-1/2 text-green-500 text-4xl animate-floatReverse" />
  <FaHtml5 className="absolute left-0 top-1/2 -translate-y-1/2 text-orange-600 text-4xl animate-float" />

  <FaCss3Alt className="absolute top-12 right-12 text-blue-600 text-3xl animate-floatSlow" />
  <FaJsSquare className="absolute bottom-12 right-12 text-yellow-400 text-3xl animate-floatReverse" />
  <SiTailwindcss className="absolute bottom-12 left-12 text-sky-400 text-3xl animate-float" />
</div>

{/* Stats Cards */}
<div className="absolute -bottom-12 flex gap-4 sm:gap-6">
  
  <div className="stat-card animate-float">
    <h3 className="stat-number">2+</h3>
    <p className="stat-text">Years Experience</p>
  </div>

  <div className="stat-card animate-floatSlow">
    <h3 className="stat-number">15+</h3>
    <p className="stat-text">Projects</p>
  </div>

  <div className="stat-card animate-floatReverse">
    <h3 className="stat-number">2+</h3>
    <p className="stat-text">Certifications</p>
  </div>

</div>

</div>

      </div>
    </section>
  );
};

export default Hero;