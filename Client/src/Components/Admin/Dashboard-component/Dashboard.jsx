import React from 'react';
import Card from './Card';
import ProjectsTable from './Projecttable';
import Analytics from './Analytics';
import QuickActions from './Quick-Actions';

const Dashboard = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card 
          title="Total Projects" 
          value="24" 
          change={12} 
          icon="📁" 
          color="blue"
        />
        <Card 
          title="Total Views" 
          value="12.5K" 
          change={8} 
          icon="👁️" 
          color="green"
        />
        <Card 
          title="Messages" 
          value="48" 
          change={-5} 
          icon="💬" 
          color="purple"
        />
        <Card 
          title="Blog Posts" 
          value="16" 
          change={23} 
          icon="📝" 
          color="orange"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <ProjectsTable />
        </div>
        <div>
          <QuickActions />
        </div>
      </div>

      {/* Analytics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Analytics />
        
        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { action: 'New project added', time: '2 hours ago', icon: '🚀' },
              { action: 'Blog post published', time: '4 hours ago', icon: '📄' },
              { action: 'Received new message', time: '6 hours ago', icon: '✉️' },
              { action: 'Project completed', time: '1 day ago', icon: '✅' },
              { action: 'Profile updated', time: '2 days ago', icon: '👤' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                <div className="text-2xl mr-3">{activity.icon}</div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
