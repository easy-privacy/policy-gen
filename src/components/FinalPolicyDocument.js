import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import DocumentDisplay from '../policy-generator/components/DocumentDisplay';

const FinalPolicyDocument = () => {
  const location = useLocation();
  const { industry, dataCollection, email, companyName } = location.state || {};

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  if (!industry || !dataCollection || !email || !companyName) {
    return <div>Error: Missing document data</div>;
  }

  return (
    <DocumentDisplay
      industry={industry}
      dataCollection={dataCollection}
      email={email}
      companyName={companyName}
    />
  );
};

export default FinalPolicyDocument;
