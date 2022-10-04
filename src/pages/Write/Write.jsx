import './write.css'
import {GrAdd} from 'react-icons/gr'

const Write = () => {
  return (
    <div className='write'>
        <img src="https://i.pinimg.com/originals/1e/b2/3d/1eb23df5956db9bdb7de414c4c671cb3.jpg" alt="writeImg" className="writeImg" />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label for="fileInput">
                    <GrAdd/>
                </label>
                <input type="file" id='fileInput' style={{display:"none"}}/>
                <input type="text" placeholder='Title' className='writeInput' autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder='Tell your story...' type="text" className='writeInput writeText'></textarea>
            </div>

            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}

export default Write