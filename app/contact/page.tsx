import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Have questions about the <span className="font-semibold">Abelle Group Loan App</span>? 
          We’d love to hear from you. Fill out the form below or reach us directly through our contact details.
        </p>

        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Type your message..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-200"
          >
            Send Message
          </button>
        </form>

        {/* Contact Details */}
        <div className="mt-10 border-t pt-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
            Our Contact Details
          </h2>
          <p className="text-gray-600 text-center">
            <span className="font-semibold">Email:</span> support@abellegroup.com
          </p>
          <p className="text-gray-600 text-center">
            <span className="font-semibold">Phone:</span> +254 710 706 402
          </p>
          <p className="text-gray-600 text-center">
            <span className="font-semibold">Address:</span> Nairobi, Kenya
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
