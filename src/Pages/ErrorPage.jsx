import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const ErrorPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <p className="text-xl font-semibold mb-6">Oops! This AI model doesn’t exist.</p>
        <a href="/" className="btn text-white bg-[#24282c]">
          Go Back Home
        </a>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
