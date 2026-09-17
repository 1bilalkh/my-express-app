import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const getProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
          "http://localhost:3000/api/auth/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUser(response.data.user);
      } catch (err) {
        console.error("Profile error:", err);

        setError(
          err.response?.data?.message ||
            "Failed to load profile"
        );
      } finally {
        setLoading(false);
      }
    };

    getProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate("/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading profile...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">
              Dashboard
            </h1>

            {user && (
              <p className="text-gray-500 mt-2">
                Welcome, {user.name}
              </p>
            )}
          </div>

          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        {/* Navigation */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => navigate("/dashboard")}
            className="px-4 py-2 rounded-md border"
          >
            Dashboard
          </button>

          <button
            onClick={() => navigate("/projects")}
            className="px-4 py-2 rounded-md border"
          >
            Projects
          </button>

          <button
            onClick={() => navigate("/tasks")}
            className="px-4 py-2 rounded-md border"
          >
            Tasks
          </button>
        </div>

        {/* User information */}
        {user && (
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">
              Your Profile
            </h2>

            <p>
              <strong>Name:</strong> {user.name}
            </p>

            <p className="mt-2">
              <strong>Email:</strong> {user.email}
            </p>
          </div>
        )}

      </div>
    </div>
  );
}

export default Dashboard;