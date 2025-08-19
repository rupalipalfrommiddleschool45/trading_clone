import React, { useState } from 'react';

const Brokerage = () => {
  const [activeTab, setActiveTab] = useState('equity');

  const handleTabChange = (tab) => setActiveTab(tab);

  const renderTableRows = (rows) =>
    rows.map(([label, ...cols], idx) => (
      <tr key={idx}>
        <th>{label}</th>
        {cols.map((col, i) => (
          <td key={i}>{col}</td>
        ))}
      </tr>
    ));

  const equityData = [
    ['Brokerage', 'Zero Brokerage', '0.03% or Rs. 20/executed order whichever is lower', '0.03% or Rs. 20/executed order whichever is lower', 'Flat Rs. 20 per executed order'],
    ['STT/CTT', '0.1% on buy & sell', '0.025% on the sell side', '0.02% on the sell side', <ul><li>0.125% on exercised</li><li>0.1% on sell side (premium)</li></ul>],
    ['Transaction charges', 'NSE: 0.00297%<br/>BSE: 0.00375%', 'NSE: 0.00297%<br/>BSE: 0.00375%', 'NSE: 0.00173%<br/>BSE: 0', 'NSE: 0.03503%<br/>BSE: 0.0325%'],
    ['GST', '18% on (brokerage + SEBI + transaction)', '18% on (brokerage + SEBI + transaction)', '18% on (brokerage + SEBI + transaction)', '18% on (brokerage + SEBI + transaction)'],
    ['SEBI charges', '₹10 / crore', '₹10 / crore', '₹10 / crore', '₹10 / crore'],
    ['Stamp charges', '0.015% or ₹1500 / crore', '0.003% or ₹300 / crore', '0.002% or ₹200 / crore', '0.003% or ₹300 / crore']
  ];

  const currencyData = [
    ['Brokerage', '0.03% or ₹20/executed order', '₹20/executed order'],
    ['STT/CTT', 'No STT', 'No STT'],
    ['Transaction charges', 'NSE: 0.00035%<br/>BSE: 0.00045%', 'NSE: 0.0311%<br/>BSE: 0.001%'],
    ['GST', '18% on (brokerage + SEBI + transaction)', '18% on (brokerage + SEBI + transaction)'],
    ['SEBI charges', '₹10 / crore', '₹10 / crore'],
    ['Stamp charges', '0.0001% or ₹10 / crore', '0.0001% or ₹10 / crore']
  ];

  const commodityData = [
    ['Brokerage', '0.03% or ₹20/executed order', '₹20/executed order'],
    ['STT/CTT', '0.01% on sell side (Non-Agri)', '0.05% on sell side'],
    ['Transaction charges', 'MCX: 0.0021%<br/>NSE: 0.0001%', 'MCX: 0.0418%<br/>NSE: 0.001%'],
    ['GST', '18% on (brokerage + SEBI + transaction)', '18% on (brokerage + SEBI + transaction)'],
    ['SEBI charges', 'Agri: ₹1 / crore<br/>Non-agri: ₹10 / crore', '₹10 / crore'],
    ['Stamp charges', '0.002% or ₹200 / crore', '0.003% or ₹300 / crore']
  ];

  const renderTable = (headers, data) => (
    <table className="table table-bordered mt-3">
      <thead className="table-light">
        <tr>
          <th></th>
          {headers.map((header, idx) => (
            <th key={idx}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>{renderTableRows(data)}</tbody>
    </table>
  );

  return (
    <div className="container mt-5 text-muted">
      <ul className="nav nav-tabs">
        {['equity', 'currency', 'commodity'].map((tab) => (
          <li className="nav-item" key={tab}>
            <button
              className={`nav-link ${activeTab === tab ? 'active' : ''}`}
              onClick={() => handleTabChange(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          </li>
        ))}
      </ul>

      {activeTab === 'equity' &&
        renderTable(['Equity delivery', 'Equity intraday', 'F&O - Futures', 'F&O - Options'], equityData)}

      {activeTab === 'currency' &&
        renderTable(['Currency futures', 'Currency options'], currencyData)}

      {activeTab === 'commodity' &&
        renderTable(['Commodity futures', 'Commodity options'], commodityData)}
        <p className='text-center fs-5'><a href='' style={{textDecoration:"none"}}>Calculate your costs upfront </a>using our brokerage calculator

</p>
    </div>
  );
};

export default Brokerage;
