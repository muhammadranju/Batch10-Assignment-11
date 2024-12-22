import { useState } from "react";
import { Helmet } from "react-helmet";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 flex items-center justify-center lg:px-0 px-3">
      <Helmet>
        <title>Login Page | Historical Artifacts</title>
      </Helmet>
      <div className="bg-white shadow-2xl rounded-lg max-w-lg w-full p-8 sm:p-12">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-800">
            Welcome Back to{" "}
            <span className="text-blue-600">Artifacts Tracker</span>
          </h1>
          <p className="text-gray-500 mt-2">Login to continue exploring.</p>
        </div>

        {/* Login Form */}
        <form>
          {/* Email Field */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address<span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="mt-2 w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-6 relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password<span className="text-red-600">*</span>
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              className="mt-2 w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-3 top-6 flex items-center text-gray-500 hover:text-blue-600"
            >
              {passwordVisible ? <FaRegEye /> : <FaRegEyeSlash />}
            </button>
          </div>

          {/* Submit Button */}
          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg shadow-lg hover:opacity-90"
            >
              Login
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="text-center my-4 text-gray-500">or</div>

        {/* Social Login */}
        <div className="flex justify-center items-center space-x-4">
          <button className="bg-gray-200  hover:bg-gray-300 w-full text-center text-gray-700 px-6 py-3 rounded-lg shadow-md flex items-center justify-center">
            <img
              src="https://img.icons8.com/color/48/google-logo.png"
              alt="Google"
              className="w-6 h-6 mr-2"
            />
            Login with Google
          </button>
        </div>

        {/* Register Link */}
        <div className="text-center mt-6">
          <p className="text-gray-500">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Register Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
