import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {details} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = details

  return (
    <>
      <hr />
      <Link style={{textDecoration: 'none'}} to={`/blogs/${id}`}>
        <li className="blogItemLi">
          <img className="titleImg" alt="titleImg" src={imageUrl} />
          <div>
            <p>{topic}</p>
            <h1>{title}</h1>
            <div className="authorDiv">
              <img className="avatarImg" alt="avatarImg" src={avatarUrl} />
              <p className="authorName">{author}</p>
            </div>
          </div>
        </li>
      </Link>
    </>
  )
}

export default BlogItem
