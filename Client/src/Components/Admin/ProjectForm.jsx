function ProjectForm() {
  return (
    <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 mb-10">
      <h2 className="text-xl mb-6 font-medium">
        Add / Update Project
      </h2>

      <input
        placeholder="Project Title"
        className="w-full mb-4 px-4 py-3 bg-black/40 rounded-lg border border-white/20"
      />

      <textarea
        placeholder="Project Description"
        className="w-full mb-4 px-4 py-3 bg-black/40 rounded-lg border border-white/20"
      />

      <input
        placeholder="Tech Stack (comma separated)"
        className="w-full mb-4 px-4 py-3 bg-black/40 rounded-lg border border-white/20"
      />

      <input
        type="file"
        className="w-full mb-6 text-white"
      />

      <div className="flex gap-4">
        <button className="px-6 py-2 bg-white text-black rounded-lg">
          Save
        </button>
        <button className="px-6 py-2 bg-red-500/80 rounded-lg">
          Reset
        </button>
      </div>
    </div>
  );
}

export {ProjectForm}
