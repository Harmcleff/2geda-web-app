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
      userId: 2,
      profilePic: "https://images.pexels.com/photos/11503422/pexels-photo-11503422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Na me post am o, Gbayii",

    },
    {
      id: 3,
      name: "Norman Laroche",
      userId: 3,
      profilePic: "https://images.pexels.com/photos/3608206/pexels-photo-3608206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "",
      img: "https://images.pexels.com/photos/3179783/pexels-photo-3179783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    ,
    {
      id: 4,
      name: "Charlotte Thomas",
      userId: 4,
      profilePic: "https://images.pexels.com/photos/3657506/pexels-photo-3657506.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      desc: "",
      img: "https://images.pexels.com/photos/2866081/pexels-photo-2866081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 5,
      name: "Angela Wilson",
      userId: 3,
      profilePic: "https://images.pexels.com/photos/2932748/pexels-photo-2932748.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      desc: "",
      img: "https://images.pexels.com/photos/2932727/pexels-photo-2932727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
  ]
  return (
    <div className='posts'>
      {posts.map(post => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  )
}

