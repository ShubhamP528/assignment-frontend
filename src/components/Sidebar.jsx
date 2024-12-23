// import dashboard from "../assets/Dashboard.png";
// import student from "../assets/Student_w.png";
// import chapter from "../assets/Chapter.png";
// import help from "../assets/help.png";
// import report from "../assets/Report.png";
// import settings from "../assets/settings.png";
// import logo from "../assets/Vector.png";

// // black icons
// import dashboard_b from "../assets/Dashboard_b.png";
// import student_b from "../assets/Students.png";
// import chapter_b from "../assets/Chapter_b.png";
// import help_b from "../assets/Help_b.png";
// import report_b from "../assets/Report_b.png";
// import settings_b from "../assets/Setting_b.png";

// import { useLocation, useNavigate } from "react-router-dom";

// const Sidebar = () => {
//   const location = useLocation();
//   const path = location.pathname; // Current route path
//   const navigate = useNavigate();

//   // Navigation items with routes, white icons, and black icons
//   const navItems = [
//     {
//       name: "Dashboard",
//       route: "/dashboard",
//       icon: dashboard,
//       iconActive: dashboard_b,
//     },
//     {
//       name: "Students",
//       route: "/students",
//       icon: student,
//       iconActive: student_b,
//     },
//     {
//       name: "Chapter",
//       route: "/chapter",
//       icon: chapter,
//       iconActive: chapter_b,
//     },
//     { name: "Help", route: "/help", icon: help, iconActive: help_b },
//     { name: "Reports", route: "/reports", icon: report, iconActive: report_b },
//     {
//       name: "Settings",
//       route: "/settings",
//       icon: settings,
//       iconActive: settings_b,
//     },
//   ];

//   return (
//     <div className="w-64 h-screen bg-white text-black p-4 flex flex-col">
//       {/* Logo */}
//       <h1 className="text-3xl font-bold mb-6">
//         <img src={logo} alt="logo" className="h-11" />
//       </h1>

//       {/* Navigation */}
//       <ul className="space-y-7 font-semibold">
//         {navItems.map((item) => (
//           <li
//             key={item.route}
//             className={`flex items-center cursor-pointer text-xl ${
//               path === item.route ? "text-black" : "text-gray-300"
//             }`}
//             onClick={() => navigate(item.route)}
//           >
//             {/* Icon */}
//             <img
//               src={path === item.route ? item.iconActive : item.icon}
//               alt={item.name}
//               className="h-6 w-6"
//             />
//             {/* Text */}
//             <span className="ml-4">{item.name}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

import React, { useState } from "react";
import dashboard from "../assets/Dashboard.png";
import student from "../assets/Student_w.png";
import chapter from "../assets/Chapter.png";
import help from "../assets/help.png";
import report from "../assets/Report.png";
import settings from "../assets/settings.png";
import logo from "../assets/Vector.png";

// Black icons
import dashboard_b from "../assets/Dashboard_b.png";
import student_b from "../assets/Students.png";
import chapter_b from "../assets/Chapter_b.png";
import help_b from "../assets/Help_b.png";
import report_b from "../assets/Report_b.png";
import settings_b from "../assets/Setting_b.png";

import { useLocation, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation();
  const path = location.pathname; // Current route path
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false); // Sidebar toggle state

  // Navigation items with routes, white icons, and black icons
  const navItems = [
    {
      name: "Dashboard",
      route: "/dashboard",
      icon: dashboard,
      iconActive: dashboard_b,
    },
    {
      name: "Students",
      route: "/students",
      icon: student,
      iconActive: student_b,
    },
    {
      name: "Chapter",
      route: "/chapter",
      icon: chapter,
      iconActive: chapter_b,
    },
    { name: "Help", route: "/help", icon: help, iconActive: help_b },
    { name: "Reports", route: "/reports", icon: report, iconActive: report_b },
    {
      name: "Settings",
      route: "/settings",
      icon: settings,
      iconActive: settings_b,
    },
  ];

  return (
    <div className="relative">
      {/* Hamburger Menu for Mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-4 left-4 sm:hidden z-50"
        aria-label="Toggle Sidebar"
      >
        <FaBars size={24} className="text-gray-700" />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed sm:relative top-0 left-0 z-40 h-screen bg-white text-black p-4 flex flex-col shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 w-64`}
      >
        {/* Logo */}
        <h1 className="text-3xl font-bold mb-6 ml-8">
          <img src={logo} alt="logo" className="h-11" />
        </h1>

        {/* Navigation */}
        <ul className="space-y-7 font-semibold">
          {navItems.map((item) => (
            <li
              key={item.route}
              className={`flex items-center cursor-pointer text-xl p-2 rounded-lg transition-colors ${
                path === item.route
                  ? "bg-blue-100 text-black"
                  : "text-gray-400 hover:bg-gray-100"
              }`}
              onClick={() => navigate(item.route)}
            >
              {/* Icon */}
              <img
                src={path === item.route ? item.iconActive : item.icon}
                alt={item.name}
                className="h-6 w-6"
              />
              {/* Text */}
              <span className="ml-4">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 sm:hidden z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
