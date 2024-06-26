import React, { useState, useEffect, useRef } from 'react';




const ThreeDottedAction = ({ actions }) => {
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setShowMenu(false);
        }
    };

    useEffect(() => {
        if (showMenu) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showMenu]);

    return (
        <div className="relative inline-block" ref={menuRef}>
            <button onClick={toggleMenu} className="p-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        fillRule="evenodd"
                        d="M6 10a2 2 0 100-4 2 2 0 000 4zm0 6a2 2 0 100-4 2 2 0 000 4zm0 6a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            {showMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                     <ul className="py-1">
                        {actions.map((action, index) => (
                            <li
                                key={index}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                onClick={action.onClick}
                            >
                                {action.label}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};









export const Table = ({ columns, data, onApprove, onReject, actiontype }) => {
    const actions = (item) => [
        {
            label: Object.values(actiontype)[0],
            onClick: () => onApprove(item),
        },
        {
            label: Object.values(actiontype)[1],
            onClick: () => onReject(item),
        },
        // Add more actions here if needed
    ];

    return (
        <table className="min-w-full bg-white">
            <thead>
                <tr>
                    {columns.map((col, index) => (
                        <th key={index} className="py-2 px-4">
                            {col.header}
                        </th>
                    ))}
                    <th className="py-2 px-4">Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, rowIndex) => (
                    <tr key={rowIndex} className="border-b">
                        {columns.map((col, colIndex) => (
                            <td key={colIndex} className="py-2 px-4">
                                {item[col.accessor]}
                            </td>
                        ))}
                        <td className="py-2 px-4 text-right">
                            <ThreeDottedAction
                                actions={actions(item)}
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};



export const Card = ({ title, value, icon }) => {
    return (
        <div className="bg-white w-60 shadow-md rounded-lg p-6 flex items-center">
            <div className="mr-4">{icon}</div>
            <div>
                <h2 className="text-lg font-semibold">{title}</h2>
                <p className="text-2xl font-bold">{value}</p>
            </div>
        </div>
    );
};



export const WalletIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3 3a2 2 0 012-2h10a2 2 0 012 2v2a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 010-4zM5 5h10V3H5v2zm0 2v8h10V9H9a1 1 0 110-2H5z" clipRule="evenodd" />
    </svg>
);

export const InterestIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M2 10a8 8 0 1114.32 5.907l2.387 2.387a1 1 0 01-1.414 1.414l-2.387-2.387A8 8 0 012 10zm8-6a6 6 0 100 12A6 6 0 0010 4z" clipRule="evenodd" />
    </svg>
);

