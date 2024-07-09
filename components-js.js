import React from 'react';

export const Card = ({ title, value }) => (
  <div className="bg-white p-4 rounded shadow">
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-2xl font-bold mt-2">{value}</p>
  </div>
);

export const Button = ({ children, onClick }) => (
  <button 
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={onClick}
  >
    {children}
  </button>
);

export const MenuItem = ({ icon: Icon, text, onClick }) => (
  <div 
    className="flex items-center space-x-2 p-2 rounded cursor-pointer hover:bg-gray-100"
    onClick={onClick}
  >
    <Icon size={20} />
    <span>{text}</span>
  </div>
);
