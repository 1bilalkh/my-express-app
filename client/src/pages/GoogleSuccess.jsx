import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function GoogleSuccess() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("token");

    if (token) {
      // Save JWT token
      localStorage.setItem("token", token);

      console.log("Google login token saved!");

      // Go to dashboard
      navigate("/dashboard");
    } else {
      // No token → go back to login
      navigate("/login");
    }
  }, [navigate, searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Logging you in...</p>
    </div>
  );
}

export default GoogleSuccess;