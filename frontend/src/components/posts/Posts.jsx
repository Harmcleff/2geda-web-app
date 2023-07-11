import React from 'react'
import "./Posts.scss"
import Post from "../post/Post"
import { makeRequest } from '../../axios'

export const Posts = () => {
  
  const { isLoading, error, data } = useQuery(['posts'], () =>
  
    makeRequest.get("/posts").then(res=>{
      return res.data;
      
    })
    
  )

  console.log(data)
  return (
    <div className='posts'>
    { /**  {data.map(post => (
        <Post post={post} key={post.id} />
      ))}*/}
    </div>
  )
}

