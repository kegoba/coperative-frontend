import React from 'react';

const TransactionHistory = ({ data }) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Transaction History</h2>
      <div className="">
        <table className=" ">
          <thead className="bg-[#092256] text-white rounded">
            <tr>
              <th className="py-2 px-4 border-b whitespace-nowrap md:w-1/5 sm:w-1/2">Date</th>
              <th className="py-2 px-4 border-b whitespace-nowrap md:w-1/5 sm:w-1/2">Amount</th>
              <th className="py-2 px-4 border-b whitespace-nowrap md:w-1/5 sm:w-1/2">Transaction Type</th>
              <th className="py-2 px-4 border-b whitespace-nowrap md:w-1/5 sm:w-1/2">Reference</th>
              <th className="py-2 px-4 border-b whitespace-nowrap md:w-1/5 sm:w-1/2">Narration</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((transaction, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b whitespace-nowrap md:w-1/5 sm:w-1/2">{new Date(transaction.date).toLocaleDateString()}</td>
                  <td className="py-2 px-4 border-b whitespace-nowrap md:w-1/5 sm:w-1/2">{transaction.amount}</td>
                  <td className="py-2 px-4 border-b whitespace-nowrap md:w-1/5 sm:w-1/2">{transaction.transactionType}</td>
                  <td className="py-2 px-4 border-b whitespace-nowrap md:w-1/5 sm:w-1/2">{transaction.paymentReference}</td>
                  <td className="py-2 px-4 border-b whitespace-nowrap md:w-1/5 sm:w-1/2">{transaction.narration}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="py-2 px-4 text-center border-b"
                >
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
