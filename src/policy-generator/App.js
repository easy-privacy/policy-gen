import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import IndustrySelect from './components/IndustrySelect';
import DataCollectionItem from './components/DataCollectionItem';
import Modal from './components/Modal';
import { initialData, dropdownValues } from './initialData';
import './styles.css';

function App() {
  const [isDocumentShown, showDocument] = useState(false);
  const [industry, setIndustry] = useState('');
  const [dataCollection, setDataCollection] = useState([{ data: '', purpose: '' }]);
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const history = useHistory();

  const handleIndustryChange = (event) => {
    const selectedIndustry = event.target.value;
    setIndustry(selectedIndustry);
    if (selectedIndustry) {
      setDataCollection(initialData[selectedIndustry] || []);
    }
    setErrorMessage('');
  };

  const handleDataChange = (index, key, value) => {
    const newDataCollection = [...dataCollection];
    newDataCollection[index][key] = value;
    setDataCollection(newDataCollection);
    setErrorMessage('');
  };

  const handleAddDataField = () => {
    setDataCollection([...dataCollection, { data: '', purpose: '' }]);
    setErrorMessage('');
  };

  const handleRemoveDataField = (index) => {
    if (dataCollection.length > 1) {
      const newDataCollection = dataCollection.filter((_, i) => i !== index);
      setDataCollection(newDataCollection);
      setErrorMessage('');
    } else {
      setErrorMessage('At least one data point is required.');
    }
  };

  const handleGenerateDocument = () => {
    if (dataCollection.some(item => !item.data || !item.purpose) || !companyName) {
      setErrorMessage('All fields must be filled before generating the document.');
      return;
    }
    setIsModalOpen(true);
  };

  const handleModalSubmit = (email) => {
    setEmail(email);
    setIsModalOpen(false);
    history.push('/final-policy-document', {
      industry,
      dataCollection,
      email,
      companyName,
    });
  };

  if (isDocumentShown) {
    return <Redirect to="/final-policy-document" />;
  } else {
    return (
      <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-6 text-center">DPDP Act Privacy Notice Generator</h1>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="companyName">
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <IndustrySelect onChange={handleIndustryChange} />
          {industry && (
            <div id="dataCollectionSection">
              <div id="dataCollectionList">
                {dataCollection.map((item, index) => (
                  <DataCollectionItem
                    key={index}
                    item={item}
                    index={index}
                    onChange={handleDataChange}
                    onRemove={handleRemoveDataField}
                  />
                ))}
              </div>
              {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
              <button
                onClick={handleAddDataField}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
              >
                +
              </button>
              <div className="mt-4">
                <button
                  onClick={handleGenerateDocument}
                  className="p-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Generate Policy Document
                </button>
              </div>
            </div>
          )}
        </div>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleModalSubmit} />
      </div>
    );
  }
}

export default App;
