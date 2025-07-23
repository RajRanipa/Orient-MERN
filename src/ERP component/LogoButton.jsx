import React, { useState } from 'react';
import Dialog from '../components/Dialog'

const LogInOut = ({ variant = 'header', className = '' }) => {
    const [logoSrc, setLogoSrc] = useState(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const uploadLogo = () => {
        console.log("hit")
        setIsDialogOpen(true);
        console.log("isDialogOpen :- ", isDialogOpen)
    };

    const handleLogoChange = (newLogo) => {
        setLogoSrc(newLogo); // newLogo should be a URL or base64 string
        setIsDialogOpen(false);
    };

    const content = (
        <div
            className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center cursor-pointer bg-gray-50 hover:bg-gray-100"
            onClick={() => document.getElementById('logo-upload')?.click()}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
                e.preventDefault();
                const file = e.dataTransfer.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                        handleLogoChange(reader.result);
                    };
                    reader.readAsDataURL(file);
                }
            }}
        >
            <input
                type="file"
                accept=".jpg, .jpeg, .png"
                className="hidden"
                id="logo-upload"
                onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                        const reader = new FileReader();
                        reader.onloadend = () => {
                            handleLogoChange(reader.result);
                        };
                        reader.readAsDataURL(file);
                    }
                }}
            />
            {logoSrc ? (
                <img src={logoSrc} alt="Uploaded logo" className="mx-auto h-24 object-contain" />
            ) : (
                <p className="text-gray-500">Click or drag & drop your logo here</p>
            )}
        </div>
    );

    return (
        <div className='h-full p-2'>
            <button
                onClick={uploadLogo}
                className={`flex items-center gap-2 h-full rounded-md ${className}`}
                aria-label="Upload Logo"
            >
                {logoSrc ? (
                    <img src={logoSrc} alt="Company Logo" className="h-full w-auto object-contain" />
                ) : (
                    <h1 className="text-lg font-semibold text-lightBlack">YourLogo</h1>
                )}

            </button>
            {isDialogOpen && (
                <Dialog
                    onClose={() => setIsDialogOpen(false)}
                    onLogoChange={handleLogoChange}
                    isOpen={isDialogOpen}
                    title="Upload Your Company Logo"
                    nature="formSubmition"
                    message={content}
                />
            )}
        </div>
    );
};

export default LogInOut;