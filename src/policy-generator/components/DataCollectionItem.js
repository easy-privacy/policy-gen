import React from 'react';

function DataCollectionItem({ item, index, onChange, onRemove }) {
  return (
    <div className="data-collection-item flex mb-4">
      <textarea
        value={item.data}
        onChange={(e) => onChange(index, 'data', e.target.value)}
        className="data-input rounded-md flex-1 mr-2"
        placeholder="Enter data"
        rows="2"
      />
      <textarea
        value={item.purpose}
        onChange={(e) => onChange(index, 'purpose', e.target.value)}
        className="purpose-input rounded-md flex-1 mr-2"
        placeholder="Enter purpose"
        rows="2"
      />
      <button
        className="remove-btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => onRemove(index)}
      >
        X
      </button>
    </div>
  );
}

export default DataCollectionItem;
