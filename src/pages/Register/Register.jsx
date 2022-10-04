import "./register.css"
import { useContext } from "react";
import { states } from "../../context";
import {useNavigate} from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate();
    const {setUser,setIsLoading} = useContext(states);

    const moveTo = (path) =>{
      setIsLoading(true)
      
      if(path === 'login'){
        setTimeout(()=>{
          setIsLoading(false);
          navigate('/login')
        },2000)
      }

      if(path === 'register'){
        //Check forms are completed and updated with their corresonding states then navigate to "Homepage/content".
        /*if(){

        }*/
        setUser(true);

        setTimeout(()=>{
          setIsLoading(false);
          navigate('/'); 
        },3000)

      }
    }

    return (
        <div className="register">
          <span className="registerTitle">Register</span>
        <form className="registerForm">
          <label>Username</label>
          <input className="registerInput" type="text" placeholder="Enter your username..." />
          <label>Email</label>
          <input className="registerInput" type="text" placeholder="Enter your email..." />
          <label>Password</label>
          <input className="registerInput" type="password" placeholder="Enter your password..." />
          <button className="registerButton" onClick={()=>moveTo('register')}>Register</button>
        </form>
        
          <button className="registerLoginButton" onClick={()=>moveTo('login')}>Login</button>
          
      </div>
    )
}

export default Register