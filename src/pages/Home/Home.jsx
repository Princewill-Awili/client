
import './home.css'
import {Header, Posts, Sidebar} from '../../components'


const Home = () => {
  return (
    <div>
        <Header/>
        <div className="home">
          <Posts/>
          <Sidebar/>
        </div>
    </div>
  )
}

export default Home