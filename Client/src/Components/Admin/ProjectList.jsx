function ProjectList() {
  return (
    <div className="space-y-4">
      
      <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl">
        <div>
          <h3 className="text-lg">Portfolio Website</h3>
          <p className="text-sm text-white/60">
            MERN, JWT, Admin Dashboard
          </p>
        </div>

        <div className="flex gap-3">
          <button className="px-4 py-1 bg-blue-500/80 rounded">
            Edit
          </button>
          <button className="px-4 py-1 bg-red-500/80 rounded">
            Delete
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center bg-white/5 p-4 rounded-xl">
        <div>
          <h3 className="text-lg">Admin Panel</h3>
          <p className="text-sm text-white/60">
            Node, Express, MongoDB
          </p>
        </div>

        <div className="flex gap-3">
          <button className="px-4 py-1 bg-blue-500/80 rounded">
            Edit
          </button>
          <button className="px-4 py-1 bg-red-500/80 rounded">
            Delete
          </button>
        </div>
      </div>

    </div>
  );
}
export {ProjectList}