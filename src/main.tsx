import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import App from './App';
// import { Login } from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
// import { EditTask } from "./pages/EditTask";
import './styles/theme';
import Login from "./pages/Login";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
          <Route path="/" element={<App />} />
          <Route path="/register" element={<Register />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/login" element={<Login />}/>
      </Routes>
    </Router>
  </React.StrictMode>
)
