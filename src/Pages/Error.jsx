import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-100 text-center px-4 pb-10">
      {/* Animated 404 */}
      <div className="mb-12">
        <div className="flex justify-center items-end space-x-2 h-32">
          <div className="text-9xl font-bold text-error animate-bounce" style={{ animationDelay: '0.1s' }}>4</div>
          <div className="text-9xl font-bold text-error animate-bounce" style={{ animationDelay: '0.2s' }}>0</div>
          <div className="text-9xl font-bold text-error animate-bounce" style={{ animationDelay: '0.3s' }}>4</div>
        </div>
        
        {/* Broken link illustration with animation */}
        <div className="relative mt-8 w-64 h-2 mx-auto bg-error rounded-full overflow-hidden">
          <div className="absolute top-0 left-1/4 w-2 h-8 bg-error animate-pulse"></div>
          <div className="absolute top-0 left-1/2 w-2 h-8 bg-error animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="absolute top-0 left-3/4 w-2 h-8 bg-error animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>

      {/* Error message */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4  text-base-content">Oops! Page Not Found</h1>
      <p className="text-lg mb-8 text-base-content/80 max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>

      {/* Home button with hover animation */}
      <Link
        to="/"
        className="btn btn-primary btn-lg px-8 rounded-full transform hover:scale-105 transition-transform duration-300"
      >
        Go to Home
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      </Link>
    </div>
  );
};

export default Error;