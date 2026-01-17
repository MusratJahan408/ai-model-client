import React from "react";

const StatsSection = () => {
  return (
    <section className="py-16 bg-[#c681e770] text-white text-center mb-10 md:">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-4xl font-bold">1.2k+</h2>
          <p>AI Models</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">50M+</h2>
          <p>API Calls</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">15k+</h2>
          <p>Developers</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">99%</h2>
          <p>Accuracy Rate</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
