
 import React, { useState } from 'react';
import Sidebar from './Dashboard-component/Sidebar';
import Header from './Dashboard-component/Header';
import Dashboard from './Dashboard-component/Dashboard';

function MainDashboard(){
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar 
        isOpen={sidebarOpen} 
        setIsOpen={setSidebarOpen}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          currentPage={currentPage}
        />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}

export {MainDashboard};
