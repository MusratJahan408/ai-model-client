import React, { use } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const AddModel = () => {
    const {user} =use(AuthContext)
    const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      useCase: e.target.useCase.value,
      framework: e.target.framework.value,
      description: e.target.description.value,
      image: e.target.image.value,
      dataset: e.target.dataset.value,
      createdAt: new Date(),
      createdBy : user.email,
      purchased:0

    };
    fetch('http://localhost:3000/models',{
        method:"POST",
        headers:{
            "content-type" : "application/json"
        },
        body:JSON.stringify(formData)
    })
    .then(res=>res.json())
    .then(data=>{
       toast.success("Model added successfully!")
       navigate("/all-models")
        console.log(data)
    }).catch(err=>{
        console.log(err)
        toast.error("Failed to add model.");
    })
  };
  return (
    <div className="card border my-10 md:my-20 border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
      <div className="card-body p-6 relative">
        <h2 className="text-2xl font-bold text-center mb-6">Add New Model</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="label font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter name"
            />
          </div>
          {/* useCase Field */}
          <div>
            <label className="label font-medium">UseCase</label>
            <input
              type="text"
              name="useCase"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter UseCase"
            />
          </div>
          {/* dataSet Field */}
          <div>
            <label className="label font-medium">DataSet</label>
            <input
              type="text"
              name="dataset"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter Dataset"
            />
          </div>

          {/* Category Dropdown */}
          <div>
            <label className="label font-medium">Framework</label>
            <select
              defaultValue={""}
              name="framework"
              required
              className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
            >
              <option value="" disabled>
                Select framework
              </option>
              <option value="Vehicles">TensorFlow</option>
              <option value="Plants">PyTorch</option>
              <option value="Foods">Keras</option>
            </select>
          </div>

          {/* Description Textarea */}
          <div>
            <label className="label font-medium">Description</label>
            <textarea
              name="description"
              required
              rows="3"
              className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[250px]"
              placeholder="Enter description"
            ></textarea>
          </div>

          {/* image URL */}
          <div>
            <label className="label font-medium">Image URL</label>
            <input
              type="url"
              name="image"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full text-white mt-6 rounded-full bg-[#24282c]"
          >
            Add Model
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddModel;
