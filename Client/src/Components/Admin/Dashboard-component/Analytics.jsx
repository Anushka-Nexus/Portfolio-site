import React from 'react';

const Analytics = () => {
  // Sample data for the chart
  const chartData = [
    { month: 'Jan', views: 4000 },
    { month: 'Feb', views: 3000 },
    { month: 'Mar', views: 5000 },
    { month: 'Apr', views: 2780 },
    { month: 'May', views: 4890 },
    { month: 'Jun', views: 6390 },
  ];

  const maxValue = Math.max(...chartData.map(d => d.views));

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Traffic Analytics</h3>
      
      {/* Simple Bar Chart */}
      <div className="h-64 flex items-end justify-between space-x-2">
        {chartData.map((data, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div className="w-full bg-blue-500 hover:bg-blue-600 rounded-t transition-all duration-300 relative group"
                 style={{ height: `${(data.views / maxValue) * 100}%` }}>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {data.views.toLocaleString()}
              </div>
            </div>
            <span className="text-xs text-gray-600 mt-2">{data.month}</span>
          </div>
        ))}
      </div>
      
      {/* Legend */}
      <div className="mt-6 flex items-center justify-between text-sm">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-blue-500 rounded mr-2"></div>
          <span className="text-gray-600">Page Views</span>
        </div>
        <span className="text-gray-500">Total: 26,060 views</span>
      </div>
    </div>
  );
};

export default Analytics;
