import { useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="shadow-md sticky top-0 z-50 backdrop-blur-md bg-opacity-70 bg-white/70">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center space-x-4">
          <NavLink to="/" className="text-3xl font-extrabold text-blue-600">
            Artifacts<span className="text-gray-800">Tracker</span>
          </NavLink>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Navbar />
        </div>
        <div className="hidden md:block">
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg shadow hover:opacity-90">
            Login
          </button>
        </div>
        {/* Hamburger Icon */}
        <button
          className="md:hidden flex items-center text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </nav>

      {/* Floating Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md md:hidden z-50">
          <nav className="flex flex-col space-y-4 p-4">
            <NavLink
              to="/"
              className="text-gray-700 hover:text-blue-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/artifacts"
              className="text-gray-700 hover:text-blue-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Artifacts
            </NavLink>
            <NavLink
              to="/add-artifact"
              className="text-gray-700 hover:text-blue-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Add Artifact
            </NavLink>
            <button
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg shadow hover:opacity-90"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
