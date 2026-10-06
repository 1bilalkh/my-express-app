import { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X, } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const FlipLink = ({ children, to, onClick }) => {
  const content = (
    <motion.div
      onClick={onClick}
      className="relative h-6 overflow-hidden leading-6"
      initial="initial"
      whileHover="hovered"
    >
      <motion.span
        className="block"
        variants={{
          initial: { y: 0 },
          hovered: { y: -24 },
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.span>

      <motion.span
        className="absolute left-0 top-6 block"
        variants={{
          initial: { y: 0 },
          hovered: { y: -24 },
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.span>
    </motion.div>
  );

  return to ? <Link to={to}>{content}</Link> : content;
};

const MegaMenu = () => {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const menuRef = useRef(null);
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("token")
  );

 useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target)
    ) {
      setOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener(
      "mousedown",
      handleClickOutside
    );
  };
}, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.dispatchEvent(new Event("authChange"));
    navigate("/login");
  };

  return (
    <div className="relative w-full" ref={menuRef}>

      {/* ================= NAVBAR ================= */}
      <nav className="bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">

          {/* LOGO */}
          <NavLink
            to="/"
            end
            onClick={() => setMobileOpen(false)}
            className="flex shrink-0 items-center"
          >
            <div className="rounded-sm bg-blue-600 px-2 py-1 text-xl font-bold text-white">
              LOGO
            </div>
          </NavLink>

          {/* ================= DESKTOP NAV ================= */}
          <div className="hidden items-center gap-8 lg:flex">

            <FlipLink to="/">
              HOME
            </FlipLink>

            <FlipLink to="/about">
              ABOUT
            </FlipLink>

            {/* SERVICES */}
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="flex h-6 items-center gap-1 text-sm font-medium"
            >
              <FlipLink>
                SERVICES
              </FlipLink>

              <ChevronDown
                size={15}
                strokeWidth={1.8}
                className={`transition-transform duration-300 ${open ? "rotate-180" : ""
                  }`}
              />
            </button>

            <FlipLink to="/blog">
              BLOG
            </FlipLink>

            <FlipLink to="/contact">
              CONTACT
            </FlipLink>
          </div>

          {/* ================= DESKTOP RIGHT ================= */}
          <div className="hidden items-center gap-5 lg:flex">

            {!isLoggedIn && (
              <NavLink
                to="/login"
                className="flex h-10 items-center justify-center rounded-full bg-blue-600 px-6 text-sm font-medium text-white transition-all hover:scale-[1.02] hover:ring-2 hover:ring-blue-600/40 hover:ring-offset-2 active:scale-[0.98]"
              >
                Login
              </NavLink>
            )}

            {isLoggedIn && (
              <>
                <FlipLink to="/dashboard">
                  DASHBOARD
                </FlipLink>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="flex h-10 items-center justify-center rounded-full border border-black px-5 text-sm font-medium transition-colors hover:bg-black hover:text-white"
                >
                  Logout
                </button>
              </>
            )}
          </div>

          {/* ================= MOBILE/TABLET BUTTON ================= */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 lg:hidden"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>

        </div>

        {/* ================= MOBILE MENU ================= */}
        {mobileOpen && (
          <div className="border-t bg-white lg:hidden">

            <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">

              <div className="flex flex-col">

                {/* HOME */}
                <NavLink
                  to="/"
                  end
                  onClick={() => setMobileOpen(false)}
                  className="border-b py-4 text-sm font-medium"
                >
                  HOME
                </NavLink>

                {/* ABOUT */}
                <NavLink
                  to="/about"
                  onClick={() => setMobileOpen(false)}
                  className="border-b py-4 text-sm font-medium"
                >
                  ABOUT
                </NavLink>

                {/* SERVICES */}
                <div className="border-b">

                  <button
                    type="button"
                    onClick={() =>
                      setMobileServicesOpen((prev) => !prev)
                    }
                    className="flex w-full items-center justify-between py-4 text-sm font-medium"
                  >
                    SERVICES

                    <ChevronDown
                      size={17}
                      className={`transition-transform duration-300 ${mobileServicesOpen
                          ? "rotate-180"
                          : ""
                        }`}
                    />
                  </button>

                  {/* MOBILE SERVICES */}
                  {mobileServicesOpen && (
                    <div className="pb-4 pl-4">

                      <Link
                        to="/ui-ux"
                        onClick={() => setMobileOpen(false)}
                        className="block py-2 text-sm text-gray-600"
                      >
                        UI/UX Design
                      </Link>

                      <Link
                        to="/web-design"
                        onClick={() => setMobileOpen(false)}
                        className="block py-2 text-sm text-gray-600"
                      >
                        Web Design
                      </Link>

                      <Link
                        to="/branding"
                        onClick={() => setMobileOpen(false)}
                        className="block py-2 text-sm text-gray-600"
                      >
                        Branding
                      </Link>

                      <Link
                        to="/react"
                        onClick={() => setMobileOpen(false)}
                        className="block py-2 text-sm text-gray-600"
                      >
                        React Development
                      </Link>

                      <Link
                        to="/node"
                        onClick={() => setMobileOpen(false)}
                        className="block py-2 text-sm text-gray-600"
                      >
                        Node.js
                      </Link>

                      <Link
                        to="/mern"
                        onClick={() => setMobileOpen(false)}
                        className="block py-2 text-sm text-gray-600"
                      >
                        MERN Stack
                      </Link>

                    </div>
                  )}
                </div>

                {/* BLOG */}
                <NavLink
                  to="/blog"
                  onClick={() => setMobileOpen(false)}
                  className="border-b py-4 text-sm font-medium"
                >
                  BLOG
                </NavLink>

                {/* CONTACT */}
                <NavLink
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="border-b py-4 text-sm font-medium"
                >
                  CONTACT
                </NavLink>

                {/* LOGIN */}
                {!isLoggedIn && (
                  <NavLink
                    to="/login"
                    onClick={() => setMobileOpen(false)}
                    className="mt-5 flex h-10 items-center justify-center rounded-full bg-blue-600 text-sm font-medium text-white"
                  >
                    Login
                  </NavLink>
                )}

                {/* LOGGED IN */}
                {isLoggedIn && (
                  <div className="mt-5 flex flex-col gap-3">

                    <NavLink
                      to="/dashboard"
                      onClick={() => setMobileOpen(false)}
                      className="flex h-10 items-center justify-center rounded-full bg-black text-sm font-medium text-white"
                    >
                      Dashboard
                    </NavLink>

                    <button
                      type="button"
                      onClick={() => {
                        handleLogout();
                        setMobileOpen(false);
                      }}
                      className="flex h-10 items-center justify-center rounded-full border border-black text-sm font-medium"
                    >
                      Logout
                    </button>

                  </div>
                )}

              </div>
            </div>
          </div>
        )}
      </nav>

      {/* ================= MEGA MENU ================= */}
      {open && (
        <div className="absolute left-0 right-0 top-full z-50 border-b bg-white shadow-lg">

          <div className="mx-auto max-w-7xl px-6 py-10">

            <div className="grid grid-cols-4 gap-10">

              {/* COLUMN 1 */}
              <div>
                <h3 className="mb-4 text-sm font-semibold">
                  Design
                </h3>

                <div className="space-y-3">
                  <Link
                    to="/ui-ux"
                    className="block text-sm text-gray-600 transition-colors hover:text-black"
                  >
                    UI/UX Design
                  </Link>

                  <Link
                    to="/web-design"
                    className="block text-sm text-gray-600 transition-colors hover:text-black"
                  >
                    Web Design
                  </Link>

                  <Link
                    to="/branding"
                    className="block text-sm text-gray-600 transition-colors hover:text-black"
                  >
                    Branding
                  </Link>
                </div>
              </div>

              {/* COLUMN 2 */}
              <div>
                <h3 className="mb-4 text-sm font-semibold">
                  Development
                </h3>

                <div className="space-y-3">
                  <Link
                    to="/react"
                    className="block text-sm text-gray-600 transition-colors hover:text-black"
                  >
                    React Development
                  </Link>

                  <Link
                    to="/node"
                    className="block text-sm text-gray-600 transition-colors hover:text-black"
                  >
                    Node.js
                  </Link>

                  <Link
                    to="/mern"
                    className="block text-sm text-gray-600 transition-colors hover:text-black"
                  >
                    MERN Stack
                  </Link>
                </div>
              </div>

              {/* COLUMN 3 */}
              <div>
                <h3 className="mb-4 text-sm font-semibold">
                  Services
                </h3>

                <div className="space-y-3">
                  <Link
                    to="/frontend"
                    className="block text-sm text-gray-600 transition-colors hover:text-black"
                  >
                    Frontend Development
                  </Link>

                  <Link
                    to="/backend"
                    className="block text-sm text-gray-600 transition-colors hover:text-black"
                  >
                    Backend Development
                  </Link>

                  <Link
                    to="/api"
                    className="block text-sm text-gray-600 transition-colors hover:text-black"
                  >
                    REST API
                  </Link>
                </div>
              </div>

              {/* COLUMN 4 */}
              <div className="rounded-xl bg-gray-100 p-6">
                <p className="mb-2 text-sm font-semibold">
                  Let's build something
                </p>

                <p className="mb-5 text-sm leading-6 text-gray-600">
                  Modern websites and applications built with
                  React, Node.js and MongoDB.
                </p>

                <Link
                  to="/contact"
                  className="inline-flex rounded-full bg-black px-5 py-2.5 text-sm text-white transition-transform hover:scale-[1.02]"
                >
                  Contact Me
                </Link>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MegaMenu;