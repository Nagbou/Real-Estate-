import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  const handlePasswordChange = () => {
    const pwd1Value = formData.password || "";
    const pwd2Value = formData.confirmPassword || "";
    if (pwd1Value === pwd2Value) {
      return "border-green-500"; // Use Tailwind class for green border
    } else if (pwd2Value.length > 0) {
      return "border-red-500"; // Use Tailwind class for red border
    }
    return ""; // No border color
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-3 bg-white">
      <div className="bg-[#0F4C5C] rounded-lg shadow-lg p-8 max-w-lg w-full">
        <h1 className="text-3xl text-white font-bold text-center mb-6">
          Create an account
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            className="bg-transparent border-b border-white text-white p-2 focus:outline-none focus:border-b-white"
            id="username"
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-transparent border-b border-white text-white p-2 focus:outline-none focus:border-b-white"
            id="email"
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="phone"
            className="bg-transparent border-b border-white text-white p-2 focus:outline-none focus:border-b-white"
            id="phone"
            onChange={handleChange}
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Your password"
            className={`bg-transparent border-b border-white text-white p-2 focus:outline-none focus:border-b-white ${handlePasswordChange()}`}
            id="password"
            onChange={handleChange}
          />
          <i
            className={`fa-regular fa-eye${
              showPassword ? "-slash" : ""
            } absolute right-2 top-1 cursor-pointer`}
            onClick={() => setShowPassword(!showPassword)}
          ></i>

          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm password"
            className={`bg-transparent border-b border-white text-white p-2 focus:outline-none focus:border-b-white ${handlePasswordChange()}`}
            id="confirmPassword"
            onChange={handleChange}
          />
          <i
            className={`fa-regular fa-eye${
              showConfirmPassword ? "-slash" : ""
            } absolute right-2 top-1 cursor-pointer`}
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          ></i>

          <button
            className="bg-[#1d1d50] text-white p-3 -mb-2 rounded-2xl font-bold text-lg transition-colors duration-300 hover:bg-white hover:text-[#1d1d50] mt-4"
            disabled={loading}
          >
            {loading ? "Loading..." : "Sign Up"}
          </button>
          <OAuth />
        </form>
        <div className="flex gap-2 mt-5 text-white">
          <p>Have an account?</p>
          <Link to={"/sign-in"}>
            <span className="text-blue-300 hover:underline cursor-pointer">
              Sign in
            </span>
          </Link>
        </div>
        {error && <p className="text-red-500 mt-5">{error}</p>}
      </div>
    </div>
  );
}
