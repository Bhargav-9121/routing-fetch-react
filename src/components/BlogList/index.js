import {useEffect, useState} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = () => {
  const [blogData, changeBlogData] = useState([])
  const [isLoading, changeLoading] = useState(true)

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch('https://apis.ccbp.in/blogs')
      const data = await res.json()
      const camelCaseData = data.map(each => ({
        id: each.id,
        title: each.title,
        imageUrl: each.image_url,
        avatarUrl: each.avatar_url,
        author: each.author,
        topic: each.topic,
      }))
      changeBlogData(camelCaseData)
      changeLoading(false)
    }

    fetchBlogs()
  }, [])

  return (
    <>
      {isLoading ? (
        <div data-testid="loader">
          <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
        </div>
      ) : (
        <ul>
          {blogData.map(each => (
            <BlogItem details={each} key={each.id} />
          ))}
        </ul>
      )}
    </>
  )
}

export default BlogList
