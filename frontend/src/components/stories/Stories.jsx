import React from 'react'
import "./Stories.scss"
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

export const Stories = () => {
    const {currentUser} = useContext(AuthContext);
    const stories = [
        {
            id: 1,
            name: "San Harmcleff",
            img: "https://images.pexels.com/photos/15222014/pexels-photo-15222014/free-photo-of-a-woman-in-a-swimsuit.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 2,
            name: "San Harmcleff",
            img: "https://images.pexels.com/photos/15222014/pexels-photo-15222014/free-photo-of-a-woman-in-a-swimsuit.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 3,
            name: "San Harmcleff",
            img: "https://images.pexels.com/photos/15222014/pexels-photo-15222014/free-photo-of-a-woman-in-a-swimsuit.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 4,
            name: "San Harmcleff",
            img: "https://images.pexels.com/photos/15222014/pexels-photo-15222014/free-photo-of-a-woman-in-a-swimsuit.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
            <img src={story.img} alt="" />
            <span>{story.name}</span>
        </div>
    ))}
   </div>
  )
}

export default Stories;