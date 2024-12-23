// // /* eslint-disable react/prop-types */
// // import React, { useEffect, useState } from "react";
// // import TableRow from "./TableRow";
// // import AddStudentModal from "./AddStudentModal";
// // import { useDispatch, useSelector } from "react-redux";
// // import { setDialog } from "../features/students";

// // const StudentTable = ({ loading }) => {
// //   const studentsData = useSelector((state) => state.student.students);
// //   const courseData = useSelector((state) => state.filter.course);
// //   const cohortData = useSelector((state) => state.filter.cohort);
// //   const [filteredData, setFilteredData] = useState([]);
// //   // console.log(studentsData);

// //   console.log(courseData, cohortData);

// //   useEffect(() => {
// //     const filterStudent = studentsData.filter((student) => {
// //       return student.course === courseData && student.cohort === cohortData;
// //     });
// //     console.log(filterStudent);
// //     setFilteredData(filterStudent);
// //   }, [courseData, cohortData, studentsData]);

// //   const dispatch = useDispatch();

// //   const handleOpen = () => {
// //     dispatch(setDialog(false));
// //   };

// //   const shimmerRow = (
// //     <tr className="border-b-2">
// //       <td className="py-2 px-4">
// //         <div className="flex justify-center items-center">
// //           <div className="h-6 w-24 shimmer rounded-md"></div>
// //         </div>
// //       </td>
// //       <td className="py-2 px-4">
// //         <div className="flex justify-center items-center">
// //           <div className="h-6 w-20 shimmer rounded-md"></div>
// //         </div>
// //       </td>
// //       <td className="py-2 px-4">
// //         <div className="flex justify-center items-center">
// //           <div className="h-6 w-32 shimmer rounded-md"></div>
// //         </div>
// //       </td>
// //       <td className="py-2 px-4">
// //         <div className="flex justify-center items-center">
// //           <div className="h-6 w-40 shimmer rounded-md"></div>
// //         </div>
// //       </td>
// //       <td className="py-2 px-4">
// //         <div className="flex justify-center items-center">
// //           <div className="h-6 w-28 shimmer rounded-md"></div>
// //         </div>
// //       </td>
// //       <td className="py-2 px-4">
// //         <div className="flex justify-center items-center">
// //           <div className="h-4 w-4 shimmer rounded-full"></div>
// //         </div>
// //       </td>
// //       <td className="py-2 px-4">
// //         <div className="flex justify-center items-center">
// //           <div className="h-4 w-4 shimmer rounded-full"></div>
// //         </div>
// //       </td>
// //     </tr>
// //   );

// //   return (
// //     <div className="overflow-y-auto max-h-[70vh] rounded-md scrollbar-hide mt-7">
// //       <table className="min-w-full bg-white border-collapse">
// //         <thead className="sticky top-0 z-10 bg-white">
// //           <tr className="border-b-2">
// //             <th className="py-2 px-4 text-left">Student Name</th>
// //             <th className="py-2 px-4 text-left">Cohort</th>
// //             <th className="py-2 px-4 text-left">Courses</th>
// //             <th className="py-2 px-4 text-left">Date Joined</th>
// //             <th className="py-2 px-4 text-left">Last Login</th>
// //             <th className="py-2 px-4 text-left">Status</th>
// //             <th className="py-2 px-4 text-left">Action</th>
// //             <AddStudentModal onClose={handleOpen} isEdit={false} />
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {loading
// //             ? Array.from({ length: 20 }).map((_, index) => (
// //                 <React.Fragment key={index}>{shimmerRow}</React.Fragment>
// //               ))
// //             : filteredData.map((student, index) => (
// //                 <TableRow key={index} student={student} />
// //               ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default StudentTable;

// import React, { useEffect, useState } from "react";
// import TableRow from "./TableRow";
// import AddStudentModal from "./AddStudentModal";
// import { useDispatch, useSelector } from "react-redux";
// import { setDialog } from "../features/students";

// const StudentTable = ({ loading }) => {
//   const studentsData = useSelector((state) => state.student.students);
//   const courseData = useSelector((state) => state.filter.course);
//   const cohortData = useSelector((state) => state.filter.cohort);
//   const [filteredData, setFilteredData] = useState([]);

//   useEffect(() => {
//     const filterStudent = studentsData.filter((student) => {
//       return student.course === courseData && student.cohort === cohortData;
//     });
//     setFilteredData(filterStudent);
//   }, [courseData, cohortData, studentsData]);

//   const shimmerRow = (
//     <tr className="border-b-2">
//       {Array(7)
//         .fill(null)
//         .map((_, index) => (
//           <td key={index} className="py-2 px-4">
//             <div className="flex justify-center items-center">
//               <div className="h-6 w-24 shimmer rounded-md"></div>
//             </div>
//           </td>
//         ))}
//     </tr>
//   );

//   return (
//     <div className="overflow-x-auto max-h-[70vh] rounded-md scrollbar-hide mt-7">
//       <table className="min-w-full table-auto bg-white border-collapse">
//         <thead className="sticky top-0 z-10 bg-white">
//           <tr className="border-b-2">
//             <th className="py-2 px-4 text-left text-sm sm:text-base">
//               Student Name
//             </th>
//             <th className="py-2 px-4 text-left text-sm sm:text-base">Cohort</th>
//             <th className="py-2 px-4 text-left text-sm sm:text-base">
//               Courses
//             </th>
//             <th className="py-2 px-4 text-left text-sm sm:text-base">
//               Date Joined
//             </th>
//             <th className="py-2 px-4 text-left text-sm sm:text-base">
//               Last Login
//             </th>
//             <th className="py-2 px-4 text-left text-sm sm:text-base">Status</th>
//             <th className="py-2 px-4 text-left text-sm sm:text-base">Action</th>
//             <AddStudentModal />
//           </tr>
//         </thead>
//         <tbody>
//           {loading
//             ? Array.from({ length: 10 }).map((_, index) => (
//                 <React.Fragment key={index}>{shimmerRow}</React.Fragment>
//               ))
//             : filteredData.map((student, index) => (
//                 <TableRow key={index} student={student} />
//               ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default StudentTable;

// import React, { useEffect, useState } from "react";
// import TableRow from "./TableRow";
// import AddStudentModal from "./AddStudentModal";
// import { useDispatch, useSelector } from "react-redux";
// import { setDialog } from "../features/students";

// const StudentTable = ({ loading }) => {
//   const studentsData = useSelector((state) => state.student.students);
//   const courseData = useSelector((state) => state.filter.course);
//   const cohortData = useSelector((state) => state.filter.cohort);
//   const [filteredData, setFilteredData] = useState([]);

//   useEffect(() => {
//     const filterStudent = studentsData.filter((student) => {
//       return student.course === courseData && student.cohort === cohortData;
//     });
//     setFilteredData(filterStudent);
//   }, [courseData, cohortData, studentsData]);

//   const shimmerRow = (
//     <tr className="border-b-2">
//       {Array(7)
//         .fill(null)
//         .map((_, index) => (
//           <td key={index} className="py-2 px-4">
//             <div className="flex justify-center items-center">
//               <div className="h-6 w-24 shimmer rounded-md"></div>
//             </div>
//           </td>
//         ))}
//     </tr>
//   );

//   return (
//     <div className=" rounded-md mt-7">
//       <table className="bg-white overflow-scroll">
//         <thead className="sticky top-0 z-10 bg-white">
//           <tr className="border-b-2">
//             <th className="py-2 px-4 text-left text-nowrap text-sm sm:text-base">
//               Student Name
//             </th>
//             <th className="py-2 px-4 text-left text-nowrap  text-sm sm:text-base">
//               Cohort
//             </th>
//             <th className="py-2 px-4 text-left text-sm sm:text-base">
//               Courses
//             </th>
//             <th className="py-2 px-4 text-left text-nowrap text-sm sm:text-base">
//               Date Joined
//             </th>
//             <th className="py-2 px-4 text-left text-nowrap text-sm sm:text-base">
//               Last Login
//             </th>
//             <th className="py-2 px-4 text-left text-nowrap text-sm sm:text-base">
//               Status
//             </th>
//             <th className="py-2 px-4 text-left text-nowrap text-sm sm:text-base">
//               Action
//             </th>
//             <AddStudentModal />
//           </tr>
//         </thead>
//         <tbody>
//           {loading
//             ? Array.from({ length: 10 }).map((_, index) => (
//                 <React.Fragment key={index}>{shimmerRow}</React.Fragment>
//               ))
//             : filteredData.map((student, index) => (
//                 <TableRow key={index} student={student} />
//               ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default StudentTable;

import React, { useEffect, useState } from "react";
import TableRow from "./TableRow";
import AddStudentModal from "./AddStudentModal";
import { useSelector } from "react-redux";

const StudentTable = ({ loading }) => {
  const studentsData = useSelector((state) => state.student.students);
  const courseData = useSelector((state) => state.filter.course);
  const cohortData = useSelector((state) => state.filter.cohort);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filterStudent = studentsData.filter(
      (student) =>
        student.course === courseData && student.cohort === cohortData
    );
    setFilteredData(filterStudent);
  }, [courseData, cohortData, studentsData]);

  const shimmerRow = (
    <tr className="border-b-2">
      {Array(7)
        .fill(null)
        .map((_, index) => (
          <td key={index} className="py-1 px-2">
            <div className="flex justify-center items-center">
              <div className="h-6 w-20 shimmer rounded-md"></div>
            </div>
          </td>
        ))}
    </tr>
  );

  return (
    <div className="overflow-x-auto rounded-md mt-4">
      <table className="min-w-full table-auto bg-white border-collapse">
        <thead className="sticky top-0 z-10 bg-white">
          <tr className="border-b-2">
            <th className="py-1 px-2 text-left text-xs sm:text-sm md:text-base">
              Student Name
            </th>
            <th className="py-1 px-2 text-left text-xs sm:text-sm md:text-base">
              Cohort
            </th>
            <th className="py-1 px-2 text-left text-xs sm:text-sm md:text-base">
              Courses
            </th>
            <th className="py-1 px-2 text-left text-xs sm:text-sm md:text-base whitespace-nowrap">
              Date Joined
            </th>
            <th className="py-1 px-2 text-left text-xs sm:text-sm md:text-base whitespace-nowrap">
              Last Login
            </th>
            <th className="py-1 px-2 text-left text-xs sm:text-sm md:text-base">
              Status
            </th>
            <th className="py-1 px-2 text-left text-xs sm:text-sm md:text-base">
              Action
            </th>
            <AddStudentModal />
          </tr>
        </thead>
        <tbody>
          {loading
            ? Array.from({ length: 10 }).map((_, index) => (
                <React.Fragment key={index}>{shimmerRow}</React.Fragment>
              ))
            : filteredData.map((student, index) => (
                <TableRow key={index} student={student} />
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
