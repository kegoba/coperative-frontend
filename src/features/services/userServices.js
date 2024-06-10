
import axiosInstance from "./axiosConfig"





export const  calculate = (amount, duration)=>{
  
  const totalInterest = (amount * (5 / 100) * duration);
  const totalAmountToBePaid = amount + totalInterest
  const monthlyReturn = totalAmountToBePaid/duration
  //const monthlyInterestRate = interestRate / 100 / numberOfMonths;  //Math.round
  return {totalInterest : parseInt(totalInterest),
        totalAmountToBePaid : parseInt(totalAmountToBePaid), 
        monthlyReturn:parseInt(monthlyReturn) };
} 



export const interestEarned = (principal, despositedDate,calculatedDate) => {
  const startDate = new Date(despositedDate);
  const endDate = new Date(calculatedDate);
  // Calculate time difference in milliseconds
  const timeDifference = endDate.getTime() - startDate.getTime();
  
  // Convert time difference to days
  const timeInDays = timeDifference / (1000 * 60 * 60 * 24);
  const interestRate = 4 / 100; // Convert percentage to decimal
  const interest = principal * interestRate * (timeInDays / 365); // Assuming 365 days in a year
  return interest;
};


export const getAllConsultation  = async ()=> {
  const response = await axiosInstance.get("/getalluserconsultation");

  return response.data
    
}

export const getSingleConsulation  = async (data)=> {
  console.log(data,"ser")
  const response = await axiosInstance.post("/getsingleconsulation",data);

  return response.data
    
}


export const loanRequestService  = async (data)=> {
  const response = await axiosInstance.post("/user/loanrequest",data);

  return response
    
}

export const registerUser  = async (data)=> {
  const response = await axiosInstance.post("/user/register",data);

  return response
    
}

export const loginUser  = async (data)=> {
  const response = await axiosInstance.post("/user/login",data);///user/login
  if(response.status ===200){
    localStorage.setItem("user", JSON.stringify(response.data.data))
    localStorage.setItem("token", (response.data.data.token))
    return response
    
   } 
   return null
    
}


export const getAllUsers  = async (data)=> {
  const response = await axiosInstance.get("/getalluser",data);

  return response.data
    
}

///wallet/fundwallet

export const getDashboardDetails  = async (id)=> {
  const response = await axiosInstance.get("/user/dashboard");

  return response
    
}




export const FundWalletservices  = async (data)=> {
  const response = await axiosInstance.post("/wallet/fundwallet",data);

  return response.data
    
}

   