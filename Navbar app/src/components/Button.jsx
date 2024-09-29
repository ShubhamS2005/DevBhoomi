import React from "react";

const Button = () => {
  return (
    <>
      <div className="flex justify-center items-center mr-16">
      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-black">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-100 bg-white dark:bg-white rounded-md group-hover:bg-opacity-0">
          Log in 
        </span>
      </button>
      </div>
    </>
  );
};

export default Button;
