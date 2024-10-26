import React from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa"; // Import the FaHome icon

const SearchBtn = () => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate("/search"); // Navigate to the home route
  };

  return (
    <button className="fixed bottom-24 right-8 text-white bg-[#0F4C5C] p-3 text-4xl rounded-full z-50 hover:bg-[#dfc014] cursor-pointer transition duration-300 ease-in-out">
      <FaSearch onClick={handleSearchClick} title="Go to search" />
    </button>
  );
};

export default SearchBtn;
