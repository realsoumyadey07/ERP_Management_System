import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import common from "../services/common";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import Register from "../pages/Register";
import Layout from "../layout";
import Dashboard from "../pages/Dashboard";
import AddUser from "../pages/AddUser";

export default function Navigation() {
  return (
    <BrowserRouter basename={common.getEnv("VITE_APPLICATION_NAME")}>
      <Routes>
        <Route index path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route element={<Layout/>}>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/add-user" element={<AddUser/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
