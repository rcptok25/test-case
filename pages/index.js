import {useState,useEffect} from 'react'
import Login from './Login'
import Register from './Register'

import axios from './apiConfig/axios'



export default function Home() {
const  [loginPage, setLoginPage] = useState();
const  [registerPage, setRegisterPage] = useState();


  useEffect(() => {
    let indexPage="";
    
    axios.get(`usersControl.php`).then(response => {
      indexPage=JSON.stringify(response.data.indexPage);
      
      if(indexPage){
     
        setLoginPage(true)
        setRegisterPage(false)
      }
      else{
        
       setLoginPage(false)
       setRegisterPage(true)
      }
       
    
     
    });


  

  })

  
  return (
   <>
  
   <div style={{display: loginPage ? "block" : "none"}}>  <Login/> </div>
   <div style={{display: registerPage ? "block" : "none"}}>  <Register/></div>
 
   
   
       </>

  )
}
