import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash, FaGoogle, FaArrowRight } from "react-icons/fa";

const Register = () => {
  const { createUser, updateProfileFunc, setUser, googleLogin } = use(AuthContext);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      toast.success("Welcome! AI Journey Started.");
      navigate("/");
    } catch (error) {
      toast.error("Google access denied.");
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const displayName = form.name.value;
    const photoURL = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    const regExp = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!regExp.test(password)) {
      toast.error("Password needs 6+ chars, 1 uppercase, 1 lowercase.");
      setLoading(false);
      return;
    }

    createUser(email, password)
      .then((result) => {
        updateProfileFunc(displayName, photoURL).then(() => {
          setUser({ ...result.user, displayName, photoURL });
          toast.success("Account Synced Successfully!");
          navigate("/");
        });
      })
      .catch(() => {
        toast.error("Email already exists or network error.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-[#0f172a] p-4 py-20">
      <div className="w-full max-w-4xl bg-white dark:bg-slate-800 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-100 dark:border-slate-700">
        

        <div className="hidden md:flex md:w-2/5 bg-[#c9f0ff] p-12 flex-col justify-between">
          <div>
            <h2 className="text-3xl font-black text-[#24282c] leading-tight">Start managing your AI models today.</h2>
            <p className="mt-4 text-[#54595F]">Join 5,000+ developers building the future of intelligence.</p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm font-bold text-[#24282c]">
                <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center">✓</span> Cloud Sync
            </div>
            <div className="flex items-center gap-3 text-sm font-bold text-[#24282c]">
                <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center">✓</span> Model Versioning
            </div>
          </div>
        </div>

        <div className="w-full md:w-3/5 p-8 md:p-14">
          <h2 className="text-3xl font-bold dark:text-white mb-2">Create Account</h2>
          <p className="text-gray-500 mb-8">Enter your details to get started.</p>

          <form onSubmit={handleRegister} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="form-control">
                <label className="label text-xs font-bold uppercase tracking-wider dark:text-gray-400">Full Name</label>
                <input type="text" name="name" className="input input-bordered rounded-2xl bg-gray-50 dark:bg-slate-900 border-none focus:ring-2 ring-blue-300" placeholder="AI Architect" required />
              </div>
              <div className="form-control">
                <label className="label text-xs font-bold uppercase tracking-wider dark:text-gray-400">Photo URL</label>
                <input type="text" name="photo" className="input input-bordered rounded-2xl bg-gray-50 dark:bg-slate-900 border-none focus:ring-2 ring-blue-300" placeholder="https://image.com" required />
              </div>
            </div>

            <div className="form-control">
              <label className="label text-xs font-bold uppercase tracking-wider dark:text-gray-400">Email Address</label>
              <input type="email" name="email" className="input input-bordered rounded-2xl bg-gray-50 dark:bg-slate-900 border-none focus:ring-2 ring-blue-300" placeholder="expert@ai.com" required />
            </div>

            <div className="form-control relative">
              <label className="label text-xs font-bold uppercase tracking-wider dark:text-gray-400">Master Password</label>
              <input type={show ? "text" : "password"} name="password" 
                className="input input-bordered rounded-2xl bg-gray-50 dark:bg-slate-900 border-none focus:ring-2 ring-blue-300" 
                placeholder="••••••••" required />
              <button type="button" onClick={() => setShow(!show)} className="absolute right-4 top-12 text-gray-400 hover:text-blue-500">
                {show ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <button disabled={loading} className="btn w-full bg-[#24282c] hover:bg-black text-white rounded-2xl border-none h-14 text-lg">
              {loading ? <span className="loading loading-spinner"></span> : <>Create Account <FaArrowRight className="ml-2 text-sm"/></>}
            </button>
          </form>

          <div className="divider my-8 text-gray-400 text-xs">SOCIAL SIGN UP</div>
          <button onClick={handleGoogleLogin} className="btn w-full bg-white hover:bg-gray-100 dark:bg-slate-700 dark:text-white border border-gray-200 dark:border-slate-600 rounded-2xl h-14 flex items-center justify-center gap-3 shadow-sm transition-all">
            <FaGoogle className="text-red-500 text-xl" />
            Sign up with Google
          </button>

          <p className="text-center mt-8 text-gray-500">
            Already a member? <Link to="/login" className="text-blue-600 font-bold hover:underline">Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;