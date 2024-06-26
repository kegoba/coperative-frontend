// src/routes/PageRouter.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from "../store/store"
import Login from '../pages/login';
import Register from '../pages/register';
import Home from '../pages/home';
import ViewAllUsers from '../pages/usersList';
import LoanRequest from '../pages/loanRequest';
import TransactionHistory from '../pages/transactionHistory';
import LoanHistory1 from '../pages/loanHistory1';
import FundWallet from '../pages/fundwallet';
import SuccessTransaction from '../pages/success';
import Dashboard from '../pages/dashboard';
import Navbar from '../pages/navbar';
import Footer from '../pages/footer';
import ResetPassword from '../pages/reSetPassword';
import ForgotPassword from '../pages/forgotPassword';
import Sidebar from '../pages/sidebar';
import ChangePassword from '../pages/changePassword';
import PreviateRoute from "./previateRoute"
import WalletToWalletTransfer from "../pages/walletTransfer"
import FixedSaving  from '../pages/fixedSavings';

const PageRouter = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex flex-grow">
          <Sidebar />
          <div className="flex-grow p-4 lg:ml-30">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/success/:trxref/:reference" element={<SuccessTransaction />} />
              <Route path="/reset-password/:token" element={<ResetPassword />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />

              {/*<Route element={<PreviateRoute />}>*/}
              <Route path="/dashboard" element={<Dashboard />} />
              {/*</Route>*/}
              
              <Route path="/userslist" element={<ViewAllUsers />} />
         
              
              <Route path="/loanrequest" element={<LoanRequest />} />
          
             
              <Route path="/loanhistory" element={<LoanHistory1 />} />
             
              <Route path="/transactionhistory" element={<TransactionHistory />} />
             
              <Route path="/fundwallet" element={<FundWallet />} />
            
             
              <Route path="/changepassword" element={<ChangePassword />} />

              <Route path="/wallettransfer" element={<WalletToWalletTransfer />} /> 

              <Route path="/fixedsaving" element={<FixedSaving />} /> 
             
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
    </Provider>
  );
};

export default PageRouter;
