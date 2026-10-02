import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { User, Lock } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        formData
      );

      console.log("Login response:", response.data);

      // Save JWT token
      localStorage.setItem("token", response.data.token);

      // Check if token was saved
      console.log(
        "Saved token:",
        localStorage.getItem("token")
      );

      setMessage(
        response.data.message || "Login successful!"
      );

      navigate("/");
    } catch (err) {
      console.error("Login error:", err);

      setError(
        err.response?.data?.message ||
        "Login failed. Please check your email and password."
      );
    } finally {
      setLoading(false);
    }
  };

  // Google Login
  const handleGoogleLogin = () => {
    window.location.href =
      "https://my-express-api-pi.vercel.app/api/auth/google";
  };

  return (
    <>
      <div className="flex min-h-screen p-5">

        {/* Left Column - 50% */}
        <div className="flex w-1/2 min-h-screen items-center justify-center bg-gray-100 text-white rounded-2xl">
          <h1 className="text-4xl font-bold text-gray-950 text-center">
            Discover the Website.<br /> Live Your Story.
          </h1>
        </div>
        <div className="flex w-1/2 min-h-screen items-center justify-center bg-white">
          <div className="w-full max-w-md px-6">
            <Card className="w-full max-w-md">
              <CardHeader className="text-center">
                <CardTitle className="text-4xl mb-4 font-bold">
                  Welcome Back
                </CardTitle>

                <CardDescription>
                  Login to access your account, manage your profile, and
  continue where you left off.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 mt-8"
                >
                  {/* Email */}
                  <div className="mt-10 relative">
                    <User className="absolute right-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Password */}
                  <div className="mt-5 relative">
                    <Lock className="absolute right-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Login button */}
                  <Button
                    type="submit"
                    className="w-full rounded-full flex items-center justify-center cursor-pointer bg-blue-600 px-4 md:px-5 h-10 text-sm md:text-[15px] text-white hover:ring-2 hover:ring-primary/70 ring-offset-2 ring-offset-white transition-all hover:scale-[1.02] ring-transparent active:scale-[0.98] active:ring-primary overflow-hidden relative mt-10"
                    disabled={loading}
                  >
                    {loading
                      ? "Logging in..."
                      : "Login"}
                  </Button>
                      <p className="text-center text-sm text-gray-600 font-bold">
                        OR
                      </p>
                  {/* Google button */}
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full"
                    onClick={handleGoogleLogin}
                  >
                    Continue with Google
                  </Button>

                  {/* Register link */}
                  <p className="text-center text-sm text-gray-600 mt-4">
                    Don't have an account?{" "}
                    <button
                      type="button"
                      onClick={() =>
                        navigate("/register")
                      }
                      className="text-blue-600 font-bold hover:underline"
                    >
                       Register Now
                    </button>
                  </p>

                  {/* Success */}
                  {message && (
                    <p className="text-center text-sm text-green-600">
                      {message}
                    </p>
                  )}

                  {/* Error */}
                  {error && (
                    <p className="text-center text-sm text-red-600">
                      {error}
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

    </>
  );
}

export default Login;