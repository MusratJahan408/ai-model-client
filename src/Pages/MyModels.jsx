import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import LoadingSpinner from '../Components/LoadingSpinner';
import ModelCard from '../Components/ModelCard';

const MyModels = () => {
    const {user} = use(AuthContext)
    const [models,setModels] = useState([])
    const [loading,setLoading] =useState(true)

    useEffect(()=>{
fetch(`http://localhost:3000/my-models?email=${user.email}`,{
    headers:{
        authorization :`Bearer ${user.accessToken}`
    }
})
.then(res=>res.json())
.then(data=>{
    setModels(data)
    setLoading(false)
})
    },[])
    if(loading){
        return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    models.map(model=><ModelCard key={model._id} model={model}></ModelCard>)
                }
            </div>
        </div>
    );
};

export default MyModels;