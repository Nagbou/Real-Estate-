import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa"; // Import the FaHome icon

const HomeBtn = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/"); // Navigate to the home route
  };

  return (
    <button className="fixed bottom-5 right-8 text-white bg-[#0F4C5C] p-3 text-4xl rounded-full z-50 hover:bg-[#dfc014] cursor-pointer transition duration-300 ease-in-out">
      <FaHome onClick={handleHomeClick} title="Go to Home" />
    </button>
  );
};

export default HomeBtn;
