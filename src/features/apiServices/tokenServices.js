import React,{useEffect} from "react"
import { useNavigate } from "react-router-dom";
 import { jwtDecode } from 'jwt-decode';


const  isTokenExpired = (token)=> {
    try {
      const decodedToken = jwtDecode(token);
      const currentTime = Math.floor(Date.now() / 1000); // Get current time in seconds
  
      return decodedToken.exp < currentTime;
    } catch (error) {
      // If there's an error decoding the token, treat it as expired
      return true;
    }
  }
  

  
export const  CheckTokenAndProceed= () =>{
    const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token || isTokenExpired(token)) {
      navigate('/login');
    } else {
      return 
    }
  }, [navigate]);
  }
  
  