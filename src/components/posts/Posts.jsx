import React from 'react'
import "./Posts.scss"
import Post from "../post/Post"
import { makeRequest } from '../../axios'
import { useQuery } from '@tanstack/react-query'
// import { post } from 'request'


export const Posts = ({ userId }) => {

  const { isLoading, error, data } = useQuery(['posts'], () =>

    makeRequest.get("/posts?userId=" + userId).then(res => {
      return res.data;

    })

  )
  
  console.log(data?.length === 0)

  return (
    <div className='posts'>
      {error
        ? <div className="empty">Something went wrong</div>
        : isLoading
          ? <div className="empty">Loading</div>
          :data?.length === 0
          ? <div className="empty">You don't have any post yet</div>
          : data.map(post => 
            <Post post={post} key={post.id} />
          )}
    </div>
  )
}

