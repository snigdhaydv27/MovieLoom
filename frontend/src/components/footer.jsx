import React from "react";
import { Linkedin, Instagram, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="flex justify-center gap-8">
        <a
          href="https://www.linkedin.com/in/snigdha-kumar-90445b298/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="https://www.instagram.com/snigdha_ydv/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <Instagram size={24} />
        </a>
        <a
          href="https://github.com/snigdhaydv27"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <Github size={24} />
        </a>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; {new Date().getFullYear()} ZenG. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
