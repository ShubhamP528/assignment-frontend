// import { useDispatch } from "react-redux";
// import { setDialog } from "../features/students";

// const AddButton = () => {
//   const dispatch = useDispatch();

//   const handleOnclick = () => {
//     dispatch(setDialog(true));
//   };

//   return (
//     <button
//       onClick={handleOnclick}
//       className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg font-bold text-lg"
//     >
//       <span className="text-2xl">+</span> Add new Student
//     </button>
//   );
// };

// export default AddButton;

import { useDispatch } from "react-redux";
import { setDialog } from "../features/students";

const AddButton = () => {
  const dispatch = useDispatch();

  const handleOnclick = () => {
    dispatch(setDialog(true));
  };

  return (
    <button
      onClick={handleOnclick}
      className="px-6 py-2 bg-gray-300 text-black rounded-lg font-semibold text-lg focus:outline-none focus:ring-2  transition"
    >
      <span className="text-2xl mr-2">+</span> Add New Student
    </button>
  );
};

export default AddButton;
