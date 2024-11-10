import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoIosMail, IoIosLock } from "react-icons/io";
import { MdArrowForward } from "react-icons/md";
import { useDispatch } from "react-redux";
import { signupRequest } from "../../redux/reducers/authSlice";

export default function Signup() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    if (error) setError("");
  };

  const validateForm = () => {
    if (!formData.fullName || !formData.email || !formData.password) {
      setError("Please fill in all fields");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      return false;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      return false;
    }

    return true;
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      await dispatch(signupRequest(formData));
      setRedirect(true);
    } catch (err) {
      setError(err.message || "An error occurred during signup");
    }
  };

  if (redirect) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <div className="text-center mb-4">
        <h2 className="text-3xl font-bold text-gray-900">
          Create your account
        </h2>
        <p className="mt-3 text-gray-500">Start your journey with us today</p>
      </div>

      <form onSubmit={handleSignUp} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaUser className="text-gray-400" size={20} />
            </div>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="pl-10 w-full py-3 px-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="John Doe"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <IoIosMail className="text-gray-400" size={24} />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="pl-10 w-full py-3 px-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="you@example.com"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <IoIosLock className="text-gray-400" size={24} />
            </div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="pl-10 w-full py-3 px-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="••••••••"
              required
            />
          </div>
        </div>

        {error && <div className="text-red-500 text-sm mt-2">{error}</div>}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center gap-2"
        >
          Create account
          <MdArrowForward size={24} />
        </button>
      </form>

      <div className="text-center mt-4">
        <span className="text-gray-500">Already have an account? </span>
        <Link
          to="/login"
          className="text-blue-500 font-medium hover:text-blue-600"
        >
          Sign in
        </Link>
      </div>
    </>
  );
}
