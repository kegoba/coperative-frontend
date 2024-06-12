
import React, { useState } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import axios from 'axios';
import { useNavigate, Link} from 'react-router-dom';
import {loginUser} from "../services/userServices"
import {passwordValidation, 
        emailValidation,
      } from "../services/validationService"

const Login = () => {
  const navigate = useNavigate()
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
 

  const handleSubmit1 = async (event) => {
    event.preventDefault();
    if (!passwordValidation(password)){
      NotificationManager.error("Password Must Be More Than Four Digits","Invalid Password" );
      return
    }
    if(!emailValidation(email)){
      NotificationManager.error("Please Enter Valid Email", "Invalid email");
      return
    }
    const data ={
      email, password
    }
    console.log(data)
    try{
      const resp  =   await loginUser(data)
      console.log(resp.status)
      if (resp.status===200){
        console.log(resp.status, resp.data)
      navigate("/")
    }else{

      setEmail("")
      setPassword("")
    }
    
    }catch(error){
      setEmail("")
      setPassword("")
      console.log(error)
      NotificationManager.error("wrong password or email", 1000);

    }
  };


  const handleSubmit = async (email, password) => {
    try {
      const response = await axios.post('https://coperative.onrender.com/api/v1/user/login', {
        email,
        password
      });
  
      console.log('Login successful:', response.data);
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 2xx
        console.error('Server error:', error.response.data);
      } else if (error.request) {
        // Request was made but no response was received
        console.error('Network error:', error.request);
      } else {
        // Something else happened in making the request
        console.error('Error:', error.message);
      }
    }
  };
  
  
  const handleEmail = (e)=>{
    const emailValue = e.target.value
    setEmail(emailValue.toLowerCase())

    
  }
  const handlePassword = (e)=>{
    setPassword(e.target.value)
    
  }
  
  return (
  <>
    <div className="w-full max-w-sm md:mx-[450px] mt-20 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <div className="space-y-6">
        <h5 className="text-xl font-medium text-gray-900 dark:text-white"> Login</h5>
        <div>
            <input placeholder="Email"  value={email} onChange={handleEmail}  type="email"className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        </div>
        <div>
            <input type="password" value={password} placeholder="Password" onChange={handlePassword}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        </div>
        
        <button onClick={handleSubmit}  className="w-full text-white bg-[#092256] hover:bg-[#2DC0AC] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Login</button>
        
        Not Registered? <Link to={"/register"} className="text-bg-[#2DC0AC] hover:underline dark:text-bg-[#2DC0AC]">Register</Link>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
        </div>
    </div>
    <NotificationContainer />
</div>
    </>
  );
};

export default Login;

