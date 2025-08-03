import React, { useState } from "react";

function CallbackForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    serviceType: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Callback request submitted!");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start pt-16 px-2">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-2 mt-8">
          Request for <span className="text-yellow-600">Callback</span>
        </h1>
        <p className="text-lg text-center text-gray-700 mb-8 max-w-2xl mx-auto">
          Schedule a callback from our experts. Fill out the form below and we'll call you back within 24 hours.
        </p>
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Service Address *</label>
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Enter service address"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Service Type *</label>
            <select
              name="serviceType"
              value={form.serviceType}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <option value="">Select service type</option>
              <option value="Construction">Construction</option>
              <option value="Electrical">Electrical</option>
              <option value="Plumbing">Plumbing</option>
              <option value="Painting">Painting</option>
              <option value="Renovation">Renovation</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white font-bold text-lg shadow transition-all duration-300"
          >
            Submit Request
          </button>
        </form>
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 text-gray-800 border border-gray-100">
          <h2 className="text-xl font-bold mb-3">What to Expect:</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Callback within 24 hours</li>
            <li>Expert consultation over the phone</li>
            <li>Licensed and insured professionals</li>
            <li>No obligation to proceed</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CallbackForm;
