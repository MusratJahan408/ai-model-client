import React from "react";
import image from "../assets/iuhi.png";
import { useNavigate } from "react-router";

const GetStarted = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/register");
  };
  return (
    <div
      className="hero container mx-auto mb-10 md:mb-20 rounded-xl"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay rounded-xl"></div>
      <div className="hero-content text-neutral-content text-center py-32">
        <div className="">
          <h1 className="mb-5 text-5xl font-bold">AI-Powered Venture</h1>
          <p className="mb-5 max-w-xl">
            Starting Your AI-Powered Venture: Key Steps and Strategies Donec vel
            pellentesque nisl, molestie tempus ligula. Cras massa turpis,
            pretium nec placerat ornare, sodales ac urna. Sed commodo semper
            fermentum. Phasellus bibendum lorem nisi, et efficitur sapien
            dapibus sed. Suspendisse iaculis erat ut enim tincidunt, vitae
            bibendum lorem mattis.
          </p>
          <button onClick={handleGetStarted} className="btn bg-[#24282c] text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
