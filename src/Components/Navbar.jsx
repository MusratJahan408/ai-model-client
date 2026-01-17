import { Link, NavLink } from "react-router";
import { IoLogoModelS } from "react-icons/io";
import { GoHomeFill } from "react-icons/go";
import { IoLogIn, IoLogOut } from "react-icons/io5";
import { ImBoxAdd } from "react-icons/im";
import logoImg from "../assets/35b5bt.png";
import { use, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";

const NavBar = () => {
  const { user, logOut } = use(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>
          <GoHomeFill /> Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/all-models"}>
          <IoLogoModelS /> All Models
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink to={"/add-model"}>
            <ImBoxAdd /> Add model
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <header className="sticky top-0 left-0 w-full z-10 bg-linear-to-r from-[#c9f0ff] to-[#c681e770] shadow-md backdrop-blur-md">
      <nav className="navbar min-h-0 container mx-auto py-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <Link to={"/"} className="flex items-center">
            <img className="w-28 md:w-32" src={logoImg} alt="Logo" />
          </Link>
        </div>

        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 gap-8 font-medium">
            {navLinks}
          </ul>
        </div>

        <div className="navbar-end gap-3">
          {user ? (
            <div className="dropdown dropdown-end z-50">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar border border-gray-300"
              >
                <div className="w-9 rounded-full">
                  <img
                    alt="Profile"
                    referrerPolicy="no-referrer"
                    src={user?.photoURL || "https://i.ibb.co.com/Ng9Rhskw/index-2.png"}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-56 p-3 shadow-2xl border border-gray-100"
              >
                <div className="px-2 pb-3 mb-2 border-b border-gray-200">
                  <p className="font-bold text-sm">{user?.displayName}</p>
                  <p className="text-[10px] text-gray-500 truncate">{user?.email}</p>
                </div>

                <li><Link to={"/my-purchase"}>My Model Purchase</Link></li>
                <li><Link to={"/my-models"}>My Models</Link></li>

                <div className="flex items-center justify-between px-2 py-2">
                  <span className="text-xs font-semibold">Dark Mode</span>
                  <input
                    onChange={(e) => handleTheme(e.target.checked)}
                    type="checkbox"
                    checked={theme === "dark"}
                    className="toggle toggle-xs"
                  />
                </div>

                <li className="mt-2">
                  <button
                    onClick={logOut}
                    className="btn btn-sm w-full bg-[#24282c] text-white hover:bg-black border-none"
                  >
                    <IoLogOut /> Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to={"/login"}
              className="btn btn-sm md:btn-md rounded-full px-6 bg-[#24282c] text-white hover:bg-black border-none"
            >
              <IoLogIn className="text-lg" /> Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;