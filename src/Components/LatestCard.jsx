import React from 'react';

const LatestCard = ({model}) => {
    return (
        <div className="p-5  rounded-2xl shadow-md bg-[#c681e770]">
              <h3 className="text-xl font-semibold">{model.name}</h3>
              <p className="badge badge-sm mt-2 badge-outline border-[#a415e6d8] dark:border-[#c9f0ff] text-[#a415e6d8] dark:text-[#c9f0ff] font-medium">{model.framework}</p>
              <p className="text-gray-700 mt-2 line-clamp-3 dark:text-black">
                {model.description}
              </p>
            </div>
    );
};

export default LatestCard;