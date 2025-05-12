import React from "react";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import errorLottie from "../assets/Animation - 1746935775857.json";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4 pb-10">
      <div className="w-full max-w-md">
        <Lottie
          className="w-full mx-auto"
          animationData={errorLottie}
          loop={true}
        />
      </div>

      <Link
        to="/"
        className=" px-6 py-3 bg-[#abf2ec] rounded-lg text-black text-lg hover:bg-[#8ff8ef] transition duration-300"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default Error;
