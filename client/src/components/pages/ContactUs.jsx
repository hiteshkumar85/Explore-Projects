import React, { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-10 text-white bg-[linear-gradient(to_top,_#060022_5%,__#060028_95%)]  ">
      <h2 className="text-center font-bold text-4xl text-blue-500 mb-6">
          Contact Us
        </h2>
      <div className="max-w-4xl mx-auto bg-gray-700/10 shadow-lg rounded-lg p-7 max-sm:bg-red-400 ">
        <h1 className="text-center text-2xl font-bold  mb-4">
          How Can We Help You?
        </h1>
        <p className="text-center text-white/50 mb-8">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 font-medium">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:border-none focus:outline-none focus:ring-2 focus:ring-blue-500 "
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">
                Your Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="subject"
              placeholder="Enter the subject"
              className="w-full border border-gray-300 rounded-lg p-3 focus:border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Your Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              rows="4"
              className="w-full border border-gray-300 rounded-lg p-3 focus:border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}