import React from 'react';

const Newsletter = () => {
    return (
       <section className="py-16 container mx-auto px-4">
    <div className="bg-[#c9f0ff] rounded-[3rem] p-10 md:p-20 flex flex-col items-center text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-[#24282c] mb-4">Join our AI community</h2>
      <p className="text-gray-700 max-w-lg mb-8">Get weekly updates on new pre-trained models and AI research directly to your inbox.</p>
      <div className="flex w-full max-w-md gap-2">
        <input type="email" placeholder="ai-expert@example.com" className="input rounded-full w-full border-none shadow-sm" />
        <button className="btn bg-[#24282c] text-white rounded-full px-8">Join</button>
      </div>
    </div>
  </section>
    );
};

export default Newsletter;