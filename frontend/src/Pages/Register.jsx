import { useState } from "react";
import { Link } from "react-router-dom";
import RegImg from "./register-img.jpg";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex h-screen">
      {/* Left side - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
        <form className="w-full max-w-md bg-white p-8 rounded-lg border shadow-sm">
          <div className="flex justify-center mb-6">
            <h2 className="text-xl font-medium">Aura</h2>
          </div>
          <h2 className="text-2xl font-bold text-center mb-6">Hey there! 👋</h2>
          <p className="text-center mb-6">Enter your details to Sign Up</p>

          <div className="mb-4">
            <div className="flex gap-4">
              {/* First Name */}
              <div className="w-1/2">
                <label className="block text-sm font-semibold mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder="First Name"
                />
              </div>

              {/* Last Name */}
              <div className="w-1/2">
                <label className="block text-sm font-semibold mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder="Last Name"
                />
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter your email address"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-800"
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
      <div className="hidden md:block w-1/2 bg-gray-800 h-full">
        <div className="h-full flex flex-col justify-center items-center">
          <img
            src={RegImg}
            alt="Register Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Register;
