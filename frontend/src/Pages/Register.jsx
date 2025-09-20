import { useState } from "react";
import { Link } from "react-router-dom";
import RegImg from "./register-img.jpg";
import { registerUser } from "../redux/slices/authSlice";
import { useDispatch } from "react-redux";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser({ name, email, password }));
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left side - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-4 py-8 sm:px-8 md:px-12 bg-gray-50 overflow-y-auto">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-6 sm:p-8 rounded-lg border shadow-md"
        >
          <div className="flex justify-center mb-6">
            <h2 className="text-xl font-semibold">Aura</h2>
          </div>

          <h2 className="text-2xl font-bold text-center mb-4">Hey there! 👋</h2>
          <p className="text-center text-sm sm:text-base mb-6">
            Enter your details to Sign Up
          </p>

          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email address"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Sign Up
          </button>

          <p className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Log In
            </Link>
          </p>
        </form>
      </div>

      {/* Right side - Image */}
      <div className="hidden md:flex md:w-1/2">
        <img
          src={RegImg}
          alt="Register"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}

export default Register;
