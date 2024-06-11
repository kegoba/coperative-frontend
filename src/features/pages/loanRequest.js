
import React, { useState } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import { useNavigate } from 'react-router-dom';
import {calculate, loanRequestService} from "../services/userServices"
import {amountValidation, 
        durationValidation,
      } from "../services/validationService"

const LoanRequest = () => {
  const navigate = useNavigate()
  const [duration, setDuration] = useState('');
  const [amountBorrowed, setAmountBorrowed] = useState('');
  const [result, setResult] = useState()
  React.useEffect(() => {
    const checkUserLogin = localStorage.getItem("user")
    const user = JSON.parse(checkUserLogin)
    if (!user){
      navigate("/login")
    }

  },[navigate]);



  
  const handleAmount = (e)=>{
    setAmountBorrowed(parseInt(e.target.value))

    
  }
  const handleDuration = (e)=>{
    const selectedValue = e.target.value;
   if (selectedValue==="YEARLY"){
    setDuration(parseInt(12))

   }else{
        setDuration(parseInt(6))

   } 

  }


  const handleCaculate = async (event) => {
    if (!amountValidation(amountBorrowed)){
      NotificationManager.error("Invalid Amount" );
      return
    }
      if (!durationValidation(duration)){
        NotificationManager.error("Select Duration" );
        return
      }
    const response = calculate(amountBorrowed, duration)
    setResult(response)
  };

 
  const handLoanRequest = async ()=>{
    //const loanReference = String(Math.random() * (10 - 9) + "az");
    
    const data ={ amountBorrowed,duration , ...result}
    console.log(data)
    try{
      const response = await loanRequestService(data)
      console.log(response.status)
      if (response.status===200){
        console.log(response.status, response.data)
      navigate("/")
    }else{

      setDuration("")
      setAmountBorrowed("")
    }
    
    }catch(error){
      setAmountBorrowed("")
      setDuration("")
      console.log(error)
      NotificationManager.error("Could Not Save Your Request");

    }
  
    
    

  }
    
  return (
  <>  
    <h5 className=" font-medium text-gray-900 dark:text-white text-sm mt-10"> Loan Caculator</h5>
    <div className=" max-w-xl md:mx-[450px] mt-5 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <h2 class="text-sm font-bold mb-4">Payment Details</h2>
        <div class="grid grid-cols-1 gap-4">
            <div class="grid grid-cols-3 gap-4">
                <p class="text-gray-700 text-sm ">Monthly Interest:</p>
                <p class="col-span-2 text-gray-700 text-sm ">{result?.totalInterest.toLocaleString()}</p>
            </div>
            <div class="grid grid-cols-3 gap-4">
                <p class="text-gray-700 text-sm ">Monthly Payable:</p>
                <p class="col-span-2 text-gray-700 text-sm ">{result?.monthlyReturn.toLocaleString()}</p>
            </div>
            <div class="grid grid-cols-3 gap-4">
                <p class="text-gray-700 text-sm ">Total Payable:</p>
                <p class="col-span-2 text-gray-700 text-sm ">{result?.totalAmountToBePaid.toLocaleString()}</p>
            </div>
        </div>
    <div className="space-y-6 mt-10">
        <div>
            <input placeholder="Amount"   onChange={handleAmount}  type="amount"className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        </div>
        <div>
            <select type="duration" placeholder="Select Duration"  onChange={handleDuration}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required >
            <option  > Select Duration </option>
            <option value={"YEARLY"} > One Year</option>
            <option value={"QUARTERLY"} > Six Month</option>

            </select>
        </div>
        
        <button onClick={handleCaculate}  className="w-full text-white bg-[#092256] hover:bg-[#092256] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Caculate</button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
        <button onClick={handLoanRequest}  className="w-full text-white bg-[#092256] hover:bg-[#092256] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Request</button>
           
        </div>
    </div>
    <NotificationContainer />
</div>
    </>
  );
};

export default LoanRequest;

