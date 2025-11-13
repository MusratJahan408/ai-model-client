import React from 'react';
import { Link } from 'react-router';

const PurchaseCard = ({model}) => {
    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden mt-10 ">
      <img src={model.image} alt="" className="w-full h-48 p-5 mx-auto" />

      <div className="p-5 pb-7">
        <h3 className="text-xl font-semibold dark:text-black mb-2">{model.name}</h3>
        <h3 className=" font-semibold mb-3 text-gray-500">{model.createdBy}</h3>

        <div className="flex items-center justify-between mb-4">
          <p className="text-sm font-semibold px-2 border rounded-full border-[#10b5f7] opacity-90 text-[#10b5f7]">{model.useCase}</p>
          <p className="text-sm font-semibold px-2 border rounded-full border-yellow-500 opacity-90 text-yellow-500">{model.dataset}</p>
            <p className="text-sm font-semibold px-2 border rounded-full border-[#a415e6d8] text-[#a415e6d8]">{model.framework}</p>
        </div>

        <Link to={`/models-details/${model.modelId}`} className="btn w-full bg-[#24282c] text-white font-medium py-2 px-4 rounded-lg transition">
          View Details
        </Link>
      </div>
    </div>
    );
};

export default PurchaseCard;