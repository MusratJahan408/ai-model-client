import React, { useState } from "react";
import { useLoaderData } from "react-router";
import ModelCard from "../Components/ModelCard";

const ViewModels = () => {
  const data = useLoaderData();
  const [models, setModels] = useState(data)
  const [loading, setLoading] = useState(false)

  const handleSearch =(e)=>{
    e.preventDefault()
    const searchText = e.target.search.value
    console.log(searchText)
    setLoading(true)
    fetch(`http://localhost:3000/search?search=${searchText}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        setModels(data)
      setLoading(false)
    }
    )
  }
  return (
    <div className="container mx-auto mb-10 md:mb-20">
      <h1 className="text-2xl md:text-5xl font-semibold text-center my-10 md:my-20">
        All Models
      </h1>
      <form onSubmit={handleSearch} className="text-end mr-3 md:mr-0">
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
        <button className="btn bg-[#24282c] text-white">{loading ? "Searching...." : "Search"}</button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-3 md:px-0">
        {
        models.map((model) => (
          <ModelCard key={model._id} model={model}></ModelCard>
        ))
        }
      </div>
    </div>
  );
};

export default ViewModels;
