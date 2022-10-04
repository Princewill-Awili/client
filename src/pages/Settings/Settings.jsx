import './settings.css'
import { Sidebar } from '../../components'

import { BiUserCircle } from 'react-icons/bi'

const Settings = () => {
  return (
    <div className='settings'>
        <div className="settingsWrapper">

            <div className="settingsTitle">
                <span className="settingsTitleUpdate">Update Account</span>
                <span className="settingsTitleDelete">Delete Account</span>
            </div>

            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-suliman-sallehi-1704488.jpg&fm=jpg" alt="" />

                    <label for="fileInput">
                        <BiUserCircle className='settingsPPIcon'/>
                    </label>
                    <input type="file" id='fileInput' style={{display:"none"}} />
                </div>

                <label >Username</label>
                <input type="text" placeholder='Enter a username' />

                <label >Email</label>
                <input type="email" placeholder='Enter your email' />

                <label >Password</label>
                <input type="password" placeholder='Enter a password' />

                <button className="settingsSubmitButton">Update</button>

            </form>

        </div>
        <Sidebar/>
    </div>
  )
}

export default Settings