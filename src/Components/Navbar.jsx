import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaUserAlt } from "react-icons/fa";
import image1 from '../assets/compass.png'

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const commonLinks = (
    <>
      <li>
        <NavLink to="/" className="btn btn-ghost link-hover  hover:text-base-300 ">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/services" className="btn btn-ghost link-hover  hover:text-base-300 ">
          Services
        </NavLink>
      </li>
      {user && user?.email ? (
        <>
          <li>
            <NavLink to="/addservice" className="btn btn-ghost link-hover  hover:text-base-300 ">
              Add Service
            </NavLink>
          </li>
          <li>
            <NavLink to="/myreview" className="btn btn-ghost link-hover  hover:text-base-300 ">
              My Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/myservices" className="btn btn-ghost link-hover  hover:text-base-300 ">
              My Services
            </NavLink>
          </li>
          <li>
            <button onClick={logout} className="btn btn-ghost link-hover  hover:text-base-300 ">
              Logout
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/login" className="btn btn-ghost link-hover  hover:text-base-300 ">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/register" className="btn btn-ghost link-hover  hover:text-base-300 ">
              Register
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar shadow-xl px-7 py-0 bg-[#D9EAFD] text-base-300 sticky top-0 z-10">
      {/* Start */}
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#BCCCDC] rounded-box w-52 space-y-3">
            {commonLinks}
          </ul>
        </div>

        {/* Logo */}
        <div className="ml-4">
          <img src={image1} alt="Logo" className="w-32" />
        </div>
      </div>

      {/* Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">{commonLinks}</ul>
      </div>

      {/* End */}
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="p-1 rounded-full border border-dashed border-base-300"
          >
            <div className="w-12 h-12 rounded-full overflow-hidden">
              {user && user?.email ? (
                <img
                  className="w-full h-full object-cover"
                  src={user?.photoURL}
                  alt="user"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <FaUserAlt />
                </div>
              )}
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white text-black font-semibold shadow-xl rounded-box z-[1] m-3 w-48 p-3 space-y-3 text-center items-center justify-center"
            >
              <li>
                <p className="underline">USER INFORMATION</p>
              </li>
              <li>
                <p>{user?.displayName || "Please login"}</p>
              </li>
              {user?.metadata?.lastSignInTime && (
                <li>
                  <p className="text-wrap text-center flex flex-col">
                    <span className="text-lg">Last sign In:</span>{" "}
                    {user.metadata.lastSignInTime}
                  </p>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
