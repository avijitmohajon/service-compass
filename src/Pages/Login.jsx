import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { UserLogin, setUser, loginWithGoogle } = useContext(AuthContext);
  const handleGoogleLogin = async () => {
    const user = await loginWithGoogle();
    navigate("/");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    UserLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "Welcome back!",
          timer: 2000,
          showConfirmButton: false,
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error.code || "Something went wrong!",
        });
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4 sm:px-6 lg:px-8 text-base-300">
      <div className="w-full max-w-md bg-[#D9EAFD] rounded-xl shadow-lg border border-base-300 p-6 sm:p-8 my-8 md:16">
        <h2 className="text-center text-2xl font-bold text-base-300">
          Login to Your Account
        </h2>
        <hr className="my-4 border-base-300" />

        <form onSubmit={handleSubmit} className="space-y-5 ">
          <div className="form-control">
            <label className="label">
              <span className="block font-medium text-lg">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email address"
              className="input input-bordered w-full glass shadow-lg focus:outline focus:outline-base-300  outline outline-[1px] outline-gray-500 rounded-lg placeholder:text-gray-500"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="block font-medium text-lg">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full glass shadow-lg focus:outline focus:outline-base-300  outline outline-[1px] outline-gray-500 rounded-lg placeholder:text-gray-500"
              required
            />
            <Link
              to=""
              data-tip="Update Soon..."
              className="tooltip text-left text-md text-red-600 font-semibold link-hover mt-2 inline-block pl-1"
            >
              Forgotten account?
            </Link>
          </div>

          <div className="form-control">
            <button className="btn w-full bg-blue-500  font-semibold  py-2 rounded-lg hover:bg-blue-700 transition text-lg glass text-white">
              Login
            </button>
            <p className="mt-2 md:mt-4 pl-1 text-lg">Don't have an account?</p>
            <Link
              to="/register"
              className="btn btn-link w-full text-center text-base-300 text-lg"
            >
              Create New Account
            </Link>
          </div>
        </form>
        <div className="flex flex-col">
          <p className="text-center font-bold py-2">Or</p>
          <button
            onClick={handleGoogleLogin}
            className="btn text-lg w-full sm:w-auto border border-white flex items-center justify-center space-x-2  bg-green-500  font-semibold  py-2 rounded-lg hover:bg-blue-700 transition  glass text-base-300"
          >
            <FaGoogle className="md:text-xl text-sm" />
            <span className="md:text-xl text-sm">Sign In with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
