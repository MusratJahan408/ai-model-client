import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser, updateProfileFunc, setUser, googleLogin } =
    use(AuthContext);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const displayName = form.name.value;
    const photoURL = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const regExp = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!regExp.test(password)) {
      toast.error(
        "Password must be at least 6 characters long and contain at least one uppercase and one lowercase letter."
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;

        updateProfileFunc(displayName, photoURL)
          .then(() => {
            setUser({ ...user, displayName, photoURL });
            navigate("/");
            toast.success("SignUp Successfully");
          })
          .catch((error) => {
            setUser(user);
            toast.error(error.code);
          });
      })
      .catch((error) => {
        toast.error("Email already in use");
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        // console.log(result.user);
        toast.success("Successfully Login");
        navigate("/");
      })
      .catch((error) => {
        toast.error("Email already in use");
      });
  };
  return (
    <div className="flex flex-col justify-center h-screen items-center">
      <h1 className="text-2xl md:text-5xl font-bold mb-5 md:mb-10">
        Register for AI Model Inventory Manager
      </h1>
      <div className="card bg-[#c9f0ff] w-full max-w-lg shrink-0 shadow-2xl px-5">
        <div className="card-body">
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              {/* name  */}
              <label className="label text-xl font-medium">Name</label>
              <input
                type="Text"
                name="name"
                className="input text-lg w-full"
                placeholder="Enter your name"
                required
              />
              {/* photo url */}
              <label className="label text-xl font-medium mt-4">
                Photo URL
              </label>
              <input
                type="Text"
                name="photo"
                className="input text-lg w-full"
                placeholder="Photo URL"
                required
              />
              {/* email  */}
              <label className="label text-xl font-medium mt-4">Email</label>
              <input
                type="email"
                name="email"
                className="input text-lg w-full"
                placeholder="Enter your email address"
                required
              />
              {/* password  */}
              <div className="relative">
                <label className="label text-xl font-medium">Password</label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  className="input text-lg w-full"
                  placeholder="Enter your password"
                  required
                />
                <p
                  onClick={() => setShow(!show)}
                  className="absolute top-10 left-96 cursor-pointer"
                >
                  {show ? <FaEye /> : <FaEyeSlash />}
                </p>
              </div>
              <button
                type="submit"
                className="btn bg-[#24282c] font-semibold text-white mt-4 w-full"
              >
                Register
              </button>
              {/* Divider */}
              <div className="flex items-center justify-center gap-2 my-2">
                <div className="h-px w-32 bg-gray-400"></div>
                <span className="text-sm">or</span>
                <div className="h-px w-32 bg-gray-400"></div>
              </div>

              {/* Google */}
              <button
                onClick={handleGoogleLogin}
                className="btn bg-[#24282c] text-white border-[#e5e5e5]"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
              <p className="font-bold text-sm text-center mt-4">
                Already Have An Account ?
                <Link to="/login" className="text-[#c681e770]">
                  Login
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
