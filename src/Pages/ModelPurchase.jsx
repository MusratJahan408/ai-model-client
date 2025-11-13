import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";
import LoadingSpinner from "../Components/LoadingSpinner";
import PurchaseCard from "../Components/PurchaseCard";

const ModelPurchase = () => {
  const { user } = use(AuthContext);
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://ai-model-server-nu.vercel.app/my-purchase?email=${user.email}`,
      {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setModels(data);
        setLoading(false);
      });
  }, [user]);
  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div className="container mx-auto my-10 md:my-20">
      <h1 className="text-2xl  md:text-5xl font-bold text-center mb-10">
        My Purchase Models
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-3 md:px-0">
        {models.map((model) => (
          <PurchaseCard key={model._id} model={model}></PurchaseCard>
        ))}
      </div>
    </div>
  );
};

export default ModelPurchase;
