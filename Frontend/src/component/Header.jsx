import React from "react";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa"; // นำเข้าไอคอนจาก react-icons

const Header = () => {
  return (
    <div className="navbar bg-white shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
        </div>
              <a
        href="/Home"
        className="btn btn-ghost text-2xl font-medium text-black hover:text-gray-700 font-inter tracking-wide hover:scale-105 hover:shadow-md hover:shadow-gray-500/50 transition-all"
      >
        SE NPRU Blog
      </a>


      </div>

      <div className="navbar-end flex space-x-4">
        <a
          href="/Login"
          className="btn bg-gray-800 text-white border-gray-800 hover:bg-gray-900 rounded-full font-inter text-sm font-medium flex items-center justify-center space-x-2"
        >
          <FaSignInAlt className="text-xl" /> {/* ไอคอน Login สีขาว */}
        </a>

        <a
          href="/Register"
          className="btn bg-gray-800 text-white border-gray-800 hover:bg-gray-900 rounded-full font-inter text-sm font-medium flex items-center justify-center space-x-2"
        >
          <FaUserPlus className="text-xl" /> {/* ไอคอน Register สีขาว */}
        </a>
      </div>
    </div>
  );
};

export default Header;
