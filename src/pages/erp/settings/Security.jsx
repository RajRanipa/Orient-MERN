
import React, { useState } from 'react';

const Security = () => {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    enable2FA: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Submit security changes to backend
    console.log('Security settings submitted:', formData);
  };

  return (
    <div className="max-w-xl space-y-6">
      <h2 className="text-xl font-semibold text-text-dark">Security Settings</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-text-gray" htmlFor="currentPassword">
            Current Password
          </label>
          <input
            id="currentPassword"
            name="currentPassword"
            type="password"
            value={formData.currentPassword}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-border-color bg-input-bg-color text-input-text-color px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-input-outline-color"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-text-gray" htmlFor="newPassword">
            New Password
          </label>
          <input
            id="newPassword"
            name="newPassword"
            type="password"
            value={formData.newPassword}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-border-color bg-input-bg-color text-input-text-color px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-input-outline-color"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-text-gray" htmlFor="confirmPassword">
            Confirm New Password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-border-color bg-input-bg-color text-input-text-color px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-input-outline-color"
          />
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="enable2FA" className="text-text-gray">
            Enable Two-Factor Authentication (2FA)
          </label>
          <input
            type="checkbox"
            id="enable2FA"
            name="enable2FA"
            checked={formData.enable2FA}
            onChange={handleChange}
            className="w-5 h-5"
          />
        </div>

        <div className="flex justify-end gap-3">
          <button
            type="button"
            className="px-4 py-2 rounded-md border text-text-gray border-border-color hover:bg-surface"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded-md bg-primary-10 text-text-onPrimary-10 hover:bg-primary-10-hover"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Security;