import React from "react";

const ShimmerTable = () => {
  const shimmerRow = (
    <tr className="border-b-2">
      <td className="py-2 px-4">
        <div className="flex justify-center">
          <div className="h-6 w-24 shimmer rounded-md"></div>
        </div>
      </td>
      <td className="py-2 px-4">
        <div className="flex justify-center">
          <div className="h-6 w-20 shimmer rounded-md"></div>
        </div>
      </td>
      <td className="py-2 px-4">
        <div className="flex justify-center">
          <div className="h-6 w-32 shimmer rounded-md"></div>
        </div>
      </td>
      <td className="py-2 px-4">
        <div className="flex justify-center">
          <div className="h-6 w-40 shimmer rounded-md"></div>
        </div>
      </td>
      <td className="py-2 px-4">
        <div className="flex justify-center">
          <div className="h-6 w-28 shimmer rounded-md"></div>
        </div>
      </td>
      <td className="py-2 px-4">
        <div className="flex justify-center">
          <div className="h-4 w-4 shimmer rounded-full"></div>
        </div>
      </td>
    </tr>
  );

  return (
    <div className="overflow-y-auto max-h-[70vh] rounded-md scrollbar-hide mt-7">
      <table className="w-full table-auto border-collapse">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 sticky top-0 z-10 bg-gray-200">Name</th>
            <th className="py-2 px-4 sticky top-0 z-10 bg-gray-200">Cohort</th>
            <th className="py-2 px-4 sticky top-0 z-10 bg-gray-200">Courses</th>
            <th className="py-2 px-4 sticky top-0 z-10 bg-gray-200">
              Date Joined
            </th>
            <th className="py-2 px-4 sticky top-0 z-10 bg-gray-200">
              Last Login
            </th>
            <th className="py-2 px-4 sticky top-0 z-10 bg-gray-200">Status</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 20 }).map((_, index) => (
            <React.Fragment key={index}>{shimmerRow}</React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShimmerTable;
