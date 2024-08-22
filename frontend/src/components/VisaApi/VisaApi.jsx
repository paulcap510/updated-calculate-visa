import React, { useState } from 'react';
import './VisaApi.css';
import countryData from '../../assets/country_data_updated.json';
import safetyData from '../../assets/safety_data.json';

const VisaApi = () => {
  const [activeTab, setActiveTab] = useState('Visa Data');
  const [searchTerm, setSearchTerm] = useState('');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setSearchTerm('');
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const getData = () => {
    switch (activeTab) {
      case 'Travel Advisories':
        return safetyData;
      case 'Visa Data':
        return countryData;
      default:
        return [];
    }
  };

  const filteredData = getData().filter((item) =>
    item.country_name
      ? item.country_name.toLowerCase().includes(searchTerm.toLowerCase())
      : false
  );

  return (
    <div className="visa-api-container">
      <h1 className="visa-api-title">Visa Information Center</h1>

      <p className="visa-api-description">
        Welcome to the Visa Information Center. Here you can find up-to-date
        information sourced from the US State Department regarding visa
        requirements and travel advisories for American citizens traveling
        abroad.
      </p>

      <p className="visa-api-note">
        <strong>Note:</strong> Some data may be missing or inconsistent. Please{' '}
        <a href="mailto:paulcapob@gmail.com">email us</a> to report errors or
        missing information.
      </p>

      <div className="visa-api-tabs">
        <button
          className={`visa-api-tab ${
            activeTab === 'Visa Data' ? 'active' : ''
          }`}
          onClick={() => handleTabClick('Visa Data')}
        >
          Visa Data
        </button>
        <button
          className={`visa-api-tab ${
            activeTab === 'Travel Advisories' ? 'active' : ''
          }`}
          onClick={() => handleTabClick('Travel Advisories')}
        >
          Travel Advisories
        </button>
        <button
          className={`visa-api-tab ${activeTab === 'Other' ? 'active' : ''}`}
          onClick={() => handleTabClick('Other')}
          disabled
        >
          Other (Coming Soon)
        </button>
      </div>

      <p className="visa-api-update-date">
        <strong>Last Updated:</strong> March 2024
      </p>

      {activeTab !== 'Other' && (
        <div className="visa-api-search">
          <input
            type="text"
            placeholder="Search by country name..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="visa-api-search-input"
          />
        </div>
      )}

      {activeTab === 'Other' ? (
        <div className="visa-api-coming-soon">
          <p>Stay tuned! More information will be available soon.</p>
        </div>
      ) : (
        <div className="visa-api-data-container">
          <pre className="visa-api-data">
            {JSON.stringify(filteredData, null, 2)}
          </pre>
        </div>
      )}

      <div className="visa-api-endpoints">
        <h2>API Endpoints</h2>
        <p>
          Access the latest data directly through our API endpoints or using
          curl commands:
        </p>
        <div className="visa-api-endpoint">
          <h3>Visa Information:</h3>
          <code>
            https://schengen-visa-backend.onrender.com/api/countrydata
          </code>
          <p>
            <strong>Curl Command:</strong>
          </p>
          <code>
            curl https://schengen-visa-backend.onrender.com/api/countrydata
          </code>
        </div>
        <div className="visa-api-endpoint">
          <h3>Safety Information:</h3>
          <code>https://schengen-visa-backend.onrender.com/api/safetydata</code>
          <p>
            <strong>Curl Command:</strong>
          </p>
          <code>
            curl https://schengen-visa-backend.onrender.com/api/safetydata
          </code>
        </div>
      </div>
    </div>
  );
};

export default VisaApi;
