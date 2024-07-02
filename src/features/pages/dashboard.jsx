import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TransactionHistory from './transactionHistory';
import LoanHistory from './loanHistory';
import {Card, WalletIcon,InterestIcon,interestEarned} from "../utilities/reuseAbles"
import { getDashboardDetails } from '../apiServices/userServices';


const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [savings, setSavings] = useState({ balance: 0, interest: 0 });
  const [loans, setLoans] = useState([]);
  const [transaction, setTransaction] = useState([]);
  const [cashOut, setCashOut] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();



  useEffect(() => {
    const checkUserLogin = localStorage.getItem("user")
    const user = JSON.parse(checkUserLogin)
    if (user){
    getDashboardDetails()
      .then((response) => {
        if (response.status === 200) {
          const savingsData = response.data.wallet[0];
          const { date, interest, balance } = savingsData;

          const depositedDate = new Date(date).toISOString().slice(0, 10);
          const calculatedDate = new Date().toISOString().slice(0, 10);

          const cash = interestEarned(balance, depositedDate, calculatedDate);
         

          setTransaction(response.data.transaction);
          setCashOut(cash);
          setUser(response.data.user);
          setSavings({ interest, balance });
          setLoans(response.data.loans);
        } else {
         
        }
      })
      .catch((error) => console.error(error));
    }else{
      navigate("/login")
    }

  }, [navigate]);

  return (
    <div>
      
    <div className="grid grid-cols-2  gap-6 md:ml-40 overflow-auto w-full">
        <Card className="w-1"
            title="Wallet Balance" 
            value={savings.balance.toFixed(2)} 
            icon={<WalletIcon />} 
        />
        <Card 
            title="Interest Earned" 
            value={cashOut.toFixed(2)} 
            icon={<InterestIcon />} 
        />
    </div>
    
         
          <TransactionHistory data={transaction} />
        
      
          <LoanHistory data={loans} />
   
      </div>

  );
};

export default Dashboard;
