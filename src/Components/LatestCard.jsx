import React from 'react';

const LatestCard = ({model}) => {
    return (
        <div className="p-5  rounded-2xl shadow-md bg-[#c681e770]">
              <h3 className="text-xl font-semibold">{model.name}</h3>
              <p className="badge badge-sm mt-2 badge-outline border-[#a415e6d8] text-[#a415e6d8] font-medium">{model.framework}</p>
              <p className="text-gray-700 mt-2 line-clamp-3">
                {model.description}
              </p>
            </div>
    );
};

export default LatestCard;