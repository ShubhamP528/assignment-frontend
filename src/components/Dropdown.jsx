// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { setCohort, setCourse } from "../features/filter";

// const Dropdown = ({ label, options, name }) => {
//   const dispatch = useDispatch();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "course") {
//       dispatch(setCourse(value));
//     } else if (name === "cohort") {
//       dispatch(setCohort(value));
//     }
//   };

//   return (
//     <div className="relative">
//       {/* <label className="block text-gray-700">{label}</label> */}
//       <select
//         name={name}
//         onChange={handleChange}
//         className="w-full px-4  py-2 border rounded-lg bg-gray-200"
//       >
//         {options.map((option, index) => (
//           <option key={index} value={option}>
//             {option}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default Dropdown;

import React from "react";
import { useDispatch } from "react-redux";
import { setCohort, setCourse } from "../features/filter";

const Dropdown = ({ label, options, name }) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "course") {
      dispatch(setCourse(value));
    } else if (name === "cohort") {
      dispatch(setCohort(value));
    }
  };

  return (
    <div className="relative">
      <select
        name={name}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg bg-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="" disabled selected>
          {label}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
