import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";

const Register = () => {
  const { createNewUser, setUser, loginWithGoogle, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleGoogleLogin = async () => {
    const user = await loginWithGoogle();
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Please enter a valid email address.",
      });
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!passwordRegex.test(password)) {
      return Swal.fire({
        icon: "error",
        title: "Weak Password",
        text: "Password must be at least 6 characters, include one uppercase letter, one lowercase letter, and one number.",
      });
    }

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserProfile({
          displayName: name,
          photoURL: photo,
        }).then(() => {
          Swal.fire({
            icon: "success",
            title: "Registration Successful",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        });
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          Swal.fire({
            icon: "warning",
            title: "Email Already in Use",
            text: "This email is already registered. Please use a different email or log in.",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Registration Error",
            text: error.message,
          });
        }
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4 py-10 text-base-300">
      <div className="card w-full max-w-md sm:max-w-lg shadow-2xl rounded-lg border border-base-300 bg-[#D9EAFD]">
        <h2 className="text-center font-bold pt-3 text-xl sm:text-2xl">
          Register
        </h2>
        <hr className="w-10/12 mx-auto h-[2px] opacity-40 mt-5 bg-base-300" />

        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="font-medium text-lg">Your Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="input input-bordered glass shadow-lg focus:outline focus:outline-base-300  outline outline-[1px] outline-gray-500 rounded-lg placeholder:text-gray-500"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="font-medium text-lg">Photo URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Enter your Photo URL"
              className="input input-bordered glass shadow-lg focus:outline focus:outline-base-300  outline outline-[1px] outline-gray-500 rounded-lg placeholder:text-gray-500"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="font-medium text-lg">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="input input-bordered glass shadow-lg focus:outline focus:outline-base-300  outline outline-[1px] outline-gray-500 rounded-lg placeholder:text-gray-500"
              required
            />
          </div>

          <div className="form-control relative">
            <label className="label">
              <span className="font-medium text-lg">Password</span>
            </label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="input input-bordered pr-10 glass shadow-lg focus:outline focus:outline-base-300  outline outline-[1px] outline-gray-500 rounded-lg placeholder:text-gray-500"
              required
            />
            <span
              className="absolute right-3 top-14 cursor-pointer text-base-300"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="form-control mt-2">
            <label className="label flex items-center gap-3 font-semibold">
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-sm border border-black"
                required
              />
              Accept Terms & Conditions
            </label>
          </div>

          <div className="form-control mt-6">
            <button className="btn w-full bg-blue-500  font-semibold  py-2 rounded-lg hover:bg-blue-700 transition text-lg glass text-white">
              Register
            </button>
          </div>
        </form>

        <div className="flex flex-col justify-center  px-8 pb-6">
          <p className="pl-1 text-lg">Have an account?</p>
          <Link
            to="/login"
            className="btn btn-link w-full text-center text-base-300 text-lg"
          >
            Login now
          </Link>
          <p className="text-center py-2">Or</p>
          <button
            onClick={handleGoogleLogin}
            className="btn text-lg w-full sm:w-auto border border-white flex items-center justify-center space-x-2  bg-green-500  font-semibold  py-2 rounded-lg hover:bg-blue-700 transition  glass text-white"
          >
            <FaGoogle className="text-xl" />
            <span>Sign In with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
