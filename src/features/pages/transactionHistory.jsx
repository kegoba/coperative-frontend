import React from 'react';

const TransactionHistory = ({ data }) => {
  return (
    <div className="container">
      <h2 className="text-xl font-bold mb-4">Transaction History</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className='bg-[#2DC0AC] text-white'>
            <tr>
              <th className="py-2 px-4 border-b">Date</th>
              <th className="py-2 px-4 border-b">Balance</th>
              <th className="py-2 px-4 border-b">Interest</th>
              <th className="py-2 px-4 border-b">Reference</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((savings, key) => (
                <tr key={key}>
                  <td className="py-2 px-4 border-b">
                    {new Date(savings.date).toLocaleDateString()}
                  </td>
                  <td className="py-2 px-4 border-b">{savings.balance}</td>
                  <td className="py-2 px-4 border-b">{savings.interest}</td>
                  <td className="py-2 px-4 border-b">{savings.paymentReference.join(', ')}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="py-2 px-4 text-center border-b">
                  You don't have any transactions
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
