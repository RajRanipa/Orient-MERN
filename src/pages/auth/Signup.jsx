import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import TextInput from '../../components/form/TextInput';
import SubmitButton from '../../components/form/SubmitButton';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    console.log("formData changed: ", formData);
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');
    // Prevent submission if fields are empty
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.password.trim()) {
      setErrorMsg('Please fill in all required fields.');
      return;
    }

    setLoading(true);
    try {
      console.log("Form Data:", formData);
      const res = await axios.post(`http://localhost:orient/signup`, formData, {
        withCredentials: true
      });
      setSuccessMsg(res.data.message || 'Signup successful!');
      setFormData({ fullName: '', email: '', password: '' });
      navigate('/login');
    } catch (error) {
      setErrorMsg(
        error?.response?.data?.message ||
        'Something went wrong. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout title="">
      <div className="max-w-md mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-center text-text">Create an Account</h1>

        {successMsg && <p className="text-success text-center">{successMsg}</p>}
        {errorMsg && <p className="text-error text-center">{errorMsg}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <TextInput
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
          <TextInput
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
          <TextInput
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create a password"
            required
          />

          <SubmitButton label="Sign Up" loading={loading} />
        </form>

        {/* Button to go back to the login page */}
        <p className="text-center text-sm">
          Already have an account? 
          <button
            type="button"
            onClick={() => navigate('/login')} // Navigate to the login page
            className="text-primary font-semibold hover:text-primary-dark ml-2"
          >
            Back to Login
          </button>
        </p>
      </div>
    </Layout>
  );
};

export default Signup;