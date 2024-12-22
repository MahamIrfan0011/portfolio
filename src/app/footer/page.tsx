import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import the GitHub, LinkedIn, icons

const Footer = () => {
  return (
    <footer className="bg-[#000021] text-white p-18">
      <div className="border-t border-white w-full my-4 -mt-2"></div>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start mt-10">
        {/* Navigation */}
        <div className="flex flex-row md:flex-col mb-4 md:mb-0 pl-64">
          <ul className="flex flex-row -ml-52 md:flex-col lg:ml-0 space-x-4 md:space-x-0 md:space-y-4">
            <li>
              <a href="/" className="text-white hover:underline">Home</a>
            </li>
            <li>
              <a href="#skills" className="text-white hover:underline">Skills</a>
            </li>
            <li>
              <a href="#projects" className="text-white hover:underline">Projects</a>
            </li>
            <li>
              <a href="#about" className="text-white hover:underline">About</a>
            </li>
            <li>
              <a href="#contact" className="text-white hover:underline">Contact</a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="ml-16 lg:flex flex-col mb-4 md:mb-0">
          <p className="font-semibold mb-2">Follow Me</p>
          <a 
            href="https://github.com/MahamIrfan0011" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:underline mb-2 flex items-center"
          >
            <FaGithub className="mr-2 text-xl" /> GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/maham-irfan-9baa94338/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:underline mb-2 flex items-center"
          >
            <FaLinkedin className="mr-2 text-xl" /> LinkedIn
          </a>
          
        </div>
        
        {/* Contact Information */}
        <div className="ml-16 lg:flex flex-col mb-4 md:mb-0 pr-72">
          <p className="mr-4">Email: mahamirfan082008@gmail.com</p>
          <p className="mr-4">Phone: +92 300 2497553</p>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="text-center mt-4">
        &copy; {new Date().getFullYear()} Maham Irfan. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

