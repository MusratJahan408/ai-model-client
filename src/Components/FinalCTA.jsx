import React from 'react';

const FinalCTA = () => {
    return (
       <section className="py-24 text-center container mx-auto border-t">
    <h2 className="text-5xl font-black text-[#54595F] mb-6">Ready to Scale your AI?</h2>
    <p className="text-xl text-gray-500 mb-10">Start building with production-ready models today.</p>
    <div className="flex flex-col md:flex-row gap-4 justify-center">
      <button className="btn btn-lg bg-[#24282c] text-white rounded-full px-12">Browse All Models</button>
      <button className="btn btn-lg btn-outline rounded-full px-12">Documentation</button>
    </div>
  </section>
    );
};

export default FinalCTA;