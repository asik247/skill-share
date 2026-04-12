import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center p-5">
      
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Contact Me
        </h1>

        {/* Info Section */}
        <div className="space-y-4 text-center mb-6">
          <p className="text-gray-600">
            📞 Phone: <span className="font-semibold">01919195892</span>
          </p>
          <p className="text-gray-600">
            📧 Email: <span className="font-semibold">mdasikur5893@gmail.com</span>
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
};

export default Contact;