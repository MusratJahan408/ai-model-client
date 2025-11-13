import React from "react";
import img from "../assets/42ntgl4.jpg";

const AboutAIModels = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        About AI Models
      </h2>

      <div className="flex flex-col md:flex-row gap-10 items-center">
        {/* Left Text */}
        <div className="md:w-1/2 space-y-4">
          <p className="text-gray-700 text-lg leading-relaxed">
            AI models are computer programs trained to perform specific tasks by
            learning patterns from data. They are a cornerstone of modern
            machine learning and artificial intelligence.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Neural networks, a type of AI model, mimic the human brain's
            structure to process complex information. These models are widely
            used for tasks like natural language processing, image recognition,
            and recommendation systems.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Use cases include:
            <ul className="list-disc ml-5 mt-2">
              <li>Chatbots and virtual assistants</li>
              <li>Image and facial recognition</li>
              <li>Predictive analytics in business</li>
              <li>Automated content generation</li>
            </ul>
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={img}
            alt="AI Illustration"
            className="rounded-2xl shadow-lg object-cover w-full h-64 md:h-80"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutAIModels;
