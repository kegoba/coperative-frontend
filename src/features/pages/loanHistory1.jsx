import React from 'react';
import {Table} from '../utilities/reuseAbles';

const loanhistory1 = () => {
    const actiontype= {
        Cancel_Loan : "Cancel Loan",
        Liqiudate_Loan : "Liqiudate Loan",

    }
    const columns = [
        { header: 'Date', accessor: 'date' },
        { header: 'Duration', accessor: 'duration' },
        { header: 'Repayment', accessor: 'repayment' },
        { header: 'Principal', accessor: 'principal' },
        { header: 'Amount', accessor: 'amount' },
        { header: 'Status', accessor: 'status' },
        // Add more columns as needed
    ];         
  
    const data = [
        { date: '40-04-30', duration: 'john@example.com',repayment : "3000",principal : 3999, amount : 494994, status :"pending"  },
        { date: '40-04-30', duration: 'john@example.com',repayment : "3000",principal : 3999, amount : 494994, status :"pending"  },
        
        // Add more data as needed
    ];

    const handleApprove = (item) => {
        console.log('Approve:', item);
        // Add your approve logic here
    };

    const handleReject = (item) => {
        console.log('Reject:', item);
        // Add your reject logic here
    };

    return (
        <div className="App p-4">
            <h1 className="text-xl mb-4">Loan Records</h1>
            <Table columns={columns} data={data} onApprove={handleApprove} onReject={handleReject} actiontype={actiontype}  />
        </div>
    );
};

export default loanhistory1;
