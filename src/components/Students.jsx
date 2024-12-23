// import React, { useEffect, useState } from "react";
// import Dropdown from "./Dropdown";
// import AddButton from "./AddButton";
// import StudentTable from "./StudentTable";
// import { NODE_API_ENDPONINT } from "../utils/utils";
// import { useDispatch } from "react-redux";
// import { setData } from "../features/students";

// function Students() {
//   const [loading, setLoading] = useState(false);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         setLoading(true);
//         const data = await fetch(`${NODE_API_ENDPONINT}/students`, {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });
//         if (!data.ok) {
//           const error = await data.json();
//           setLoading(false);
//           throw new Error(error);
//         }
//         const resp = await data.json();
//         console.log(resp);
//         dispatch(setData(resp));
//         setLoading(false);
//       } catch (error) {
//         setLoading(false);
//         console.log(error);
//       }
//     };
//     getData();
//   }, []);

//   return (
//     <div>
//       <div className="p-4 bg-white mx-4 rounded-xl h-fit">
//         {/* Filters */}
//         <div className="flex justify-between items-center">
//           <div className="flex space-x-4">
//             <Dropdown
//               label="AY 2024-25"
//               options={["AY 2023-24", "AY 2024-25"]}
//               name="cohort"
//             />
//             <Dropdown
//               label="CBSE 9"
//               options={["CBSE 9", "CBSE 10"]}
//               name="course"
//             />
//           </div>
//           <AddButton />
//         </div>
//         {/* Student Table */}
//         <StudentTable loading={loading} />
//       </div>
//     </div>
//   );
// }

// export default Students;

import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import AddButton from "./AddButton";
import StudentTable from "./StudentTable";
import { NODE_API_ENDPONINT } from "../utils/utils";
import { useDispatch } from "react-redux";
import { setData } from "../features/students";

function Students() {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await fetch(`${NODE_API_ENDPONINT}/students`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!data.ok) {
          const error = await data.json();
          setLoading(false);
          throw new Error(error.message || "Failed to fetch data.");
        }
        const resp = await data.json();
        dispatch(setData(resp));
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error(error.message);
      }
    };
    getData();
  }, [dispatch]);

  return (
    <div className="p-4 bg-white mx-4 rounded-xl">
      {/* Filters */}
      <div className="flex flex-wrap justify-between items-center mb-4">
        <div className="flex flex-wrap space-x-4 mb-2 sm:mb-0">
          <Dropdown
            label="AY 2024-25"
            options={["AY 2023-24", "AY 2024-25"]}
            name="cohort"
          />
          <Dropdown
            label="CBSE 9"
            options={["CBSE 9", "CBSE 10"]}
            name="course"
          />
        </div>
        <AddButton />
      </div>
      {/* Student Table */}
      <StudentTable loading={loading} />
    </div>
  );
}

export default Students;
