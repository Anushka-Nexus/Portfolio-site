import React from 'react';

const QuickActions = () => {
  const actions = [
    { icon: '➕', title: 'New Project', color: 'bg-blue-500' },
    { icon: '📝', title: 'Write Blog', color: 'bg-green-500' },
    { icon: '📧', title: 'Send Newsletter', color: 'bg-purple-500' },
    { icon: '📊', title: 'View Reports', color: 'bg-orange-500' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-4">
        {actions.map((action, index) => (
          <button
            key={index}
            className="flex flex-col items-center justify-center p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all duration-200"
          >
            <div className={`${action.color} w-12 h-12 rounded-full flex items-center justify-center text-white text-xl mb-2`}>
              {action.icon}
            </div>
            <span className="text-sm text-gray-700 font-medium">{action.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
