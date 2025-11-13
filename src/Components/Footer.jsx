import React from "react";
import logo from "../assets/35b5bt.png";
import githubImg from "../assets/pngimg.com - github_PNG58.png";
import twitter from "../assets/twitter-x-logo-png_seeklogo-492396.png";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-linear-to-r from-[#c9f0ff] to-[#c681e770]">
      <div className="container mx-auto py-10 md:py-20 px-7 md:px-0">
        <div className="flex justify-between items-center">
          <img className="w-32" src={logo} alt="" />
          <div className="flex items-center gap-3">
            <Link
              to="https://github.com/MusratJahan408/ai-model-client"
              target="_blank"
            >
              <img className="w-16" src={githubImg} alt="" />
            </Link>
            <Link
              to="https://x.com/home"
              target="_blank"
            >
              <img className="w-12" src={twitter} alt="" />
            </Link>
          </div>
        </div>
        <hr className="text-[#54595F] my-5 md:my-10" />
        <p className="text-[#54595F] text-bold text-xl text-center">
          Copyright ©2025 Gipo. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
