import React from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const ModelDetails = () => {
  const data = useLoaderData();
  const navigate = useNavigate()


  const handleDelete = () =>{
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
fetch(`http://localhost:3000/models/${data._id}`,{
        method:"DELETE",
        headers:{
            "content-type" : "application/json"
        },
        
    })
    .then(res=>res.json())
    .then(data=>{
        Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
       navigate("/all-models")
        console.log(data)
    }).catch(err=>{
        console.log(err)
        toast.error("Failed to delete.");
    })

    
  }
});
  }


  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-8">
      <div className="card bg-base-100 shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8">
          <div className="shrink-0 w-full md:w-1/2">
            <img
              src={data.image}
              alt=""
              className="w-full object-cover rounded-xl shadow-md"
            />
          </div>

          <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              {data.name}
            </h1>

            <div className="flex gap-3">
              <div className="badge badge-lg badge-outline border-[#a415e6d8] text-[#a415e6d8] font-medium">
                {data.framework}
              </div>

              <div className="badge badge-lg badge-outline border-[#a415e6d8] text-[#a415e6d8] font-medium">
                Purchased: {data.purchased}
              </div>
            </div>
            <div className="flex gap-3">
              <div className="badge badge-lg badge-outline border-[#a415e6d8] text-[#a415e6d8] font-medium">
                {data.useCase}
              </div>

              <div className="badge badge-lg badge-outline border-[#a415e6d8] text-[#a415e6d8] font-medium">
                {data.dataset}
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              {data.description}
            </p>

            <div className="flex gap-3 mt-6">
              <Link to={`/edit-model/${data._id}`} className="btn rounded-full bg-[#a415e6d8] text-white ">
                Edit Model
              </Link>
              <button className="btn bg-[#c9f0ff] rounded-full">
                Purchased
              </button>
              <button onClick={handleDelete} className="btn btn-outline rounded-full bg-[#24282c] text-white">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelDetails;
