function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="p-6 bg-gray-800 rounded-xl">
          <h2 className="text-xl font-bold">Please login to access the app</h2>
        </div>
      </div>
    );
  }
  return children;
}

export default ProtectedRoute;
