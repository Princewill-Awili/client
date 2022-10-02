import './sidebar.css'

import {FaFacebookSquare,FaTwitterSquare,FaInstagramSquare} from 'react-icons/fa';
import {BsPinterest} from 'react-icons/bs'


const Sidebar = () => {
  return (
    <div className='sidebar'>

      <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-suliman-sallehi-1704488.jpg&fm=jpg" alt="mypic" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis earum ad assumenda est quis? A, animi culpa quas.
          </p>
      </div>

      <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
            <li className="sidebarListItems">Life</li>
            <li className="sidebarListItems">Music</li>
            <li className="sidebarListItems">Style</li>
            <li className="sidebarListItems">Sport</li>
            <li className="sidebarListItems">Tech</li>
            <li className="sidebarListItems">Cinema</li>
          </ul>
      </div>

      <div className="sidebarItem">
         <span className="sidebarTitle">FOLLOW US</span>
         <div className="sidebarSocials">
            <FaFacebookSquare className='sidebarIcon'/>
            <FaTwitterSquare className='sidebarIcon'/>
            <FaInstagramSquare className='sidebarIcon'/>
            <BsPinterest className='sidebarIcon'/>

         </div>
      </div>


    </div>
  )
}

export default Sidebar