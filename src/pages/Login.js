import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { useUser } from './UserContext';


export default function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const { setUserEmail } = useUser();
  const [errorFlag, setErrorFlag] = useState(false);

  useEffect(() => {
    const authenticateUser = async () => {
      try {
        const { email, password } = location.state || {};
        if (!email || !password) {
          setErrorFlag(true); 
          return;
        }
        const response = await axios.post("http://localhost:8080/auth/login", { email, password });
        const token = response.data.jwtToken;
        localStorage.setItem('token', token);
        navigate("/welcomeHome");
      } catch (error) {
        console.error("Error logging in:", error);
        setErrorFlag(true); 
      }
    };

    authenticateUser();
  }, [location.state, navigate]);

  useEffect(() => {
    if (errorFlag) {
      alert("Error logging in. Please try again.");
      navigate("/");
    }
  }, [errorFlag]);

  return null; 
}
