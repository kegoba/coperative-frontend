import React from 'react';

const Sidebar = () => {
  // Mock user data
  const userData = {
    name: "John Doe",
    email: "john@example.com",
    settings: {
      darkMode: true,
      notifications: true,
      language: "English",
    },
    walletBalance: 1000,
    interestEarned: 50,
  };

  return (
    <div className="bg-blue-800 text-white w-64 h-full flex flex-col fixed z-10 top-0 left-0">
      <div className="p-4 bg-blue-900">
        <h1 className="text-2xl font-bold">{userData.name}</h1>
        <p className="text-sm">{userData.email}</p>
      </div>
      <div className="flex-1 overflow-y-auto">
        <ul className="py-4">
          <li className="px-4 py-2 hover:bg-blue-700 cursor-pointer">Dashboard</li>
          <li className="px-4 py-2 hover:bg-blue-700 cursor-pointer">Profile</li>
          <li className="px-4 py-2 hover:bg-blue-700 cursor-pointer">Settings</li>
          <li className="px-4 py-2 hover:bg-blue-700 cursor-pointer">Logout</li>
        </ul>
      </div>
      <div className="p-4 bg-blue-900">
        <h2 className="text-lg font-bold mb-2">User Info</h2>
        <div className="mb-4">
          <p>Wallet Balance: <span className="font-semibold">${userData.walletBalance}</span></p>
          <p>Interest Earned: <span className="font-semibold">${userData.interestEarned}</span></p>
        </div>
        <h2 className="text-lg font-bold mb-2">Settings</h2>
        <div>
          <p>Dark Mode: <span className="font-semibold">{userData.settings.darkMode ? "Enabled" : "Disabled"}</span></p>
          <p>Notifications: <span className="font-semibold">{userData.settings.notifications ? "Enabled" : "Disabled"}</span></p>
          <p>Language: <span className="font-semibold">{userData.settings.language}</span></p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
