import React, { useState, useEffect } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link, useNavigate } from 'react-router-dom';
import TransactionHistory from './transactionHistory';
import LoanHistory from './loanHistory';
import { getDashboardDetails, interestEarned } from '../services/userServices';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [savings, setSavings] = useState({ balance: 0, interest: 0 });
  const [loans, setLoans] = useState([]);
  const [cashOut, setCashOut] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getDashboardDetails()
      .then((response) => {
        if (response.status === 200) {
          const savingsData = response.data.savings[0];
          const { date, interest, balance } = savingsData;

          const depositedDate = new Date(date).toISOString().slice(0, 10);
          const calculatedDate = new Date().toISOString().slice(0, 10);

          const cash = interestEarned(balance, depositedDate, calculatedDate);

          setCashOut(cash);
          setUser(response.data.user);
          setSavings({ interest, balance });
          setLoans(response.data.loans);
        } else {
          navigate('/login');
        }
      })
      .catch((error) => console.error(error));
  }, [navigate]);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className={`lg:w-1/5 ${sidebarOpen ? 'block' : 'hidden'} fixed inset-0 z-50 bg-white lg:bg-transparent lg:relative`}>
        <Sidebar className="h-full lg:h-auto">
          <Menu>
            <MenuItem className="">Hello, {user && user.name}</MenuItem>
            <SubMenu label="User Profile" className="">
              <MenuItem className="">UserInfo</MenuItem>
            </SubMenu>
            <MenuItem className="">Wallet Balance: {savings.balance}</MenuItem>
            <MenuItem className="">Interest Earned: {cashOut}</MenuItem>
            <MenuItem className="">Settings</MenuItem>
            <SubMenu label="Loan" className="">
              <MenuItem className="">Request</MenuItem>
              <MenuItem className="">Cancel</MenuItem>
            </SubMenu>
          </Menu>
        </Sidebar>
      </div>

      {/* Main content */}
      <div className="flex-1 p-4 lg:ml-64">
        <div className="flex justify-between items-center lg:hidden">
          <button onClick={handleSidebarToggle}>
            {sidebarOpen ? <XMarkIcon className="w-5 text-gray-700" /> : <Bars3Icon className="w-5 text-gray-700" />}
          </button>
          <h1 className="text-xl font-bold">Dashboard</h1>
        </div>

        <div className="mt-10">
          <TransactionHistory data={savings} />
        </div>
        <div className="mt-20">
          <LoanHistory data={loans} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
