import { 
  BrowserRouter, 
  Navigate, 
  Route, 
  Routes 
} from "react-router-dom";
import common from "../services/common";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import Register from "../pages/Register";

export default function Navigation() {
  return (
    <BrowserRouter basename={common.getEnv('VITE_APPLICATION_NAME')}>
    <Routes>
        <Route path="/" element={<Navigate to="/login"/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
    </Routes>
    </BrowserRouter>
  )
}
