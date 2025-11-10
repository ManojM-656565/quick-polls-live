import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Polls from "./pages/Polls";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import ManagePoll from "./pages/ManagePoll";
import Dashboard from "./pages/Dashboard";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";
import { useDashboardStore } from "./store/useDashboard";

export default function App() {
  const { user, checkAuth } = useAuthStore();
  const { listenForUpdates } = useDashboardStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    listenForUpdates();
  }, []);
  return (
    <BrowserRouter>
      <Toaster />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 p-6">
          <Routes>
            <Route
              path="/manage"
              element={user ? <ManagePoll /> : <Navigate to="/login" replace />}
            />
            <Route
              path="/dashboard"
              element={user ? <Dashboard /> : <Navigate to="/login" replace />}
            />
            <Route
              path="/polls"
              element={user ? <Polls /> : <Navigate to="/login" replace />}
            />

            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/dashboard" replace />}
            />
            <Route
              path="/register"
              element={
                !user ? <Register /> : <Navigate to="/dashboard" replace />
              }
            />

            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
