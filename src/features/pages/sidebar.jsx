import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { logout } from '../reduxServices/actions';
import {useDispatch} from "react-redux"
import {ArrowDownIcon} from "../utilities/reuseAbles"

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };




  const handleLogout = () => {
    dispatch(logout());
    navigate('/login')


  };

  return (
    <div className="relative h-screen">
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-20 bg-black opacity-50 transition-opacity ${
          isOpen ? 'block' : 'hidden'
        }`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gray-100 transition-transform transform ${
          isOpen ? 'translate-x-0 z-30' : '-translate-x-full'
        } overflow-y-auto`}
      >
        <div className="flex items-center justify-between h-16 bg-[#092256] text-white p-4">
          <span>User Dashboard</span>
          <button onClick={toggleSidebar}>
            ✕
          </button>
        </div>
        <ul className="flex-grow">
          <li className="flex items-center p-4 hover:bg-gray-200">
            <Link to="/dashboard" onClick={toggleSidebar}>
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="flex h-20 items-center p-4 hover:bg-gray-200">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="flex items-center">
                Loan
                <ArrowDownIcon className="ml-[145px] h-5 w-5 text-gray-500" />
              </div>
              <ul tabIndex={0} className="dropdown-content z-[1] p-4 shadow bg-base-100 w-52">
                <li className='p-4'><Link to={"/loanrequest"} onClick={toggleSidebar}>Loan Request</Link></li>
                <li className='p-4' > <Link to={"/loanhistory"}  onClick={toggleSidebar}>Cancel Loan </Link></li>
                <li className='p-4' > <Link to={"/loanhistory"}  onClick={toggleSidebar}>Liquidate Loan </Link></li>
                
              </ul>
            </div>
          </li>
          <li className="flex items-center p-4 hover:bg-gray-200">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="flex items-center">
                Savings
                <ArrowDownIcon className="ml-[125px] h-5 w-5 text-gray-500" />
              </div>
              <ul tabIndex={0} className="dropdown-content z-[1] p-4 shadow bg-base-100 w-52">
                <li className='p-4' > <Link to={"/fixedsaving"} onClick={toggleSidebar}>Fixed Saving </Link></li>
                <li className='p-4' onClick={toggleSidebar}>Liquidate Savings</li>
              </ul>
            </div>
          </li>
          <li className="flex items-center p-4 hover:bg-gray-200">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="flex items-center">
                Fund Transfer
                <ArrowDownIcon className="ml-[85px] h-5 w-5 text-gray-500" />
              </div>
              <ul tabIndex={0} className="dropdown-content z-[1] p-4 shadow bg-base-100 w-52">
                <li className='p-4' onClick={toggleSidebar}><Link to={"/wallettransfer"}>Inter-Transfer</Link></li>
                <li className='p-4' onClick={toggleSidebar}>Intra-Transfer</li>
              </ul>
            </div>
          </li>
          <li className="flex items-center p-4 hover:bg-gray-200">
            <Link to="/fundwallet" onClick={toggleSidebar}>
              <span>Fund Wallet</span>
            </Link>
          </li>
          <li className="flex items-center p-4 hover:bg-gray-200">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="flex items-center">
                Settings
                <ArrowDownIcon className="ml-[120px] h-5 w-5 text-gray-500" />
              </div>
              <ul tabIndex={0} className="dropdown-content z-[1] p-4 shadow bg-base-100 w-52">
                <li className='p-4' onClick={toggleSidebar}><Link to={"/changePassword"}>Change Password</Link></li>
                <li className='p-4' onClick={toggleSidebar}>Update Profile</li>
              </ul>
            </div>
          </li>
          <li className="flex items-center p-4 hover:bg-gray-200">
            <button onClick={handleLogout} className="px-8 py-3">
              Logout
            </button>
          </li>
        </ul>
      </div>

      {/* Toggle button */}
      <div className="fixed z-40 p-4">
        <button onClick={toggleSidebar}>
          ☰
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
