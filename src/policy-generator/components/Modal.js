import React, { useState } from 'react';

function Modal({ isOpen, onClose, onSubmit }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError('');
  };

  const validateEmail = (email) => {
    const domain = email.split('@')[1];
    const isPublicDomain = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com'].includes(domain);
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValidEmail) return 'Please enter a valid email address.';
    if (isPublicDomain) return 'Please use your work email address.';
    return '';
  };

  const handleSubmit = () => {
    const validationError = validateEmail(email);
    if (validationError) {
      setError(validationError);
    } else {
      onSubmit(email);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
        <h2 className="text-2xl mb-4">Please provide us your work email and we will email the document to you</h2>
        <input
          type="text"
          className="border border-gray-300 p-2 w-full rounded mb-4"
          placeholder="Work email"
          value={email}
          onChange={handleEmailChange}
        />
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="flex justify-end">
          <button
            className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={handleSubmit}
          >
            Show me the document
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;