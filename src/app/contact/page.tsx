import React from "react";
import { FiMail, FiPhone, FiLinkedin } from "react-icons/fi";

const ContactCards: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#000021] mt-20">
      <section
        id="contact"
        className="bg-[#000021] to-purple-700 text-white py-16"
      >
        <div className="container mx-auto px-4 text-center">
        <h1 className="font-bold text-6xl text-white text-center mt-30 pr-6">
            Get in Touch
        </h1>
          <p className="text-lg mt-8">
            Feel free to reach out to me through any of the options below!
          </p>

          {/* Contact Cards */}
          <div className="grid gap-8 grid-cols-1 md:grid-cols-3 mt-16">
            {/* Email Card */}
            <div className="group bg-white hover:bg-[#f4c6d7] text-blue-700 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
              <FiMail className="text-5xl mx-auto mb-4 group-hover:text-blue-500 transition-colors" />
              <h3 className="text-xl font-semibold mb-2">Email Me</h3>
              <a
                href="mailto:h.m.irfan553@gmail.com"
                className="text-blue-600 hover:underline"
              >
                mahamirfan082008@gmail.com
              </a>
            </div>

            {/* Phone Card */}
            <div className="group bg-white hover:bg-[#f4c6d7]  text-blue-700 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
              <FiPhone className="text-5xl mx-auto mb-4 group-hover:text-blue-500 transition-colors" />
              <h3 className="text-xl font-semibold mb-2">Call Me</h3>
              <a
                href="tel:+1234567890"
                className="text-blue-600 hover:underline"
              >
                +92 300 2497553
              </a>
            </div>

            {/* LinkedIn Card */}
            <div className="group bg-white hover:bg-[#f4c6d7] text-blue-700 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
              <FiLinkedin className="text-5xl mx-auto mb-4 group-hover:text-blue-500 transition-colors" />
              <h3 className="text-xl font-semibold mb-2">Connect on LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/maham-irfan-9baa94338/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactCards;
