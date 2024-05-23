import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import GroupRequests from './components/GroupRequests';
import Users from './components/Users';
import AddAdmin from './components/AddAdmin';
import Login from './components/Login';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        {isAuthenticated ? (
          <>
            <Route path="/" element={<Home onLogout={handleLogout} />} />
            <Route path="/group-requests" element={<GroupRequests />} />
            <Route path="/users" element={<Users />} />
            <Route path="/add-admin" element={<AddAdmin />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
