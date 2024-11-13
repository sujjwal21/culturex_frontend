import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const GoogleAuthButton = () => {
  const navigate = useNavigate();


  const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
 
  const onSuccess = async (response) => {
    const { credential } = response;
    try {
      const { data } = await axios.post('http://localhost:5000/api/auth/google', { tokenId: credential });
      localStorage.setItem('token', data.token);
      navigate('/upload');
    } catch (error) {
      toast.error('Google authentication failed');
    }
  };

  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <GoogleLogin onSuccess={onSuccess} onError={() => toast.error('Google login failed')} style={{ width: '200px' }}/>
    </GoogleOAuthProvider>
  );
};

export default GoogleAuthButton;
