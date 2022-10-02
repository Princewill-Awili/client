import './single.css'
import {Sidebar,SinglePost} from '../../components'

const Single = () => {
    return (
        <div className="single">
            {/*Post */}
            <SinglePost/>
            <Sidebar/>
        </div>
    )

}

export default Single