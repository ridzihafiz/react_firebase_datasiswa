import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddStudent from "./pages/AddStudent";
import ListStudent from "./pages/ListStudent";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Login</h1>} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<ListStudent />} />
        <Route path="/dashboard/add" element={<AddStudent />} />
      </Route>
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
    </Routes>
  );
}
