
import Login from './login'
import Register from './register'
import Home from './home'
import ViewAllUsers from "./usersList"
import {  Route, Routes } from 'react-router-dom'
import LoanRequest from "./loanRequest"
import LoanHistory from "./loanHistory"
import FundWallet  from "./fundwallet"
import SuccessTransaction  from "./success"
//
const PageRouter = ()=>{

    return(
    <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/login" element={<Login/>} />
        <Route  path="/register" element={<Register/>} /> 
        <Route  path="/userslist" element={<ViewAllUsers/>} />
        <Route  path="/calculator" element={<LoanRequest/>} />
        <Route  path="/loanhistory" element={<LoanHistory/>} /> 
        <Route  path="/fundwallet" element={<FundWallet/>} /> 
        <Route  path="/success" element={<SuccessTransaction/>} />
    </Routes>
    )
}



export default PageRouter