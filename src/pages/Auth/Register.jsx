import { useState } from "react";
import { toast } from "react-hot-toast";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
// import "react-toastify/dist/ReactToastify.css";

// Initialize toast notifications
// toast.configure();

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photoURL: "",
    password: "",
  });

  const [passwordVisible, setPasswordVisible] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Password validation
  const validatePassword = (password) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasMinLength = password.length >= 6;

    if (!hasUppercase) {
      toast.error("Password must contain at least one uppercase letter!");
      return false;
    }
    if (!hasLowercase) {
      toast.error("Password must contain at least one lowercase letter!");
      return false;
    }
    if (!hasMinLength) {
      toast.error("Password must be at least 6 characters long!");
      return false;
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, photoURL, password } = formData;

    if (!name || !email || !photoURL || !password) {
      toast.error("All fields are required!");
      return;
    }

    if (!validatePassword(password)) {
      return;
    }

    // Mock registration logic
    toast.success("Registration successful!");
    console.log("User Registered: ", { name, email, photoURL });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-lg max-w-lg w-full p-8 sm:p-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-800">
            Create Your Account
          </h1>
          <p className="text-gray-500 mt-2">
            Register to explore amazing artifacts!
          </p>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>

          {/* Photo URL */}
          <div className="mb-6">
            <label
              htmlFor="photoURL"
              className="block text-sm font-medium text-gray-700"
            >
              Photo URL
            </label>
            <input
              type="text"
              id="photoURL"
              placeholder="Enter your photo URL"
              value={formData.photoURL}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-6 relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              className="mt-2 w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
              required
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute inset-y-0 right-3 top-6 flex items-center text-gray-500 hover:text-green-600"
            >
              {passwordVisible ? <FaRegEye /> : <FaRegEyeSlash />}
            </button>
          </div>

          {/* Submit Button */}
          <div className="mb-6">
            <button
              type="submit"
              className="w-full  bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg shadow-lg hover:opacity-90"
            >
              Register
            </button>
          </div>
        </form>
        {/* Divider */}
        <div className="text-center my-4 text-gray-500">or</div>

        {/* Social Register */}
        <div className="flex justify-center items-center space-x-4">
          <button className="bg-gray-200  hover:bg-gray-300 w-full text-center text-gray-700 px-6 py-3 rounded-lg shadow-md flex items-center justify-center">
            <img
              src="https://img.icons8.com/color/48/google-logo.png"
              alt="Google"
              className="w-6 h-6 mr-2"
            />
            Register with Google
          </button>
        </div>
        {/* Already Have an Account */}
        <div className="text-center mt-6">
          <p className="text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
