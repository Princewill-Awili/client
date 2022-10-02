import './singlepost.css'
import {FiEdit} from 'react-icons/fi'
import {RiDeleteBinLine} from 'react-icons/ri'

const SinglePost = () => {
  return (
    <div className='singlepost'>
      <div className="singlePostWrapper">

        <img src="https://www.theedublogger.com/files/2019/03/10-Minute-Weekly-Blogging-Plan-tasqn3-prizg4-1080x720.jpeg" alt="" className='singlePostImg' />

        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, esse.
          
          <div className="singlePostEdit">
            <FiEdit className='singlePostIcon'/>
            <RiDeleteBinLine className='singlePostIcon'/>
          </div>

        </h1>

        <div className="singlePostInfo">
          <span className='singlePostAuthor'>Author: <b>Awili Princewill</b></span>
          <span className='singlePostDate'>1 hour ago</span>
        </div>

        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, veritatis qui. Beatae reprehenderit delectus impedit ipsam dignissimos quae, quasi minus sed necessitatibus cum assumenda alias, rem vero vel illum reiciendis, dicta et in a commodi rerum! Debitis sunt facere quibusdam minus! Quidem deleniti necessitatibus rerum at quasi. Ipsam illum ducimus, minima facere voluptatum beatae atque odio magnam voluptates delectus nulla, optio reiciendis. Quidem architecto reprehenderit accusantium natus, asperiores placeat itaque accusamus eos dolorem eius sed dolorum quibusdam illum repellat necessitatibus aut! Fuga ut enim, facere laboriosam provident, nesciunt ratione dolor blanditiis amet unde quae delectus tempora quos, libero debitis esse a adipisci sit quibusdam repellat. Recusandae, voluptatem est maiores laudantium nemo impedit et corrupti libero voluptatum obcaecati sunt sit sequi laborum vero eum error quibusdam enim? Deserunt, eveniet iure sapiente, repudiandae repellendus amet, cumque accusantium beatae fuga possimus necessitatibus aut ut nesciunt veritatis? Optio blanditiis quidem quas quibusdam cum delectus aliquam quo ratione incidunt! Ea harum accusamus libero reiciendis nulla culpa eum, quae animi distinctio accusantium laboriosam dicta natus iure dolorum. Rerum iusto illo neque veritatis nostrum possimus maiores. Debitis nisi iste, laudantium quia voluptatum enim libero temporibus, illum blanditiis provident non vero eligendi ducimus expedita modi, exercitationem sed a culpa dignissimos laboriosam illo ipsam reprehenderit? Dignissimos similique nulla reprehenderit quod doloremque illo quisquam aliquam quo rem saepe dolorem, delectus iure, maxime eos natus repellat? Voluptas facere dolore temporibus laudantium ad aliquid autem id delectus veritatis perspiciatis maxime totam, excepturi suscipit iure tempora perferendis neque. Deleniti amet harum expedita! Ex eligendi fugit dicta velit esse quibusdam veritatis quasi in consequatur hic nihil, voluptate, cum beatae, vel molestias. Perferendis expedita, fuga deleniti officiis neque illo placeat sapiente dolorum possimus ut laudantium aut? Beatae cum expedita eius ut nisi, similique quasi reiciendis quibusdam quae cupiditate exercitationem! Maiores nam iure fugiat laboriosam. Architecto.
        </p>

      </div>
    </div>
  )
}

export default SinglePost
