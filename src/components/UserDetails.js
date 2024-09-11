import { useState } from "react";

const UserDetails = ({
  accordionTitle,
  name,
  title,
  showDetails,
  handleClick,
  data,
}) => {
  return (
    <div
      className="bg-gray-300 w-1/2 p-5   rounded-xl shadow-lg cursor-pointer"
      onClick={handleClick}>
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold">{accordionTitle}</span>
        <span>{showDetails ? "⬆️" : "⬇️"}</span>
      </div>
      {showDetails && (
        <div>
          <p>{name}</p>
          <p>{title}</p>
          {data}
        </div>
      )}
    </div>
  );
};
export default UserDetails;
