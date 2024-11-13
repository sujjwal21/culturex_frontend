// import React from 'react';
// import { GoogleLogin } from '@react-oauth/google';
// import axios from 'axios';

// export const GoogleLoginButton = ({ setUser }) => {
//   const handleLoginSuccess = (response) => {
//     const token = response.credential;
//     axios.post('http://localhost:5000/api/auth/google', { token })
//       .then(res => setUser(res.data.user))
//       .catch(err => console.error(err));
//   };

//   return (
//     <div className="login-button">
//       <GoogleLogin onSuccess={handleLoginSuccess} />
//     </div>
//   );
// };
