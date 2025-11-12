import React from 'react';
import { useLoaderData } from 'react-router';
import ModelCard from '../Components/ModelCard';


const ViewModels = () => {
    const data = useLoaderData()
    return (
        <div className='container mx-auto mb-10 md:mb-20'>
           <h1 className='text-2xl md:text-5xl font-semibold text-center my-10 md:my-20'>All Models</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 px-3 md:px-0'>
                {
                data.map(model => <ModelCard key={model._id} model={model}></ModelCard> )
                }
            </div>
        </div>
    );
};

export default ViewModels;