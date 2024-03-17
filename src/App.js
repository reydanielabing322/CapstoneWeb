import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Managerdb from "./pages/Managerdb";
import Register from "./pages/Register";
import Users from "./pages/Users";
import { AuthContext } from "./authentication/AuthContext";
import { useContext } from "react";

function App() {

  const{currentUser} = useContext(AuthContext)

 console.log(currentUser);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route
          path="/managerdb"
          element={
            <RequireAuth>
              <Managerdb />
            </RequireAuth>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/users"
          element={
            <RequireAuth>
              <Users />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
