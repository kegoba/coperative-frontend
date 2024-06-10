import React, { useState } from 'react'

import TransactionHistory from './transactionHistory'

import {getAllConsultation } from "../services/userServices"
import Sidebar from "./dashboard"


import Motivation from "./motivation"
import Blog from './blog'



const Home = () => {
  const [checkUser, setCheckUser]= useState(false)
  const [consultations, setConsultations]= useState()



 
  React.useEffect(() => {
    
    


  }, []);
  return (
    < div >  
    
    <Blog/>
  <Motivation />       
    </div>
  )
}

export default Home