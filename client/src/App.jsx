import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ui/ProtectedRoute";
import GoogleSuccess from "./pages/GoogleSuccess";
import Home from "./pages/Home";
//import Navbar from "./components/ui/Navbar";
import MegaMenu from "./components/Navbar";
import About from "./pages/About";
import ServicesPage from "./pages/Services";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import BlogDetail from "./pages/BlogDetail";
import BlogAdmin from "./pages/BlogAdmin";
import Footer from "./components/Footer";





function NavbarLayout({ children }) {
  return (
    <>
      {/* Fixed Navbar */}
      <div className="fixed left-0 right-0 top-0 z-50 mx-auto my-4 flex w-full max-w-6xl items-center justify-between border border-gray-300 bg-white px-2.5 backdrop-blur-md rounded-none md:rounded-full">
        <MegaMenu />
      </div>

      {/* Page Content */}
      <main className="pt-24">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public routes */}

        <Route
          path="/"
          element={
            <NavbarLayout>
              <Home />
            </NavbarLayout>
          }
        />

        <Route
          path="/about"
          element={
            <NavbarLayout>
              <About />
            </NavbarLayout>
          }
        />

        <Route
          path="/services"
          element={
            <NavbarLayout>
              <ServicesPage />
            </NavbarLayout>
          }
        />

        <Route
          path="/blog"
          element={
            <NavbarLayout>
              <Blog />
            </NavbarLayout>
          }
        />

        <Route
          path="/blog/:id"
          element={
            <NavbarLayout>
              <BlogDetail />
            </NavbarLayout>
          }
        />

        <Route
          path="/contact"
          element={
            <NavbarLayout>
              <Contact />
            </NavbarLayout>
          }
        />

        {/* Authentication */}

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* Protected routes */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <NavbarLayout>
                <Dashboard />
              </NavbarLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/blog-admin"
          element={
            <ProtectedRoute>
              <NavbarLayout>
                <BlogAdmin />
              </NavbarLayout>
            </ProtectedRoute>
          }
        />





        {/* Google OAuth */}

        <Route
          path="/google-success"
          element={<GoogleSuccess />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;