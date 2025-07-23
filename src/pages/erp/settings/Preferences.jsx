import React, { useContext, useEffect, useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import SelectInput from '../../../components/form/SelectInput';
import Checkbox from '../../../components/form/Checkbox';
import { Preferences_schema } from '../../../config/formValidation'
import Form from '../../../components/form/Form';

const Preferences = () => {
  const { preferences, updatePreferences } = useAuth();
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const defaultValues = {
    theme: preferences?.theme,
    language: preferences?.language,
    emailUpdates: preferences?.notifications?.emailUpdates,
    inAppAlerts: preferences?.notifications?.inAppAlerts,
  };

  const onSubmit = async (data, reset) => {
    const value = {
      theme: data.theme,
      language: data.language,
      notifications: {
        emailUpdates: data.emailUpdates,
        inAppAlerts: data.inAppAlerts || false,
      }
    }
    
    console.log(value)
    setSuccessMessage('');
    setErrorMessage('');
    try {
      const response = await updatePreferences(value, true);
      if (response.status) {
        setSuccessMessage(response.data.message);
        reset();
      }
    } catch (error) {
      console.error('Submission error:', error);
      const errorMsg = error.response?.data?.message || 'There was an error submitting the form. Please try again.';
      setErrorMessage(errorMsg);
    }
  };

  return (
    <div className="max-w-xl space-y-6">
      <h2 className="text-xl font-semibold text-lightBlack">Preferences</h2>
      <Form
        schema={Preferences_schema}
        onSubmit={onSubmit}
        successMessage={successMessage}
        errorMessage={errorMessage}
        submitLabel="Change Preferences"
        defaultValues={defaultValues}
      >

        <SelectInput
          label="Theme"
          name="theme"
          required
          options={[
            { value: 'light', label: 'Light' },
            { value: 'dark', label: 'Dark' },
            { value: 'system', label: 'System Default' }
          ]}
        />
        <SelectInput
          label="Language"
          name="language"
          required
          options={[{ value: '', label: 'Select a language' },
          { value: 'en', label: 'English' },
          { value: 'hi', label: 'Hindi' },
          { value: 'fr', label: 'French' },]}
        />
        <h2 className="text-xl font-semibold text-lightBlack">Notifications</h2>
        <Checkbox
          name="emailUpdates"
          label="Receive Email Updates"
          required
        />
        <Checkbox
          name="inAppAlerts"
          label="Enable In-App Alerts"
        />
      </Form>
    </div>
  );
};

export default Preferences;