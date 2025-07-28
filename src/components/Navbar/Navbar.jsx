import {Link, NavLink} from "react-router-dom";

export default function Navbar(){

  return (
      <nav className="bg-cyan-950 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <div className="text-lg font-bold">
            <Link to="" className="hover:text-blue-200">Brand</Link>
          </div>
          <ul className="flex space-x-4">
            <li><NavLink to="" className="hover:text-blue-200">Home</NavLink></li>
            <li><NavLink to="about" className="hover:text-blue-200">About</NavLink></li>
            <li><NavLink to="parent" className="hover:text-blue-200">Parent</NavLink></li>
            <li><NavLink to="gallery" className="hover:text-blue-200">Gallery</NavLink></li>
          </ul>
        </div>
      </nav>

  );
}