import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ui/ProtectedRoute";
import GoogleSuccess from "./pages/GoogleSuccess";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    status: "Planning",
  });

  // Fetch all projects
  const fetchProjects = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        "https://my-express-api-pi.vercel.app/api/projects",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to fetch projects"
        );
      }

      setProjects(data.projects || []);
      setError("");
    } catch (error) {
      console.error("Projects error:", error);

      setError(
        error.message || "Failed to load projects."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Create project
  const handleCreateProject = async (event) => {
    event.preventDefault();

    if (!formData.name.trim()) {
      setError("Project name is required.");
      setMessage("");
      return;
    }

    try {
      setCreating(true);
      setError("");
      setMessage("");

      const token = localStorage.getItem("token");

      const response = await fetch(
        "https://my-express-api-pi.vercel.app/api/projects",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to create project"
        );
      }

      setMessage("Project created successfully!");

      setFormData({
        name: "",
        description: "",
        status: "Planning",
      });

      // Refresh projects list
      await fetchProjects();
    } catch (error) {
      console.error("Create project error:", error);

      setError(
        error.message || "Failed to create project."
      );
    } finally {
      setCreating(false);
    }
  };

  // Loading
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <h1 className="text-xl font-semibold">
          Loading projects...
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8">
      <div className="max-w-5xl mx-auto">

        {/* Page Title */}
        <h1 className="text-3xl font-bold mb-6">
          Projects
        </h1>

        {/* Create Project Card */}
        <div className="bg-white rounded-xl border p-6 shadow-sm mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Create Project
          </h2>

          <form
            onSubmit={handleCreateProject}
            className="space-y-4"
          >
            {/* Project Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-1"
              >
                Project Name
              </label>

              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter project name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium mb-1"
              >
                Description
              </label>

              <textarea
                id="description"
                name="description"
                placeholder="Enter project description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Status */}
            <div>
              <label
                htmlFor="status"
                className="block text-sm font-medium mb-1"
              >
                Status
              </label>

              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2 bg-white outline-none focus:ring-2 focus:ring-black"
              >
                <option value="Planning">
                  Planning
                </option>

                <option value="In Progress">
                  In Progress
                </option>

                <option value="Completed">
                  Completed
                </option>
              </select>
            </div>

            {/* Create Button */}
            <button
              type="submit"
              disabled={creating}
              className="bg-black text-white px-5 py-2 rounded-lg disabled:opacity-50"
            >
              {creating
                ? "Creating..."
                : "Create Project"}
            </button>
          </form>

          {/* Success Message */}
          {message && (
            <p className="text-green-600 mt-4">
              {message}
            </p>
          )}

          {/* Error Message */}
          {error && (
            <p className="text-red-600 mt-4">
              {error}
            </p>
          )}
        </div>

        {/* Projects List */}
        {projects.length === 0 ? (
          <div className="bg-white rounded-xl border p-8 text-center">
            <p className="text-gray-500">
              No projects found.
            </p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">

            {projects.map((project) => (
              <div
                key={project._id}
                className="bg-white rounded-xl border p-6 shadow-sm"
              >
                <h2 className="text-xl font-semibold mb-2">
                  {project.name}
                </h2>

                <p className="text-gray-600 mb-4">
                  {project.description ||
                    "No description"}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">
                    Status
                  </span>

                  <span className="text-sm text-blue-600">
                    {project.status}
                  </span>
                </div>
              </div>
            ))}

          </div>
        )}
      </div>
    </div>
  );
}

function Tasks() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold">
        Tasks Page
      </h1>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public routes */}

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/"
          element={
            <Navigate
              to="/login"
              replace
            />
          }
        />

        <Route
          path="/login"
          element={<Login />}
        />

        {/* Protected routes */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/projects"
          element={
            <ProtectedRoute>
              <Projects />
            </ProtectedRoute>
          }
        />

        <Route
          path="/tasks"
          element={
            <ProtectedRoute>
              <Tasks />
            </ProtectedRoute>
          }
        />

        {/* Google OAuth success */}

        <Route
          path="/google-success"
          element={<GoogleSuccess />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;