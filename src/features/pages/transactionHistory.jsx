import React from 'react';

const TransactionHistory = ({ data }) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Transaction History</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-[#092256] text-white rounded">
            <tr>
              <th className="py-2 px-4 border-b">Date</th>
              <th className="py-2 px-4 border-b">Amount</th>
              <th className="py-2 px-4 border-b">Transaction Type</th>
              <th className="py-2 px-4 border-b">Reference</th>
              <th className="py-2 px-4 border-b">Narration</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((transaction, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b whitespace-nowrap">{new Date(transaction.date).toLocaleDateString()}</td>
                  <td className="py-2 px-4 border-b whitespace-nowrap">{transaction.amount}</td>
                  <td className="py-2 px-4 border-b whitespace-nowrap">{transaction.transactionType}</td>
                  <td className="py-2 px-4 border-b whitespace-nowrap">{transaction.paymentReference}</td>
                  <td className="py-2 px-4 border-b whitespace-nowrap">{transaction.narration}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-2 px-4 text-center border-b">
                  You don't have any transaction history
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
