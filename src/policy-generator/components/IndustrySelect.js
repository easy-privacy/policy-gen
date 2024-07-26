import React from 'react';

function IndustrySelect({ onChange }) {
  return (
    <div className="mb-6">
      <label htmlFor="industrySelect" className="block mb-2 font-semibold">Pick an industry:</label>
      <select
        id="industrySelect"
        onChange={onChange}
        className="w-full rounded-md p-2 border border-gray-300"
      >
        <option value="">Select industry</option>
        <option value="hospitality">Hospitality</option>
        {/* Add more industries here as needed */}
      </select>
    </div>
  );
}

export default IndustrySelect;
