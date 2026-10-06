import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { User, Lock, Mail } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // -----------------------------
  // Typing Animation State
  // -----------------------------
  const [displayLines, setDisplayLines] = useState(["", ""]);

  // -----------------------------
  // Form Change
  // -----------------------------
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // -----------------------------
  // Register
  // -----------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");
    setLoading(true);

    try {
      const response = await axios.post(
        "https://my-express-api-pi.vercel.app/api/auth/register",
        formData
      );

      setMessage(
        response.data.message || "Registration successful!"
      );

      setFormData({
        name: "",
        email: "",
        password: "",
      });

      // Redirect to Login after successful registration
      setTimeout(() => {
        navigate("/login");
      }, 1000);

    } catch (err) {
      setError(
        err.response?.data?.message ||
        "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  // -----------------------------
  // Typing Animation
  // -----------------------------
const lines = [
  "Register for the Website.",
  "Live Your Story.",
];

  useEffect(() => {
    let cancelled = false;

    const sleep = (ms) => {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    };

    const typeLines = async () => {
      while (!cancelled) {

        // -----------------------------
        // Type First Line
        // -----------------------------
        for (let i = 1; i <= lines[0].length; i++) {

          if (cancelled) return;

          setDisplayLines([
            lines[0].slice(0, i),
            "",
          ]);

          await sleep(80);
        }

        // Wait after first line
        await sleep(500);

        // -----------------------------
        // Type Second Line
        // -----------------------------
        for (let i = 1; i <= lines[1].length; i++) {

          if (cancelled) return;

          setDisplayLines([
            lines[0],
            lines[1].slice(0, i),
          ]);

          await sleep(80);
        }

        // Wait after both lines
        await sleep(1500);

        // -----------------------------
        // Clear Both Lines
        // -----------------------------
        if (cancelled) return;

        setDisplayLines(["", ""]);

        // Small pause before restart
        await sleep(500);
      }
    };

    typeLines();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <div className="flex min-h-screen p-5">

        {/* --------------------------------
            Left Column
        -------------------------------- */}
        <div className="flex w-1/2 min-h-screen items-center justify-center bg-gray-100 rounded-2xl">

          <h1 className="text-5xl font-bold text-black text-center">
            <div>{displayLines[0]}</div>
            <div>{displayLines[1]}</div>
          </h1>

        </div>

        {/* --------------------------------
            Right Column
        -------------------------------- */}
        <div className="flex w-1/2 min-h-screen items-center justify-center bg-white">

          <div className="w-full max-w-md px-6">

            <Card className="w-full max-w-md">

              {/* Card Header */}
              <CardHeader className="text-center">

                <CardTitle className="text-4xl mb-4 font-bold">
                  Create Account
                </CardTitle>

                <CardDescription>
                  Create your account to manage your profile
                  and access all features.
                </CardDescription>

              </CardHeader>

              <CardContent>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >

                  {/* -----------------------------
                      Name
                  ----------------------------- */}
                  <div className="mt-10 relative">

                    <User className="absolute right-3 top-3 h-5 w-5 text-muted-foreground" />

                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />

                  </div>

                  {/* -----------------------------
                      Email
                  ----------------------------- */}
                  <div className="mt-5 relative">

                    <Mail
                      size={20}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    />

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

                  {/* -----------------------------
                      Password
                  ----------------------------- */}
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

                  {/* -----------------------------
                      Register Button
                  ----------------------------- */}
                  <Button
                    type="submit"
                    className="w-full rounded-full flex items-center justify-center cursor-pointer bg-blue-600 px-4 md:px-5 h-10 text-sm md:text-[15px] text-white hover:ring-2 hover:ring-primary/70 ring-offset-2 ring-offset-white transition-all hover:scale-[1.02] ring-transparent active:scale-[0.98] active:ring-primary overflow-hidden relative"
                    disabled={loading}
                  >
                    {loading
                      ? "Creating Account..."
                      : "Register"}
                  </Button>

                  {/* -----------------------------
                      Success Message
                  ----------------------------- */}
                  {message && (
                    <p className="text-center text-sm text-green-600">
                      {message}
                    </p>
                  )}

                  {/* -----------------------------
                      Error Message
                  ----------------------------- */}
                  {error && (
                    <p className="text-center text-sm text-red-600">
                      {error}
                    </p>
                  )}

                  {/* -----------------------------
                      Login Link
                  ----------------------------- */}
                  <p className="text-center text-sm text-muted-foreground mt-8">

                    Already have an account?{" "}

                    <button
                      type="button"
                      onClick={() => navigate("/login")}
                      className="font-medium text-primary hover:underline"
                    >
                      Login
                    </button>

                  </p>

                </form>

              </CardContent>

            </Card>

          </div>

        </div>

      </div>
    </>
  );
}

export default Register;