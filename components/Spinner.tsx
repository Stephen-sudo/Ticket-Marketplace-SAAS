import React from "react";

const Spinner = () => {
  return (
    <div className="min-h-[220px] flex justify-center items-center">
      <div className="animate-spin rounded-full h-8 w-8 border-t-transparent border-blue-600"></div>
      <div></div>
    </div>
  );
};

export default Spinner;
