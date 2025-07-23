import React, { useState } from 'react';
import axios from 'axios';
import TextInput from './TextInput';
import TextArea from './TextArea';
import SelectInput from './SelectInput';
import Checkbox from './Checkbox';
import Form from './Form';
import { Contact_schema } from '../../config/formValidation';



const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false); // i need to kee this line ?
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (data, reset) => {
    setSuccessMessage('');
    setErrorMessage('');
    try {
      // Make actual API call
      const response = await axios.post('http://localhost:orient/send-contact-email', data);
      
      // Assuming a successful response (adjust based on your API response structure)
      setSuccessMessage(response.data.message); // Use response.data.message for success
      
      reset();

    } catch (error) {
      console.error('Submission error:', error);

      // Ensure you're accessing the error message from the error response
      const errorMsg = error.response?.data?.message || 'There was an error submitting the form. Please try again.';
      
      setErrorMessage(errorMsg);
    }
  };

  return (
    <>
      <Form
        schema={Contact_schema}
        onSubmit={onSubmit}
        successMessage={successMessage}
        errorMessage={errorMessage}
        submitLabel="submit"
      >
        <TextInput
          label="Full Name"
          name="fullName"
          placeholder="Enter your full name"
          required
        />
        <TextInput
          label="Email"
          name="email"
          placeholder="Enter your email"
          required
        />
        <TextInput
          label="Phone Number"
          name="phoneNumber"
          placeholder="Enter your phone number"
          required
        />
        <SelectInput
          label="Topic"
          name="topic"
          required
          options={[
            { value: '', label: 'Select a topic' },
            { value: 'feedback', label: 'Feedback' },
            { value: 'support', label: 'Support' },
            { value: 'inquiry', label: 'General Inquiry' },
          ]}
        />
        <TextArea
          label="Message"
          name="message"
          placeholder="Type your message here..."
          required
        />
        <Checkbox
          name="agree"
          label="I agree to the terms and conditions"
          required
        />
      </Form>
    </>
  );
};

export default ContactForm;

