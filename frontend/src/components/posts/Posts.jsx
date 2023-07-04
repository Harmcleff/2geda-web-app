import React from 'react'
import "./Posts.scss"
import Post from "../post/Post"

export const Posts = () => {
  const posts = [
    {
      id: 1,
      name: "Cleff Mido",
      userId: 1,
      profilePic: "https://images.pexels.com/photos/15594401/pexels-photo-15594401/free-photo-of-red-haired-woman-with-tattoos-on-her-body.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Na me post am o, Gbayii",
      img: "https://images.pexels.com/photos/7818936/pexels-photo-7818936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      name: "Akinola Abibat",
      userId: 1,
      profilePic: "https://images.pexels.com/photos/11503422/pexels-photo-11503422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Na me post am o, Gbayii",

    }
  ]
  return (
    <div className='posts'>
      {posts.map(post => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  )
}

