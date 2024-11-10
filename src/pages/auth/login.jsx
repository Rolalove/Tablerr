import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { IoIosMail } from "react-icons/io";
import { IoIosLock } from "react-icons/io";
import { MdArrowForward } from "react-icons/md";
import { useDispatch } from "react-redux";
import { loginRequest } from "../../redux/reducers/authSlice";

export default function Login() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (error) setError("");
  };

  const validateForm = () => {
    const { email, password } = formData;
    if (!email || !password) {
      setError("Please enter both email and password.");
      return false;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return false;
    }
    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    try {
      await dispatch(loginRequest(formData));
      setRedirect(true);
    } catch (err) {
      setError(err.message || "An error occurred during login");
    } finally {
      setLoading(false);
    }
  };

  if (redirect) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Sign in to your account
        </h2>
        <p className="mt-3 text-gray-500">
          Enter your credentials to access your dashboard
        </p>
      </div>

      <div className="space-y-6">
        <form onSubmit={handleLogin}>
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
                value={formData.email}
                name="email"
                onChange={handleChange}
                className="pl-10 w-full py-3 px-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="you@example.com"
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
                value={formData.password}
                name="password"
                onChange={handleChange}
                className="pl-10 w-full py-3 px-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="flex items-center justify-between mb-3 mt-3">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-500">Remember me</span>
            </label>
            <a
              href="#"
              className="text-sm font-medium text-blue-500 hover:text-blue-600"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center gap-2"
          >
            {loading ? (
              <span>Signing up...</span>
            ) : (
              <>
                Sign in
                <MdArrowForward size={24} />
              </>
            )}
          </button>
        </form>

        <div className="text-center">
          <span className="text-gray-500">Don't have an account? </span>
          <Link
            to="/signup"
            className="text-blue-500 font-medium hover:text-blue-600"
          >
            Sign up now
          </Link>
        </div>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      </div>
    </>
  );
}
