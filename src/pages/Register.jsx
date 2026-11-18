
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleRegister(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const existingUser = JSON.parse(
      localStorage.getItem("fashionHubAccount") || "null"
    );

    if (existingUser && existingUser.email === email) {
      alert("An account with this email already exists!");
      return;
    }

    const newUser = {
      name,
      email,
      password,
    };

    localStorage.setItem(
      "fashionHubAccount",
      JSON.stringify(newUser)
    );

    alert("Registration successful! Please login.");

    navigate("/login");
  }

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-5 py-12">
      <div className="w-full max-w-md bg-white p-8 md:p-10 shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold tracking-wider">
            FASHION<span className="text-amber-700">HUB.</span>
          </h1>

          <h2 className="text-2xl font-bold mt-7">Create Account</h2>

          <p className="text-gray-500 text-sm mt-2">
            Join Fashion Hub and discover your style
          </p>
        </div>

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-2">
              Full Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              required
              className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-amber-700"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Email Address
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-amber-700"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              required
              minLength={6}
              className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-amber-700"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Confirm Password
            </label>

            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
              minLength={6}
              className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-amber-700"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-3 font-semibold hover:bg-amber-800 transition"
          >
            CREATE ACCOUNT
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-7">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-amber-800 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>

        <Link
          to="/"
          className="block text-center text-sm text-gray-500 mt-5 hover:text-amber-800"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}

export default Register;
