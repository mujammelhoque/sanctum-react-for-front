import React, { useEffect } from 'react';
import axios from 'axios';
function Login() {
  useEffect(() => {
    axios.defaults.baseURL = 'http://localhost:8000/api/';
    axios.post('/login', {
      email: "stuart47@example.com",
      password: "123456"
    })
    .then(({ data }) => {
      if(data.status==="success"){
        console.log(data)
      } else {
        console.log("error")
      }
    });
  });
  return (
    <div className="Login">Auto Login</div>
  );
}
export default Login;