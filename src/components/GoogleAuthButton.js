import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const GoogleAuthButton = () => {
  const navigate = useNavigate();

  const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  const onSuccess = async (response) => {
    const { credential } = response;
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/google",
        { tokenId: credential }
      );
      localStorage.setItem("token", data.token);
      navigate("/upload");
    } catch (error) {
      toast.error("Google authentication failed");
    }
  };

  return (
    <div className="w-96 p-3 ml-[37%] mt-20 bg-gray-100 shadow-lg rounded-xl flex justify-center items-center">
      <GoogleOAuthProvider clientId={googleClientId}>
        <GoogleLogin
          onSuccess={onSuccess}
          onError={() => toast.error("Google login failed")}
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default GoogleAuthButton;
