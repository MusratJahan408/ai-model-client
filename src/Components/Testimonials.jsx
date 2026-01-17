import React from 'react';

const Testimonials = () => {
    return (
       <section className="py-20 bg-linear-to-r from-[#c9f0ff] to-[#c681e770] rounded-3xl container mx-auto my-10">
    <h2 className="text-3xl font-bold text-center mb-12 text-[#54595F] dark:text-white">Trusted by AI Engineers</h2>
    <div className="grid md:grid-cols-2 gap-8 px-6">
      <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border-l-4 border-[#c9f0ff]">
        <p className="italic text-gray-600 dark:text-gray-400">"The pre-trained LLMs on this platform saved us months of research and compute costs."</p>
        <h4 className="mt-4 font-bold text-[#24282c] dark:text-white">- Dr. Ariful Islam, AI Researcher</h4>
      </div>
      <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border-l-4 border-[#c9f0ff]">
        <p className="italic text-gray-600 dark:text-gray-400">"Seamless integration. The PyTorch models are optimized for production performance."</p>
        <h4 className="mt-4 font-bold text-[#24282c] dark:text-white">- James Watt, CTO at TechAI</h4>
      </div>
    </div>
  </section>
    );
};

export default Testimonials;