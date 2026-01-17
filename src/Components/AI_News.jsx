import React from 'react';

const AI_News = () => {
    return (
        <section className="py-20 container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-10 text-[#54595F]">Latest in Generative AI</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[1, 2, 3].map(i => (
        <div key={i} className="rounded-3xl overflow-hidden bg-white shadow-sm border hover:shadow-lg transition-all">
          <div className="h-48 bg-[#c9f0ff] flex items-center justify-center font-bold text-[#24282c]">AI Image {i}</div>
          <div className="p-6">
            <span className="text-xs font-bold text-blue-500 uppercase">Research</span>
            <h3 className="text-xl font-bold mt-2">The Future of Transformer Architecture</h3>
            <p className="text-gray-500 mt-2 text-sm">Understanding how attention mechanisms are evolving in 2026...</p>
          </div>
        </div>
      ))}
    </div>
  </section>
    );
};

export default AI_News;