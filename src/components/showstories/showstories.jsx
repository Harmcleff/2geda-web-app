import React from 'react'
import "./showstories.scss"


export const Showstories = (story) => {

  const stories = [
    {
      id: 1,
      name: "Nancy J. Hutsell",
      img: "https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      id: 2,
      name: "James K. Hessler",
      img: "https://images.pexels.com/photos/4147374/pexels-photo-4147374.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
      id: 3,
      name: "Yolonda J. Vance",
      img: "https://images.pexels.com/photos/2951989/pexels-photo-2951989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 4,
      name: "Terry P. Baldwin",
      img: "https://images.pexels.com/photos/2523851/pexels-photo-2523851.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    }
  ]
  return (
    <div className="showst">
      {stories.map(story => (
        <div className="showstories" key={story.id}>
          <img src={story.img} alt="" />
        </div>
      ))}


    </div>
  )

}

export default Showstories;
