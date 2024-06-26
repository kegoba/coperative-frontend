import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // Ensure you have the correct icons

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);


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
              <img src="/images/applogo.png" className='h-20 w-20' alt="Logo" />
            </Link>
            
          </div>
          <div className='hidden md:flex pr-4'>
            <Link to="/login" className='px-8 py-3'>
              Login
            </Link>
            <Link to="/register" className='px-8 py-3 bg-[#092256] text-white'>
              Register
            </Link>
          </div>
          <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <Bars3Icon className='w-5' /> : <XMarkIcon className='w-5' />}
          </div>
        </div>

        <ul className={!nav ? 'hidden' : 'absolute bg-[#092256] text-white w-[200px] px-8'}>
          <li className='text-left'><Link className='block py-4' onClick={handleClose} to="/">Home</Link></li>
          <div className='flex flex-col my-4'>
            <Link to="/login" className='bg-transparent border border-white text-white px-8 py-3 mb-4'>Login</Link>
            <Link to="/register" className='px-8 py-3 bg-white text-[#092256]'>Register</Link>
          </div>
        </ul>
      </div>
      
    </>
  );
};

export default Navbar;
