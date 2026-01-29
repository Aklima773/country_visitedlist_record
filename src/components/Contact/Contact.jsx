import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser"; 

import { FaLinkedin, FaGithub,   } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      // Replace these with your EmailJS credentials
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formData,
        "YOUR_PUBLIC_KEY"
      );
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Failed to send message. Try again.");
    }
  };

  return (
    <section id="contact" className="py-16 bg-[#f57622b3]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12 text-center">
          Contact Me
        </h2>
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Side - Contact Info */}
          <div className="md:w-1/2 bg-white p-8 rounded-2xl shadow-2xl relative overflow-hidden">
  {/* Decorative Arrows */}
  <div className="text-[#f57722] font-extrabold absolute right-3.5 top-1">
    <FaEnvelope size={35} />
  </div>
  <div className="text-[#f9004d] font-extrabold absolute top-3 left-4">
    
  </div>

  <h3 className="text-2xl font-bold mb-6 text-[#f9004d]">Get in Touch</h3>
  <p className="mb-4 flex items-center gap-2 text-gray-700">
    <FaEnvelope className="text-[#f57722]" />{" "}
    <a href="" className="hover:text-[#f9004d]">
      aklimaa773@gmail.com
    </a>
  </p>
  <p className="mb-4 flex items-center gap-2 text-gray-700">
    <FaLinkedin className="text-[#f57722]" />{" "}
    <a
      href="https://www.linkedin.com/in/aklimaa773/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#f9004d]"
    >
      LinkedIn
    </a>
  </p>
  <p className="mb-4 flex items-center gap-2 text-gray-700">
    <FaGithub className="text-[#f57722]" />{" "}
    <a
      href="https://github.com/Aklima773"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#f9004d]"
    >
      GitHub
    </a>
  </p>
</div>


          {/* Right Side - Contact Form */}
          <div className="md:w-1/2 bg-white p-8 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-[#f9004d]">Send a Message</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#f57722]"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#f57722]"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#f57722]"
              ></textarea>
              <button
                type="submit"
                className="bg-[#f9004d] text-white p-3 rounded hover:bg-[#f57722] transition font-bold"
              >
                Send Message
              </button>
              {status && <p className="mt-2 text-sm text-gray-700">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
