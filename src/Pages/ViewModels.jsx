import React, { useState } from "react";
import { useLoaderData } from "react-router";
import ModelCard from "../Components/ModelCard";
import LoadingSpinner from "../Components/LoadingSpinner";

const ViewModels = () => {
  const data = useLoaderData();
  const [models, setModels] = useState(data);
  const [loading, setLoading] = useState(false);
  const [selectedFramework, setSelectedFramework] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    setLoading(true);
    fetch(`https://ai-model-server-nu.vercel.app/search?search=${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setModels(data);
        setLoading(false);
      });
  };

  const handleFrameworkChange = (e) => {
    const framework = e.target.value;
    setSelectedFramework(framework);
    setLoading(true);
    fetch(`https://ai-model-server-nu.vercel.app/filter?framework=${framework}`)
      .then((res) => res.json())
      .then((data) => {
        setModels(data);
        setLoading(false);
      });
  };

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div className="container mx-auto mb-10 md:mb-20">
      <h1 className="text-2xl md:text-5xl font-semibold text-center my-10 md:my-20">
        All Models
      </h1>

      {/* framework filter  */}
      <div className="text-end mb-10 px-5">
        <label className="label font-medium mr-2"></label>
        <select
          value={selectedFramework}
          onChange={handleFrameworkChange}
          className="select w-52 rounded-full focus:border-0 focus:outline-gray-200"
        >
          <option value="">All</option>
          <option value="TensorFlow">TensorFlow</option>
          <option value="PyTorch">PyTorch</option>
          <option value="Keras">Keras</option>
        </select>
      </div>
      <form onSubmit={handleSearch} className="text-end mr-3 md:mr-0 mt-10">
        <label className="input rounded-full mr-3">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" name="search" required placeholder="Search" />
        </label>
        <button className="btn bg-[#24282c] text-white">search</button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-3 md:px-0">
        {models.map((model) => (
          <ModelCard key={model._id} model={model}></ModelCard>
        ))}
      </div>
    </div>
  );
};

export default ViewModels;
