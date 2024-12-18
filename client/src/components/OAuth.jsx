import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);

      // Send user info to the backend
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });

      const data = await res.json(); // Properly await the JSON response
      if (res.ok) {
        dispatch(signInSuccess(data)); // Dispatch success
        navigate("/"); // Redirect after successful login
      } else {
        console.error("Error signing in with Google", data.message);
      }
    } catch (error) {
      console.log("Could not sign in with Google: ", error);
    }
  };

  return (
    <button
      onClick={handleGoogleClick}
      type="button"
      className="bg-[#df2b2b] text-white p-3 text-lg font-bold text-center border-none rounded-2xl outline-none mt-4 cursor-pointer transition-colors duration-300 hover:bg-white hover:text-[#df2b2b] w-full"
    >
      Continue with Google
    </button>
  );
}
