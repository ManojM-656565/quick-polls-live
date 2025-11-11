import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 text-center py-4 mt-auto">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-6">
        <p className="text-sm">
          © {new Date().getFullYear()} Quick Polls Live. All rights reserved.
        </p>
        <div className="flex gap-4 mt-2 sm:mt-0">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="/about"
            className="hover:text-white transition-colors"
          >
            About
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
