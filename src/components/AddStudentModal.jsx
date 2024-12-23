// import React, { useEffect, useState } from "react";
// import { FaSpinner, FaTimes } from "react-icons/fa";
// import { useDispatch, useSelector } from "react-redux";
// import { NODE_API_ENDPONINT } from "../utils/utils";
// import {
//   setData,
//   setDialog,
//   setEditedData,
//   setIsEdit,
//   setUpdatedData,
// } from "../features/students";

// const AddStudentModal = () => {
//   const isOpen = useSelector((state) => state.student.showDialog);
//   const isEdit = useSelector((state) => state.student.isEdit);
//   const [formData, setFormData] = useState({
//     name: "",
//     cohort: "",
//     course: "",
//     date_joined: "",
//     last_login: "",
//     status: false,
//   });
//   const studentsData = useSelector((state) => state.student.students);
//   const student = useSelector((state) => state.student.EditedData);
//   const dispatch = useDispatch();
//   const [loader, setLoader] = useState(false);

//   // Options for dropdowns
//   const cohortOptions = ["AY 2024-25", "AY 2023-24"];
//   const courseOptions = ["CBSE 9", "CBSE 10"];
//   const statusOptions = [true, false];

//   const onClose = () => {
//     dispatch(setDialog(false));
//     dispatch(setIsEdit(false));
//     dispatch(setEditedData({}));
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   // Function to format the ISO date to "YYYY-MM-DDTHH:MM" for <input type="datetime-local">
//   const formatDateForInput = (isoDate) => {
//     const date = new Date(isoDate);
//     const year = date.getFullYear();
//     const month = String(date.getMonth() + 1).padStart(2, "0");
//     const day = String(date.getDate()).padStart(2, "0");
//     const hours = String(date.getHours()).padStart(2, "0");
//     const minutes = String(date.getMinutes()).padStart(2, "0");
//     return `${year}-${month}-${day}T${hours}:${minutes}`;
//   };

//   useEffect(() => {
//     if (student) {
//       setFormData({
//         name: student.name,
//         cohort: student.cohort,
//         course: student.course,
//         date_joined: formatDateForInput(student.date_joined),
//         last_login: formatDateForInput(student.last_login),
//         status: student.status,
//         id: student.id,
//       });
//     }
//   }, [student]);

//   const handleNewStudent = async (formData) => {
//     setLoader(true);
//     try {
//       const data = await fetch(`${NODE_API_ENDPONINT}/students`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
//       if (!data.ok) {
//         const error = await data.json();
//         throw new Error(error);
//       }

//       const resp = await data.json();
//       console.log(resp);
//       dispatch(setData([...studentsData, resp]));
//     } catch (error) {
//       console.error("Error adding student: ", error);
//       alert("Failed to add student. Please try again later.");
//     }
//     setLoader(false);
//   };

//   const handleUpdatetudent = async (formData) => {
//     setLoader(true);
//     try {
//       const data = await fetch(
//         `${NODE_API_ENDPONINT}/students/${formData.id}`,
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         }
//       );
//       if (!data.ok) {
//         const error = await data.json();
//         throw new Error(error);
//       }

//       const resp = await data.json();
//       console.log(resp);
//       dispatch(setUpdatedData(resp));
//     } catch (error) {
//       console.error("Error adding student: ", error);
//       alert("Failed to add student. Please try again later.");
//     }
//     setLoader(false);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.name || !formData.cohort || !formData.course) {
//       alert("Please fill out all required fields!");
//       return;
//     }

//     // onAddStudent({
//     //   ...formData,
//     //   date_joined: new Date(formData.date_joined).toISOString(),
//     //   last_login: new Date(formData.last_login).toISOString(),
//     // });
//     isEdit
//       ? await handleUpdatetudent(formData)
//       : await handleNewStudent(formData);

//     console.log({
//       ...formData,
//       date_joined: new Date(formData.date_joined).toISOString(),
//       last_login: new Date(formData.last_login).toISOString(),
//     });

//     onClose(); // Close the modal after submission
//     setFormData({
//       name: "",
//       cohort: "",
//       course: "",
//       date_joined: "",
//       last_login: "",
//       status: false,
//     });
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//       <div className="bg-white p-6 rounded-lg w-1/2 max-h-[70vh] overflow-y-scroll relative">
//         {/* Top-right cancel icon */}
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//           aria-label="Close modal"
//         >
//           <FaTimes size={20} />
//         </button>

//         <h2 className="text-xl font-bold mb-4">
//           {isEdit ? "Edit Student Details" : "Add New Student"}
//         </h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block mb-1 font-semibold">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border rounded"
//               placeholder="Enter student name"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block mb-1 font-semibold">Cohort</label>
//             <select
//               name="cohort"
//               value={formData.cohort}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border rounded"
//               required
//             >
//               <option value="" disabled>
//                 Select cohort
//               </option>
//               {cohortOptions.map((option, index) => (
//                 <option key={index} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="mb-4">
//             <label className="block mb-1 font-semibold">Course</label>
//             <select
//               name="course"
//               value={formData.course}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border rounded"
//               required
//             >
//               <option value="" disabled>
//                 Select your course
//               </option>
//               {courseOptions.map((option, index) => (
//                 <option key={index} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="mb-4">
//             <label className="block mb-1 font-semibold">Date Joined</label>
//             <input
//               type="datetime-local"
//               name="date_joined"
//               value={formData.date_joined}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border rounded"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block mb-1 font-semibold">Last Login</label>
//             <input
//               type="datetime-local"
//               name="last_login"
//               value={formData.last_login}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border rounded"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block mb-1 font-semibold">Status</label>
//             <select
//               name="status"
//               value={formData.status}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border rounded"
//             >
//               {statusOptions.map((option, index) => (
//                 <option key={index} value={option}>
//                   {option ? "true" : "false"}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="flex justify-end space-x-4">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//             >
//               {/* {isEdit ? "Update Student" : "Add Student"} */}
//               {loader ? (
//                 <FaSpinner className="animate-spin inline mr-2" />
//               ) : isEdit ? (
//                 "Update Student"
//               ) : (
//                 "Add Student"
//               )}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddStudentModal;

import React, { useEffect, useState } from "react";
import { FaSpinner, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { NODE_API_ENDPONINT } from "../utils/utils";
import {
  setData,
  setDialog,
  setEditedData,
  setIsEdit,
  setUpdatedData,
} from "../features/students";

const AddStudentModal = () => {
  const isOpen = useSelector((state) => state.student.showDialog);
  const isEdit = useSelector((state) => state.student.isEdit);
  const [formData, setFormData] = useState({
    name: "",
    cohort: "",
    course: "",
    date_joined: "",
    last_login: "",
    status: false,
  });
  const studentsData = useSelector((state) => state.student.students);
  const student = useSelector((state) => state.student.EditedData);
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);

  const cohortOptions = ["AY 2024-25", "AY 2023-24"];
  const courseOptions = ["CBSE 9", "CBSE 10"];
  const statusOptions = [true, false];

  const onClose = () => {
    dispatch(setDialog(false));
    dispatch(setIsEdit(false));
    dispatch(setEditedData({}));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const formatDateForInput = (isoDate) => {
    const date = new Date(isoDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  useEffect(() => {
    if (student) {
      setFormData({
        name: student.name,
        cohort: student.cohort,
        course: student.course,
        date_joined: formatDateForInput(student.date_joined),
        last_login: formatDateForInput(student.last_login),
        status: student.status,
        id: student.id,
      });
    }
  }, [student]);

  const handleNewStudent = async (formData) => {
    setLoader(true);
    try {
      const data = await fetch(`${NODE_API_ENDPONINT}/students`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!data.ok) {
        const error = await data.json();
        throw new Error(error);
      }

      const resp = await data.json();
      dispatch(setData([...studentsData, resp]));
    } catch (error) {
      alert("Failed to add student. Please try again later.");
    }
    setLoader(false);
  };

  const handleUpdatetudent = async (formData) => {
    setLoader(true);
    try {
      const data = await fetch(
        `${NODE_API_ENDPONINT}/students/${formData.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (!data.ok) {
        const error = await data.json();
        throw new Error(error);
      }

      const resp = await data.json();
      dispatch(setUpdatedData(resp));
    } catch (error) {
      alert("Failed to update student. Please try again later.");
    }
    setLoader(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.cohort || !formData.course) {
      alert("Please fill out all required fields!");
      return;
    }

    isEdit
      ? await handleUpdatetudent(formData)
      : await handleNewStudent(formData);

    onClose();
    setFormData({
      name: "",
      cohort: "",
      course: "",
      date_joined: "",
      last_login: "",
      status: false,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full sm:w-3/4 md:w-1/2 lg:w-1/3 max-h-screen overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          aria-label="Close modal"
        >
          <FaTimes size={20} />
        </button>

        <h2 className="text-xl sm:text-2xl font-bold mb-4">
          {isEdit ? "Edit Student Details" : "Add New Student"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 font-semibold text-sm sm:text-base">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded text-sm sm:text-base"
              placeholder="Enter student name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-semibold text-sm sm:text-base">
              Cohort
            </label>
            <select
              name="cohort"
              value={formData.cohort}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded text-sm sm:text-base"
              required
            >
              <option value="" disabled>
                Select cohort
              </option>
              {cohortOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-semibold text-sm sm:text-base">
              Course
            </label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded text-sm sm:text-base"
              required
            >
              <option value="" disabled>
                Select your course
              </option>
              {courseOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-semibold text-sm sm:text-base">
              Date Joined
            </label>
            <input
              type="datetime-local"
              name="date_joined"
              value={formData.date_joined}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded text-sm sm:text-base"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-semibold text-sm sm:text-base">
              Last Login
            </label>
            <input
              type="datetime-local"
              name="last_login"
              value={formData.last_login}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded text-sm sm:text-base"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-semibold text-sm sm:text-base">
              Status
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded text-sm sm:text-base"
            >
              {statusOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option ? "true" : "false"}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 text-sm sm:text-base"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm sm:text-base"
            >
              {loader ? (
                <FaSpinner className="animate-spin inline mr-2" />
              ) : isEdit ? (
                "Update Student"
              ) : (
                "Add Student"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudentModal;
