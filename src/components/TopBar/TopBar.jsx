import './topbar.css'

import {FaFacebookSquare,FaTwitterSquare,FaInstagramSquare} from 'react-icons/fa';
import {BsPinterest} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'

const TopBar = () => {
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
                <li className="topListItem">HOME</li>
                <li className="topListItem">ABOUT</li>
                <li className="topListItem">CONTACT</li>
                <li className="topListItem">WRITE</li>
                <li className="topListItem">LOGOUT</li>
            </ul>
        </div>
        <div className="topRight">

            <img src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-suliman-sallehi-1704488.jpg&fm=jpg" alt="pro_pic" className='topImg'/>

            <BiSearch className='topSearchIcon'/>
        </div>
    </div>
  )
}

export default TopBar