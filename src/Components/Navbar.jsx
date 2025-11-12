import { Link, NavLink } from "react-router";
import { IoLogoModelS } from "react-icons/io";
import { GoHomeFill } from "react-icons/go";
import { IoLogIn, IoLogOut } from "react-icons/io5";
import { ImBoxAdd } from "react-icons/im";
import logoImg from "../assets/35b5bt.png";
import { use, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";
// import { use, useEffect, useState } from "react";
// import { AuthContext } from "../context/AuthContext";

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
  return (
    <div className="navbar py-0 min-h-0 container mx-auto my-5 ">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to={"/"}>
                <GoHomeFill />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/all-models"}>
                <IoLogoModelS></IoLogoModelS> All Models
              </NavLink>
            </li>
            <li>
              <NavLink to={"/add-model"}>
                <ImBoxAdd /> Add model
              </NavLink>
            </li>
            
          </ul>
        </div>
        <Link to={"/"} className="">
          <img className="w-32" src={logoImg} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 gap-10">
          <li>
            <NavLink to={"/"}>
              <GoHomeFill />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/all-models"}>
              <IoLogoModelS /> All Models
            </NavLink>
          </li>
          <li>
            <NavLink to={"/add-model"}>
              <ImBoxAdd /> Add model
            </NavLink>
          </li>
          
        </ul>
      </div>
      <div className="navbar-end gap-3">
        {user ? (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-9 border-2 border-gray-300 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  referrerPolicy="no-referrer"
                  src={
                    user.photoURL || "https://i.ibb.co.com/Ng9Rhskw/index-2.png"
                  }
                />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              <div className=" pb-3 border-b border-b-gray-200">
                <li className="text-sm font-bold">{user.displayName}</li>
                <li className="text-xs">{user.email}</li>
              </div>

              <li className="mt-3">
                <Link to={"/model-purchase"}>MY Model Purchase</Link>
              </li>

              <li>
                <Link to={"/my-models"}>My Models</Link>
              </li>

              <input
                onChange={(e) => handleTheme(e.target.checked)}
                type="checkbox"
                defaultChecked={localStorage.getItem("theme") === "dark"}
                className="toggle my-3 mx-2"
              />
              <li>
                <button
                  onClick={logOut}
                  className="btn btn-xs text-left bg-[#24282c] text-white"
                >
                  <IoLogOut /> Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            to={"/login"}
            className="btn rounded-full border-gray-300  btn-lg bg-[#24282c] text-white"
          >
            <IoLogIn /> Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
