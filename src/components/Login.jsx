import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    // Fixed credentials
    const validEmail = "admin@britishway.lk";
    const validPassword = "BwEA@2025";
    if (email === validEmail && password === validPassword) {
      localStorage.setItem("admin_authed", "true");
      navigate("/admin", { replace: true });
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-24">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">Admin Login</h1>
          {error && (
            <div className="mb-4 text-sm text-red-700 bg-red-50 border border-red-200 rounded p-3">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="admin@britishway.lk"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="BwEA@2025"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;


