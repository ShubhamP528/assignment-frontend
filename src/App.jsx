import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 bg-blue-50">
        <Header />
        <div className="p-4">
          {/* Dynamically Rendered Pages */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
