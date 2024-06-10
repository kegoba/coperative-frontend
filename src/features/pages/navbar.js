import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageRouter from './router';
import medlogo from "../image/medlog.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // Ensure you have the correct icons

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const [checkUser, setCheckUser] = useState(false);

  useEffect(() => {
    // Your user checking logic here
  }, []);

  const handleClose = () => setNav(!nav);

  return (
    <>
      <div className='w-screen h-[80px] bg-white text-black drop-shadow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
          <div className='flex items-center'>
            <Link to="/" className='text-3xl font-bold mr-4 sm:text-4xl'>
              <img src={medlogo} className='h-12 w-17' alt="Med Logo" />
            </Link>
            <ul className='hidden md:flex'>
              <li><Link className='p-4' to="/dashboard">Dashboard</Link></li>
              <li><Link className='p-4' to="/loanrequest">Loan Request</Link></li>
              <li><Link className='p-4' to="/fundwallet">Fund Wallet</Link></li>
            </ul>
          </div>
          <div className='hidden md:flex pr-4'>
            <Link to="/login" className='px-8 py-3'>
              Login
            </Link>
            <Link to="/register" className='px-8 py-3 bg-[#2DC0AC] text-white'>
              Register
            </Link>
          </div>
          <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <Bars3Icon className='w-5' /> : <XMarkIcon className='w-5' />}
          </div>
        </div>

        <ul className={!nav ? 'hidden' : 'absolute bg-[#2DC0AC] text-white w-[200px] px-8'}>
          <li className='text-left'><Link className='block py-4' onClick={handleClose} to="/">Home</Link></li>
          <li className='text-left'><Link className='block py-4' onClick={handleClose} to="/dashboard">Dashboard</Link></li>
          <li className='text-left'><Link className='block py-4' onClick={handleClose} to="/loanrequest">Loan Request</Link></li>
          <li className='text-left'><Link className='block py-4' onClick={handleClose} to="/fundwallet">Fund Wallet</Link></li>
          <div className='flex flex-col my-4'>
            <Link to="/login" className='bg-transparent border border-white text-white px-8 py-3 mb-4'>Login</Link>
            <Link to="/register" className='px-8 py-3 bg-white text-[#2DC0AC]'>Register</Link>
          </div>
        </ul>
      </div>
      <PageRouter />
    </>
  );
};

export default Navbar;
