function Sidebar({ onLogout }) {
  return (
    <div className="w-72 bg-gray-900 bg-opacity-70 h-screen p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Musicify</h1>
        <p className="text-gray-400 mt-1">Your Music Player</p>
      </div>

      <div className="space-y-4">
        <button className="w-full text-left px-4 py-3 bg-gray-800 rounded-lg hover:bg-gray-700">
          <span className="font-semibold">Home</span>
        </button>
        <button className="w-full text-left px-4 py-3 bg-gray-800 rounded-lg hover:bg-gray-700">
          <span className="font-semibold">Library</span>
        </button>
        <button className="w-full text-left px-4 py-3 bg-gray-800 rounded-lg hover:bg-gray-700">
          <span className="font-semibold">Settings</span>
        </button>
      </div>

      <div className="mt-10">
        <button
          onClick={onLogout}
          className="w-full px-4 py-3 bg-red-600 rounded-lg hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
