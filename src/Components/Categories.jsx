import React from 'react';

const Categories = () => {
   const categories = [
    { name: "NLP", desc: "Text generation & translation" },
    { name: "Computer Vision", desc: "Object detection & Segments" },
    { name: "Generative AI", desc: "Image & Video creation" },
    { name: "Voice AI", desc: "Speech to text & Cloning" }
  ];

  return (
    <section className="py-20 container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#54595F]">Explore AI Specializations</h2>
        <p className="text-gray-500 mt-4">Choose from the most advanced neural architectures</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4">
        {categories.map((cat, i) => (
          <div key={i} className="p-8 bg-[#c9f0ff] hover:bg-[#b0e8ff] transition-all rounded-3xl border border-blue-100 cursor-pointer group">
            <h3 className="text-xl font-bold text-[#24282c]">{cat.name}</h3>
            <p className="text-sm text-gray-600 mt-2">{cat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;