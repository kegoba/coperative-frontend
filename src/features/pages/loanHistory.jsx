import React from 'react';

const LoanHistory = ({ data }) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Loan History</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-[#2DC0AC] text-white">
            <tr>
              <th className="py-2 px-4 border-b">Date</th>
              <th className="py-2 px-4 border-b">Duration In Months</th>
              <th className="py-2 px-4 border-b">Monthly Amount Repayment</th>
              <th className="py-2 px-4 border-b">Principal</th>
              <th className="py-2 px-4 border-b">Amount Payable</th>
              <th className="py-2 px-4 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((loan, key) => (
                <tr key={key}>
                  <td className="py-2 px-4 border-b">{new Date(loan.date).toLocaleDateString()}</td>
                  <td className="py-2 px-4 border-b">{loan.duration}</td>
                  <td className="py-2 px-4 border-b">{loan?.monthlyReturn?.toLocaleString()}</td>
                  <td className="py-2 px-4 border-b">{loan?.amountBorrowed?.toLocaleString()}</td>
                  <td className="py-2 px-4 border-b">{loan?.totalAmountToBePaid?.toLocaleString()}</td>
                  <td className="py-2 px-4 border-b">{loan.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="py-2 px-4 text-center border-b">
                  You don't have any Loan History
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LoanHistory;
