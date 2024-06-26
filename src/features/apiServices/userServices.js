
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


export const getAllUserServices  = async ()=> {
  const response = await axiosInstance.get("/admin/getalluser");

  return response.data
    
}

export const getLoanRequestServices  = async ()=> {
  const response = await axiosInstance.get("/admin/getloanrequest");

  return response.data
    
}
export const approveLoanRequestServices  = async (data)=> {
  const response = await axiosInstance.post("/admin/approveloanrequest");

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

export const loginUser = async (data) => {
  try {
    const response = await axiosInstance.post("/user/login", data);
    if (response.status === 200) {
      localStorage.setItem("user", JSON.stringify(response.data.data));
      localStorage.setItem("token", response.data.data.token);
      return response.data;
    }
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
  return null;
};

//pending
export const changePasswordServices  = async (data)=> {
  const response = await axiosInstance.post("/user/change-password",data); 

  return response
    
}

export const forgotPasswordServices  = async (data)=> {
  const response = await axiosInstance.post("/user/forgot-password",data);

  return response
    
}

export const resetPasswordServices  = async (data)=> {
  const response = await axiosInstance.post("/user/reset-password",data); 

  return response
    
}


export const getDashboardDetails  = async (id)=> {
  const response = await axiosInstance.get("/user/dashboard");

  return response
    
}



export const FundWalletservices  = async (data)=> {
  const response = await axiosInstance.post("/wallet/fundwallet",data);

  return response.data
    
}

//pending
export const postWalletToWalletTransfer  = async (data)=> {
  const response = await axiosInstance.post("/wallet//wallet-t0-wallet-transfer", data);

  return response
    
}

//pending
export const getUserDetialsByPhone  = async (data)=> {
  const response = await axiosInstance.post("/user/getuserbyphone", data);//getuserbyphone

  return response
    
}
   