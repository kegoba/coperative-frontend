
import axiosInstance from "./axiosConfig"





export const  calculate = (amount, duration)=>{

  const interest = (amount * (5 / 100) * duration);
  const totalAmountToBePaid = amount + interest
  const monthlyReturn = totalAmountToBePaid/duration
  //const monthlyInterestRate = interestRate / 100 / numberOfMonths;  //Math.round
  return {interest : parseInt(interest),
        totalAmountToBePaid : parseInt(totalAmountToBePaid), 
        monthlyReturn:parseInt(monthlyReturn) };
} 

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

export const getSingleUser  = async (id)=> {
  const response = await axiosInstance.get("/getsingleuser/"+id);

  return response.data.data
    
}




export const FundWalletservices  = async (data)=> {
  const response = await axiosInstance.post("/wallet/fundwallet",data);

  return response.data
    
}

   