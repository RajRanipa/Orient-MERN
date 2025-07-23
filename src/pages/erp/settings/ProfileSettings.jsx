import { React, useState } from 'react';
import * as yup from 'yup';
import { useAuth } from '../../../context/AuthContext';
import TextInput from '../../../components/form/TextInput';
import Form from '../../../components/form/Form';
import { Profile_schema } from '../../../config/formValidation';


const ProfileSettings = () => {
  const { user } = useAuth();
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const onSubmit = async (data) => {
    setSuccessMessage('');
    setErrorMessage('');
    try {
      // Make actual API call
      // const response = await axios.post('http://localhost:orient/send-contact-email', data);

      // Assuming a successful response (adjust based on your API response structure)
      const msg = null ? response.data.message : "changes successfuly completed ";
      setSuccessMessage(msg); // Use response.data.message for success
      reset();
    } catch (error) {
      console.error('Submission error:', error);

      // Ensure you're accessing the error message from the error response
      // const errorMsg = error.response?.data?.message || 'There was an error submitting the form. Please try again.';
      //   setErrorMessage(errorMsg);
    }
  };

  return (
    <div className="max-w-xl space-y-6">
      <h2 className="text-xl font-semibold text-lightBlack">My Profile</h2>
      <Form
        schema={Profile_schema}
        onSubmit={onSubmit}
        successMessage={successMessage}
        errorMessage={errorMessage}
        submitLabel="Save Changes"
      >
        <TextInput
          name="fullName"
          label="Full Name"
          placeholder="Enter your full name"
          required
        />

        <TextInput
          label="Email"
          name="email"
          placeholder="Enter your email"
          required
        />
      </Form>
    </div>
  );
};

export default ProfileSettings;