import React from 'react';
import { Link } from 'react-router';

const ModelCard = ({model}) => {
    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden mt-10 ">
      <img src={model.image} alt="" className="w-full h-48 p-5 mx-auto" />

      <div className="p-5 pb-7">
        <h3 className="text-xl font-semibold mb-2">{model.name}</h3>

        <div className="flex items-center justify-between mb-4">
          <p className="text-sm font-semibold text-green-600">{model.useCase}</p>
            <p className="text-sm font-medium text-yellow-400">{model.framework}</p>
        </div>

        <Link to="" className="btn w-full bg-[#24282c] text-white font-medium py-2 px-4 rounded-lg transition">
          View Details
        </Link>
      </div>
    </div>
    );
};

export default ModelCard;