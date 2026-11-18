
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login({ onLogin }) {
    const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
function handleLogin(e) {
  e.preventDefault();

  const savedUser = JSON.parse(
    localStorage.getItem("fashionHubAccount") || "null"
  );

  if (!savedUser) {
    alert("No account found. Please register first.");
    return;
  }

  if (
    savedUser.email === email &&
    savedUser.password === password
  ) {
    onLogin();
    alert("Login successful!");
    navigate("/");
  } else {
    alert("Invalid email or password!");
  }
}
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-5 py-12">
      <div className="w-full max-w-md bg-white p-8 md:p-10 shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold tracking-wider">
            FASHION<span className="text-amber-700">HUB.</span>
          </h1>

          <h2 className="text-2xl font-bold mt-7">Welcome Back</h2>

          <p className="text-gray-500 text-sm mt-2">
            Login to your Fashion Hub account
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
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
              placeholder="Enter your password"
              required
              className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-amber-700"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-3 font-semibold hover:bg-amber-800 transition"
          >
            LOGIN
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-7">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-amber-800 font-semibold hover:underline"
          >
            Register
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

export default Login;
