import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    photoURL: '',
    acceptTerms: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-base-200 py-10 lg:py-20 flex justify-center items-center px-5 lg:px-0">
      <div className="bg-white p-5 lg:p-8 rounded-xl shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center mb-6 font-rancho">Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="input input-bordered w-full mt-2"
              placeholder="Enter your full name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="input input-bordered w-full mt-2"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-semibold">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="input input-bordered w-full mt-2"
              placeholder="Enter your password"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="photoURL" className="block text-sm font-semibold">Profile Picture URL</label>
            <input
              type="url"
              id="photoURL"
              name="photoURL"
              value={formData.photoURL}
              onChange={handleInputChange}
              className="input input-bordered w-full mt-2"
              placeholder="Enter your photo URL"
            />
          </div>

          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="acceptTerms"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleInputChange}
              className="checkbox checkbox-primary w-4 h-4"
            />
            <label htmlFor="acceptTerms" className="ml-2 text-sm">I accept the <span className="text-blue-500">Terms & Conditions</span></label>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full mt-4"
            disabled={!formData.acceptTerms}
          >
            Sign Up
          </button>

          <div className="mt-4 text-center">
            <p>Already have an account? <a href="/login" className="text-blue-500">Login here</a></p>
          </div>
        </form>

        <div className="mt-6 text-center">
          <button className="btn btn-outline w-full flex justify-center items-center gap-2">
            <FaGoogle />
            Sign Up with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
