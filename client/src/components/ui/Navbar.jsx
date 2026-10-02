import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {

   



  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("token")
  );

  useEffect(() => {
    
    const handleAuthChange = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
    };

    window.addEventListener("authChange", handleAuthChange);

    return () => {
      window.removeEventListener("authChange", handleAuthChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");

    // Tell Navbar that authentication changed
    window.dispatchEvent(new Event("authChange"));

    navigate("/login");
  };
     console.log("Navbar logged in:", isLoggedIn);
console.log("Navbar token:", localStorage.getItem("token"));
  return (
    <nav className="flex items-center gap-6 p-2">
      <NavLink to="/" end>
        Home
      </NavLink>

      <NavLink to="/about">
        About
      </NavLink>

      <NavLink to="/services">
        Services
      </NavLink>

      <NavLink to="/blog">
        Blog
      </NavLink>

      <NavLink to="/contact">
        Contact
      </NavLink>

      {/* NOT LOGGED IN */}
      {!isLoggedIn && (
        <NavLink to="/login">
          <button className="rounded-full flex items-center justify-center cursor-pointer bg-blue-600 px-4 py-4 md:px-8 h-10 text-sm md:text-[16px] text-white hover:ring-2 hover:ring-primary/70 ring-offset-2 ring-offset-white transition-all hover:scale-[1.02] ring-transparent active:scale-[0.98] active:ring-primary overflow-hidden relative">Login</button>
        </NavLink>
      )}

      {/* LOGGED IN */}
      {isLoggedIn && (
        <>
          <NavLink to="/dashboard">
            Dashboard
          </NavLink>

          <button
            onClick={handleLogout}
            className="bg-black text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </>
      )}
    </nav>
  );
}

export default Navbar;