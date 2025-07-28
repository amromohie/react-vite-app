// Footer.jsx
import React from 'react';

export default function Footer() {
  return (
      <footer className="bg-gray-800 text-gray-200 py-6 mt-12">
        <div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} MyApp. All
            rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#privacy" className="hover:text-white text-sm">Privacy</a>
            <a href="#terms" className="hover:text-white text-sm">Terms</a>
            <a href="#contact" className="hover:text-white text-sm">Contact</a>
          </div>
        </div>
      </footer>
  );
};
