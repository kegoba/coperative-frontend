import React, { useState, useEffect } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useNavigate } from 'react-router-dom';
import TransactionHistory from './transactionHistory';
import LoanHistory from './loanHistory';
import { getDashboardDetails, interestEarned } from '../services/userServices';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

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
          const savingsData = response.data.savings[0];
          const { date, interest, balance } = savingsData;

          const depositedDate = new Date(date).toISOString().slice(0, 10);
          const calculatedDate = new Date().toISOString().slice(0, 10);

          const cash = interestEarned(balance, depositedDate, calculatedDate);
          console.log(response.data.transaction, "Transaction Data");

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

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="">
    
        <div className="mt-10">
          <TransactionHistory data={transaction} />
        </div>
        <div className="mt-20">
          <LoanHistory data={loans} />
        </div>
      </div>

  );
};

export default Dashboard;
