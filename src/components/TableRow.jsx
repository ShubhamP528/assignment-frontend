import girl from "../assets/Girl.png";
import boy from "../assets/Boy.png";
import { FaEdit, FaTrash } from "react-icons/fa"; // Importing edit and delete icons
import { useDispatch } from "react-redux";
import {
  deleteStudent,
  setDialog,
  setEditedData,
  setIsEdit,
} from "../features/students";
import { NODE_API_ENDPONINT } from "../utils/utils";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa"; // Spinner Icon

const TableRow = ({ student }) => {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);

  const dateFormatter = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const timeFormatter = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date)) return "Invalid Date"; // Fallback for invalid dates
    return `${dateFormatter.format(date)} ${timeFormatter.format(date)}`;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date)) return "Invalid Date"; // Fallback for invalid dates
    return date
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
      .replace(",", ".");
  };

  const onEdit = (student) => {
    dispatch(setDialog(true));
    dispatch(setIsEdit(true));
    dispatch(setEditedData(student));
  };

  const onDelete = async (id) => {
    setLoader(true);
    try {
      const deleteStd = await fetch(`${NODE_API_ENDPONINT}/students/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!deleteStd.ok) {
        const error = await deleteStd.json();
        alert(error);
        setLoader(false);
        return;
      }
      dispatch(deleteStudent(id));
    } catch (error) {
      console.log(error);
      alert("Error in deleting student");
    }
    setLoader(false);
  };

  return (
    <>
      {loader && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="flex items-center justify-center text-white text-3xl">
            <FaSpinner className="animate-spin mr-2" />
            Deleting...
          </div>
        </div>
      )}

      <tr
        className={`border-b-2 ${
          loader ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        <td className="py-2 px-4 text-nowrap">{student.name}</td>
        <td className="py-2 px-4 text-nowrap">{student.cohort}</td>
        <td className="py-2 px-4 text-nowrap flex items-center gap-2">
          <div className="flex items-center gap-2 mb-0 w-40 bg-gray-100 rounded">
            <img src={boy} alt={`${student.course} icon`} className="w-6 h-6" />
            {student.course + " Science"}
          </div>
          <div className="flex items-center gap-2 w-40 bg-gray-100 rounded">
            <img
              src={girl}
              alt={`${student.course} icon`}
              className="w-6 h-6"
            />
            {student.course + " Math"}
          </div>
        </td>
        <td className="py-2 px-4 text-nowrap">
          {formatDateTime(student.date_joined)}
        </td>
        <td className="py-2 px-4 text-nowrap">
          {formatDate(student.last_login)}
        </td>
        <td className="py-2 px-4 text-nowrap flex justify-center">
          <span
            className={`w-4 h-4 rounded-full inline-block ${
              student.status ? "bg-green-500" : "bg-red-500"
            }`}
          ></span>
        </td>
        <td className="py-2 px-4">
          <button
            onClick={() => onEdit(student)}
            className="text-blue-500 underline hover:text-blue-700 ml-2"
          >
            <FaEdit />
          </button>
          <button
            onClick={() => onDelete(student.id)}
            className="text-red-500 underline hover:text-red-700 ml-2"
          >
            <FaTrash />
          </button>
        </td>
      </tr>
    </>
  );
};

export default TableRow;
