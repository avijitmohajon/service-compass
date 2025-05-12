import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaUserAlt } from "react-icons/fa";
import image1 from '../assets/compass.png'

// import { MdDarkMode, MdLightMode } from "react-icons/md";
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const common = (
    <>
      <li>
        <NavLink to="/" className="btn btn-outline hover:bg-base-300 hover:text-base-content text-base-300">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/services" className="btn btn-outline hover:bg-base-300 hover:text-base-content text-base-300">
          Services
        </NavLink>
      </li>
      {/* <li>
        <NavLink to="/addservice" className="btn btn-outline">
          Add Service
        </NavLink>
      </li> */}

      {user && user?.email ? (
        <div className="flex justify-between items-center gap-4">
          <button onClick={logout} className="btn btn-outline hover:bg-base-300 hover:text-base-content text-base-300">
            logout
          </button>

          <div className="dropdown">
            <details className="dropdown-details">
              <summary className="btn btn-block btn-outline hover:bg-base-300 hover:text-base-content  text-base-300 focus:outline-none">
                More
              </summary>
              <ul className="dropdown-content menu -translate-x-5 translate-y-2 lg:translate-x-0 lg:-translate-y-0 bg-[#e0eefb] rounded-box z-[1] w-32 md:w-52 gap-4 p-2 mt-3 items-center shadow-lg text-base-300">
                <NavLink
                  to="/addservice"
                  className="btn btn-ghost btn-block shadow-xl border-x-base-300 border-2"
                >
                  Add Service
                </NavLink>
                <NavLink
                  to="/myreview"
                  className="btn btn-ghost btn-block shadow-xl border-x-base-300 border-2"
                >
                  My Review
                </NavLink>
                <NavLink
                  to="/myservices"
                  className="btn btn-ghost btn-block shadow-xl border-x-base-300 border-2"
                >
                  My Services
                </NavLink>
              </ul>
            </details>
          </div>
        </div>
      ) : (
        <div className="flex  gap-3 items-center justify-center p-0">
          <NavLink to="/login" className="btn btn-outline hover:bg-base-300 hover:text-base-content text-base-300">
            Login
          </NavLink>

          <NavLink to="/register" className="btn  btn-outline hover:bg-base-300 hover:text-base-content text-base-300">
            Register
          </NavLink>
        </div>
      )}
    </>
  );

  return (
    <div className="navbar shadow-xl px-7 py-0 bg-[#D9EAFD] text-base-300 sticky top-0 z-10">
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
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#BCCCDC] shadow-xl text-base-300 rounded-box z-[1] m-3 w-52 p-3 space-y-3"
          >
            {common}
          </ul>
        </div>
        <div>
          {/* logo */}
          <div className="flex gap-2 translate-x-10 md:translate-x-0">
            <img className="w-32 " src={image1} />
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">{common}</ul>
      </div>
      <div className="navbar-end ">
        <div className="dropdown dropdown-end ">
          <div
            tabIndex={0}
            role="button"
            className=" p-1 rounded-full border border-dashed border-base-300 "
          >
            <div className="w-12 rounded-full  ">
              {user && user?.email ? (
                <div className="flex items-center justify-center">
                  <img
                    className="rounded-full object-cover w-12 h-12 "
                    src={user?.photoURL}
                    alt="user"
                  />
                </div>
              ) : (
                <span className=" w-12 h-12 flex items-center justify-center">
                  <FaUserAlt />
                </span>
              )}
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white text-black font-semibold shadow-xl  rounded-box z-[1] m-3 w-48 p-3 space-y-3 text-center items-center justify-center"
            >
              <li>
                <p className="underline">USER INFORMATION</p>
              </li>
              <li>
                <p>
                  {user && user?.email ? (
                    <span className="text-xl">{user?.displayName}</span>
                  ) : (
                    "Please login"
                  )}
                </p>
              </li>
              <li>
                {user && user?.email ? (
                  <p className="text-wrap text-center flex flex-col">
                    <span className="text-lg">Last sign In:</span>{" "}
                    {user?.metadata?.lastSignInTime}
                  </p>
                ) : (
                  ""
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
