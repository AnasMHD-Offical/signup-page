import React, { useState } from "react"
import "./loginSignup.css"
import bgImage from "../assets/bg.jpg"
import bgVideo from "../assets/bg.mp4"
function LoginSignup(){
    
    const [action,setAction] = useState("Sign Up")

    function handleAction(){
       if(action === "Login"){
        setAction("Sign Up")
        document.getElementById("name").style.display = ""
       document.getElementById("forget").style.display = "none"

       }else{
         setAction("Login")
         document.getElementById("name").style.display = "none"
        document.getElementById("forget").style.display = ""

        }
    }

    return(
        <>
        <div className="blur">
         <div className="container">
            <div className="header">{action}</div>
            <div className="inputs">
                <div className="input" id="name">
                    <i class='bx bxs-user-circle' id="icon"></i>                    
                    <input type="text" placeholder="Enter your name"/>
                </div>
                <div className="input">
                    <i class='bx bx-envelope' id="icon"></i>                    
                    <input type="email" placeholder="Enter your email" />
                </div>
                <div className="input">
                    <i class='bx bxs-check-shield' id="icon"></i>                    
                    <input type="password" placeholder="Enter the password"/>
                </div>
            </div>
            <div className="forgot-password" id="forget">
                <span>Forgotten password?</span> 
            </div>
            <div className="submit-container">
                <button onClick={handleAction} className={action === "Login" ? "Submit-false":"submit"}>Sign up</button>
                <button onClick={handleAction} className={action === "Sign Up" ? "Submit-false":"submit"}>Log-in</button>
            </div>   
           </div>
        </div>

    </>

    )   
}
// {/* <h1>Hello</h1>
export default LoginSignup