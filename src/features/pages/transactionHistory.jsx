import React, { useState, useEffect } from 'react';
import { getAllConsultation } from '../services/userServices';
import {Link}  from "react-router-dom"

const TransactionHistory = () => {
  const [consultations, setConsultations] = useState([]);
  const [filters, setFilters] = useState({
    date: '',
    patientName: '',
    healthcareProvider: '',
    consultationType: '',
    medicalCondition: '',
  });

  useEffect(() => {
    getAllConsultation()
      .then((datas) => {
        if (datas) {
          setConsultations(datas.data);
        } else {
          console.log('No data');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredData = consultations.filter((item) => {
    return (
      item.date.includes(filters.date) &&
      (item.officerId?.name?.toLowerCase().includes(filters.patientName.toLowerCase()) || '') &&
      item.healthcareProvider.toLowerCase().includes(filters.healthcareProvider.toLowerCase()) &&
      item.consultationType.toLowerCase().includes(filters.consultationType.toLowerCase()) &&
      item.medicalCondition.toLowerCase().includes(filters.medicalCondition.toLowerCase())
    );
  });

  return (
   

      <div className="container">
        <h2 className="text-xl font-bold mb-4">Transaction History</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Date</th>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Amount</th>
                <th className="py-2 px-4 border-b">reference</th>
                
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((consultation, key) => (
                  <tr key={key}>
                    <td className="py-2 px-4 border-b">
                      {new Date(consultation.date).toLocaleDateString()}
                    </td>
                    <td className="py-2 px-4 border-b">
                      {consultation.officerId?.name || 'N/A'}
                    </td>
                    <td className="py-2 px-4 border-b">{consultation.healthcareProvider}</td>
                    <td className="py-2 px-4 border-b">{consultation.consultationType}</td>
                    <td className="py-2 px-4 border-b">{consultation.medicalCondition}</td>
                    
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="py-2 px-4 text-center border-b">
                    You don't have any transaction
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
  
  );
};

export default TransactionHistory;
