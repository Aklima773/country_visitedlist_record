// components/Projects.jsx
import React from "react";
import Slider from "react-slick";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import project1 from "./project1.png";
import platehsra from "./plateshare.png";
import toytopia from "./toytopia.png";
import { useState } from "react"



const Projects = () => {

    const [activeImage, setActiveImage] = useState(null);

  const projects = [
    {
      name: "ClubSpeher",
      image: project1,
      description: "To helps people discover, join, and manage local clubs",
      liveLink: "https://clubsphereaklima.netlify.app/",
      githubLink: "https://github.com/Aklima773/clubshpere",
    },
    {
      name: "PlateShare",
      image: platehsra,
      description: "This platform allows users to share their surplus food with the community to reduce waste",
      liveLink: "https://plateshareaklima.netlify.app/",
      githubLink: "https://github.com/Aklima773/plateshare_client_server",
    },
    {
      name: "ToyTopia",
      image: toytopia,
      description: "A Local Kids Toy Store Platform",
      liveLink: "https://toytopiaaklima.netlify.app/",
      githubLink: "https://github.com/Aklima773/toytopia",
    },
    {
        name: "PlateShare",
        image: platehsra,
        description: "This platform allows users to share their surplus food with the community to reduce waste",
        liveLink: "https://plateshareaklima.netlify.app/",
        githubLink: "https://github.com/Aklima773/plateshare_client_server",
      }
    
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 6000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (

    
    <section
      id="projects"
      className="py-24 bg-background-light dark:bg-background-dark"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section Title */}
        <div className="max-w-2xl mb-14">
          <span className="text-sm uppercase tracking-widest font-semibold text-[#f57722]">
            Projects
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Some Things I’ve Built
          </h2>
        </div>

        {/* Slider */}
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="px-4">
             <div
  onClick={() => setActiveImage(project.image)}
  className="group relative bg-white dark:bg-gray-900
  rounded-2xl overflow-hidden shadow-lg cursor-pointer
  border border-gray-100 dark:border-gray-800
  hover:shadow-2xl transition-all duration-500"
>

                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.name}
                  </h3>

                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>

                  {/* Buttons */}
                  <div className="mt-5 flex gap-4">
                  <a
  onClick={(e) => e.stopPropagation()}
  href={project.liveLink}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2
  px-4 py-2 rounded-full text-sm font-medium
  bg-gradient-to-r from-[#f9004d] to-[#f57722]
  text-white shadow-md hover:shadow-lg transition"
>

                      <FaExternalLinkAlt />
                      Live
                    </a>

                    <a
  onClick={(e) => e.stopPropagation()}
  href={project.githubLink}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2
  px-4 py-2 rounded-full text-sm font-medium
  border border-[#f9004d] text-[#f9004d]
  hover:bg-[#f9004d] hover:text-white transition"
>

                      <FaGithub />
                      Code
                    </a>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none
                  bg-gradient-to-r from-[#f9004d]/10 to-[#f57722]/10" />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {activeImage && (
  <div
    onClick={() => setActiveImage(null)}
    className="fixed inset-0 z-[999]
    bg-black/80 backdrop-blur-sm
    flex items-center justify-center px-4"
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="relative max-w-5xl w-full"
    >
      {/* Close Button */}
      <button
        onClick={() => setActiveImage(null)}
        className="absolute -top-12 right-0
        text-white text-3xl font-bold hover:text-[#f57722]"
      >
        ✕
      </button>

      {/* Full Image */}
      <img
        src={activeImage}
        alt="Project Preview"
        className="w-full max-h-[85vh]
        object-contain rounded-xl shadow-2xl"
      />
    </div>
  </div>
)}

    </section>
  );
};

export default Projects;
