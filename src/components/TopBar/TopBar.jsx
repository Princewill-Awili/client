import React,{useContext} from 'react';
import { states } from '../../context';



import './topbar.css'

import {FaFacebookSquare,FaTwitterSquare,FaInstagramSquare} from 'react-icons/fa';
import {BsPinterest} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import {useNavigate} from 'react-router-dom'

const TopBar = () => {

    const {user,setUser,setIsLoading} = useContext(states);
    const navigate = useNavigate();

    const moveTo = (elem) => {
        setIsLoading(true);

        if(elem === 'home'){
            setTimeout(()=>{
                setIsLoading(false)
                navigate('/');
            },3000)
        }

        if(elem === 'about'){
            setTimeout(()=>{
                setIsLoading(false)
                navigate('/about');
            },3000)
        }

        if(elem === 'contact'){
            setTimeout(()=>{
                setIsLoading(false)
                navigate('/contact');
            },3000)
        }

        if(elem === 'write'){
            setTimeout(()=>{
                setIsLoading(false);
                user ? navigate('/write') : navigate('/register');
            },3000)
        }

        if(elem === 'logout'){
            setTimeout(()=>{
                setIsLoading(false);
                if(user){
                    setUser(false);
                    navigate('/login')
                }
            },3000)
        }

        if(elem === 'login'){
            setTimeout(()=>{
                setIsLoading(false);
                navigate('/login');
            },3000)
        }

        if(elem === 'register'){
            setTimeout(()=>{
                setIsLoading(false);
                navigate('/register');
            },3000)
        }

        

    }

  return (
    <div className='topbar'>
        <div className="topLeft">
            <FaFacebookSquare className='topIcon'/>
            <FaTwitterSquare className='topIcon'/>
            <FaInstagramSquare className='topIcon'/>
            <BsPinterest className='topIcon'/>
        </div>
        <div className="topCenter">
            <ul className="topList">
                
                    <li className="topListItem" onClick={()=>moveTo('home')}>HOME</li>
                
                    <li className="topListItem" onClick={()=>moveTo('about')}>ABOUT</li>
                
                    <li className="topListItem" onClick={()=>moveTo('contact')}>CONTACT</li>
                
                    <li className="topListItem" onClick={()=>moveTo('write')}>WRITE</li>
                

                {
                    user ? (
                            <li className="topListItem" onClick={()=>moveTo('logout')}>LOGOUT</li>
                    ) : (
                        <></>
                    )
                }

                 
            </ul>
        </div>
        <div className="topRight">
            { user ? 
                (   
                    <img src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-suliman-sallehi-1704488.jpg&fm=jpg" alt="pro_pic" className='topImg'/>
                ) : (
                    <ul className="topList">
                        <li className="topListItem" onClick={()=>moveTo('login')}>LOGIN</li>
                        <li className="topListItem" onClick={()=>moveTo('register')}>REGISTER</li>
                    </ul>
                )

            }
            

            <BiSearch className='topSearchIcon'/>
        </div>
    </div>
  )
}

export default TopBar