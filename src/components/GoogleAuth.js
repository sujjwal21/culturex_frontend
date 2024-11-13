import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

const GoogleAuth = ({ onLogin }) => {
  return (
    <div className="google-login-container">
      <GoogleLogin
        onSuccess={onLogin}
        onError={() => console.log('Login Failed')}
      />
    </div>
  );
};

export default GoogleAuth;
