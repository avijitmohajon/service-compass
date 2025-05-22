import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaClock, FaUserAlt } from "react-icons/fa";
import image1 from "../assets/compass.png";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const mainNavLinks = (
    <>
      <li>
        <NavLink to="/" className="btn btn-ghost hover:text-base-300 link-hover">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/services" className="btn btn-ghost hover:text-base-300 link-hover">
          Services
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className="btn btn-ghost hover:text-base-300 link-hover">
          About Us
        </NavLink>
      </li>
      {user?.email && (
        <>
          <li>
            <NavLink
              to="/addservice"
              className="btn btn-ghost hover:text-base-300 link-hover"
            >
              Add Service
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myreview"
              className="btn btn-ghost hover:text-base-300 link-hover"
            >
              My Review
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myservices"
              className="btn btn-ghost hover:text-base-300 link-hover"
            >
              My Services
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  const authNavLinks = user?.email ? (
    <button onClick={logout} className="btn btn-sm btn-primary w-full">
      Logout
    </button>
  ) : (
    <>
      <li className=" flex">
        <NavLink
          to="/login"
          className="btn btn-sm btn-primary w-full rounded-md"
        >
          Login
        </NavLink>
      </li>
      <li className="flex">
        <NavLink
          to="/register"
          className="btn btn-sm btn-primary w-full rounded-md"
        >
          Register
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar shadow-xl px-7 py-0 bg-[#D9EAFD] text-base-300 sticky top-0 z-10">
      {/* START */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#BCCCDC] rounded-box w-52 space-y-3"
          >
            {mainNavLinks}
          </ul>
        </div>

        {/* Logo */}
        <div className="ml-4">
          <img src={image1} alt="Logo" className="w-32" />
        </div>
      </div>

      {/* CENTER */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">{mainNavLinks}</ul>
      </div>

      {/* END - USER PANEL */}
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="p-1 rounded-full border border-dashed border-base-300"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden">
              {user?.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="user"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <FaUserAlt className="text-gray-600 hover:text-primary transition-colors" />
                </div>
              )}
            </div>
          </div>

          {/* User Dropdown Content */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gradient-to-br from-white to-gray-50 text-gray-800 font-medium shadow-lg rounded-lg z-[1] mt-2 w-56 p-4 space-y-2 border border-gray-100"
          >
            <li className="mb-2">
              <p className="text-primary font-bold text-sm uppercase tracking-wider justify-center">
                User Profile
              </p>
            </li>

            <li className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
              <div className="avatar placeholder">
                <div className="bg-primary text-white rounded-full w-10 flex items-center justify-center">
                  {user?.displayName ? (
                    <span>{user.displayName.charAt(0).toUpperCase()}</span>
                  ) : (
                    <span>?</span>
                  )}
                </div>
              </div>
              <p className="font-semibold truncate">
                {user?.displayName || "Guest User"}
              </p>
            </li>

            {user?.metadata?.lastSignInTime && (
              <li className="mt-3 pt-3 border-t border-gray-100">
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-gray-500">Last Active</span>
                  <div className="flex flex-col items-center gap-2 text-sm">
                    <FaClock className="text-gray-400 text-lg" />
                    <span className="text-gray-700">
                      {new Date (user.metadata.lastSignInTime).toLocaleString()}
                    </span>
                  </div>
                </div>
              </li>
            )}

            <li className="mt-2">{authNavLinks}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
