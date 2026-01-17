import React from 'react';

const AI_FAQ = () => {
    return (
       <section className="py-20 container mx-auto px-4">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-[#54595F]">AI Model FAQs</h2>
      <div className="join join-vertical w-full bg-white dark:bg-slate-800 rounded-2xl border border-gray-200">
        <div className="collapse collapse-arrow join-item border-b">
          <input type="radio" name="faq-accordion" defaultChecked /> 
          <div className="collapse-title text-lg font-bold">Can I use these models for commercial apps?</div>
          <div className="collapse-content text-gray-500"><p>Yes, most models come with commercial licenses. Check individual model metadata for details.</p></div>
        </div>
        <div className="collapse collapse-arrow join-item">
          <input type="radio" name="faq-accordion" /> 
          <div className="collapse-title text-lg font-bold">What is the API rate limit?</div>
          <div className="collapse-content text-gray-500"><p>Our free tier allows 1,000 requests/month, while Pro users enjoy unlimited API access.</p></div>
        </div>
      </div>
    </div>
  </section>
    );
};

export default AI_FAQ;