import React, { useState } from "react"; // Import useState
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import icons

interface CardProps {
  image: string;
  title: string;
  description: string;
  githubLink: string;
  linkedinLink?: string;
}

const Card: React.FC<CardProps> = ({ image, title, description, githubLink, linkedinLink }) => {
  const [isHovered, setIsHovered] = useState(false); // Track hover state

  return (
    <div
      className="max-w-sm rounded overflow-hidden h-68 w-68 shadow-lg bg-[#000021] relative border-2 border-blue-800 hover:border-blue-600 transition-transform duration-300 ease-in-out hover:scale-105 mx-auto mt-24"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
        {/* Hover Overlay */}
        <div
          className={`absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* GitHub Button */}
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-blue-500 px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 flex items-center space-x-2 mx-2"
          >
            <FaGithub className="text-xl" />
            <span>GitHub</span>
          </a>
          {/* LinkedIn Button (only if link is provided) */}
          {linkedinLink && (
            <a
              href={linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-blue-500 px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 flex items-center space-x-2 mx-2"
            >
              <FaLinkedin className="text-xl" />
              <span>LinkedIn</span>
            </a>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="text-gray-300 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default Card;




