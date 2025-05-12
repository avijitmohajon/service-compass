import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-6">
        {/* Logo & Slogan */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Service Compass</h1>
          <p className="mt-2 text-lg max-w-xl mx-auto">
            <span className="text-2xl font-light">❝ </span>
            Providing reliable and top-quality services with customer
            satisfaction at the core
            <span className="text-2xl font-light"> ❞</span>
          </p>
        </div>

        {/* Navigation Links */}
        <div className="w-full">
          <h2 className="text-xl mb-3 text-center ">Explore More:</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-base">
            <Link to="/services" className="hover:underline">
              Service
            </Link>
            <Link to="/myreview" className="hover:underline">
              Reviews
            </Link>
            <Link to="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link to="/about-us" className="hover:underline">
              About Us
            </Link>
          </div>
        </div>

        {/* Social Media */}
        <div className="text-center w-[50vw] border-t border-gray-600 border-dashed pt-4">
          <p className="text-lg mb-3">Stay Connected With Us :</p>
          <div className="grid grid-flow-col items-center mt-5 justify-center space-x-4">
            {/* Facebook */}
            <Link to="https://www.facebook.com/profile.php?id=100039609890568">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                className="fill-current "
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </Link>
            {/* Twitter */}
            <Link to="https://x.com/AJ_AVI_JIT">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </Link>
            {/* Youtube */}
            <Link to="https://www.youtube.com/@SuvroShuvoLyrics">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-gray-400 border-t border-gray-700 pt-4 w-full">
          © {new Date().getFullYear()} Service Compass. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
