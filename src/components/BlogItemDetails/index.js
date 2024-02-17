import {useEffect, useState} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

const BlogItemDetails = props => {
  const {match} = props
  const {params} = match

  const [blogDetails, changeDetails] = useState({})
  const [isLoading, changeLoading] = useState(true)

  useEffect(() => {
    const fetchBlogDetails = async () => {
      const res = await fetch(`https://apis.ccbp.in/blogs/${params.id}`)
      const details = await res.json()
      const camelCasedData = {
        id: details.id,
        title: details.title,
        imageUrl: details.image_url,
        avatarUrl: details.avatar_url,
        author: details.author,
        content: details.content,
      }
      changeDetails(camelCasedData)
      changeLoading(false)
    }

    fetchBlogDetails()
  })

  return (
    <div className="padDiv">
      {isLoading ? (
        <div>
          <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
        </div>
      ) : (
        <div>
          <h1>{blogDetails.title}</h1>
          <div className="authorDiv">
            <img
              className="avatarImg"
              alt="authorUrl"
              src={blogDetails.avatarUrl}
            />
            <p className="authorName">{blogDetails.author}</p>
          </div>
          <img
            className="mainImage"
            alt={blogDetails.title}
            src={blogDetails.imageUrl}
          />

          <p className="mainDet">{blogDetails.content}</p>
        </div>
      )}
    </div>
  )
}

export default BlogItemDetails
