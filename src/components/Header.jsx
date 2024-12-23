// import { useState } from "react"; // Import useState to manage notifications
// import Avatar from "../assets/Avatar Image.png";
// import notification from "../assets/Notification.png";
// import Setting from "../assets/settings.png";
// import message from "../assets/message.png";
// import help from "../assets/help.png";
// // import redSpot from "../assets/RedSpot.png"; // You can use this for the red spot or use CSS.
// import searchIcon from "../assets/Search.png";

// const Header = () => {
//   // State to manage unread notifications/messages
//   const [hasNotification, setHasNotification] = useState(true); // Example state for notification
//   const [hasMessage, setHasMessage] = useState(true); // Example state for message

//   return (
//     <div className="flex justify-between items-center bg-blue-50 p-4 ">
//       <div className="relative w-1/2">
//         <input
//           type="text"
//           placeholder="Search your course"
//           className="w-full px-4 py-2 border rounded-lg pl-10" // Added padding for the icon
//         />
//         <img
//           src={searchIcon}
//           alt="Search"
//           className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" // Positioned search icon inside the input box
//         />
//       </div>

//       <div className="flex items-center space-x-12">
//         <button className="text-gray-600">
//           <img className=" w-8 h-8" src={help} alt="Help" />
//         </button>
//         <button className="text-gray-600 relative">
//           <img className="w-8 h-8" src={message} alt="Messages" />
//           {hasMessage && (
//             <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full" />
//           )}
//         </button>
//         <button className="text-gray-600">
//           <img className="w-8 h-8" src={Setting} alt="Settings" />
//         </button>
//         <button className="text-gray-600 relative">
//           <img className="w-8 h-8" src={notification} alt="Notifications" />
//           {hasNotification && (
//             <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full" />
//           )}
//         </button>
//         <div className="flex items-center space-x-2">
//           <img src={Avatar} alt="User" className="rounded w-10 h-10" />
//           <span className="text-black font-semibold pl-6">
//             Adeline H. Dancy
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

import { useState } from "react";
import Avatar from "../assets/Avatar Image.png";
import notification from "../assets/Notification.png";
import Setting from "../assets/settings.png";
import message from "../assets/message.png";
import help from "../assets/help.png";
import searchIcon from "../assets/Search.png";

const Header = () => {
  // State to manage unread notifications/messages
  const [hasNotification, setHasNotification] = useState(true); // Example state for notifications
  const [hasMessage, setHasMessage] = useState(true); // Example state for messages

  return (
    <div className="flex flex-wrap justify-between items-center bg-blue-50 p-4 ml-10">
      {/* Search Bar */}
      <div className="relative w-full sm:w-1/2 mb-4 sm:mb-0 ">
        <input
          type="text"
          placeholder="Search your course"
          className="w-full px-4 py-2 border rounded-lg pl-10 text-gray-700"
        />
        <img
          src={searchIcon}
          alt="Search"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
        />
      </div>

      {/* Icons and User Info */}
      <div className="flex items-center space-x-4 sm:space-x-8">
        <button className="text-gray-600 hover:text-black">
          <img className="w-8 h-8" src={help} alt="Help" />
        </button>
        <button className="relative text-gray-600 hover:text-black">
          <img className="w-8 h-8" src={message} alt="Messages" />
          {hasMessage && (
            <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full" />
          )}
        </button>
        <button className="text-gray-600 hover:text-black">
          <img className="w-8 h-8" src={Setting} alt="Settings" />
        </button>
        <button className="relative text-gray-600 hover:text-black">
          <img className="w-8 h-8" src={notification} alt="Notifications" />
          {hasNotification && (
            <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full" />
          )}
        </button>

        {/* User Avatar and Name */}
        <div className="flex items-center space-x-2">
          <img src={Avatar} alt="User" className="rounded-full w-10 h-10" />
          <span className="hidden sm:block text-black font-semibold">
            Adeline H. Dancy
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
