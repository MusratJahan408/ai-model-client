import React, { use, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";

const Login = () => {
  const { signIn, googleLogin } = use(AuthContext);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(() => {
        toast.success("Welcome back! Login successful.");
        navigate(location.state ? location.state : "/");
      })
      .catch(() => {
        toast.error("Invalid credentials. Please try again.");
      })
      .finally(() => setLoading(false));
  };

  // Requirement: Demo User/Admin Credentials Button
  const fillDemo = (role) => {
    const emailField = document.querySelector('input[name="email"]');
    const passField = document.querySelector('input[name="password"]');
    if (role === 'admin') {
      emailField.value = "admin@ai-manager.com";
      passField.value = "Admin@123";
    } else {
      emailField.value = "user@ai-demo.com";
      passField.value = "User@123";
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 dark:bg-slate-900 px-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-bold text-[#24282c] dark:text-white">
          Access AI Hub
        </h1>
        <p className="text-gray-500 mt-2">Manage your AI inventory with ease</p>
      </div>

      <div className="card bg-[#c9f0ff] dark:bg-slate-800 w-full max-w-lg shadow-2xl rounded-3xl">
        <div className="card-body p-8">
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="form-control">
              <label className="label font-semibold dark:text-white">Email</label>
              <input
                type="email"
                name="email"
                className="input input-bordered rounded-xl bg-white"
                placeholder="email@example.com"
                required
              />
            </div>

            <div className="form-control relative">
              <label className="label font-semibold dark:text-white">Password</label>
              <input
                type={show ? "text" : "password"}
                name="password"
                className="input input-bordered rounded-xl bg-white"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute left-[350px] top-3 text-gray-500"
              >
                {show ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <button disabled={loading} className="btn bg-[#24282c] text-white w-full rounded-xl hover:bg-black transition-all">
              {loading ? <span className="loading loading-spinner"></span> : "Sign In"}
            </button>
          </form>

          <div className="divider dark:text-gray-400 text-xs">OR CONTINUE WITH</div>

          <button onClick={() => googleLogin().then(() => navigate("/"))} className="btn btn-outline border-gray-300 bg-white w-full rounded-xl flex items-center gap-2">
            <FaGoogle className="text-red-500" /> Google
          </button>

          {/* Demo Credentials Section */}
          <div className="mt-6 p-4 bg-white/50 dark:bg-slate-700 rounded-2xl border border-dashed border-gray-400">
            <p className="text-xs font-bold mb-2 text-center">DEMO ACCESS (One-click fill)</p>
            <div className="flex gap-2">
              <button onClick={() => fillDemo('admin')} className="btn btn-xs flex-1 bg-primary text-white border-none">Admin</button>
              <button onClick={() => fillDemo('user')} className="btn btn-xs flex-1 bg-secondary text-white border-none">User</button>
            </div>
          </div>

          <p className="text-center mt-6 dark:text-white text-sm">
            New here? <Link to="/register" className="text-blue-600 font-bold hover:underline">Create Account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;