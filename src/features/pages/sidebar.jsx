import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
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
        }`}
      >
        <div className="flex items-center justify-between h-16 bg-[#092256] text-white p-4">
          <span > User Dashboard</span>
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
          <li className="flex items-center p-4 hover:bg-gray-200">
            <Link to="/storage" onClick={toggleSidebar}>
              <span>Storage</span>
            </Link>
          </li>
          <li className="flex items-center p-4 hover:bg-gray-200">
            <Link to="/functions" onClick={toggleSidebar}>
              <span>Functions</span>
            </Link>
          </li>
          <li className="flex items-center p-4 hover:bg-gray-200">
            <Link to="/realtime" onClick={toggleSidebar}>
              <span>Realtime</span>
            </Link>
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
