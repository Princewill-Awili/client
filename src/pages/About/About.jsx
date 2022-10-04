import './about.css';
import { useContext} from 'react';
import { states } from '../../context'
import {HiArrowNarrowLeft as ArrowBack} from 'react-icons/hi'
import { useNavigate } from 'react-router-dom';

const About = () => {

    const { author, setIsLoading } = useContext(states);
    const navigate = useNavigate();

    const moveTo = (path) => {
        if(path === 'home'){
            setIsLoading(true);
            setTimeout(()=>{
                setIsLoading(false);
                navigate('/')
            },2000)
        }
    }

  return (
    <div className='about'>
        <span className="aboutTitle">About Us</span>
        <div className="aboutInfo">
            <div className="aboutInfoWrapper">
                <span className="ourStory">Where our story began...</span>
                <p className="aboutInfoTxt">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, obcaecati! Necessitatibus iste ab quaerat cupiditate numquam autem, quia beatae optio similique voluptas hic expedita ullam voluptates enim a! Tempore, vero, tempora enim quas dolores cum error sit nam aliquid, deserunt eos officiis a eaque molestias. Cum optio, non beatae soluta, ad ut minima debitis adipisci earum nam deleniti numquam quis quae est voluptates dolores ea nostrum? Perferendis alias soluta officiis ratione distinctio illum dolores eaque eveniet dolorum sit quis, in odit laudantium reprehenderit numquam iusto vitae laborum non. Voluptates numquam non veniam nemo. Molestiae commodi earum magni? Doloremque, ipsa ipsam.
                </p>
                <div className="authorWrapper">
                    <img src={author.img} alt="author"  className='authorImg'/>
                    <div className="authorInfo">
                        <p className="authorTitle">
                            Creative Director / Founder - 
                            <span> Blogs & Stories</span>
                        </p>
                        <span className="authorName">{author.name}</span>
                    </div>
                </div>
                <div className="back" onClick={()=>moveTo('home')}>
                    <ArrowBack/>
                    <span>Back to Home</span>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default About