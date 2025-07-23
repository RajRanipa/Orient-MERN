import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { axiosInstance } from '../../config/axiosInstance';
import Form from '../../components/form/Form';
import TextInput from '../../components/form/TextInput';
import TextArea from '../../components/form/TextArea'
import SelectInput from '../../components/form/SelectInput'
import Checkbox from '../../components/form/TextArea'
import { CreateCompany_schema } from '../../config/formValidation';
import { useAuth } from '../../context/AuthContext';
import ProtectedRoute from '../../components/ProtectedRoute';
import Layout from '../../components/Layout';
import ThemeToggleButton from '../../ERP component/ThemeToggleButton';

const CreateCompany = () => {
    const navigate = useNavigate();
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { isAuthenticated } = useAuth()

    const onSubmit = async (data, reset) => {
        setSuccessMessage('');
        setErrorMessage('');
        try {
            const response = await axiosInstance.post('/create-company', data);
            if (response.data.status) {
                setSuccessMessage(response.data.message);
                toast.success('Company created successfully!');
                reset();
                navigate('/orient');
            } else {
                const message = response.data.message || 'Failed to create company.';
                setErrorMessage(message);
                toast.error(message);
            }
        } catch (error) {
            console.error('Create Company Error:', error);
            const errorMsg = error.response?.data?.message || 'Something went wrong.';
            setErrorMessage(errorMsg);
            toast.error(errorMsg);
        }
    };

    return (
        <ProtectedRoute>
            <Layout>
                <div className="max-w-3xl mx-auto bg-surface w-100">
                    <div className="flex items-center justify-between mb-6">
                        <h1 className="text-3xl font-bold text-center text-text mb-3">Create Your Company</h1>
                        <ThemeToggleButton />
                    </div>
                    <Form
                        schema={CreateCompany_schema}
                        onSubmit={onSubmit}
                        submitLabel="Create Company"
                        onCancel={() => navigate(-1)}
                        successMessage={successMessage}
                        errorMessage={errorMessage}
                    >
                        <TextInput
                            name="name"
                            label="Company Name"
                            placeholder="Enter Your Company Name"
                            required
                        />
                        <TextArea
                            name="address"
                            label="Registered Address"
                            placeholder="Enter full address"
                            required
                        />
                        <div className="w-full flex items-center gap-2">
                            <SelectInput
                                className='flex-grow'
                                name="companyType"
                                label="Company Type"
                                options={[
                                    { value: '', label: 'Select company type' },
                                    { value: 'private_limited', label: 'Private Limited' },
                                    { value: 'llp', label: 'LLP' },
                                    { value: 'opc', label: 'One Person Company' },
                                    { value: 'sole_proprietor', label: 'Sole Proprietorship' },
                                ]}
                                required
                            />
                            <SelectInput
                                className='flex-grow'
                                name="state"
                                label="State"
                                options={[
                                    { value: '', label: 'Select State' },
                                    { value: 'MH', label: 'Maharashtra' },
                                    { value: 'GJ', label: 'Gujarat' },
                                    { value: 'DL', label: 'Delhi' },
                                    { value: 'KA', label: 'Karnataka' },
                                    { value: 'TN', label: 'Tamil Nadu' },
                                    // Add all states here...
                                ]}
                                required
                            />
                        </div>

                        <TextInput
                            name="panNumber"
                            label="PAN Number"
                            placeholder="ABCDE1234F"
                            required
                        />
                        <TextInput
                            name="gstNumber"
                            label="GST Number"
                            placeholder="22AAAAA0000A1Z5"
                            required={false}
                        />
                        <TextInput
                            name="logoUrl"
                            label="Company Logo URL"
                            placeholder="Optional"
                            required={false}
                        />
                    </Form>
                </div>
            </Layout>
        </ProtectedRoute>
    );
};

export default CreateCompany;