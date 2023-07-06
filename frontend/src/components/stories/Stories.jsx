import React, { useState } from 'react'
import "./Stories.scss"
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import showstories from '../showstories/showstories';
export const Stories = () => {
    

    const {currentUser} = useContext(AuthContext);
    
    const [showStories, setShowStories] = useState(false);
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
        },
       
       
    ]
  return (
   <div className="stories" >
   <div className="arrowBack"><ArrowBackIosNewOutlinedIcon/></div>
   <div className="arrowForward"><ArrowForwardIosOutlinedIcon/></div>
     <div className="story">
            <img src={currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
            <button>+</button>
        </div>
    {stories.map(story =>(
        <div className="story" key={story.id}>
            <img src={story.img} alt=""  onClick={() => setShowStories(!showStories)}/>
            <span>{story.name}</span>
        </div>
    ))}
    console.log(showStories)
   </div>
  )
}

export default Stories;