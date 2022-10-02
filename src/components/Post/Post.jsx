import './post.css'

const Post = () => {
  return (
    <div className='post'>
        <img className="postImg" src="https://www.theedublogger.com/files/2019/03/10-Minute-Weekly-Blogging-Plan-tasqn3-prizg4-1080x720.jpeg" alt="" />

        <div className="postInfo">

            <div className="postCats">
                <span className="postCat">Tech</span>
                <span className="postCat">Life</span>
            </div>

            <span className="postTitle">
                Lorem ipsum dolor sit amet.
            </span>
            <hr />

            <span className="postDate">1 hour ago </span>

        </div>
        <div className="postDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deserunt praesentium saepe? Praesentium quos vero ducimus, sunt ratione sint architecto fuga inventore at a dicta provident quasi assumenda deserunt, necessitatibus dolores quibusdam doloremque culpa. Repudiandae, illo obcaecati eaque qui itaque fuga corporis harum accusantium aut, delectus quas optio reiciendis culpa laboriosam consectetur ratione placeat repellendus atque doloremque ipsam adipisci unde molestias quibusdam accusamus. Ullam adipisci, optio expedita ducimus ipsum voluptate voluptates repudiandae labore suscipit illo nam illum quaerat? Culpa unde sequi veniam eaque dolorum repudiandae, cum laboriosam. Quae consequuntur temporibus excepturi. Exercitationem et quis nobis eius vel nesciunt officiis modi?
        </div>
    </div>
  )
}

export default Post