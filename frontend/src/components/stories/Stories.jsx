import React, { useState } from 'react'
import "./Stories.scss"
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import Showstore from '../showstories/showstories';
import { ShowStoriesContext } from "../../context/showStoriesContext";
import { Showstories } from "../showstories/showstories"
export const Stories = () => {
    const { showStories, showHide } = useContext(ShowStoriesContext)

    const { currentUser } = useContext(AuthContext);


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
        ,
        {
            id: 4,
            name: "Terry P. Baldwin",
            img: "https://images.pexels.com/photos/2523851/pexels-photo-2523851.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        }
       
        


    ]
    console.log(showStories)
    return (
        <div className="wrappi">
            <div className="stories" >
            <div className="arrowBack"><ArrowBackIosNewOutlinedIcon /></div>
                    <div className="arrowForward"><ArrowForwardIosOutlinedIcon /></div>
                <div className="scon">
                    
                    <div className="story">
                        <img src={currentUser.profilePic} alt="" />
                        <span>{currentUser.name}</span>
                        <button>+</button>
                    </div>
                    {stories.map(story => (
                        <div className="storys" key={story.id}>
                            
                            <img src={story.img} alt="" onClick={showHide} />
                            <span>{story.name}</span>
                            <Showstories story={story} key={story.id} />
                        </div>




                    ))}

                </div>

            </div>
        </div>

    )

}

export default Stories;