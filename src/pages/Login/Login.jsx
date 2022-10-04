import './login.css'
import { useContext } from 'react';
import {useNavigate} from 'react-router-dom'
import { states } from '../../context';

const Login = () => {

    const navigate = useNavigate();
    const {setIsLoading,setUser} = useContext(states);

    const moveTo = (path) =>{

      setIsLoading(true);

      //At this point Authenticate User. If USER-AUTH is successfull then ----
      if(path === 'login'){
        setUser(true);
        setIsLoading(false);
        setTimeout(()=>{
          navigate('/');
        },2000);
      }

      if(path === 'register'){
        setIsLoading(false);
       setTimeout(()=>{
        navigate('/register');
        },3000);
      }
      
    }

    return (
        <div className="login">
          <span className="loginTitle">Login</span>
          <form className="loginForm">
            <label>Email</label>
            <input className="loginInput" type="text" placeholder="Enter your email..." />
            <label>Password</label>
            <input className="loginInput" type="password" placeholder="Enter your password..." />
            <button className="loginButton" onClick={()=>moveTo('login')}>Login</button>
          </form>
          <button className="loginRegisterButton" onClick={()=>moveTo('register')}>Register</button>
        </div>
      );
}

export default Login