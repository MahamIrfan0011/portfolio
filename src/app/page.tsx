"use client";
import BarChart from "./bar-component/Chartbar";
import React from 'react';
import { useEffect } from "react";
import Cards from "./cards-component/Cards";
import Navbar from "./components/Navbar";
import ContactCards from "./contact/page";
import Footer from "./footer/page";
import Typed from "typed.js";

export default function Home() {
  // Initializing Typed.js for animated text
  useEffect(() => {
    const options = {
      strings: [
        "Maham Irfan",
        "Web Developer",
        "Graphic Designer",
        "2D Animator",
      ],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
      showCursor: true,
    };

    const typed = new Typed("#looped-text", options);

    // Cleanup typed instance when component unmounts
    return () => {
      typed.destroy();
    };
  }, []);

  const Skills = () => {
    return (
      <div className="min-h-screen bg-[#000021] py-10">
        <BarChart />
      </div>
    );
  };

  return (
    <div className="w-full min-h-screen bg-[#000021]">
      <Navbar />

        {/* Intro Section */}
  <div className="text-left pl-4 md:pl-16" id="/">
    <h1 className="text-4xl md:text-6xl font-poppins font-bold text-white mt-16 pl-2 md:pl-10 hover:uppercase animate-slide-left-right">
      Hello!
    </h1>
    <h1 className="text-4xl md:text-6xl font-poppins font-bold text-white mt-10 pl-2 md:pl-10 hover:uppercase animate-slide-left-right">
      I am{" "}
      <span id="looped-text" className="text-[rgb(191,139,240)]"></span>
    </h1>
  </div>

  {/* Main Content with Profile Image */}
  <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-10 mt-12">
    <p className="text-white text-bold w-full md:w-1/2 -mt-12 md:-mt-24 pl-4 md:pl-16">
      "Hi, I'm <span className="text-[rgb(191,139,240)]">Maham</span>, a
      passionate Web Developer, 2D Animator, and Graphic Designer. I
      specialize in creating visually stunning websites, bringing characters
      and stories to life through animation, and designing unique and engaging
      visual identities."
    </p>

    <div className="relative w-full md:w-[250px] h-[450px] -mt-12 md:-mt-52 mr-0 md:mr-32">
      <div className="absolute inset-0 bg-black opacity-30 rounded-3xl"></div>
      <img
  src="profilepicture2.jpg"
  alt="Profile Image"
  className="object-cover w-full md:w-[250px] h-[450px] rounded-2xl transition-transform duration-500 ease-in-out transform hover:scale-110"
/>

    </div>
  </div>

  {/* Insight Section */}
  <div className="w-full min-h-screen mt-16 bg-[#000021]" id="about">
  <div className="flex flex-col items-center justify-center px-4 py-10">
    <h1 className="font-bold text-4xl md:text-6xl text-white text-center mt-4 pr-6">
      Insight
    </h1>
    <p className="text-white w-full md:w-1/2 mt-20 mx-auto text-left mr-8 pr-32">
      I'm a passionate and creative web developer, graphic designer, and 2D
      animator with a strong foundation in both technical and artistic fields.
      I specialize in bringing ideas to life through clean, responsive websites,
      stunning graphics, and engaging animations.
      <br />
      <br />
      With expertise in HTML, CSS, and TypeScript, as well as design tools like
      Adobe Photoshop, Adobe Illustrator, and Adobe After Effects, I combine
      functionality and aesthetics to deliver exceptional results.
      <br />
      <br />
      I am continuously learning and pushing my boundaries to improve my skills
      and expand my knowledge in the ever-evolving world of technology and design.
    </p>

    {/* Image Section - Only visible here on mobile */}
  {/* Image Section - Visible on Mobile and Tablets */}
<div className="block md:hidden mt-10">
  <img
    src="/profilepicture3.jpg" // Ensure this path is correct
    alt="Profile Picture"
    className="w-60 h-60 sm:w-48 sm:h-48 object-cover rounded-full shadow-lg transition-transform duration-500 ease-in-out hover:scale-110"
  />
</div>

{/* Image Section - Visible on Larger Devices */}
<div className="hidden md:flex relative w-full min-h-screen justify-start -mt-60">
  <div className="relative animate-fade-in-up pl-4 md:pl-24 -mt-24">
    <img
      src="/profilepicture3.jpg" // Ensure this path is correct
      alt="Top Image"
      className="w-40 sm:w-48 md:w-80 h-40 sm:h-48 md:h-80 object-cover rounded-full shadow-lg transition-transform duration-500 ease-in-out hover:scale-110"
    />
  </div>
</div>
</div>

  {/* Skills Section */}
  <div className="w-full min-h-screen lg:-mt-72 bg-[#000021]" id="skills">
    <h1 className="font-bold text-4xl md:text-6xl text-white text-center mt-10 pr-6">
      Skill Evaluation
    </h1>
    <Skills />
  </div>
  </div>

  <div className="w-full min-h-screen bg-[#000021]" id="projects">
    <h1 className="font-bold text-4xl md:text-6xl text-white text-center -mt-24 pr-6">Assignments</h1>
    <div className="flex flex-wrap justify-center -mt-8">
      <Cards image="/calculator.png" title="Simple Calculator" description="Built a simple calculator using Typescript for basic arithmetic operations." githubLink="https://github.com/MahamIrfan0011/simple-calculator-Maham-Irfan" />
      <Cards image="/ATM.jpg" title="ATM" description="Built an ATM simulation using TypeScript for secure and efficient banking transactions." githubLink="https://github.com/MahamIrfan0011/ATM-code" />
      <Cards image="/timer.png" title="Countdown Timer" description="Developed a countdown timer using TypeScript to track time with precision and flexibility." githubLink="https://github.com/MahamIrfan0011/countdown-timer" />
      <Cards image="/quiz.png" title="Quiz" description="Created an interactive quiz application using TypeScript to handle dynamic questions and real-time score tracking." githubLink="https://github.com/MahamIrfan0011/quiz" />
      <Cards image="/game.png" title="Adventure Game" description="Developed a TypeScript adventure game with enemies and progressive difficulty levels." githubLink="https://github.com/MahamIrfan0011/adventure_game" />
      <Cards image="/student-management.jpg" title="Student Management System" description="Developed a Student Management System in TypeScript to efficiently handle student data and operations." githubLink="https://github.com/MahamIrfan0011/student_management-system" />
      <Cards image="/wordcounter.jpg" title="Word Counter" description="Created a Word Counter in TypeScript to count words, characters, and lines in text input efficiently." githubLink="https://github.com/MahamIrfan0011/word-counter" />
      <Cards image="/currencyconvertor.png" title="Currency Converter" description="Developed a Currency Converter using TypeScript to calculate real-time exchange rates between multiple currencies." githubLink="https://github.com/MahamIrfan0011/currency-convertor" />
      <Cards image="/todo.jpeg" title="Todo List" description="Created a To-Do List application using TypeScript to manage tasks with features like adding items." githubLink="https://github.com/MahamIrfan0011/Todos-list" />
      <Cards image="/numberguessing.png" title="Number Guessing Game" description="Developed a number guessing game using TypeScript where the player guesses a randomly generated number within a specified range." githubLink="https://github.com/MahamIrfan0011/number-guessing-game" />
      <Cards image="/bakery.jpg" title="Bakery Website (Front-end)" description="My bakery website, built with Next.js and styled with Tailwind CSS, combines delightful animations and a creamy design to showcase irresistible treats!" githubLink="https://github.com/MahamIrfan0011/bakery-website" linkedinLink="https://www.linkedin.com/feed/update/urn:li:activity:7267111756102070272/?originTrackingId=mYrM0mNET4miMXGDmhnDiw%3D%3D" />
      <Cards image="/figma.png" title="Figma Design" description="I created a Figma-like design tool using Tailwind CSS and Next.js." githubLink="https://github.com/MahamIrfan0011/figma-project" linkedinLink="https://www.linkedin.com/feed/update/urn:li:activity:7267112377693728768/?originTrackingId=3nSfAe2XTsW2dpBUATUwwQ%3D%3D" />
      <Cards image="/figma1.png" title="Figma Design" description="I created a Figma-like design tool using Tailwind CSS and Next.js." githubLink="https://github.com/MahamIrfan0011/figma-design" linkedinLink="https://www.linkedin.com/feed/update/urn:li:activity:7267113262054297600/?originTrackingId=ae5DU9VpQ02%2FEZfcRJ%2BmOA%3D%3D"/>
      <Cards image="/project.png" title="Furniture Website (Figma)" description="I created a fully responsive Figma-like design tool using Tailwind CSS and Next.js." githubLink="https://github.com/MahamIrfan0011/hackathon2" linkedinLink="https://www.linkedin.com/feed/update/urn:li:activity:7272261943329968128/?originTrackingId=QI6aHemfSCqfr1vA52xHJg%3D%3D"/>
      <Cards image="/figma-design.png" title="Figma Design" description="I created a Figma-like design tool using Tailwind CSS and Next.js." githubLink="https://github.com/MahamIrfan0011/figma" linkedinLink="https://www.linkedin.com/feed/update/urn:li:activity:7275876510949928961/?originTrackingId=vI6xK6WHQHiP7be1KssWhA%3D%3D"/>
    </div>
  </div>

  <div className="w-full min-h-screen bg-[#000021]" id="contact">
    <ContactCards />
  </div>

  <div className="w-full bg-[#000021]">
    <Footer />
  </div>
</div>

  );
}













