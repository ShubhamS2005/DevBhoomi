import React, { useState } from 'react';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-white flex justify-center items-center">
      <div className="bg-white shadow-2xl rounded-lg w-full max-w-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Feedback Form</h2>
        <form onSubmit={handleSubmit} className="space-y-6 ">
          <div>
            <label htmlFor="name" className="block w-[29vw] text-lg font-semibold text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-lg  focus:outline-none transition duration-300"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-semibold text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border rounded-lg  focus:outline-none transition duration-300"
              placeholder="Enter your email"
              required
            />
          </div>

         

          <div>
            <label htmlFor="comments" className="block text-lg font-semibold text-gray-700">Comments</label>
            <textarea
              name="comments"
              id="comments"
              value={formData.comments}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-black focus:outline-none transition duration-300"
              placeholder="Write your feedback"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-stone-950 text-white font-bold py-3 rounded-lg hover:bg-indigo-800 transition duration-200"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
