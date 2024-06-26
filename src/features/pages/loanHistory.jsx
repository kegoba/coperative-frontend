import React from 'react';

const LoanHistory = ({ data }) => {
  return (
    <div className="container mx-auto px-4 py-8">
    <h1 className="text-2xl font-bold mb-6">Loan History</h1>
    <div className="overflow-x-auto">
      <table className="md:w-full sm:w-[400px] overflow-x-auto overflow-y-auto table-auto">
        <thead className='bg-[#092256] text-white'>
          <tr className="bg-muted text-muted-foreground">
          <th className="py-1 px-1 border-b">Date</th>
            <th className="py-2 px-4 border-b">Duration</th>
            <th className="py-1 px-1 border-b">Repayment</th>
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
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    loan.status === "approved"
                      ? "bg-green-100 text-green-600"
                      : loan.status === "pending"
                      ? "bg-blue-100 text-blue-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {loan.status}
                </span>
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
