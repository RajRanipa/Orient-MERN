import * as yup from 'yup';

export const Contact_schema = yup.object().shape({
    fullName: yup
        .string()
        .matches(/^[A-Za-z ]*$/, "Full name should not contain numbers") // Allow empty space for validation
        .required('Full name is required'),

    email: yup.string().email('Invalid email').required('Email is required'),

    phoneNumber: yup
        .string()
        .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
        .required('Phone number is required'),

    message: yup.string().required('Message is required'),

    topic: yup.string().required('Topic is required'),

    agree: yup.bool().oneOf([true], 'You must agree to continue'),
});

export const Preferences_schema = yup.object().shape({
  theme: yup.string().required('theme is required'),
  
  language: yup.string().required('language is required'),
  
  emailUpdates: yup.boolean(),
  
  inAppAlerts: yup.boolean(),
});

export const Profile_schema = yup.object().shape({
  fullName: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Full name should not contain numbers") // Allow empty space for validation
    .required('Full name is required'),
  
    email: yup.string().email('Invalid email').required('Email is required'),
});

export const CreateCompany_schema = yup.object().shape({
  name: yup
    .string()
    .required('Company name is required')
    .max(100, 'Company name cannot exceed 100 characters'),

  address: yup
    .string()
    .max(255, 'Address cannot exceed 255 characters'),

  taxId: yup
    .string()
    .max(50, 'Tax ID cannot exceed 50 characters'),

  registrationNumber: yup
    .string()
    .max(50, 'Registration number cannot exceed 50 characters'),

  logoUrl: yup
    .string()
    .url('Must be a valid URL')
    .nullable()
    .notRequired(),
});