import { useState } from "react";
import { Link } from "react-router-dom";
import loginImg from "./login-image.jpg";
import { loginUser } from "../redux/slices/authSlice";
import { useDispatch } from "react-redux";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
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
            Enter your email and password to Login
          </p>

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
            Sign In
          </button>

          <p className="mt-4 text-center text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Register
            </Link>
          </p>
        </form>
      </div>

      {/* Right side - Image */}
      <div
        className="hidden md:block md:w-1/2 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${loginImg})` }}
      ></div>
    </div>
  );
}

export default Login;
