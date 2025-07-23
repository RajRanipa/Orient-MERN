import React, { useState, useEffect } from 'react';
import TextInput from '../../components/form/TextInput';
import SubmitButton from '../../components/form/SubmitButton';
import Layout from '../../components/Layout';
import axios from 'axios';
import { useNavigate , useLocation} from 'react-router-dom'; // For redirect after login
import * as config from '../../config/appConfig';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
  const navigate = useNavigate(); // Hook for redirect after login
  const location = useLocation();
  const from = location.state?.from?.pathname || '/orient';

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const { login, isAuthenticated, loading } = useAuth();

  // Prevent infinite loop when the user is already authenticated
  useEffect(() => {
    if (!loading && isAuthenticated) {
      navigate(from, { replace: true });; // User already logged in, redirect to /orient
    }
  }, [loading, isAuthenticated, navigate]); // make sure navigate is included in dependencies

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required.';
    if (!formData.password) newErrors.password = 'Password is required.';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setServerError('');
    setSuccessMessage('');

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await axios.post(`${config.REACT_APP_API_URL}/login`, formData, {
        withCredentials: true, // Assuming you handle cookies for JWT
      });

      console.log(response.data.user);
      setSuccessMessage(response.data.message);

      login(response.data.user); // Set user in context
      
      if (!response.data.user.companyId) {
        navigate('/company');
      }else{
        navigate(from, { replace: true });
      }

    } catch (err) {
      console.error('Login error:', err);
      setServerError(err.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold text-center text-text mb-6">Log In to Your Account</h1>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
        <TextInput
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
        <TextInput
          label="Password"
          type="password"
          name="password"
          autoComplete="current-password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
        />

        {serverError && <p className="text-error text-sm font-medium mt-2">{serverError}</p>}
        {successMessage && <p className="text-success text-sm font-medium mt-2">{successMessage}</p>}

        <SubmitButton text="Log In" isSubmitting={isSubmitting} />

        {/* Add Sign Up option */}
        <p className="text-center text-sm">
          Don't have an account?
          <button
            type="button"
            onClick={() => navigate('/signup')} // Navigate to the signup page
            className="text-primary font-semibold hover:text-primary-dark ml-2"
          >
            Sign Up
          </button>
        </p>
      </form>
    </Layout>
  );
};

export default Login;