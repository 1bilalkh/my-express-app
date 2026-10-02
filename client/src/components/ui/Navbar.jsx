import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

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

      {token && (
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