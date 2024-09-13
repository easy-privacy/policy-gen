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
        <option value="Restaurants">Restaurants</option>
        <option value="Hotel">Hotel</option>
        <option value="Hospitals_and_Healthcare">Hospitals and Healthcare</option>
        <option value="Educational_Institutions">Educational Institutions</option>
        <option value="Ecommerce">Ecommerce</option>
        <option value="Charity">Charity</option>
        <option value="Social_Media">Social Media</option>
        <option value="Tech_Manufacturing">Tech Manufacturing</option>
        <option value="Manufacturing">Manufacturing</option>
        <option value="Transportation_and_Warehousing">Transportation and Warehousing</option>
      </select>
    </div>
  );
}

export default IndustrySelect;
