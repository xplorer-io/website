import React from "react";

const Spinner = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-t-2 border-gray-900"></div>
    </div>
  );
};

export default Spinner;
