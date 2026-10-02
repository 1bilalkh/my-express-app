import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
          "https://my-express-api-pi.vercel.app/api/auth/profile",
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">
          Loading profile...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-600">
          {error}
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">

        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            Dashboard
          </h1>

          {user && (
            <p className="text-gray-600 mt-2">
              Welcome, {user.name}
            </p>
          )}
        </div>

        {user && (
          <div className="bg-white border rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">
              Your Profile
            </h2>

            <div className="space-y-3">
              <p>
                <strong>Name:</strong>{" "}
                {user.name}
              </p>

              <p>
                <strong>Email:</strong>{" "}
                {user.email}
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default Dashboard;